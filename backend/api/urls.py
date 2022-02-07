from django.urls import path

from api import views, views_util

app_name = 'api' # app namespace
urlpatterns = [

    ## POST
    path('post/list/', views.ApiPostLV.as_view(), name='post_list'),
    path('post/<int:pk>/', views.ApiPostDV.as_view(), name='post_detail'),
    path('tag/cloud/', views.ApiTagCloudLV.as_view(), name='tag_cloud'),

    ## AUTH
    path('login/', views.ApiLoginView.as_view(), name='login'),
    path('register/', views.ApiRegisterView.as_view(), name='register'),
    path('logout/', views.ApiLogoutView.as_view(), name='logout'),
    path('pwdchg/', views.ApiPwdchgView.as_view(), name='pwdchg'),
    path('me/', views.ApiMeView.as_view(), name='me'),

    ## CRUD
    path('post/create/', views.ApiPostCV.as_view(), name='post_create'),
    path('post/<int:pk>/update/', views.ApiPostUV.as_view(), name='post_update'),
    path('post/<int:pk>/delete/', views.ApiPostDelV.as_view(), name='post_delete'),

    ## SLACK
    # path('slack/post/create/', views_util.post_to_slack, name='slack_post_create'),
]