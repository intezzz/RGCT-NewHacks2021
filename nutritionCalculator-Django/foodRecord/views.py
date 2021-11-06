from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import mixins
from rest_framework import viewsets
from .models import *
from .serilaizers import *
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

    def retrieve(self, request, *args, **kwargs):
        user = request.user
        date = kwargs["pk"]
        date = date.split(",")
        year = int(date[0])
        month = int(date[1])
        day = int(date[2])
        date = datetime.date(year, month, day)
        records = FoodRecord.objects.filter(date_time__date=date)

        count = 0
        for record in records:
            if record.date_time__date == date and record.user == user:
                count += record.calories
        daily_report = FoodDailyRecord.objects.filter(date=date, user=user)
        if not daily_report:
            daily_report = FoodDailyRecord(user=user, calories=count, date=date)
            daily_report.save()
        else:
            daily_report.update(calories=count)
        all_record_serializer = FoodRecordSerializer(records, many=True)
        daily_record_serializer = FoodDailyRecordSerializer(daily_report, many=False)
        return Response({"daily_report": daily_record_serializer.data, "all_record": all_record_serializer.data})
