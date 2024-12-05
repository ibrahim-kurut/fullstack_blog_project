from rest_framework.permissions import BasePermission

class IsAdminOnly(BasePermission):
    """
    Only the administrator was allowed to view and delete users.
    """
    def has_permission(self, request, view):
        # Check if the user is authorized and is the administrator
        return bool(request.user and request.user.is_staff)

