from django.urls import path
from .views import create_contact
from .import views

urlpatterns = [
    path('contact/', create_contact,name='contact'),
    path('',views.index,name='index'),
]
