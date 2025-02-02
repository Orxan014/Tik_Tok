# Generated by Django 2.2.2 on 2019-06-12 11:17

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('company_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('company_name', models.CharField(help_text='Servisin adını daxil edin', max_length=250, unique=True, verbose_name='Service_name')),
                ('company_latitude', models.FloatField(help_text='koordinati daxil edin', verbose_name='Service Latitude')),
                ('company_longitude', models.FloatField(help_text='koordinati daxil edin', verbose_name='Company Longitude')),
                ('adress', models.CharField(help_text='Servisin ünvanını daxil edin', max_length=250, verbose_name='Adress')),
                ('email', models.EmailField(help_text='Servisin email adresini daxil edin', max_length=254, verbose_name='Email')),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(help_text='Servisin əlaqə nömrəsini daxil edin', max_length=13, verbose_name='Phone number')),
                ('categories', models.ManyToManyField(to='companies_app.Services')),
            ],
            options={
                'verbose_name': 'Company',
                'verbose_name_plural': 'Companies',
                'ordering': ['-company_id'],
            },
        ),
    ]
