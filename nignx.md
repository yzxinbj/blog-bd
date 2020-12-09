# 跨域转发配置
```
location /cfc/ {
	add_header "Access-Control-Allow-Origin" "$http_origin";
	add_header "Access-Control-Allow-Credentials" "true";
	add_header "Access-Control-Allow-Methods" "GET, POST, OPTIONS, DELETE, PATCH, PUT, HEAD";
	add_header "Access-Control-Allow-Headers" "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type";
    proxy_pass http://fk379g2sy8tv1.cfc-execute.bj.baidubce.com/;
}
```