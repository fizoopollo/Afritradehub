from django.contrib import admin
from .models import Thread, ThreadParticipant, Message

admin.site.register(Thread)
admin.site.register(ThreadParticipant)
admin.site.register(Message)
