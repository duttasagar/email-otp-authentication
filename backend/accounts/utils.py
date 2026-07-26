# from django.core.mail import send_mail
# from django.conf import settings


# def send_otp_email(email, otp):
#     send_mail(
#         subject="Email Verification OTP",
#         message=f"Your OTP is {otp}",
#         from_email=settings.EMAIL_HOST_USER,
#         recipient_list=[email],
#         fail_silently=False,
#     )

from django.core.mail import send_mail
from django.conf import settings


def send_otp_email(email, otp):
    try:
        result = send_mail(
            subject="Email Verification OTP",
            message=f"Your OTP is {otp}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=False,
        )

        print("EMAIL SENT RESULT:", result)
        return True

    except Exception as e:
        print("EMAIL ERROR:", repr(e))
        return False