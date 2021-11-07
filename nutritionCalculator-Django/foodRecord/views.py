from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import mixins
from rest_framework import viewsets
from .models import *
from .serilaizers import *
import datetime


# Create your views here.
class FoodRecordViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,
                        mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    queryset = FoodRecord.objects.all()
    serializer_class = FoodRecordSerializer

    def create(self, request, *args, **kwargs):
        serializer = FoodRecordSerializer(data=request.data, partial=True)
        if serializer.is_valid():
            food_id = request.data["food_id"]
            quantity = request.data["quantity"]
            user = request.user
            time = datetime.datetime.today().date()
            food_record = FoodRecord(food_id_id=food_id, quantity=quantity, date_time=time, user=user)
            food_record.calculate_calories()
            food_record.save()
            serializer = FoodRecordSerializer(food_record)

            daily_record = FoodDailyRecord.objects.filter(date=time, user=user)
            if not daily_record:
                FoodDailyRecord(user=user, calories=food_record.calories, date=time).save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, *args, **kwargs):
        user = request.user
        records = FoodRecord.objects.filter(user=user)
        serializer = FoodRecordSerializer(records, many=True)
        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        user = request.user
        date_time = str(kwargs["pk"])
        year = int(date_time[0:4])
        month = int(date_time[4:6])
        day = int(date_time[6:8])
        date_time = datetime.date(year, month, day)
        records = FoodRecord.objects.filter(date_time=date_time, user=user).order_by('-date_time')
        daily_report = FoodDailyRecord.objects.get(date=date_time, user=user)
        daily_report.update_calories()
        all_record_serializer = FoodRecordSerializer(records, many=True)
        daily_record_serializer = FoodDailyRecordSerializer(daily_report, many=False)
        return Response({"daily_report": daily_record_serializer.data, "all_record": all_record_serializer.data})
