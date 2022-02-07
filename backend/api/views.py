from django.contrib.auth import login, get_user_model, logout, update_session_auth_hash, get_user
from django.contrib.auth.views import LoginView, LogoutView, PasswordChangeView
from django.db.models import Count
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.generic.detail import BaseDetailView
from django.views.generic.edit import BaseCreateView, BaseUpdateView
from django.views.generic.list import BaseListView
from taggit.models import Tag

from accounts.forms import MyUserCreationForm
from accounts.views import MyLoginRequiredMixin, OwnerOnlyMixin
from api.views_util import obj_to_post, prev_next_post, make_tag_cloud

from api.models import Post
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

'''
data = 클라이언트에 보낼 데이터 인자를 대입
safe = 우리가 보내려고 하는 데이터(postlist)가 딕셔너리 일경우 트루 list일 경우 false 
status = 응답코드
'''


@method_decorator(ensure_csrf_cookie, name='dispatch')
class ApiPostLV(BaseListView):
    # model = Post

    def get_queryset(self):
        tagname = self.request.GET.get('tagname')
        if tagname:
            qs = Post.objects.filter(tags__name=tagname)  # POST table에서 tags 칼럼중 name이 tagname인 칼럼을 가져오라
        else:
            qs = Post.objects.all()  ## name이 해당하지 않을 경우 전체를 불러오라
        return qs

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # 쿼리셋에 있는 각 오브젝트들을 ojb to post 로넘겨서 직렬화 수행
        postList = [obj_to_post(obj) for obj in qs]

        return JsonResponse(data=postList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        # clinet데이터를 json데이터에 넣어야한다.
        # json data는 post 데이터에 넣고 있다
        post['prev'], post['next'] = prev_next_post(obj)
        return JsonResponse(data=post, safe=True, status=200)


class ApiTagCloudLV(BaseListView):
    # model = Tag
    queryset = Tag.objects.annotate(count=Count('post'))

    # def get_queryset(self):
    #     return Tag.objects.all()

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        # postList = [obj_to_post(obj) for obj in qs]
        # tagList = []
        # for obj in qs:
        #     tagList.append({
        #         'name': obj.name,
        #         # 'count': obj.name,
        #         # 'weight': obj.name,
        #     })
        tagList = make_tag_cloud(qs)
        return JsonResponse(data=tagList, safe=False, status=200)


class ApiLoginView(LoginView):
    def form_valid(self, form):
        """Security check complete. Log the user in."""
        user = form.get_user()
        login(self.request, form.get_user())
        # userDict = vars(user)
        # del userDict['_state'], userDict['password']
        userDict = {
            'id': user.id,
            'username': user.username
        }
        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiRegisterView(BaseCreateView):
    # model = get_user_model()
    # fields = '__all__'
    form_class = MyUserCreationForm

    def form_valid(self, form):
        self.object = form.save()
        userDict = {
            'id': self.object.id,
            'username': self.object.username,
        }
        return JsonResponse(data=userDict, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiLogoutView(LogoutView):
    @method_decorator(never_cache)
    def dispatch(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse(data={}, safe=True, status=200)


class ApiPwdchgView(PasswordChangeView):
    def form_valid(self, form):
        form.save()
        # Updating the password logs out all other sessions for the user
        # except the current one.
        update_session_auth_hash(self.request, form.user)
        return JsonResponse(data={}, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)

class ApiMeView(View):
    def get(self, request, *args, **kawrgs):

        user = get_user(request)
        if user.is_authenticated:
            userDict = {
                'id': user.id,
                'username': user.username
            }
        else:
            userDict = {
                'username': 'Anonymous',
            }
        return JsonResponse(data=userDict, safe=True, status=200)


class ApiPostCV(MyLoginRequiredMixin, BaseCreateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        form.instance.owner = self.request.user
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=201)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiPostUV(OwnerOnlyMixin, BaseUpdateView):
    model = Post
    fields = '__all__'

    def form_valid(self, form):
        # form.instance.owner = self.request.user
        self.object = form.save()
        post = obj_to_post(self.object)
        return JsonResponse(data=post, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)


class ApiPostDelV(OwnerOnlyMixin, BaseDetailView):
    model = Post
    def delete(self, request, *args, **kwargs):
        """
        Call the delete() method on the fetched object and then redirect to the
        success URL.
        """
        self.object = self.get_object()
        self.object.delete()
        return JsonResponse(data={}, safe=True, status=204)


