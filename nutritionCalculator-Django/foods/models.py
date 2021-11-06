from django.db import models


# Create your models here.
class FoodCategory(models.Model):
    name = models.CharField(max_length=255)
    id = models.IntegerField(primary_key=True)

    def __str__(self):
        return f"Category {self.id}: {self.name}"


class Food(models.Model):
    name = models.CharField(max_length=256)
    calories = models.PositiveIntegerField()
    category_id = models.ForeignKey(FoodCategory, on_delete=models.PROTECT)

    def __str__(self):
        return f"{self.name}: {self.calories}cals"
