from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import Post, Comment, Like, Category

from .serializers import PostSerializer, CommentSerializer, LikesSerializer, CategorySerializer

from rest_framework.permissions import IsAuthenticated

# Create your views here.

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    



class LikesViewSet(ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikesSerializer
