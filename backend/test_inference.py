import sys
import os
import django
import json
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.serializers import LiverAssessmentSerializer, HeartAssessmentSerializer, KidneyAssessmentSerializer, DiabetesAssessmentSerializer
from api.views import LiverPredictView, HeartPredictView, KidneyPredictView, DiabetesPredictView
from rest_framework.test import APIRequestFactory

factory = APIRequestFactory()

# Test Liver with dangerous values
liver_data = {
    "age": 65,
    "gender": "Male",
    "total_bilirubin": 15.0,
    "direct_bilirubin": 8.0,
    "alkaline_phosphotase": 400,
    "alamine_aminotransferase": 200,
    "aspartate_aminotransferase": 300,
    "total_protiens": 4.0,
    "albumin": 2.0,
    "albumin_and_globulin_ratio": 0.5
}
request = factory.post('/api/predict/liver/', liver_data, format='json')
view = LiverPredictView()
view.format_kwarg = None
# We wrap the underlying self.predict to print the df
original_predict = view.predict
def mock_predict(disease_name, df, classification_labels=None):
    print(f"--- df for {disease_name} ---")
    print(df.to_string())
    return original_predict(disease_name, df, classification_labels)
view.predict = mock_predict
response = view.post(request)
print("Liver Response:", response.data)

# Test Heart with dangerous values
heart_data = {
    "age": 70,
    "sex": "Male",
    "cp": "Typical Angina",
    "trestbps": 180,
    "chol": 400,
    "fbs": "Yes",
    "restecg": "ST-T abnormality",
    "thalach": 80,
    "exang": "Yes",
    "oldpeak": 5.0,
    "slope": "Downsloping",
    "ca": 3,
    "thal": "Reversible Defect"
}
request = factory.post('/api/predict/heart/', heart_data, format='json')
view_h = HeartPredictView()
view_h.format_kwarg = None
original_predict_h = view_h.predict
def mock_predict_h(disease_name, df, classification_labels=None):
    print(f"--- df for {disease_name} ---")
    print(df.to_string())
    return original_predict_h(disease_name, df, classification_labels)
view_h.predict = mock_predict_h
response = view_h.post(request)
print("Heart Response:", response.data)

# Test Diabetes
diabetes_data = {
    "gender": "Male",
    "age": 65,
    "hypertension": 1,
    "heart_disease": 1,
    "smoking_history": "current",
    "bmi": 45.0,
    "hbA1c_level": 9.0,
    "blood_glucose_level": 300
}
request = factory.post('/api/predict/diabetes/', diabetes_data, format='json')
view_d = DiabetesPredictView()
view_d.format_kwarg = None
original_predict_d = view_d.predict
def mock_predict_d(disease_name, df, classification_labels=None):
    print(f"--- df for {disease_name} ---")
    print(df.to_string())
    return original_predict_d(disease_name, df, classification_labels)
view_d.predict = mock_predict_d
response = view_d.post(request)
print("Diabetes Response:", response.data)

# Test Kidney
kidney_data = {
    "age": 75,
    "bp": 110,
    "sg": 1.010,
    "al": 4.0,
    "su": 5.0,
    "rbc": "abnormal",
    "pc": "abnormal",
    "pcc": "present",
    "ba": "present",
    "bgr": 350,
    "bu": 150,
    "sc": 12.0,
    "sod": 110,
    "pot": 7.0,
    "hemo": 6.0,
    "pcv": 20,
    "wc": 15000,
    "rc": 2.5,
    "htn": "yes",
    "dm": "yes",
    "cad": "yes",
    "appet": "poor",
    "pe": "yes",
    "ane": "yes"
}
request = factory.post('/api/predict/kidney/', kidney_data, format='json')
view_k = KidneyPredictView()
view_k.format_kwarg = None
original_predict_k = view_k.predict
def mock_predict_k(disease_name, df, classification_labels=None):
    print(f"--- df for {disease_name} ---")
    print(df.to_string())
    return original_predict_k(disease_name, df, classification_labels)
view_k.predict = mock_predict_k
response = view_k.post(request)
print("Kidney Response:", response.data)
