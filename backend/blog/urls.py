from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets

from .models import Post  # تأكد من استيراد الموديل المناسب
from .serializers import PostSerializer  # تأكد من استيراد السيريلايزر المناسب
from .views import PostViewSet, CommentViewSet, LikesViewSet, CategoryViewSet

# تعريف UserPostsViewSet مع @action
class UserPostsViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'], url_path='user/(?P<user_id>\d+)/posts')
    def user_posts(self, request, user_id=None):
        posts = Post.objects.filter(user_id=user_id)  # استبدل بـ الموديل الصحيح حسب حاجتك
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

# تعريف الراوتر وتسجيل الـ viewsets
router = DefaultRouter()
router.register("posts", PostViewSet)
router.register('comments', CommentViewSet)
router.register('likes', LikesViewSet)
router.register('categories', CategoryViewSet)

# إعداد الـ urls
urlpatterns = [
    path("", include(router.urls)),
    path('user/<int:user_id>/posts/', UserPostsViewSet.as_view({'get': 'user_posts'}), name='user-posts'),
]
