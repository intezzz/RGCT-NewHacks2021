from django.shortcuts import render
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import *


# Create your views here.
from rest_framework.decorators import api_view, permission_classes


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

@api_view(['POST'])
@permission_classes([])
def register(request):
    user = User.objects.create_user(request.data["username"],
                                    request.data["email"],
                                    request.data["password"])
    user.save()
    return Response({"token": Token.objects.get(user=user).key})


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def is_admin(request):
    return Response({"status": request.user.is_staff})
