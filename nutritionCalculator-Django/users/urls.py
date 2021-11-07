from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from django.contrib.auth import views as auth_views
from .views import *

urlpatterns = [
    path('login/', obtain_auth_token, name="user-login"),
    path('register/', register, name="user-register"),
    path('is_admin/', is_admin, name="user-is-admin")]
