from rest_framework import serializers
from .models import Restaurant, Review, Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        # 'commenter_name', 'commenter_picture', 'comment_heading', 'commenter_location', 'content', 'review'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        # 'reviewer_name', 'restaurant_name', 'dish_rating', 'favorite_dish', 'customer_service_rating', 'dish_picture', 'restaurant'


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
