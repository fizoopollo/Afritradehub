from django.contrib import admin
from .models import DraftOrder, DraftOrderLine, Order, OrderLine, ShippingLabel, AbandonedCheckout

admin.site.register(DraftOrder)
admin.site.register(DraftOrderLine)
admin.site.register(Order)
admin.site.register(OrderLine)
admin.site.register(ShippingLabel)
admin.site.register(AbandonedCheckout)
