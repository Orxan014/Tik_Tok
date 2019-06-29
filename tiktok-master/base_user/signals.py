from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from oscar.apps.wishlists.models import WishList

from .models import MyUser


@receiver(post_save, sender=MyUser, dispatch_uid='create_new_wishlist')
def create_new_wishlist(sender, **kwargs):
    instance = kwargs.get('instance')
    if not instance.wishlists.last():
        WishList.objects.get_or_create(
            owner=instance,
            name="Arzu siyahısı",
            visibility='Public'
        )
    if instance.pk > 30:
        if instance.place == 0:
            instance.place = instance.pk - 20
            instance.save()
        else:
            pass
    else:
        pass
