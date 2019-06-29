from django.utils import timezone
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Services(models.Model):  # Service for example: yaglamag,moyka
    service_name = models.CharField(max_length=255)
    work_duration = models.DurationField(default=timezone.timedelta())


    def __str__(self):
        return f"{self.service_name}"


class Company(models.Model):  # Company Model
    company_id = models.IntegerField(unique=True, primary_key=True)
    company_name = models.CharField(("Service_name"), help_text="Servisin adını daxil edin",
                                    unique=True, max_length=250)
    company_latitude = models.FloatField(
        ("Service Latitude"), help_text="koordinati daxil edin")
    company_longitude = models.FloatField(
        ("Company Longitude"), help_text="koordinati daxil edin")
    adress = models.CharField(("Adress"), help_text='Servisin ünvanını daxil edin', max_length=250)
    email = models.EmailField(("Email"), help_text='Servisin email adresini daxil edin', max_length=254)
    phone_number = PhoneNumberField(max_length=13, null=False, verbose_name="Phone number",
                                    help_text="Servisin əlaqə nömrəsini daxil edin")
    categories = models.ManyToManyField(Services)


    def get_service_time(self):
        obj = self.categories.all().first()
        if obj:
            return obj.work_duration
        else:
            return ""

    def get_category(self):
        return self.categories.all().last()

    def __str__(self):
        return "{},{},{},{},{}".format(self.company_id,
                                       self.company_name,
                                       self.adress,
                                       self.email,
                                       self.phone_number)

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"
        ordering = ["-company_id"]
