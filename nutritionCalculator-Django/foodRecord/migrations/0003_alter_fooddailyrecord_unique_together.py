# Generated by Django 3.2.9 on 2021-11-07 00:50

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('foodRecord', '0002_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='fooddailyrecord',
            unique_together={('user', 'date')},
        ),
    ]