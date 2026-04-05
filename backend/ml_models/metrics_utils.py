
import json
import os
import numpy as np

METRICS_FILE = 'metrics.json'

def load_metrics():
    if os.path.exists(os.path.join(os.path.dirname(__file__), METRICS_FILE)):
        with open(os.path.join(os.path.dirname(__file__), METRICS_FILE), 'r') as f:
            return json.load(f)
    return {"overall": {}, "conditions": [], "comparison": []}

def save_metrics(metrics):
    with open(os.path.join(os.path.dirname(__file__), METRICS_FILE), 'w') as f:
        json.dump(metrics, f, indent=4)

def update_condition_metrics(condition_id, name, model_name, accuracy, sensitivity, specificity, training_size, dataset_name, features, confusion_matrix):
    metrics = load_metrics()
    
    # Check if condition exists
    found = False
    for i, cond in enumerate(metrics["conditions"]):
        if cond["id"] == condition_id:
            metrics["conditions"][i] = {
                "id": condition_id,
                "name": name,
                "model": model_name,
                "accuracy": round(accuracy * 100, 1),
                "sensitivity": round(sensitivity * 100, 1),
                "specificity": round(specificity * 100, 1),
                "training_size": f"{training_size} samples",
                "dataset": dataset_name,
                "features": features,
                "confusion_matrix": confusion_matrix
            }
            found = True
            break
    
    if not found:
        metrics["conditions"].append({
            "id": condition_id,
            "name": name,
            "model": model_name,
            "accuracy": round(accuracy * 100, 1),
            "sensitivity": round(sensitivity * 100, 1),
            "specificity": round(specificity * 100, 1),
            "training_size": f"{training_size} samples",
            "dataset": dataset_name,
            "features": features,
            "confusion_matrix": confusion_matrix
        })
        
    save_metrics(metrics)

def update_comparison_metrics(knn_acc, svm_acc, metric_name="Accuracy"):
    metrics = load_metrics()
    
    knn_val = round(knn_acc * 100, 1)
    svm_val = round(svm_acc * 100, 1)
    winner = "SVM" if svm_val > knn_val else "KNN"
    
    # Find existing accuracy metric in comparisons or add it
    found = False
    for i, item in enumerate(metrics.get("comparison", [])):
        if item["metric"] == metric_name:
            metrics["comparison"][i] = {
                "metric": metric_name,
                "knn": knn_val,
                "svm": svm_val,
                "winner": winner
            }
            found = True
            break
    
    if not found:
        if "comparison" not in metrics: metrics["comparison"] = []
        metrics["comparison"].append({
            "metric": metric_name,
            "knn": knn_val,
            "svm": svm_val,
            "winner": winner
        })
        
    save_metrics(metrics)

