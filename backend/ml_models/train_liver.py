import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, f1_score
import pickle
import os

# Load dataset
print("Loading Liver Disease dataset...")
# Assuming script is in backend/ml_models/ and csv is in backend/
csv_path = os.path.join(os.path.dirname(__file__), '..', 'indian_liver_patient.csv')
df = pd.read_csv(csv_path)

X = df.drop('Dataset', axis=1)
y = df['Dataset'] - 1  # 1: patient (adjust to 0/1 if needed, 1->0, 2->1 usually in datasets 1=disease, 2=healthy)
# UCI Liver: 1 = Liver Patient, 2 = Healthy. 
# y - 1 => 0 = Patient, 1 = Healthy. 
# We usually want 1 = Positive/Disease. 
# Let's check logic. If 1=Patient, 2=Healthy. 
# Map: 1 -> 1, 2 -> 0.
y = df['Dataset'].map({1: 1, 2: 0}) 

# Preprocessing: Encode Gender, handle missing
X['Gender'] = X['Gender'].map({'Male': 1, 'Female': 0})
X = X.fillna(X.median(numeric_only=True))

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42, stratify=y)

# Train KNN
print("Training KNN...")
knn = KNeighborsClassifier(n_neighbors=5, weights='distance')
knn.fit(X_train, y_train)
y_pred_knn = knn.predict(X_test)
print(f"KNN Accuracy: {accuracy_score(y_test, y_pred_knn):.4f}, F1: {f1_score(y_test, y_pred_knn, average='weighted'):.4f}")

# Train SVM
print("Training SVM...")
svm = SVC(kernel='rbf', probability=True, random_state=42, class_weight='balanced')
svm.fit(X_train, y_train)
y_pred_svm = svm.predict(X_test)
print(f"SVM Accuracy: {accuracy_score(y_test, y_pred_svm):.4f}, F1: {f1_score(y_test, y_pred_svm, average='weighted'):.4f}")

# Evaluate models
print("Evaluating models...")
from sklearn.metrics import confusion_matrix
cm_svm = confusion_matrix(y_test, y_pred_svm)
tn, fp, fn, tp = cm_svm.ravel()

# Calculate Specificity (TN / (TN + FP))
specificity = tn / (tn + fp) if (tn + fp) > 0 else 0
sensitivity = tp / (tp + fn) if (tp + fn) > 0 else 0

print(f"SVM Specificity: {specificity:.4f}")
print(f"SVM Sensitivity: {sensitivity:.4f}")

# Update Metrics
from metrics_utils import update_condition_metrics

update_condition_metrics(
    condition_id="liver",
    name="Liver Disease",
    model_name="SVM (Support Vector Machine)",
    accuracy=accuracy_score(y_test, y_pred_svm),
    sensitivity=sensitivity,
    specificity=specificity,
    training_size=len(X),
    dataset_name="ILPD (Indian Liver Patient)",
    features=list(X.columns)[:5],
    confusion_matrix={
        "tp": int(tp),
        "fp": int(fp),
        "tn": int(tn),
        "fn": int(fn)
    }
)
print("Metrics updated for Liver.")

# Save models and scaler
print("Saving models...")
with open(os.path.join(os.path.dirname(__file__), 'liver_knn.pkl'), 'wb') as f:
    pickle.dump(knn, f)
with open(os.path.join(os.path.dirname(__file__), 'liver_svm.pkl'), 'wb') as f:
    pickle.dump(svm, f)
with open(os.path.join(os.path.dirname(__file__), 'liver_scaler.pkl'), 'wb') as f:
    pickle.dump(scaler, f)
with open(os.path.join(os.path.dirname(__file__), 'liver_columns.pkl'), 'wb') as f:
    pickle.dump(X.columns, f)
print("Done.")
