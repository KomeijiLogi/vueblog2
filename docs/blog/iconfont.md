# iconfont的使用

iconfont 或者icomoon都是小图标的解决方案，这比单一引入图片更加高效，便于管理，并且可以减少不必要的流量消耗
其中iconfont是阿里提供的矢量图标库，根据demo上学习，一组iconfont包括 .eot .svg .ttf .woff 四种字体格式+ 一个 iconfont.css

当然同样的还有iconmoon，使用的方法是相同的

一个遇到的坑： 当项目使用的是less或者sass的时候，注意应该将iconfont.css转换成对应的less或者sass文件，
否则vue项目中会因为既有less又有css而报错 ,报错日志如下:

:::danger
./node_modules/_css-loader@0.28.7@css-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-02c3df16","scoped":true,"hasInlineConfig":false}!
./node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./src/common/footer.vue Module not found:
Error: Can't resolve '../icomoon.eot?r30znd' in 'D:/Users/Administrator/WebstormProjects/veshop/src/common'
:::

这其实是由于iconfont.css与所用的less或者sass文件不统一导致的，解决方案是将iconfont.css改成对应的less或者sass文件就行

:::tip
文件不统一导致程序不知道用css-loader还是less-loader去解析文件引起以上问题
:::