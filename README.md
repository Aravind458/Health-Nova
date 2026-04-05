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

*   **Heart Disease Assessment**: 
    *   **Dataset**: UCI Heart Disease Dataset (Cleveland). 
    *   **Features**: Analyzes parameters such as chest pain type (cp), resting blood pressure (trestbps), cholesterol levels (chol), and maximum heart rate achieved (thalach).
    *   **Models**: Employs SVM (Support Vector Machine) and KNN (K-Nearest Neighbors) to classify heart disease risk. The SVM uses an RBF kernel to handle the complex, non-linear relationships in cardiovascular data.
*   **Diabetes Assessment**: 
    *   **Dataset**: Pima Indians Diabetes Dataset / UCI.
    *   **Features**: Key features include glucose levels, BMI, hypertension presence, and patient age. 
    *   **Models**: Support Vector Machine provides high accuracy and distinct probability weightings by analyzing the multi-dimensional mapping of the patient's metabolic state against known diabetic thresholds.
*   **Liver Disease Assessment**: 
    *   **Dataset**: Indian Liver Patient Dataset (ILPD).
    *   **Features**: Total Bilirubin, Direct Bilirubin, Alkaline Phosphotase, and Alamine Aminotransferase are critical biomarkers analyzed here.
    *   **Models**: KNN and SVM are utilized to limit false alarms (specificity) while maximizing the detection of actual liver impairment (sensitivity).
*   **Kidney Disease Assessment**: 
    *   **Dataset**: UCI Chronic Kidney Disease (CKD) Dataset.
    *   **Features**: Blood pressure, specific gravity, albumin, and blood glucose levels.
    *   **Models**: Implemented with robust `SimpleImputer` strategies to handle the typically sparse data found in kidney assessments, followed by SVM classification to determine CKD risk levels.

*(Note: Urinalysis models were previously explored but have been deprecated and entirely removed from the production pipeline to focus on core chronic conditions).*

## Weights Validation for Recommendations
When a user is analyzed, the system doesn't just return a simple "Yes/No" diagnosis. It relies on **Weights Validation** to drive the personalized recommendation engine.

1. **Probability Weighting**: During inference, the SVM model outputs class probabilities (e.g., `[0.15, 0.85]`) using Platt scaling. The system extracts the specific probability weight for the "Positive/Disease" class.
2. **Threshold Validation**: These probability weights are evaluated. If the confidence weight exceeds the threshold for "Moderate" or "High" risk, the recommendation protocol is triggered.
3. **Contextual LLM Prompting**: The raw clinical data is meticulously structured alongside the model's derived risk level and injected into a strict prompt designed for **Gemini 2.0 Flash**. By providing the LLM with the exact patient metrics (the "weights" of their condition), Gemini is forced to generate highly specific, patient-tailored advice rather than generic web results.
4. **Structured JSON Enforcement**: The system validates Gemini's output to ensure it strictly respects the requested JSON schema (`precautions`, `recommendations`, `diet`).
5. **Fallback Mechanism**: In the event of an API timeout or if Gemini's output fails schema validation or hits quota limits (Error 429), the system injects an `is_fallback` flag and falls back to a statically defined, medically sound set of recommendations for that specific disease. The frontend dynamically detects this flag and displays a clear "General Guidance" banner to the user, ensuring transparency and that the user always receives guidance without application crashes.

## How to Run on Any Computer

Whether you are on Windows, Mac, or Linux, you can run this project locally by following these exact steps. **You do not need to be a programmer.** Just open your computer's Terminal (Mac) or PowerShell/Command Prompt (Windows) and copy/paste the commands!

### Prerequisites
Before you start, you must have installed:
1. **Python** (Search "Download Python" online and install it. Make sure to check the box that says "Add Python to PATH" during installation!)
2. **Node.js** (Search "Download Node.js" online and install the "LTS" version).

### Step 1: Download the Project
Open your Terminal/PowerShell and type:
```bash
git clone <repository-url>
cd Health-Nova
```
*(If you downloaded the code as a ZIP file, just extract it, open the folder, and open your Terminal inside that folder).*

### Step 2: Start the Backend (The Brain)
You need to open **one terminal window** dedicated just for the backend.
Depending on your computer, type these commands line by line:

**For Windows:**
```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

**For Mac / Linux:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

> **IMPORTANT:** In the `backend` folder, you will notice a file called `.env.example`. Rename that file to just `.env` and paste your Google Gemini API Key inside it. If you don't have one, the app will still work, it will just use fallback generic recommendations!

Leave that terminal window open and running.

### Step 3: Start the Frontend (The Interface)
Open a **brand new, second Terminal window**, navigate back to your `Health-Nova` folder, and type:
```bash
cd frontend
npm install
npm run dev
```

### Step 4: Open the App!
That's it! Open your web browser (Chrome, Safari, Edge) and type in:
👉 `http://localhost:3000`

The beautiful Health Nova website will appear and is completely ready to use!

## Security & Deployment
*   **Privacy**: Stateless API design ensures no user data persists after the session unless explicitly saved to the user's secure account history.
*   **Security**: Inputs are validated using **Zod** schemas in the frontend and Django serializers in the backend to prevent malformed data injection. Machine learning weights (`.pkl` files) are strictly maintained on the server-side to prevent model theft or manipulation.

## Conclusion
Health Nova demonstrates the transformative potential of integrating artificial intelligence with healthcare accessibility. By providing a secure, instant, and reliable platform for preliminary health screening, it empowers individuals to monitor their well-being proactively. While not a replacement for professional diagnosis, Health Nova serves as a crucial first line of defense, potentially catching life-threatening conditions early enough for effective intervention.
#   H e a l t h - N o v a  
 