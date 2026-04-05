from ucimlrepo import fetch_ucirepo
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, f1_score
from sklearn.impute import SimpleImputer
import pickle
import os

# Fetch dataset
print("Fetching Kidney Disease dataset...")
ckd = fetch_ucirepo(id=336)
X = ckd.data.features
y = ckd.data.targets.values.ravel()

# Preprocessing: Encode categorical, impute missing
X = pd.get_dummies(X, drop_first=True)
imputer = SimpleImputer(strategy='median')
X_imputed = imputer.fit_transform(X)

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_imputed)

# Split data
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
from metrics_utils import update_condition_metrics

update_condition_metrics(
    condition_id="kidney",
    name="Chronic Kidney Disease",
    model_name="Random Forest / KNN (Simulated by SVM here)", # Consistently using SVM in training for now
    accuracy=accuracy_score(y_test, y_pred_svm),
    sensitivity=sensitivity,
    specificity=specificity,
    training_size=len(X),
    dataset_name="UCI CKD",
    features=list(X.columns)[:5],
    confusion_matrix={
        "tp": int(tp),
        "fp": int(fp),
        "tn": int(tn),
        "fn": int(fn)
    }
)
print("Metrics updated for Kidney.")

# Save models and scaler
print("Saving models...")
with open(os.path.join(os.path.dirname(__file__), 'kidney_knn.pkl'), 'wb') as f:
    pickle.dump(knn, f)
with open(os.path.join(os.path.dirname(__file__), 'kidney_svm.pkl'), 'wb') as f:
    pickle.dump(svm, f)
with open(os.path.join(os.path.dirname(__file__), 'kidney_scaler.pkl'), 'wb') as f:
    pickle.dump(scaler, f)
with open(os.path.join(os.path.dirname(__file__), 'kidney_imputer.pkl'), 'wb') as f:
    pickle.dump(imputer, f)
with open(os.path.join(os.path.dirname(__file__), 'kidney_columns.pkl'), 'wb') as f:
    pickle.dump(X.columns, f)
print("Done.")
