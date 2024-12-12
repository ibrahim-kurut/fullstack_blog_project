from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAuthenticatedOrReadOnly(BasePermission):
    """
    Allow reading (Get, Head, Options) for everyone,
    Writing operations are only for registered users.
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated



class IsOwnerOrReadOnly(BasePermission):
    """
    To allow reading operations for everyone, but the update and delete post of the owner only
    """
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        # Allowing modification and deletion only if the current user is the owner of the post
        return obj.user == request.user


class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        # Allow the edit and deletion only for administrators
        return request.user.is_staff or request.user.is_superuser

