from ucimlrepo import fetch_ucirepo
import pandas as pd

def analyze_dataset(dataset_id, name):
    print(f"\n{'='*20} {name} (ID: {dataset_id}) {'='*20}")
    try:
        # fetch dataset 
        dataset = fetch_ucirepo(id=dataset_id) 
        
        # data (as pandas dataframes) 
        X = dataset.data.features 
        y = dataset.data.targets 
        
        print(f"\n[Features Info]")
        print(X.info())
        print(f"\n[Features Head]")
        print(X.head())
        
        print(f"\n[Targets Info]")
        print(y.info())
        print(f"\n[Targets Head]")
        print(y.head())
        
        print(f"\n[Variables]")
        print(dataset.variables)
        
    except Exception as e:
        print(f"Error fetching {name}: {e}")

# Fetch Heart Disease
analyze_dataset(45, "Heart Disease")

# Fetch Chronic Kidney Disease
analyze_dataset(336, "Chronic Kidney Disease")
