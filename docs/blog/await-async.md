
# es7 中的await/async

在es2017中着重探讨了await/async 以及Decorator 装饰者模式,
async异步函数可以看成是generator函数的语法糖(阮一峰老师语)

摘录的基本准则:
1. async 表示这是一个async函数，await只能用在这个函数里面。
2. await 表示在这里等待promise返回结果了，再继续执行。
3. await 后面跟着的应该是一个promise对象
- [摘录出处](https://cnodejs.org/topic/5640b80d3a6aa72c5e0030b6)

例子如下:
```
var sleep = function (time) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve();
        }, time);
    })
};

var start = async function () {

    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();
```

待续to be continue