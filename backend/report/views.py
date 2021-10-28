from rest_framework.generics import CreateAPIView, ListAPIView
from .models import report
from .serializer import report_serializer
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator


@method_decorator(csrf_protect, name = 'dispatch')
class report_create(CreateAPIView):
    queryset = report.objects.all()
    serializer_class = report_serializer

class report_list(ListAPIView):
    queryset = report.objects.all()
    serializer_class = report_serializer 
