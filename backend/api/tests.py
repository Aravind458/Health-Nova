from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from .models import HeartAssessment, DiabetesAssessment, LiverAssessment, UrinalysisAssessment, KidneyAssessment
import json

class HeartAssessmentTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('predict-heart')
        self.valid_payload = {
            "age": 45,
            "sex": "Male",
            "cp": "Typical Angina",
            "trestbps": 120,
            "chol": 200,
            "fbs": "No",
            "restecg": "Normal",
            "thalach": 150,
            "exang": "No",
            "oldpeak": 1.5,
            "slope": "Upsloping",
            "ca": 0,
            "thal": "Normal"
        }
        self.invalid_payload = {
            "age": 200, # Invalid age
            "sex": "Male",
            "cp": "Typical Angina",
            "trestbps": 120,
            "chol": 200,
            "fbs": "No",
            "restecg": "Normal",
            "thalach": 150,
            "exang": "No",
            "oldpeak": 1.5,
            "slope": "Upsloping",
            "ca": 0,
            "thal": "Normal"
        }

    def test_create_valid_assessment(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(HeartAssessment.objects.count(), 1)
        self.assertEqual(HeartAssessment.objects.get().age, 45)
        self.assertIn('risk_level', response.data)
        self.assertIn('probability_svm', response.data)

    def test_create_invalid_assessment(self):
        response = self.client.post(self.url, self.invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(HeartAssessment.objects.count(), 0)

class DiabetesAssessmentTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('predict-diabetes')
        self.valid_payload = {
            'age': 45,
            'gender': 'Male',
            'bmi': 28.5,
            'hbA1c_level': 5.7,
            'blood_glucose_level': 140,
            'hypertension': 0,
            'heart_disease': 0,
            'smoking_history': 'never'
        }

    def test_create_valid_diabetes_assessment(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(DiabetesAssessment.objects.count(), 1)
        self.assertIn('risk_level', response.data)

class LiverAssessmentTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('predict-liver')
        self.valid_payload = {
            'age': 50,
            'gender': 'Female',
            'total_bilirubin': 0.8,
            'direct_bilirubin': 0.2,
            'alkaline_phosphotase': 180,
            'alamine_aminotransferase': 25,
            'aspartate_aminotransferase': 20,
            'total_protiens': 7.0,
            'albumin': 3.5,
            'albumin_and_globulin_ratio': 1.0
        }

    def test_create_valid_liver_assessment(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(LiverAssessment.objects.count(), 1)
        self.assertIn('risk_level', response.data)

class UrinalysisAssessmentTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('predict-urinalysis')
        self.valid_payload = {
            'age': 30.0,
            'gender': 'Male',
            'color': 'Yellow',
            'transparency': 'Clear',
            'glucose': 'Negative',
            'protein': 'Negative',
            'ph': 6.0,
            'specific_gravity': 1.020,
            'wbc': '0-2',
            'rbc': '0-2',
            'epithelial_cells': 'Rare',
            'mucous_threads': 'Rare',
            'amorphous_urates': 'None',
            'bacteria': 'None'
        }

    def test_create_valid_urinalysis_assessment(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(UrinalysisAssessment.objects.count(), 1)
        self.assertIn('diagnosis', response.data)

class KidneyAssessmentTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('predict-kidney')
        self.valid_payload = {
            'age': 48,
            'bp': 80,
            'sg': 1.020,
            'al': 1.0,
            'su': 0.0,
            'rbc': 'normal',
            'pc': 'normal',
            'pcc': 'notpresent',
            'ba': 'notpresent',
            'bgr': 121,
            'bu': 36,
            'sc': 1.2,
            'sod': 137,
            'pot': 4.3,
            'hemo': 15.4,
            'pcv': 44,
            'wc': 7800,
            'rc': 5.2,
            'htn': 'yes',
            'dm': 'yes',
            'cad': 'no',
            'appet': 'good',
            'pe': 'no',
            'ane': 'no'
        }

    def test_create_valid_kidney_assessment(self):
        response = self.client.post(self.url, self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(KidneyAssessment.objects.count(), 1)
        self.assertIn('classification', response.data)
