from django.conf.urls import url
from django.urls import path, include
from .views import *
from rest_framework import routers, permissions

router = routers.DefaultRouter()
router.register("foods", FoodRecordViewSet, basename="foodrecords")

urlpatterns = [
    path("", include(router.urls)),
]

