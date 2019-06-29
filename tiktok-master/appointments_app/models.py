from django.db import models
from companies_app.models import Company,Services
# Create your models here.

class Event(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    category = models.ManyToManyField(Services)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()