from django.db import models
from django.template.backends import django
from foods.models import Food
from users.models import User
from datetime import datetime
from datetime import date


# Create your models here.
class FoodRecord(models.Model):
    food_id = models.ForeignKey(Food, on_delete=models.PROTECT)
    quantity = models.DecimalField(decimal_places=2, max_digits=2)
    calories = models.DecimalField(decimal_places=2, max_digits=2, default=0, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now_add=True, null=False)

    def calculate_calories(self):
        food = Food.objects.filter(pk=self.food_id.primary_key)
        cal = food.calories
        self.calories = self.quantity * cal
        self.save()


class FoodDailyRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, null=False)
    calories = models.DecimalField(decimal_places=2, max_digits=2)

    class Meta:
        unique_together = ('user', 'date')

