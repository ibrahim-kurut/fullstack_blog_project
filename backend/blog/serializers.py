from rest_framework import serializers

from .models import Post, Comment, Like, Category

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'



class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        exclude = ['user']

    # View username in the post
    username = serializers.SerializerMethodField()
    def get_username(self, obj):
        return obj.user.username


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
    
