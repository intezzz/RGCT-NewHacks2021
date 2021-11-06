from django.db import models
from foods.models import Food
from users.models import User
from datetime import datetime
from datetime import date


# Create your models here.
class FoodRecord(models.Model):
    food_id = models.ForeignKey(Food, on_delete=models.PROTECT)
    quantity = models.DecimalField(decimal_places=2)
    calories = models.DecimalField(decimal_places=2, default=0, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_time = models.DateTimeField(auto_now=True, auto_now_add=True, default=datetime.now())

    def calculate_calories(self):
        food = Food.objects.filter(pk=self.food_id.primary_key)
        cal = food.calories
        self.calories = self.quantity * cal
        self.save()


class FoodDailyRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now=True, auto_now_add=True, default=date.today())
    calories = models.DecimalField(decimal_places=2)

