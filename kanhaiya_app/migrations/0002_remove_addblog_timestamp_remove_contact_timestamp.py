# Generated by Django 4.1.3 on 2023-02-20 12:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kanhaiya_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addblog',
            name='timeStamp',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='timeStamp',
        ),
    ]
