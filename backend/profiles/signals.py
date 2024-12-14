# Bir nesne veritabanına kaydedildikten sonra çalışan post_save sinyalini içe aktar
from django.db.models.signals import post_save

# Sinyalleri fonksiyonlara bağlamak için kullanılan @receiver dekoratörünü içe aktar
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile


# create_profile fonksiyonunu User modelinin post_save sinyaliyle bağla
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):

    # Kullanıcı nesnesi yeni oluşturulmuş mu kontrol et
    if created:
        # Yeni bir kullanıcı oluşturulduysa, ona bağlı bir profil oluştur
        Profile.objects.create(user=instance)


# save_profile fonksiyonunu User modelinin post_save sinyaliyle bağla

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    # Kullanıcı kaydedildiğinde, onunla ilişkili profil de kaydedilir
    instance.profile.save()
