from rest_framework import serializers

from .models import Post, Comment, Like, Category

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        exclude = ['user']

    # View username in the Comment
    username = serializers.SerializerMethodField()
    def get_username(self, obj):
        return obj.user.username


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        exclude = ['user']

    # View username in the post
    username = serializers.SerializerMethodField()
    def get_username(self, obj):
        return obj.user.username


    # show category name in post 
    category_name = serializers.SerializerMethodField()
    def get_category_name(self, obj):
        return obj.category.name



    # View all comments related to post
    comments = CommentSerializer(many=True, read_only=True)

    # show the count of likes for each post
    likes_count = serializers.SerializerMethodField()
    def get_likes_count(self, obj):
        return obj.likes.count()


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
    
