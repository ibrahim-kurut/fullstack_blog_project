from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import PostViewSet, CommentViewSet, LikesViewSet, CategoryViewSet

router = DefaultRouter()
router.register("posts", PostViewSet)
router.register('comments', CommentViewSet)
router.register('likes', LikesViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]