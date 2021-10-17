from django.core.exceptions import ValidationError

def video_check(value):
    get_format = str(value).split('.')[-1]
    list_of_allowed = ['mp4','avi', 'mpeg4']

    if get_format.lower() in list_of_allowed:
        return get_format

    else:
        raise ValidationError(f'only {list_of_allowed} formats')