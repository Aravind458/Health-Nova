from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import APIException
import random
import pickle
import os
import json
import pandas as pd
import numpy as np
from django.conf import settings
from google import genai
import time
import traceback
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.forms.models import model_to_dict
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

# Import Serializers
from .serializers import (
    HeartAssessmentSerializer,
    DiabetesAssessmentSerializer,
    LiverAssessmentSerializer,
    KidneyAssessmentSerializer
)

# Import Models
from .models import (
    HeartAssessment,
    DiabetesAssessment,
    LiverAssessment,
    KidneyAssessment
)


# Helper to load models
MODELS = {}

# Initialize Gemini client
try:
    gemini_client = genai.Client(api_key=settings.GEMINI_API_KEY) if settings.GEMINI_API_KEY else None
except Exception:
    gemini_client = None


def get_gemini_recommendations(disease_name, risk_level, patient_data):
    """Use Gemini to generate personalized health recommendations with retry and fallback."""
    
    condition_names = {
        'heart': 'Heart Disease',
        'diabetes': 'Diabetes',
        'liver': 'Liver Disease',
        'kidney': 'Chronic Kidney Disease'
    }

    # Static fallback recommendations per condition
    FALLBACK = {
        'heart': {
            'precautions': [
                'Monitor blood pressure and cholesterol levels regularly.',
                'Avoid smoking and secondhand smoke exposure.',
                'Limit strenuous physical activity until cleared by a cardiologist.',
                'Watch for warning signs like chest pain, shortness of breath, or dizziness.',
                'Take prescribed medications consistently and on time.'
            ],
            'recommendations': [
                'Schedule a comprehensive cardiac evaluation with a cardiologist.',
                'Engage in at least 150 minutes of moderate aerobic exercise per week.',
                'Practice stress management techniques such as meditation or yoga.',
                'Get 7-8 hours of quality sleep each night.',
                'Consider cardiac rehabilitation programs if recommended.'
            ],
            'diet': [
                'Follow a heart-healthy Mediterranean or DASH diet.',
                'Increase omega-3 fatty acid intake through fish, walnuts, and flaxseed.',
                'Reduce sodium intake to under 1,500 mg per day.',
                'Eat more fruits, vegetables, and whole grains daily.',
                'Limit saturated fats, trans fats, and processed foods.'
            ]
        },
        'diabetes': {
            'precautions': [
                'Monitor blood glucose levels regularly throughout the day.',
                'Check HbA1c every 3 months to track long-term glucose control.',
                'Inspect feet daily for cuts, blisters, or signs of infection.',
                'Stay hydrated and avoid sugary beverages.',
                'Carry glucose tablets or fast-acting sugar for hypoglycemia emergencies.'
            ],
            'recommendations': [
                'Consult an endocrinologist for a comprehensive diabetes management plan.',
                'Engage in regular physical activity — aim for 30 minutes daily.',
                'Monitor and manage body weight to achieve a healthy BMI.',
                'Get regular eye exams and kidney function tests.',
                'Consider a continuous glucose monitor for better blood sugar tracking.'
            ],
            'diet': [
                'Follow a low glycemic index (GI) diet to manage blood sugar spikes.',
                'Increase fiber intake through vegetables, legumes, and whole grains.',
                'Limit refined carbohydrates and processed sugars.',
                'Eat balanced meals with lean proteins, healthy fats, and complex carbs.',
                'Space meals evenly throughout the day to maintain stable glucose levels.'
            ]
        },
        'liver': {
            'precautions': [
                'Avoid alcohol consumption completely to prevent further liver damage.',
                'Be cautious with over-the-counter medications, especially acetaminophen.',
                'Avoid exposure to environmental toxins and industrial chemicals.',
                'Get vaccinated for Hepatitis A and B if not already immunized.',
                'Monitor for jaundice, abdominal pain, or unexplained fatigue.'
            ],
            'recommendations': [
                'Consult a hepatologist for a thorough liver evaluation and imaging.',
                'Get regular liver function tests (LFTs) every 3-6 months.',
                'Maintain a healthy weight — obesity worsens liver conditions.',
                'Exercise regularly to improve liver health and reduce fatty deposits.',
                'Review all medications with your doctor for liver safety.'
            ],
            'diet': [
                'Follow a low-fat, high-fiber diet rich in fruits and vegetables.',
                'Increase intake of leafy greens, which support liver detoxification.',
                'Limit fried foods, processed meats, and high-sodium snacks.',
                'Include lean proteins like fish, chicken, and legumes.',
                'Drink plenty of water and herbal teas to support liver function.'
            ]
        },
        'kidney': {
            'precautions': [
                'Monitor kidney function with regular blood tests (creatinine, BUN, GFR).',
                'Avoid NSAIDs (ibuprofen, naproxen) as they can worsen kidney damage.',
                'Stay well-hydrated but follow fluid intake guidelines if advised.',
                'Control blood pressure and blood sugar levels strictly.',
                'Report any swelling in legs, ankles, or face to your doctor immediately.'
            ],
            'recommendations': [
                'Consult a nephrologist for specialized kidney care and monitoring.',
                'Get a comprehensive metabolic panel every 3 months.',
                'Manage comorbid conditions like hypertension and diabetes aggressively.',
                'Avoid herbal supplements without consulting your nephrologist.',
                'Discuss kidney protection strategies with your healthcare provider.'
            ],
            'diet': [
                'Follow a kidney-friendly diet low in sodium, potassium, and phosphorus.',
                'Limit protein intake as recommended by your dietitian.',
                'Reduce potassium-rich foods like bananas, oranges, and potatoes.',
                'Avoid processed and canned foods due to high sodium content.',
                'Work with a renal dietitian for a personalized meal plan.'
            ]
        }
    }

    # Try Gemini first
    if gemini_client:
        prompt = f"""You are a medical health advisor AI. A patient has been assessed for {condition_names.get(disease_name, disease_name)} and their risk level is: {risk_level}.

Patient's clinical data:
{json.dumps(patient_data, indent=2, default=str)}

Based on this assessment, provide personalized health guidance. Return ONLY a valid JSON object with exactly this structure (no markdown, no code fences):
{{
  "precautions": ["list of 4-5 specific precautions based on the patient's data"],
  "recommendations": ["list of 4-5 actionable medical recommendations"],
  "diet": ["list of 4-5 specific dietary suggestions tailored to their condition"]
}}

IMPORTANT:
- Make each point specific to the patient's actual values (reference their numbers)
- Keep each point concise (1-2 sentences max)
- Focus on actionable, practical advice
- Return ONLY the JSON object, nothing else"""

        for attempt in range(3):
            try:
                response = gemini_client.models.generate_content(
                    model='gemini-2.0-flash',
                    contents=prompt
                )
                text = response.text.strip()
                # Strip markdown code fences if present
                if text.startswith('```'):
                    text = text.split('\n', 1)[1]
                if text.endswith('```'):
                    text = text.rsplit('```', 1)[0]
                if text.startswith('json'):
                    text = text[4:]
                result = json.loads(text.strip())
                if all(k in result for k in ['precautions', 'recommendations', 'diet']):
                    return result
            except Exception as e:
                err_str = str(e)
                if '429' in err_str or 'RESOURCE_EXHAUSTED' in err_str:
                    wait = 2 ** (attempt + 1)
                    print(f"Gemini rate limited, retrying in {wait}s (attempt {attempt+1}/3)")
                    time.sleep(wait)
                    continue
                print(f"Gemini recommendation error: {e}")
                break

    # Fallback to static recommendations
    print(f"Using fallback recommendations for {disease_name}")
    fallback_data = FALLBACK.get(disease_name)
    if fallback_data:
        fallback_data = dict(fallback_data)
        fallback_data["is_fallback"] = True
        return fallback_data
    return None

def get_model_artifacts(disease_name):
    if disease_name in MODELS:
        return MODELS[disease_name]
    
    base_path = os.path.join(settings.BASE_DIR, 'ml_models')
    artifacts = {}
    
    try:
        with open(os.path.join(base_path, f'{disease_name}_knn.pkl'), 'rb') as f:
            artifacts['knn'] = pickle.load(f)
        with open(os.path.join(base_path, f'{disease_name}_svm.pkl'), 'rb') as f:
            artifacts['svm'] = pickle.load(f)
        with open(os.path.join(base_path, f'{disease_name}_scaler.pkl'), 'rb') as f:
            artifacts['scaler'] = pickle.load(f)
            
        # Optional artifacts
        cols_path = os.path.join(base_path, f'{disease_name}_columns.pkl')
        if os.path.exists(cols_path):
            with open(cols_path, 'rb') as f:
                artifacts['columns'] = pickle.load(f)
        
        le_path = os.path.join(base_path, f'{disease_name}_le.pkl')
        if os.path.exists(le_path):
            with open(le_path, 'rb') as f:
                artifacts['le'] = pickle.load(f)

        imputer_path = os.path.join(base_path, f'{disease_name}_imputer.pkl')
        if os.path.exists(imputer_path):
            with open(imputer_path, 'rb') as f:
                artifacts['imputer'] = pickle.load(f)

        MODELS[disease_name] = artifacts
        return artifacts
    except FileNotFoundError:
        return None

def range_to_mean(val):
    if pd.isna(val) or val is None: return np.nan
    val_str = str(val)
    if '-' in val_str:
        try:
            a, b = map(float, val_str.split('-'))
            return (a + b) / 2
        except ValueError:
            return np.nan
    if '>' in val_str: 
        try:
            return float(val_str[1:]) + 10
        except ValueError:
            return np.nan
    if 'TNTC' in val_str.upper() or 'LOADED' in val_str.upper(): return 100
    if val_str.replace('.', '', 1).isdigit(): return float(val_str)
    
    # Handle Excel Date Corruption (e.g., '01-Mar' -> 1-3)
    months = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 
              'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12}
    for mon, num in months.items():
        if mon in val_str:
            parts = val_str.replace("'", "").split('-')
            if len(parts) == 2:
                p1, p2 = parts[0], parts[1]
                val1 = 0
                val2 = 0
                if p1 in months: val1 = months[p1]
                else: 
                     try: val1 = float(p1)
                     except: pass
                if p2 in months: val2 = months[p2]
                else:
                     try: val2 = float(p2)
                     except: pass
                if val1 and val2:
                    return (val1 + val2) / 2
    return np.nan

class BasePredictView(APIView):
    def predict(self, disease_name, data_df, classification_labels=None):
        artifacts = get_model_artifacts(disease_name)
        if not artifacts:
            return {"error": f"Prediction model artifacts for {disease_name} not loaded."}

        try:
            # 1. Align columns
            if 'columns' in artifacts:
                # Ensure all required columns exist, fill with 0
                data_df = data_df.reindex(columns=artifacts['columns'], fill_value=0)
            
            num_cols = len(data_df.columns)
            
            # 2. Impute (if needed)
            if 'imputer' in artifacts:
                data_df = artifacts['imputer'].transform(data_df)
            else:
                data_df = data_df.fillna(0) # Basic fallback
            
            # 3. Scale
            X_scaled = artifacts['scaler'].transform(data_df)
            
            # 4. Predict
            knn_prob = artifacts['knn'].predict_proba(X_scaled)[0]
            svm_prob = artifacts['svm'].predict_proba(X_scaled)[0]
            
            # Get class index (custom threshold for Liver to handle extreme data skew)
            knn_pred_idx = np.argmax(knn_prob)
            if disease_name == 'liver' and len(artifacts['svm'].classes_) == 2:
                # Custom threshold of 0.60 for the positive class (assuming index 1 is High Risk)
                svm_pred_idx = 1 if svm_prob[1] >= 0.60 else 0
            else:
                svm_pred_idx = np.argmax(svm_prob)
            
            knn_class = artifacts['knn'].classes_[knn_pred_idx]
            svm_class = artifacts['svm'].classes_[svm_pred_idx]
            
            knn_prob_val = knn_prob[knn_pred_idx]
            # When forcing a class due to threshold, we must fetch the matched probability
            svm_prob_val = svm_prob[svm_pred_idx]

            # Decode class if LE exists (for Urinalysis/Diabetes if LE was used on target)
            # Or if custom labels are provided
            
            if 'le' in artifacts:
                knn_label = artifacts['le'].inverse_transform([knn_class])[0]
                svm_label = artifacts['le'].inverse_transform([svm_class])[0]
            elif classification_labels:
                 # Map if provided (e.g. 0->No, 1->Yes)
                 knn_label = classification_labels.get(knn_class, str(knn_class))
                 svm_label = classification_labels.get(svm_class, str(svm_class))
            else:
                knn_label = str(knn_class)
                svm_label = str(svm_class)

            # Standardize output for frontend (Risk Level vs Diagnosis)
            # Logic: If binary 0/1, usually 1=High/Disease
            
            explanation = f"Analysis based on {num_cols} clinical biomarkers."
            
            return {
                "risk_level": svm_label, # Defaulting to SVM result labels
                "diagnosis": svm_label,  # Alias
                "classification": svm_label, # Alias
                "probability_knn": round(float(knn_prob_val), 2),
                "probability_svm": round(float(svm_prob_val), 2),
                "recommended_model": "SVM",
                "explanation": explanation
            }

        except Exception as e:
            print(f"Prediction Error for {disease_name}: {e}")
            traceback.print_exc()
            return {"error": f"Internal ML Prediction Error: {str(e)}"}

    def finalize_assessment(self, result, data, serializer, disease_name, user):
        if "error" in result:
            return Response({"error": result["error"]}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        risk_level = result.get("risk_level", result.get("classification", ""))
        prob = result.get("probability_svm", 0.0)
        
        save_kwargs = {'probability': prob, 'user': user}
        if disease_name == 'kidney':
            save_kwargs['classification'] = risk_level
        else:
            save_kwargs['risk_level'] = risk_level
            
        assessment = serializer.save(**save_kwargs)
        
        # Get Gemini recommendations if at risk
        if risk_level in ["High", "Moderate", "ckd"]:
            result["recommendations"] = get_gemini_recommendations(disease_name, risk_level, data)
            assessment.recommendations = json.dumps(result["recommendations"])
            assessment.save()
            
        return Response(result, status=status.HTTP_201_CREATED)

class HeartPredictView(BasePredictView):
    def post(self, request):
        serializer = HeartAssessmentSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            
            # Map string data to expected UCI Heart (id=45) integers
            heart_mapping = {
                'sex': {'Male': 1, 'Female': 0},
                'cp': {'Typical Angina': 1, 'Atypical Angina': 2, 'Non-Anginal Pain': 3, 'Asymptomatic': 4},
                'fbs': {'Yes': 1, 'No': 0},
                'restecg': {'Normal': 0, 'ST-T abnormality': 1, 'Left Ventricular Hypertrophy': 2},
                'exang': {'Yes': 1, 'No': 0},
                'slope': {'Upsloping': 1, 'Flat': 2, 'Downsloping': 3},
                'thal': {'Normal': 3, 'Fixed Defect': 6, 'Reversible Defect': 7}
            }
            mapped_data = dict(data)
            for k, val_map in heart_mapping.items():
                if k in mapped_data and mapped_data[k] in val_map:
                    mapped_data[k] = val_map[mapped_data[k]]
            
            # Prepare DataFrame
            df = pd.DataFrame([mapped_data])
            # Processing: Encoded by get_dummies in training? 
            # Heart UCI 45 usually has categorical integers. 
            # If train_heart.py used get_dummies on integers, it might have done nothing.
            # We assume df is ready or get_dummies will handle it if we cast to object.
            # To be safe, we apply get_dummies and reindex.
            df = pd.get_dummies(df)
            
            result = self.predict("heart", df, classification_labels={0: "Low", 1: "High", 2: "High", 3: "High", 4: "High"})
            
            user_obj = request.user if request.user.is_authenticated else None
            return self.finalize_assessment(result, data, serializer, "heart", user_obj)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DiabetesPredictView(BasePredictView):
    def post(self, request):
        serializer = DiabetesAssessmentSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            df = pd.DataFrame([data])
            
            # Map Gender
            gender_map = {'Female': 0, 'Male': 1, 'Other': 2}
            if 'gender' in df.columns:
                df['gender'] = df['gender'].map(gender_map)
                
            # Smoking History - One Hot Encoded via get_dummies in training
            # Ensure it is string for get_dummies to work same way
            if 'smoking_history' in df.columns:
                df['smoking_history'] = df['smoking_history'].astype(str)
            
            # Using drop_first=False ensures single-row API inputs don't drop their only category
            df = pd.get_dummies(df, columns=['smoking_history'], drop_first=False)

            result = self.predict("diabetes", df, classification_labels={0: "Low", 1: "High"})
            
            user_obj = request.user if request.user.is_authenticated else None
            return self.finalize_assessment(result, data, serializer, "diabetes", user_obj)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LiverPredictView(BasePredictView):
    def post(self, request):
        serializer = LiverAssessmentSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            df = pd.DataFrame([data])
            
            # Map Gender
            gender_map = {'Female': 0, 'Male': 1}
            if 'Gender' in df.columns: # Backend model has lowercase 'gender'?
                df['Gender'] = df['Gender'].map(gender_map)
            elif 'gender' in df.columns:
                 df['gender'] = df['gender'].map(gender_map)
                 # Rename to match training if training had 'Gender'
                 df.rename(columns={'gender': 'Gender'}, inplace=True)
            
            # Rename columns to match CSV if needed?
            # Model fields: total_bilirubin, etc. 
            # CSV fields: Total_Bilirubin, etc.
            # We need to map model field names to CSV names used in training.
            # Training used `indian_liver_patient.csv`. Headers: Age, Gender, Total_Bilirubin, Direct_Bilirubin, Alkaline_Phosphotase, Alamine_Aminotransferase, Aspartate_Aminotransferase, Total_Protiens, Albumin, Albumin_and_Globulin_Ratio
            # Backend fields are lowercase snake_case usually.
            # We must rename.
            rename_map = {
                'age': 'Age', 'gender': 'Gender', 
                'total_bilirubin': 'Total_Bilirubin', 'direct_bilirubin': 'Direct_Bilirubin',
                'alkaline_phosphotase': 'Alkaline_Phosphotase', 
                'alamine_aminotransferase': 'Alamine_Aminotransferase',
                'aspartate_aminotransferase': 'Aspartate_Aminotransferase',
                'total_protiens': 'Total_Protiens', 'albumin': 'Albumin',
                'albumin_and_globulin_ratio': 'Albumin_and_Globulin_Ratio'
            }
            df.rename(columns=rename_map, inplace=True)

            result = self.predict("liver", df, classification_labels={0: "Low", 1: "High"}) # 1=Patient(Mapped to 1), 2=Healthy(Mapped to 0)
            
            user_obj = request.user if request.user.is_authenticated else None
            return self.finalize_assessment(result, data, serializer, "liver", user_obj)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class KidneyPredictView(BasePredictView):
    def post(self, request):
        serializer = KidneyAssessmentSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data
            df = pd.DataFrame([data])
            # Kidney UCI 336 has many columns. Code uses get_dummies.
            # We rely on reindexing to align columns.
            
            # Map frontend shortcodes to ML model training columns
            df.rename(columns={'wc': 'wbcc', 'rc': 'rbcc'}, inplace=True)
            
            df = pd.get_dummies(df)
            
            result = self.predict("kidney", df) 
            
            user_obj = request.user if request.user.is_authenticated else None
            return self.finalize_assessment(result, data, serializer, "kidney", user_obj)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ModelPerformanceView(APIView):
    def get(self, request):
        try:
            metrics_path = os.path.join(settings.BASE_DIR, 'ml_models', 'metrics.json')
            if os.path.exists(metrics_path):
                with open(metrics_path, 'r') as f:
                    data = json.load(f)
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Metrics not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class HowItWorksContentView(APIView):
    def get(self, request):
        try:
            content_path = os.path.join(settings.BASE_DIR, 'data', 'how_it_works.json')
            if os.path.exists(content_path):
                with open(content_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Content not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.id,
                'username': user.username,
                'email': user.email
            }, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class AssessmentHistoryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        history = []

        # Heart Assessments
        for a in HeartAssessment.objects.filter(user=user).order_by('-created_at'):
            history.append({
                'id': f'heart-{a.id}',
                'type': 'Heart Assessment',
                'risk_level': a.risk_level,
                'probability': a.probability,
                'created_at': a.created_at,
                'icon': 'Heart'
            })

        # Diabetes Assessments
        for a in DiabetesAssessment.objects.filter(user=user).order_by('-created_at'):
            history.append({
                'id': f'diabetes-{a.id}',
                'type': 'Diabetes Assessment',
                'risk_level': a.risk_level,
                'probability': a.probability,
                'created_at': a.created_at,
                'icon': 'Activity'
            })

        # Liver Assessments
        for a in LiverAssessment.objects.filter(user=user).order_by('-created_at'):
            history.append({
                'id': f'liver-{a.id}',
                'type': 'Liver Assessment',
                'risk_level': a.risk_level,
                'probability': a.probability,
                'created_at': a.created_at,
                'icon': 'Droplet'
            })

        # Kidney Assessments
        for a in KidneyAssessment.objects.filter(user=user).order_by('-created_at'):
            history.append({
                'id': f'kidney-{a.id}',
                'type': 'Kidney Assessment',
                'risk_level': a.classification,
                'probability': a.probability,
                'created_at': a.created_at,
                'icon': 'Activity'
            })

        # Sort combined history by created_at (newest first)
        history.sort(key=lambda x: x['created_at'], reverse=True)
        
        # Pagination
        try:
            page = int(request.query_params.get('page', 1))
            if page < 1: page = 1
        except ValueError:
            page = 1
            
        try:
            limit = int(request.query_params.get('limit', 10))
            if limit < 1: limit = 10
        except ValueError:
            limit = 10
            
        start = (page - 1) * limit
        end = start + limit
        
        paginated_history = history[start:end]
        
        response_data = {
            'count': len(history),
            'page': page,
            'limit': limit,
            'results': paginated_history
        }
        
        return Response(response_data, status=status.HTTP_200_OK)


class RegisterAPIView(APIView):
    def post(self, request):
        username = request.data.get('username', '').strip()
        email = request.data.get('email', '').strip()
        password = request.data.get('password', '')

        if not username or not email or not password:
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already registered.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({'message': 'Registration successful.', 'user_id': user.id}, status=status.HTTP_201_CREATED)


class AssessmentDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, type, id):
        user = request.user
        try:
            if type == 'heart':
                assessment = HeartAssessment.objects.get(id=id, user=user)
            elif type == 'diabetes':
                assessment = DiabetesAssessment.objects.get(id=id, user=user)
            elif type == 'liver':
                assessment = LiverAssessment.objects.get(id=id, user=user)
            elif type == 'kidney':
                assessment = KidneyAssessment.objects.get(id=id, user=user)
            else:
                return Response({"error": "Invalid assessment type"}, status=status.HTTP_400_BAD_REQUEST)
            
            data = model_to_dict(assessment)
            
            # Format recommendations if they exist
            import json
            if assessment.recommendations:
                try:
                    data['recommendations'] = json.loads(assessment.recommendations)
                except Exception:
                    data['recommendations'] = assessment.recommendations
            else:
                data['recommendations'] = None
                
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": "Assessment not found or invalid"}, status=status.HTTP_404_NOT_FOUND)