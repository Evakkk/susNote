### 创建项目中的问题

```js
#main.js	
#axios 需要写在new Vue前面
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element.js'
import axios from 'axios'; // 引入axios

Vue.config.productionTip = false

Vue.prototype.test = "123"
Vue.prototype.$http = axios //把axios注入到vue原型中方便以后调用
Vue.prototype.$http = axios.create({  //创建实例配置基本参数
    timeout: 10000,//请求超时时间
    headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

// 根基当前运行的环境设置请求地址
axios.defaults.baseURL = ''		//原项目中有写好的 所以我这里只要填空

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

* 写多个页面

```js
因为vue只有单入口，所以加入到别的项目中想要多入口就不太行

解决办法：
#App.vue
<template>
  <div id="app">
    <Home />	
  </div>
</template>

不同的页面更改不同的组件，写新页面的时候新建new.vue文件 <Home />改成 <new />重新打包发布即可

```

