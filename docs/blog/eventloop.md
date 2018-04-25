# js中event loop机制的理解

event loop 事件循环机制是js中一个相当重要的概念，event loop本质上执行一组任务队列 task queue ，而这一组task queue就认为是macrotask，event loop执行的顺序是：

1.将第一个任务加到任务队列macrotask queue

2.如果任务为空，直接执行microtask队列里

3.如果任务不为空，执行这个macrotask

4.如果这个macrotask中还有microtask queue的话，执行microtask

5.将任务加到microtask中，执行


:::tip
macrotasks: setTimeout setInterval setImmediate I/O UI渲染

microtasks: Promise process.nextTick Object.observe MutationObserver
:::

-[具体机制参考](https://github.com/ccforward/cc/issues/48)
