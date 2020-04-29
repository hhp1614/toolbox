# 工具箱

> 需要全局安装 pm2

```shell script
yarn global add pm2
# or
npm i -g pm2
```

## 开始

在当前目录运行

```shell script
pm2 start dist/app.js
```

然后浏览器访问：http://localhost:9000

## 停止

```shell script
pm2 stop app
```
