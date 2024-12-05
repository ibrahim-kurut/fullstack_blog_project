from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


from .serializers import RegisterSerializer, UserSerializer, LoginSerializer

from .permissions import IsAdminOnly

# ===================================
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
# ===================================



from rest_framework_simplejwt.views import TokenObtainPairView




class Register(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


     # for return created successfully message
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        message = {
            "message": "your account registered successfully",
            }
        return Response(
            {
                "message":message,

                "user":serializer.data
                }, 
                status=status.HTTP_201_CREATED, headers=headers
                )

# get all users
class Users(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsAdminOnly]



class Login(TokenObtainPairView):
    serializer_class = LoginSerializer

