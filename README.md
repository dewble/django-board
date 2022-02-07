# django-board
vuetify와 django를 이용한 CRUD 게시판  

# 기능
- 로그인 기능
- 게시글 작성
  - title, tag, tag cloud

# 기술스택
- Django
- Vuetify
- Mariadb (4.0.1)
- gunicorn

# 배포 (nginx + gunicorn)
## gunicorn
### 설치된 패키지 목록 생성 - requirements.txt

```bash
pip freeze > requirements.txt
```

### requirements.txt 으로 패키지 설치

```bash
pip install -r requirements.txt
```

### gunicorn install

```bash
pip install gunicorn
```

### start application
```bash
gunicorn --bind 0.0.0.0:8000 mysite.wsgi:application
```


## nginx
### edit conf
```bash
server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html/dist;
            index  home.html;
        }
        location /api {
            proxy_pass http://127.0.0.1:8000;
        }
        location /admin {
            proxy_pass http://127.0.0.1:8000;
        }
        location /static {
            proxy_pass http://127.0.0.1:8000;
        }
}
```
### start nginx
```
## centos
systemctl start nginx 
## source compile
nginx
## macos
brew services start nginx
```
