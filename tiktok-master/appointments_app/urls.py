from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from companies_app import views as companies_views
from . import views
from appointments_app import views as app_views





app_name = 'appointments_app'



urlpatterns = [
    path('',app_views.appointment, name = 'appointments'),

]