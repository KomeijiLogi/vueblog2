# 图片防盗链以及不同源的数据访问解决方案

## 图片防盗链

图片防盗链技术应用很广泛，其中一种方案就是验证请求request header 中host与Referer的一致性
如果不一致，会返回403 或者返回一张替代的图片，比如百度就会返回一张希望工程的图，
另一种方案就是写进cache里，如果通过官方客户端访问会有对应的cache，而通过第三方的访问由于浏览器中
没有对应cache，缺乏必要的信息，就不会返回200，而会返回403，知乎就是这么操作的

解决方案是使用 https://images.weserv.nl/这个网址的功能来间接访问图片
具体方案为将url重新替换成上面连接
```
return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
```

## 不同源的数据访问

1.jsonp 这个需要后台提供回调函数，是需要前后端配合，而且只支持get操作，
如果开发的是第三方的话，这个方案基本可以不考虑

2.CORS 这套方案对老旧浏览器支持率不高，根据维基百科相关词条介绍，
可以理解为jsonp的现代版，支持更多操作，不在仅仅是get一种操作

3.服务器代理，通过在服务器编程，实现接口代理，将程序访问api通过服务器转成外网地址的api，
比如说前端ajax访问个api，这个api在服务器中代理为https://xxxxx.xxxx.com/api4/ 那么实际上访问的就是代理的地址，
这样就可以不跨域进行数据的访问

4. iframe 限制的跨域数据访问

## vue开发下的跨域访问

1. 可以通过nginx服务器代理

2. vue-cli提供了proxyTable，实际上就是将访问的接口进行代理，代理到真正的接口上

for example:

```
proxyTable: {
  '/list': {
    target: 'http://api.xxxxxxxx.com',
    pathRewrite: {
      '^/list': '/list'
    }
  }
}
```



