from django.shortcuts import render

from companies_app.models import Company, Services


# Create your views here.
def appointment(request):
    context = {}
    context["marker"] = Company.objects.all()

    if request.method == 'POST':
        context['marker'] = context['marker'].filter(categories__in=request.POST.getlist('service'))
        print(context['marker'].query)
    

    
    data = context["marker"]
    # ''' device locakitino''''
    result = []
    for item in data:
        try:
            new_data = Company.objects.get(
                company_id=item.company_id)
            result.append({
                "company_id": item.company_id,
                "coords": {"lat": item.company_latitude, "lng": item.company_longitude},
                "text": "Cihaz no: {} ".format(item.company_id),
                "company_name": "Servis name: {} ".format(item.company_name),
                
            })
        except Company.DoesNotExist:
            pass
    context["object_list"] = result  # fill context with values from database
    context['services'] = Services.objects.all()
    return render(request, 'appointments_app/appointment.html',context)

