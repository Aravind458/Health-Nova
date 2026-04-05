import json
from django.test import TestCase
from rest_framework.test import APIClient

class MLInferenceTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.heart_cases = [
            ("Low", {"age": 35, "sex": "Female", "cp": "Asymptomatic", "trestbps": 120, "chol": 150, "fbs": "No", "restecg": "Normal", "thalach": 160, "exang": "No", "oldpeak": 0.0, "slope": "Upsloping", "ca": 0, "thal": "Normal"}),
            ("Moderate", {"age": 60, "sex": "Male", "cp": "Atypical Angina", "trestbps": 140, "chol": 250, "fbs": "No", "restecg": "Normal", "thalach": 130, "exang": "No", "oldpeak": 1.5, "slope": "Flat", "ca": 1, "thal": "Fixed Defect"}),
            ("High", {"age": 70, "sex": "Male", "cp": "Typical Angina", "trestbps": 180, "chol": 400, "fbs": "Yes", "restecg": "ST-T abnormality", "thalach": 80, "exang": "Yes", "oldpeak": 5.0, "slope": "Downsloping", "ca": 3, "thal": "Reversible Defect"})
        ]
        self.diabetes_cases = [
            ("Low", {"gender": "Female", "age": 25, "hypertension": 0, "heart_disease": 0, "smoking_history": "never", "bmi": 22.0, "hbA1c_level": 5.0, "blood_glucose_level": 90}),
            ("Moderate", {"gender": "Male", "age": 45, "hypertension": 0, "heart_disease": 0, "smoking_history": "former", "bmi": 28.0, "hbA1c_level": 6.0, "blood_glucose_level": 140}),
            ("High", {"gender": "Male", "age": 65, "hypertension": 1, "heart_disease": 1, "smoking_history": "current", "bmi": 45.0, "hbA1c_level": 9.0, "blood_glucose_level": 300})
        ]
        self.liver_cases = [
            ("Low", {"age": 30, "gender": "Female", "total_bilirubin": 0.8, "direct_bilirubin": 0.2, "alkaline_phosphotase": 150, "alamine_aminotransferase": 20, "aspartate_aminotransferase": 25, "total_protiens": 7.0, "albumin": 4.0, "albumin_and_globulin_ratio": 1.2}),
            ("Moderate", {"age": 50, "gender": "Male", "total_bilirubin": 2.5, "direct_bilirubin": 1.2, "alkaline_phosphotase": 250, "alamine_aminotransferase": 60, "aspartate_aminotransferase": 80, "total_protiens": 6.0, "albumin": 3.0, "albumin_and_globulin_ratio": 0.9}),
            ("High", {"age": 65, "gender": "Male", "total_bilirubin": 15.0, "direct_bilirubin": 8.0, "alkaline_phosphotase": 400, "alamine_aminotransferase": 200, "aspartate_aminotransferase": 300, "total_protiens": 4.0, "albumin": 2.0, "albumin_and_globulin_ratio": 0.5})
        ]
        self.kidney_cases = [
            ("Low", {"age": 30, "bp": 70, "sg": 1.020, "al": 0, "su": 0, "rbc": "normal", "pc": "normal", "pcc": "notpresent", "ba": "notpresent", "bgr": 100, "bu": 30, "sc": 1.0, "sod": 140, "pot": 4.0, "hemo": 15.0, "pcv": 45, "wc": 8000, "rc": 5.0, "htn": "no", "dm": "no", "cad": "no", "appet": "good", "pe": "no", "ane": "no"}),
            ("Moderate", {"age": 55, "bp": 90, "sg": 1.015, "al": 2, "su": 1, "rbc": "normal", "pc": "abnormal", "pcc": "notpresent", "ba": "notpresent", "bgr": 150, "bu": 60, "sc": 3.0, "sod": 130, "pot": 5.0, "hemo": 10.0, "pcv": 35, "wc": 10000, "rc": 3.8, "htn": "yes", "dm": "yes", "cad": "no", "appet": "good", "pe": "no", "ane": "no"}),
            ("High", {"age": 75, "bp": 110, "sg": 1.010, "al": 4.0, "su": 5.0, "rbc": "abnormal", "pc": "abnormal", "pcc": "present", "ba": "present", "bgr": 350, "bu": 150, "sc": 12.0, "sod": 110, "pot": 7.0, "hemo": 6.0, "pcv": 20, "wc": 15000, "rc": 2.5, "htn": "yes", "dm": "yes", "cad": "yes", "appet": "poor", "pe": "yes", "ane": "yes"})
        ]

    def _run_cases(self, url, cases, name):
        print(f"\n================ Running {name.upper()} Tests ================")
        for level, payload in cases:
            response = self.client.post(url, payload, format='json')
            print(f"[{level} Risk Input] -> Response Status: {response.status_code}")
            try:
                rdata = response.data
                risk = rdata.get('risk_level', rdata.get('classification', 'N/A'))
                prob = rdata.get('probability_svm', 'N/A')
                print(f"    Risk Classification: {risk} | Probability: {prob}")
            except Exception as e:
                print(f"    ERROR: {e}")

    def test_all_models(self):
        self._run_cases('/api/predict/heart/', self.heart_cases, "heart")
        self._run_cases('/api/predict/diabetes/', self.diabetes_cases, "diabetes")
        self._run_cases('/api/predict/liver/', self.liver_cases, "liver")
        self._run_cases('/api/predict/kidney/', self.kidney_cases, "kidney")
