# Generated by Django 3.2.9 on 2021-11-07 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodRecord', '0003_alter_fooddailyrecord_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foodrecord',
            name='quantity',
            field=models.IntegerField(),
        ),
    ]
