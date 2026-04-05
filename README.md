# Health Nova: AI-Powered Health Assessment Platform

## Title Explanation

**Health Nova** symbolizes a new beginning in personal health management. "Nova" refers to a bright star, representing the clarity and insight our application brings to health data. It signifies a fresh, modern approach to wellness, powered by advanced technology to illuminate potential health risks before they become critical.

## Abstract of the Application

Health Nova is a cutting-edge web application designed to provide real-time, privacy-focused health assessments using machine learning. By leveraging pre-trained AI models, the platform offers instant analysis for various health conditions, including Heart Disease, Diabetes, Liver Disease, and Kidney Disease. Built with a robust technology stack comprising Next.js for the frontend and Django for the backend, Health Nova ensures a seamless, responsive, and secure user experience. The system emphasizes data privacy, processing information ephemerally without permanent storage, making it a trustworthy tool for preliminary health screening.

## Introduction of the Application

In an era where preventative healthcare is paramount, Health Nova bridges the gap between complex medical data and actionable insights. Chronic diseases such as cardiovascular issues and diabetes are leading causes of mortality worldwide, often due to late detection. Health Nova empowers users to take checking their health into their own hands by providing an accessible, easy-to-use interface for preliminary screening.

The application integrates multiple machine learning models to analyze user-inputted health metrics. Whether it's analyzing blood parameters for liver function or reviewing dietary markers for diabetes, Health Nova provides immediate feedback, helping users make informed decisions about seeking further professional medical advice.

## Complete Project Flow

The Health Nova platform operates on a streamlined, real-time pipeline connecting the user interface to sophisticated AI diagnostic tools:

1. **Authentication & UI (Frontend)**: A user creates an account or logs in via Token Authentication. They navigate the Next.js frontend and select a specific health assessment (e.g., Heart Disease). They fill out a secure form containing clinical parameters (age, blood pressure, cholesterol, etc.).
2. **Data Transmission**: Upon submission, the frontend securely transmits a JSON payload alongside their Authentication Token to the Django REST Framework (DRF) backend API endpoint.
3. **Data Preprocessing (Backend)**: The Django view receives the data and passes it to the `BasePredictView.predict()` inference engine. The raw data is aligned with the required model columns, imputed for any missing fields using `SimpleImputer`, and standardized using `StandardScaler` to match the exact distribution of the original training data. Note: If the math fails, a secure 500 error is thrown instead of crashing the server.
4. **Machine Learning Inference**: The standardized data is fed into pre-trained Support Vector Machine (SVM) and K-Nearest Neighbors (KNN) models loaded from serialized `.pkl` files.
5. **Prediction & Weights Validation**: The models generate probability scores for both "Healthy" and "At-Risk" classes. The system evaluates these specific probability weights to determine the final risk level (e.g., High, Moderate, Low).
6. **AI Recommendation Generation**: If a high or moderate risk is detected, the validated patient data and risk severity are forwarded to the **Gemini 2.0 Flash AI** via the Google GenAI SDK. Gemini processes this context to generate personalized, medical-context-aware precautions, recommendations, and dietary advice.
7. **Response Delivery & Persistence**: The overall diagnosis, probability scores, and Gemini-generated recommendations are compiled into a JSON object. This data is **saved persistently to the SQLite database**, tied to the `user_id`, before being returned to the frontend.
8. **History Tracking**: The frontend displays this data in an animated results dashboard. Users can revisit their personalized AI advice at any time via their History profile, which pulls paginated results from the database.

## Overview of the Models

Health Nova utilizes highly accurate, distinct machine learning models trained on established medical datasets for each supported condition.

* **Heart Disease Assessment**
  Dataset: UCI Heart Disease Dataset (Cleveland)
  Features: chest pain type, resting blood pressure, cholesterol levels, max heart rate
  Models: SVM (RBF kernel) and KNN

* **Diabetes Assessment**
  Dataset: Pima Indians Diabetes Dataset
  Features: glucose, BMI, hypertension, age
  Model: SVM

* **Liver Disease Assessment**
  Dataset: Indian Liver Patient Dataset (ILPD)
  Features: bilirubin, alkaline phosphotase, enzymes
  Models: KNN + SVM

* **Kidney Disease Assessment**
  Dataset: UCI CKD Dataset
  Features: blood pressure, albumin, glucose
  Model: SVM

## Weights Validation for Recommendations

1. Probability weights from SVM
2. Threshold-based risk classification
3. Structured prompt to Gemini AI
4. JSON output validation
5. Fallback mechanism for errors

## How to Run on Any Computer

### Prerequisites

* Python
* Node.js

### Step 1: Clone

```bash
git clone https://github.com/Aravind458/Health-Nova.git
cd Health-Nova
```

### Step 2: Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Step 3: Frontend

```bash
cd frontend
npm install
npm run dev
```

👉 Open: http://localhost:3000

## Security & Deployment

* Stateless API design
* Input validation using Zod & Django
* Secure ML model handling

## Conclusion

Health Nova demonstrates the power of AI in healthcare by enabling early detection and awareness. It acts as a first-level screening tool and encourages users to seek professional medical advice when necessary.
