from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import mixins
from rest_framework import viewsets
from .models import FoodRecord
from .serilaizers import FoodRecordSerializer
from datetime import datetime


# Create your views here.
class FoodRecordViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.DestroyModelMixin,
                        mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    queryset = FoodRecord.objects.all()
    serializer_class = FoodRecordSerializer

    def create(self, request, *args, **kwargs):
        serializer = FoodRecordSerializer(data=request.data, partial=True)
        user = request.user
        time = datetime.now()
        if serializer.is_valid():
            food_id = serializer.validated_data.get("food_id")
            quantity = serializer.validated_data.get("quantity")
            food_record = FoodRecord(food_id=food_id, quantity=quantity, time=time, user=user)
            food_record.save()
            food_record.calculate_calories()
            serializer = FoodRecordSerializer(food_record)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        user = request.user
        records = FoodRecord.objects.filter(user=user)
        serializer = FoodRecordSerializer(records, many=True)
        return Response(serializer.data)
