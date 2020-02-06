from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('restaurant', views.RestaurantView)
router.register('review', views.ReviewView)
router.register('comment', views.CommentView)


urlpatterns = [
    path('', include(router.urls))
]
