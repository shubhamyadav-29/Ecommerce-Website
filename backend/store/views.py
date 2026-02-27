from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Category, Product   
from .serializers import CategorySerializer, ProductSerializer

@api_view(['GET'])
def get_product 