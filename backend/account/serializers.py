from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator



from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



# Create Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    # 1- To validate the email and make it required
    email = serializers.EmailField(
        required=True, 
        validators=[UniqueValidator(queryset=User.objects.all(), message="This email is already in use.")])

    # 2- The password is not displayed in the response
    password = serializers.CharField(write_only=True)
    re_password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'password', 're_password', 'username')
        read_only_fields = ('id', 'username')

    # 3- Verify that passwords match
    def validate(self, attrs):
        if attrs['password'] != attrs['re_password']:
            raise serializers.ValidationError({"message": "Password fields didn't match."})
        return attrs

    # 4-  Create user
    def create(self, validated_data):
        # Remove re_password field before saving from dict validated_data
        validated_data.pop('re_password')

        password = validated_data.pop('password')
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        
        # Generate a unique username with initial letters in uppercase
        username = f"{first_name} {last_name}"

        counter = 1
        while User.objects.filter(username=username).exists():
            username = f"{first_name}.{last_name}{counter}"
            counter += 1
        
        validated_data['username'] = username
        
        user = User.objects.create(**validated_data)
        
        # hash password
        user.set_password(password)
        user.save()

        return user



# get all user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')



# Create Login Serializer
class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Add the user date to the response
        data['username'] = self.user.username
        data['email'] = self.user.email
        data['is_admin'] = self.user.is_staff
        

        return data