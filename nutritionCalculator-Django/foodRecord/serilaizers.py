from rest_framework import serializers
from .models import *


class FoodRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodRecord
        fields = ["id", "date_time", "food_id", "quantity", "calories"]


class FoodDailyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodDailyRecord
        fields = ["user", "date", "calories"]
