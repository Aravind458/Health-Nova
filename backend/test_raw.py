from django.test import TestCase
import pandas as pd
from api.views import LiverPredictView

class TestRawLiver(TestCase):
    def test_liver_raw(self):
        liver_data = {
            "age": 65, "gender": "Male", "total_bilirubin": 15.0, "direct_bilirubin": 8.0,
            "alkaline_phosphotase": 400, "alamine_aminotransferase": 200, "aspartate_aminotransferase": 300,
            "total_protiens": 4.0, "albumin": 2.0, "albumin_and_globulin_ratio": 0.5
        }
        df_liver = pd.DataFrame([liver_data])
        gender_map = {'Female': 0, 'Male': 1}
        df_liver['gender'] = df_liver['gender'].map(gender_map)
        rename_map = {
            'age': 'Age', 'gender': 'Gender', 
            'total_bilirubin': 'Total_Bilirubin', 'direct_bilirubin': 'Direct_Bilirubin',
            'alkaline_phosphotase': 'Alkaline_Phosphotase', 
            'alamine_aminotransferase': 'Alamine_Aminotransferase',
            'aspartate_aminotransferase': 'Aspartate_Aminotransferase',
            'total_protiens': 'Total_Protiens', 'albumin': 'Albumin',
            'albumin_and_globulin_ratio': 'Albumin_and_Globulin_Ratio'
        }
        df_liver.rename(columns=rename_map, inplace=True)
        view_l = LiverPredictView()
        print("\n=== LIVER HIGH RISK ===")
        print(df_liver.to_string())
        print("Result Liver:", view_l.predict("liver", df_liver, classification_labels={0: "Low", 1: "High"}))

        liver_low = {
            "age": 30, "gender": "Female", "total_bilirubin": 0.8, "direct_bilirubin": 0.2,
            "alkaline_phosphotase": 150, "alamine_aminotransferase": 20, "aspartate_aminotransferase": 25,
            "total_protiens": 7.0, "albumin": 4.0, "albumin_and_globulin_ratio": 1.2
        }
        df_low = pd.DataFrame([liver_low])
        df_low['gender'] = df_low['gender'].map(gender_map)
        df_low.rename(columns=rename_map, inplace=True)
        print("\n=== LIVER LOW RISK ===")
        print(df_low.to_string())
        print("Result Low Liver:", view_l.predict("liver", df_low, classification_labels={0: "Low", 1: "High"}))
