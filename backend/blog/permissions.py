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
