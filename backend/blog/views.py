from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import Post, Comment, Like, Category

from .serializers import PostSerializer, CommentSerializer, LikesSerializer, CategorySerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .permissions import IsAuthenticatedOrReadOnly , IsOwnerOrReadOnly, IsAdminOrReadOnly

from rest_framework.response import Response
from rest_framework import status


from .pagination import SmallPagination

# Create your views here.

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    pagination_class = SmallPagination

    def perform_create(self, serializer):
    # Automatically assign the owner who created the post.
        serializer.save(user=self.request.user)



class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
    # Automatically assign the owner who created the comment.
        serializer.save(user=self.request.user)


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly]
    



class LikesViewSet(ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikesSerializer
    permission_classes = [IsAuthenticated]


    def perform_create(self, serializer):
    # Automatically assign the owner who created the comment.
        serializer.save(user=self.request.user)


    def create(self, request, *args, **kwargs):
        # Get the post and the user
        post_id = request.data.get('post') # get post id
        user = request.user # get user

        if not post_id:
            return Response({"detail": "Post ID is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Verification if the like already exists
            like = Like.objects.get(post_id=post_id, user=user)
            # If exist, delete it
            like.delete()
            return Response({"detail": "Like removed successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Like.DoesNotExist:
            # If not exist, create it
            Like.objects.create(post_id=post_id, user=user)
            return Response({"detail": "Like added successfully."}, status=status.HTTP_201_CREATED)
