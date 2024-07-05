# employees/views.py

from rest_framework import viewsets # type: ignore
from myproject.myproject.employees.models import Employee
from .serializers import EmployeeSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
