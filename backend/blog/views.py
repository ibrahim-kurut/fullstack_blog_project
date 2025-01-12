from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .models import Post, Comment, Like, Category

from .serializers import PostSerializer, CommentSerializer, LikesSerializer, CategorySerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .permissions import IsAuthenticatedOrReadOnly , IsOwnerOrReadOnly, IsAdminOrReadOnly

from rest_framework.response import Response
from rest_framework import status


from .pagination import SmallPagination

from django_filters.rest_framework import FilterSet, CharFilter

from django_filters.rest_framework import DjangoFilterBackend

# Q sınıfı, sorguları dinamik bir şekilde birleştirmek için kullanılır
from django.db.models import Q 


# Create your views here.

# Birden fazla alanda arama yapabilmek için özel bir filtre oluşturma
class PostFilter(FilterSet):
    search = CharFilter(method='filter_by_title_or_category')  # Özel filtre yöntemi tanımlandı

    class Meta:
        model = Post # Filtrelerin uygulanacağı model
        fields = ['search']  # Filtreleme için kullanılabilecek alanlar

    # Özel filtre yöntemi: Başlık veya kategori adına göre filtreleme yapar
    def filter_by_title_or_category(self, queryset, name, value):
         # Q ile başlıkta veya kategori adında arama yapılır (büyük/küçük harf duyarsız)
        return queryset.filter(
            Q(title__icontains=value) | Q(category__name__icontains=value)
        )

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    pagination_class = SmallPagination
    filter_backends = [DjangoFilterBackend]  
    filterset_class = PostFilter  
    def perform_create(self, serializer):
    # Automatically assign the owner who created the post.
        serializer.save(user=self.request.user)

# =================================================================
# مسار جديد لعرض بوستات المستخدم فقط
class UserPostsViewSet(ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    pagination_class = SmallPagination

    def get_queryset(self):
        # جلب المستخدم الحالي من الطلب وعرض البوستات الخاصة به فقط
        user = self.kwargs.get('user_id')
        return Post.objects.filter(user_id=user).order_by('-id')
# =================================================================


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
