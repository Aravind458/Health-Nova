import sys
import os
import django
import pandas as pd
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.views import LiverPredictView

liver_high = {
    "age": 65, "gender": "Male", "total_bilirubin": 15.0, "direct_bilirubin": 8.0,
    "alkaline_phosphotase": 400, "alamine_aminotransferase": 200, "aspartate_aminotransferase": 300,
    "total_protiens": 4.0, "albumin": 2.0, "albumin_and_globulin_ratio": 0.5
}
liver_low = {
    "age": 30, "gender": "Female", "total_bilirubin": 0.8, "direct_bilirubin": 0.2,
    "alkaline_phosphotase": 150, "alamine_aminotransferase": 20, "aspartate_aminotransferase": 25,
    "total_protiens": 7.0, "albumin": 4.0, "albumin_and_globulin_ratio": 1.2
}

def predict_case(data, label):
    df = pd.DataFrame([data])
    gender_map = {'Female': 0, 'Male': 1}
    df['gender'] = df['gender'].map(gender_map)
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
    view = LiverPredictView()
    result = view.predict("liver", df, classification_labels={0: "Low", 1: "High"})
    return {
        "label": label,
        "input_df": str(df.to_dict('records')),
        "prediction_result": result
    }

results = [
    predict_case(liver_high, "HIGH_RISK_INPUT"),
    predict_case(liver_low, "LOW_RISK_INPUT")
]

with open('debug_liver_output.json', 'w') as f:
    json.dump(results, f, indent=4)
print("Finished writing to debug_liver_output.json")
