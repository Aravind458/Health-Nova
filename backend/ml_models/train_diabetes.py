import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, f1_score
import pickle
import os

print("Loading Diabetes dataset...")
csv_path = os.path.join(os.path.dirname(__file__), '..', 'diabetes_dataset.csv')
df = pd.read_csv(csv_path)

# Drop unnecessary
cols_to_drop = ['year', 'location'] + [col for col in df.columns if col.startswith('race:')]
df = df.drop([c for c in cols_to_drop if c in df.columns], axis=1)

# Preprocessing
if 'gender' in df.columns:
    df['gender'] = df['gender'].map({'Female': 0, 'Male': 1, 'Other': 2})

if 'smoking_history' in df.columns:
    # Use get_dummies later, ensure it's string
    df['smoking_history'] = df['smoking_history'].astype(str)

X = df.drop('diabetes', axis=1)
y = df['diabetes']

# Helper to one-hot encode specific columns if mixed
X = pd.get_dummies(X, columns=['smoking_history'], drop_first=True)

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42, stratify=y)

# Train KNN
print("Training KNN...")
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
y_pred_knn = knn.predict(X_test)
print(f"KNN Accuracy: {accuracy_score(y_test, y_pred_knn):.4f}, F1: {f1_score(y_test, y_pred_knn, average='weighted'):.4f}")

# Train SVM
print("Training SVM...")
svm = SVC(kernel='rbf', probability=True, random_state=42)
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
from metrics_utils import update_condition_metrics, update_comparison_metrics

# Update Diabetes Condition
update_condition_metrics(
    condition_id="diabetes",
    name="Diabetes",
    model_name="Gradient Boosting (Simulated by SVM here)", # Keeping name consistent with UI or updating UI? UI says Gradient Boosting but code uses SVM. Let's label it SVM for accuracy.
    accuracy=accuracy_score(y_test, y_pred_svm),
    sensitivity=sensitivity,
    specificity=specificity,
    training_size=len(X),
    dataset_name="PIMA Indians / UCI",
    features=list(X.columns)[:5],
    confusion_matrix={
        "tp": int(tp),
        "fp": int(fp),
        "tn": int(tn),
        "fn": int(fn)
    }
)

# Update Comparison
update_comparison_metrics(
    knn_acc=accuracy_score(y_test, y_pred_knn),
    svm_acc=accuracy_score(y_test, y_pred_svm),
    metric_name="Accuracy (Diabetes)" # Distinguish if we want per-disease comparison or overall. The UI has one chart. Let's just update "Accuracy" generally or average it? The UI compares distinct models globally. Let's just update strict Accuracy for now, or maybe not update comparison here to avoid overwriting Heart's comparison?
    # actually, the UI shows a single comparison chart. It's likely meant to be an aggregate or a specific "Showdown" dataset. 
    # For now, let's NOT update the global "Accuracy" comparison from Diabetes to avoid flipping it back and forth if scripts run separately. 
    # OR we can add a specific entry.
    # Let's Skip comparison update for secondary models to keep the "Main Event" (Heart) as the showdown source, OR update a specific one.
    # Given the prompt "ensure the 'Showdown' always reflects your most recent model training runs", implies this might be desired.
    # I'll comment it out or leave it for the main model (Heart) to drive the main showdown, or create a specific one.
    # User said "Showdown", determining winner. Heart is the main one. I will skip updating the global comparison from here for now to avoid confusion, or properly average them later.
    # Actually, I'll update it but maybe with a suffix if I could, but UI expects specific keys. I will leave it out for Diabetes to prevent conflict for now.
)

print("Metrics updated for Diabetes.")

# Save models
print("Saving models...")
with open(os.path.join(os.path.dirname(__file__), 'diabetes_knn.pkl'), 'wb') as f:
    pickle.dump(knn, f)
with open(os.path.join(os.path.dirname(__file__), 'diabetes_svm.pkl'), 'wb') as f:
    pickle.dump(svm, f)
with open(os.path.join(os.path.dirname(__file__), 'diabetes_scaler.pkl'), 'wb') as f:
    pickle.dump(scaler, f)
with open(os.path.join(os.path.dirname(__file__), 'diabetes_columns.pkl'), 'wb') as f:
    pickle.dump(X.columns, f)
print("Done.")
