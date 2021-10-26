from .serializer import like_dislike_serializer
from .models import like_dislike
from rest_framework.response import Response
from rest_framework.views import APIView
from video.models import video
from rest_framework import status


class get_like_dislikes(APIView):
    
    def get(self, request, pk, *args, **kwargs):
        get_video = video.objects.get(id = pk)
        like = get_video.like_video_related.all().filter(is_like = True)
        dislike = get_video.like_video_related.all().filter(is_dislike = True)
        return Response({'like': like.count(), 'dislike': dislike.count()})

class add_remove_like(APIView):

    def patch(self, request, pk, *args, **kwargs):
        user = self.request.user
        get_video = video.objects.get(id = pk)
        like = get_video.like_video_related.all().get(user = user, video = get_video)

        if like.is_like is True and like.is_dislike is False:
            like.is_like = False
            like.save()

        elif like.is_like is False and like.is_dislike is False:
            like.is_like = True
            like.save()

        else:
            like.is_dislike = False
            like.is_like = True
            like.save()             

        return Response(status = status.HTTP_202_ACCEPTED)

class add_remove_dislike(APIView):

    def patch(self, request, pk, *args, **kwargs):
        user = self.request.user
        get_video = video.objects.get(id = pk)
        like = get_video.like_video_related.all().get(user = user, video = get_video)

        if like.is_like is False and like.is_dislike is True:
            like.is_dislike = False
            like.save()

        elif like.is_like is False and like.is_dislike is False:
            like.is_dislike = True
            like.save()

        else:
            like.is_dislike = True
            like.is_like = False
            like.save()             

        return Response(status = status.HTTP_202_ACCEPTED)
