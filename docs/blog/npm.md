# npm使用的几个技巧

## 删除文件

想删除node_modules文件夹,有时候会提示需要administrator权限，但是物理上给文件夹管理员权限不仅不容易成功，
而且操作繁琐，其实google了一下，发现rimraf指令来删除文件夹就好操作多了

```
  npm install rimraf -g   // 全局安装rimraf

  rimraf node_modules    // 使用rimraf删除对应的node_modules文件夹
```

## 清楚缓存

npm安装依赖时，有时会失败，出现这样的问题

::: danger

NPM ERR！Please try running this command again as root/Administrator.

:::

然后安装依赖就会失败

```
  npm cache clean -f  // 强制清除缓存

  npm install         // 安装全部依赖
```
清除缓存，然后再安装就可以解决问题
