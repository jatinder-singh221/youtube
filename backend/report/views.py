from rest_framework.generics import CreateAPIView, ListAPIView
from .models import report
from .serializer import report_serializer
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from ads.premission import  is_admins


@method_decorator(csrf_protect, name = 'dispatch')
class report_create(CreateAPIView):
    queryset = report.objects.all()
    serializer_class = report_serializer

class report_list(ListAPIView):
    queryset = report.objects.all()
    serializer_class = report_serializer 
    permission_classes = [is_admins]
