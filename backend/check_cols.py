import pickle
import pandas as pd

def print_cols(name, path):
    try:
        cols = pickle.load(open(path, 'rb'))
        print(f"--- {name} COLUMNS ({len(cols)}) ---")
        print(list(cols))
    except Exception as e:
        print(f"Error loading {name}: {e}")

print_cols("HEART", "ml_models/heart_columns.pkl")
print_cols("LIVER", "ml_models/liver_columns.pkl")
print_cols("DIABETES", "ml_models/diabetes_columns.pkl")
