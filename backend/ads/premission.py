from rest_framework import permissions

class is_admins(permissions.BasePermission):
    
    def has_permission(self, request, view):
        user = request.user
        if user.groups.filter(name = 'admins'):
            return True
        return False