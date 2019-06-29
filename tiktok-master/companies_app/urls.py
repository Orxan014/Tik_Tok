from django.urls import path
from companies_app import views as companies_views

app_name = 'companies_app'
urlpatterns = [   
    path('<int:company_id>/', companies_views.CompanyDetailView.as_view(), name="company_detail"),

    path('freetime/', companies_views.GetAvailableTime.as_view(), name="getfreetime"),
    # path('<int:company_id>/',companies_views.etrafli, name = 'etrafli'),
]