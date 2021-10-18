import re
from django.core.exceptions import ValidationError
import re

def text_field(value):
    regex = "^[a-zA-Z0-9\s,'-]*$"

    if re.search(regex, value):
        return value
    else:
        raise ValidationError('Only letters and digit and " - " are allowed')