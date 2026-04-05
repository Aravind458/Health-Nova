from django.urls import path
from .views import (
    HeartPredictView, 
    DiabetesPredictView, 
    LiverPredictView, 
    KidneyPredictView,
    ModelPerformanceView,
    HowItWorksContentView,
    LoginAPIView,
    RegisterAPIView,
    AssessmentHistoryView,
    AssessmentDetailView
)

urlpatterns = [
    path('predict/heart/', HeartPredictView.as_view(), name='predict-heart'),
    path('predict/diabetes/', DiabetesPredictView.as_view(), name='predict-diabetes'),
    path('predict/liver/', LiverPredictView.as_view(), name='predict-liver'),
    path('predict/kidney/', KidneyPredictView.as_view(), name='predict-kidney'),
    path('performance/', ModelPerformanceView.as_view(), name='performance'),
    path('content/how-it-works/', HowItWorksContentView.as_view(), name='how-it-works-content'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('history/', AssessmentHistoryView.as_view(), name='assessment-history'),
    path('history/<str:type>/<int:id>/', AssessmentDetailView.as_view(), name='assessment-detail'),
]
