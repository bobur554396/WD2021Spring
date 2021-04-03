from django.urls import path, re_path

from main.views import hello, hours_ahead, products_list, product_detail

urlpatterns = [
    path('hi/', hello),
    re_path(r'time/plus/(\d{1,2})/', hours_ahead),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
]
