import pandas as pd
import numpy as np
import pickle
import os

diabetes_data = {'gender': 1, 'age': 65, 'hypertension': 1, 'heart_disease': 1, 'bmi': 45.0, 'hbA1c_level': 9.0, 'blood_glucose_level': 300, 'smoking_history_current': 1, 'smoking_history_ever': 0, 'smoking_history_former': 0, 'smoking_history_never': 0, 'smoking_history_not current': 0}
df = pd.DataFrame([diabetes_data])

base_path = 'ml_models'
with open(os.path.join(base_path, 'diabetes_svm.pkl'), 'rb') as f:
    svm = pickle.load(f)
with open(os.path.join(base_path, 'diabetes_scaler.pkl'), 'rb') as f:
    scaler = pickle.load(f)
with open(os.path.join(base_path, 'diabetes_columns.pkl'), 'rb') as f:
    cols = pickle.load(f)

# Fill missing dummies that might have been dropped
for c in cols:
    if c not in df.columns:
        df[c] = 0

df = df[cols] # order strictly
print("Raw DataFrame:\n", df.to_string())

X_scaled = scaler.transform(df)
print("Scaled Data:\n", X_scaled)

svm_pred = svm.predict(X_scaled)[0]
svm_prob = svm.predict_proba(X_scaled)[0]
print("SVM Pred Class:", svm_pred)
print("SVM PROB:", svm_prob)
print("SVM CLASSES:", svm.classes_)
