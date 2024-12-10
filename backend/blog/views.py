from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import Post, Comment, Like, Category

from .serializers import PostSerializer, CommentSerializer, LikesSerializer, CategorySerializer

from rest_framework.permissions import IsAuthenticated

# Create your views here.

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
    # Automatically assign the owner who created the post.
        serializer.save(user=self.request.user)



class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
    # Automatically assign the owner who created the comment.
        serializer.save(user=self.request.user)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    



class LikesViewSet(ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikesSerializer
