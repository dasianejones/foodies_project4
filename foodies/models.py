from django.db import models


class Restaurant(models.Model):
    restaurant_name = models.CharField(max_length=100, default='n/a')
    restaurant_rating = models.CharField(max_length=100, default='n/a')
    restaurant_phone_number = models.CharField(max_length=15, default='n/a')
    restaurant_address = models.TextField(default='n/a')
    type_of_food = models.CharField(max_length=100, default='n/a')
    multiple_restaurant_locations = models.BooleanField(default=False)
    need_directions = models.BooleanField(default=False)

    def __str__(self):
        return self.restaurant_name


class Review(models.Model):
    reviewer_name = models.CharField(max_length=100, default='n/a')
    restaurant_name = models.CharField(max_length=100, default='n/a')
    dish_rating = models.CharField(max_length=100, default='n/a')
    favorite_dish = models.CharField(max_length=100, default='n/a')
    customer_service_rating = models.CharField(max_length=100, default='n/a')
    dish_picture = models.TextField(default='n/a')
    restaurant = models.ForeignKey(
        Restaurant, on_delete=models.CASCADE, related_name='reviews')

    def __str__(self):
        return self.restaurant_name


class Comment(models.Model):
    commenter_name = models.CharField(max_length=100, default='n/a')
    commenter_picture = models.TextField(default='n/a')
    comment_heading = models.CharField(max_length=100, default='n/a')
    commenter_location = models.TextField(default='n/a')
    content = models.TextField(default='n/a')
    review = models.ForeignKey(
        Review, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.comment_heading
