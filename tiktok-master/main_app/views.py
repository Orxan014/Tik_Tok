from django.shortcuts import render


def main(request):  # assign model values to view
    return render(request, "main_app/home.html", {})
