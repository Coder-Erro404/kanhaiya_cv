# Generated by Django 4.1.3 on 2023-02-20 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kanhaiya_app', '0002_remove_addblog_timestamp_remove_contact_timestamp'),
    ]

    operations = [
        migrations.CreateModel(
            name='GeeksModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('geeks_field', models.URLField()),
            ],
        ),
        migrations.DeleteModel(
            name='addblog',
        ),
        migrations.DeleteModel(
            name='Contact',
        ),
    ]
