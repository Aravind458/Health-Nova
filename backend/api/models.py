from django.db import models
from django.contrib.auth.models import User

class HeartAssessment(models.Model):
    SEX_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    
    CP_CHOICES = [
        ('Typical Angina', 'Typical Angina'),
        ('Atypical Angina', 'Atypical Angina'),
        ('Non-Anginal Pain', 'Non-Anginal Pain'),
        ('Asymptomatic', 'Asymptomatic'),
    ]
    
    FBS_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]
    
    RESTECG_CHOICES = [
        ('Normal', 'Normal'),
        ('ST-T abnormality', 'ST-T abnormality'),
        ('Left Ventricular Hypertrophy', 'Left Ventricular Hypertrophy'),
    ]
    
    EXANG_CHOICES = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]
    
    SLOPE_CHOICES = [
        ('Upsloping', 'Upsloping'),
        ('Flat', 'Flat'),
        ('Downsloping', 'Downsloping'),
    ]
    
    THAL_CHOICES = [
        ('Normal', 'Normal'),
        ('Fixed Defect', 'Fixed Defect'),
        ('Reversible Defect', 'Reversible Defect'),
    ]

    # Patient Demographics
    age = models.IntegerField()
    sex = models.CharField(max_length=10, choices=SEX_CHOICES)
    
    # Vitals & Symptoms
    cp = models.CharField(max_length=50, choices=CP_CHOICES, verbose_name="Chest Pain Type")
    trestbps = models.IntegerField(verbose_name="Resting Blood Pressure")
    chol = models.IntegerField(verbose_name="Cholesterol")
    fbs = models.CharField(max_length=5, choices=FBS_CHOICES, verbose_name="Fasting Blood Sugar > 120 mg/dl")
    restecg = models.CharField(max_length=50, choices=RESTECG_CHOICES, verbose_name="Resting ECG")
    thalach = models.IntegerField(verbose_name="Maximum Heart Rate Achieved")
    exang = models.CharField(max_length=5, choices=EXANG_CHOICES, verbose_name="Exercise Induced Angina")
    oldpeak = models.FloatField(verbose_name="ST Depression Induced by Exercise")
    slope = models.CharField(max_length=20, choices=SLOPE_CHOICES, verbose_name="Slope of Peak Exercise ST Segment")
    ca = models.IntegerField(verbose_name="Number of Major Vessels Colored by Fluoroscopy")
    thal = models.CharField(max_length=50, choices=THAL_CHOICES, verbose_name="Thalassemia")
    
    # User linking
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    
    # Prediction Results
    risk_level = models.CharField(max_length=20, blank=True, null=True)
    probability = models.FloatField(blank=True, null=True)
    recommendations = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Heart Assessment - {self.created_at.strftime('%Y-%m-%d %H:%M')}"

class DiabetesAssessment(models.Model):
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    bmi = models.FloatField()
    hbA1c_level = models.FloatField()
    blood_glucose_level = models.IntegerField()
    hypertension = models.IntegerField()  # 0 or 1
    heart_disease = models.IntegerField() # 0 or 1
    smoking_history = models.CharField(max_length=20)
    
    # User linking
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    
    # Prediction result
    risk_level = models.CharField(max_length=20, null=True, blank=True)
    probability = models.FloatField(null=True, blank=True)
    recommendations = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Diabetes Assessment - {self.risk_level} ({self.created_at.strftime('%Y-%m-%d')})"

class LiverAssessment(models.Model):
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    total_bilirubin = models.FloatField()
    direct_bilirubin = models.FloatField()
    alkaline_phosphotase = models.IntegerField()
    alamine_aminotransferase = models.IntegerField()
    aspartate_aminotransferase = models.IntegerField()
    total_protiens = models.FloatField()
    albumin = models.FloatField()
    albumin_and_globulin_ratio = models.FloatField()
    
    # User linking
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    
    # Prediction result
    risk_level = models.CharField(max_length=20, null=True, blank=True)
    probability = models.FloatField(null=True, blank=True)
    recommendations = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Liver Assessment - {self.risk_level} ({self.created_at.strftime('%Y-%m-%d')})"


class KidneyAssessment(models.Model):
    age = models.FloatField()
    bp = models.FloatField(verbose_name="Blood Pressure")
    sg = models.FloatField(verbose_name="Specific Gravity")
    al = models.FloatField(verbose_name="Albumin")
    su = models.FloatField(verbose_name="Sugar")
    rbc = models.CharField(max_length=10, verbose_name="Red Blood Cells") # normal, abnormal
    pc = models.CharField(max_length=10, verbose_name="Pus Cell") # normal, abnormal
    pcc = models.CharField(max_length=10, verbose_name="Pus Cell Clumps") # present, notpresent
    ba = models.CharField(max_length=10, verbose_name="Bacteria") # present, notpresent
    bgr = models.FloatField(verbose_name="Blood Glucose Random")
    bu = models.FloatField(verbose_name="Blood Urea")
    sc = models.FloatField(verbose_name="Serum Creatinine")
    sod = models.FloatField(verbose_name="Sodium")
    pot = models.FloatField(verbose_name="Potassium")
    hemo = models.FloatField(verbose_name="Hemoglobin")
    pcv = models.FloatField(verbose_name="Packed Cell Volume")
    wc = models.FloatField(verbose_name="White Blood Cell Count")
    rc = models.FloatField(verbose_name="Red Blood Cell Count")
    htn = models.CharField(max_length=5, verbose_name="Hypertension") # yes, no
    dm = models.CharField(max_length=5, verbose_name="Diabetes Mellitus") # yes, no
    cad = models.CharField(max_length=5, verbose_name="Coronary Artery Disease") # yes, no
    appet = models.CharField(max_length=10, verbose_name="Appetite") # good, poor
    pe = models.CharField(max_length=5, verbose_name="Pedal Edema") # yes, no
    ane = models.CharField(max_length=5, verbose_name="Anemia") # yes, no

    # User linking
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    # Prediction result
    classification = models.CharField(max_length=20, null=True, blank=True) # ckd, notckd
    probability = models.FloatField(null=True, blank=True)
    recommendations = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Kidney Assessment - {self.classification} ({self.created_at.strftime('%Y-%m-%d')})"

