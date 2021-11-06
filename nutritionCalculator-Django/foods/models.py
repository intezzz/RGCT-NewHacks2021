from django.db import models


# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=256)
    calories = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.name}: {self.calories}cals"
