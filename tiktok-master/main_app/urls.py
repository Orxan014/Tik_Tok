from django.urls import path
from main_app import views as main_views

app_name = 'main_app'

urlpatterns = [
    path('', main_views.main, name='main_app-home'),
]
