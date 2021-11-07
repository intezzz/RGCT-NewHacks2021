from django.db import models
from django.template.backends import django
from foods.models import Food
from users.models import User
from datetime import datetime
from datetime import date
from math import floor


# Create your models here.
class FoodRecord(models.Model):
    food_id = models.ForeignKey(Food, on_delete=models.PROTECT)
    quantity = models.IntegerField()
    calories = models.IntegerField(default=0, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_time = models.DateField(auto_now_add=True, null=False)

    def calculate_calories(self):
        food = Food.objects.get(pk=self.food_id.id)
        cal = food.calories
        self.calories = floor(self.quantity / 100 * cal)
        self.save()


class FoodDailyRecord(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, null=False)
    calories = models.IntegerField()

    class Meta:
        unique_together = ('user', 'date')

    def update_calories(self):
        records = FoodRecord.objects.filter(user=self.user)
        cals = 0
        for record in records:
            cals += record.calories
        self.calories = cals
        self.save()
        return self

