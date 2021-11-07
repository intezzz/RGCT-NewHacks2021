from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import mixins
from rest_framework import viewsets

from .serializers import *
from .models import *


# Create your views here.
class FoodViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


class FoodCategoryViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer

    def retrieve(self, request, *args, **kwargs):
        pk = kwargs['pk']
        foods = Food.objects.filter(category_id=pk)
        serializer = FoodSerializer(foods, many=True)
        return Response(serializer.data)

