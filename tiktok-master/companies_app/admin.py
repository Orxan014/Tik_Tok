from django.contrib import admin
from .models import *
# Register your models here.

class ServicesAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(ServicesAdmin, self).get_queryset(request)
        return qs.filter()

admin.site.register([Services])
@admin.register(Company)
class ServicesAdmin(admin.ModelAdmin):
    list_display = ['company_id', 'company_name','adress']
