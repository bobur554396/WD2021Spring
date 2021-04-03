from django.http.response import HttpResponse, JsonResponse


def hello(request):
    return HttpResponse('<h1>hello message</h1>')


def hours_ahead(request, hours):
    return HttpResponse(f'<h1>Hours ahead: {hours}</h1>')


# def products_list(request):
#     return HttpResponse('<h1>List of products</h1>')
#
#
# def product_detail(request, product_id):
#     return HttpResponse(f'<h1>Product page: {product_id}</h1>')


products = [
    {
        'id': i,
        'name': f'Product {i}',
        'price': i * 1000
    } for i in range(1, 11)
]


def products_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product with selected ID not found'})
