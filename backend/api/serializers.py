from rest_framework import serializers
from .models import HeartAssessment, DiabetesAssessment, LiverAssessment, KidneyAssessment

class HeartAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeartAssessment
        fields = '__all__'
        read_only_fields = ('risk_level', 'probability', 'created_at')

    def validate_age(self, value):
        if not (1 <= value <= 120):
            raise serializers.ValidationError("Age must be between 1 and 120.")
        return value

    def validate_trestbps(self, value):
        if not (50 <= value <= 250):
            raise serializers.ValidationError("Resting Blood Pressure must be between 50 and 250.")
        return value

    def validate_chol(self, value):
        if not (50 <= value <= 600):
            raise serializers.ValidationError("Cholesterol must be between 50 and 600.")
        return value

    def validate_thalach(self, value):
        if not (30 <= value <= 250):
            raise serializers.ValidationError("Maximum Heart Rate must be between 30 and 250.")
        return value

    def validate_oldpeak(self, value):
        if not (0 <= value <= 10):
            raise serializers.ValidationError("ST Depression must be between 0 and 10.")
        return value

    def validate_ca(self, value):
        if not (0 <= value <= 3):
            raise serializers.ValidationError("Number of major vessels must be between 0 and 3.")
        return value

class DiabetesAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiabetesAssessment
        fields = '__all__'
        read_only_fields = ('risk_level', 'probability', 'created_at')

class LiverAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LiverAssessment
        fields = '__all__'
        read_only_fields = ('risk_level', 'probability', 'created_at')



class KidneyAssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = KidneyAssessment
        fields = '__all__'
        read_only_fields = ('classification', 'probability', 'created_at')
