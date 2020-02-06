from rest_framework import viewsets
from django.shortcuts import render

from .serializers import RestaurantSerializer, ReviewSerializer, CommentSerializer
from .models import Restaurant, Review, Comment


class RestaurantView(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class ReviewView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
