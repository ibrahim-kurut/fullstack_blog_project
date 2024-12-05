from django.urls import path

from .views import Register, Users, Login



urlpatterns = [
    path('register/', Register.as_view()),                      # api/users/register/
    path('login/', Login.as_view(), name='token_obtain_pair'),  # api/users/login/
    path('userinfo/', Users.as_view()),                         # api/users/userinfo/
]