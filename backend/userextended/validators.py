from django.core.exceptions import ValidationError
import re
from datetime import date

def charinput_validation(value):

    if len(value) <= 225:
        regex = "^[a-zA-Z0-9\s,'-]*$"

        if re.search(regex, value):
            return value

        else:
            raise ValidationError('Only letters and digit and " - " are allowed')

    else:
        raise ValidationError('Maximum word limit is 225')

def phone_validation(value):

    if len(str(value)) == 10 or len(str(value)) == 12:
        regex = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"

        if re.search(regex, value):
            return value

        else:
            raise ValidationError('Invalid phone number')

    else:
        raise ValidationError('Invalid phone number')

def dob_validation(value):
    actual_age = (date.today() - value ).days / 365
    if round(actual_age) >= 12 and round(actual_age <= 110):
        return actual_age

    else:
        raise ValidationError('You must be 12 to 110 year old')

def image_validation(value):
    name = str(value).split('.')[-1]
    list_of_valid = ['jpg','jpeg','png']
    if name.lower() in list_of_valid:
        return name

    else:
        raise ValidationError("Only 'jpg' 'jpeg' 'png' are allowed")

