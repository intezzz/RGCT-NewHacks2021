from rest_framework import serializers
from .models import FoodRecord


class FoodRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodRecord
        fields = ["id", "food_id", "quantity", "calories"]
