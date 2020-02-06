from django.contrib import admin

from .models import Restaurant, Review, Comment

admin.site.register([Restaurant, Review, Comment])
