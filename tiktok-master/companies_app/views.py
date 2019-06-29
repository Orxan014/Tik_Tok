from django.contrib import messages
from django.shortcuts import redirect

from companies_app.models import Company
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views import generic
from appointments_app.models import Event
from django.utils import timezone
import json


class CompanyDetailView(generic.DetailView):
    model = Company
    template_name = "companies_app/company.html"
    context_object_name = "company"
    slug_field = "company_id"
    slug_url_kwarg = "company_id"

    def get_context_data(self, **kwargs):
        context = super(CompanyDetailView, self).get_context_data(**kwargs)
        context["company"] = self.object
        item = self.object
        result = []
        result.append({
            "company_id": item.company_id,
            "coords": {"lat": item.company_latitude, "lng": item.company_longitude},
            "text": "Cihaz no: {} ".format(item.company_id),
            "company_name": "Servis name: {} ".format(item.company_name),

        })
        context["object_list"] = result
        context["events"] = eventParser(events = Event.objects.filter(company_id=item.company_id))
        return context

    def post(self, *args, **kwargs):
        obj = self.get_object()
        duration = obj.get_service_time()
        start_date = self.request.POST.get("start_date")
        start_time = self.request.POST.get("start_time")
        start_base_time = timezone.datetime.strptime(f"{start_date} {start_time}", "%Y-%m-%d %H:%M")
        end_time = start_base_time + timezone.timedelta(seconds=duration.seconds)
        if not Event.objects.filter(company=obj, start_time__lte=start_base_time, end_time__gte=start_base_time).last():

            event = Event.objects.create(
                company=obj,
                title=self.request.POST.get("title"),
                start_time=start_base_time,
                end_time=end_time
            )
            event.category.add(obj.get_category())
            event.save()
        else:
            messages.info(
                self.request, "Bu zaman meshguldu"
            )
        return redirect("companies_app:company_detail", obj.company_id)


def eventParser(events):
    listOfdict = []

    for event in events:
        dict = {}
        dict["title"] = event.title
        # service = event.category
        # if service.service_name == 'Oil':
        dict["start"] = str(event.start_time.isoformat())
        dict["end"] = str(event.end_time.isoformat())
        listOfdict.append(dict)

    return json.dumps(listOfdict)


class GetAvailableTime(generic.View):

    def get(self, *args, **kwargs):
        company_id, today = self.request.GET.get("id"), self.request.GET.get("time")
        today = timezone.datetime.strptime(today, "%Y-%m-%d")
        events = Event.objects.filter(
            company_id=company_id,
            start_time__day=today.day
        )
        exclude = []
        if events:
            for event in events:
                exclude.append(
                    f"{self.pad(event.start_time.hour)}:00"
                )
                exclude.append(
                    f"{self.pad(event.end_time.hour)}:00"
                )
        result = []
        for i in range(24):
            time = f"{self.pad(i)}:00"
            if time in exclude:
                result.append({
                    "time": time,
                    "free": False
                })
            else:
                result.append({
                    "time": time,
                    "free": True
                })
        return JsonResponse(result, safe=False)

    def pad(self, n):
        return str(0) + str(n) if n < 10 else str(n)