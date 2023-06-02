### nginx conf
``` xml

    location /public {
	rewrite ^/(.*) https://cdn.jsdelivr.net/gh/bestK/jsdelivr-cdn/grafana/@8.4.7/public/$1 permanent;
    }
	
	
    location /grafana/public {
	rewrite ^/grafana/public/(.*)$ https://cdn.jsdelivr.net/gh/bestK/jsdelivr-cdn/grafana/@8.4.7/public/$1 permanent;
    }


```

### nginx conf in china 🇨🇳

``` xml

    location /public {
	rewrite ^/(.*) https://jsdelivr.codeqihan.com/gh/bestK/jsdelivr-cdn/grafana/@8.4.7/public/$1 permanent;
 
    }
	
	
    location /grafana/public {
	rewrite ^/grafana/public/(.*)$ https://jsdelivr.codeqihan.com/gh/bestK/jsdelivr-cdn/grafana/@8.4.7/public/$1 permanent;
    }
 
```
 



