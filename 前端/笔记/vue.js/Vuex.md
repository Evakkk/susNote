# VueX



* 插件

## 1. vuex概念

![image-20201025154637739](../image/image-20201025154637739.png)

![image-20201025154530889](../image/image-20201025154530889.png)

![image-20201025155052624](../image/image-20201025155052624.png)

但上面这个不是响应式的 name改了之后 Vue.component里面this.shareObj.name不会跟着改

![image-20201025155841372](../image/image-20201025155841372.png)

## 2. 单界面状态管理、多界面状态管理

![image-20201025160606703](../image/image-20201025160606703.png)

![image-20201025163848061](../image/image-20201025163848061.png)

```js
题外话：
	<hello-vuex :counter='counter'/>
        前面那个counter 是子组件的属性
        加:是为了绑定后面那个counter值
    <hello-vuex counter='counter'/>
        不加：传给counter的值就是字符串“counter”
```

#### vuex基本使用

`npm install vuex --save`

```js 
//也可以写在main.js，但不好
//建文件夹 store（仓库）  --->index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//安装

const store = new Vuex.Store({
    state:{
        
    },
    mutations:{
        
    },
    actions:{
        
    },
    getters:{
        
    },
    modules:{
        
    }
})//创建实例

export default store//导出
```

```js
//main.js
import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
    el:'#app',
    router,
    store,			//Vue.prototype.$store = store
    render:h => h(App)
})


在其他组件使用
{{$store.state.counter}}

更改：$store.state.counter++ 可以 但是不好，不这样用
//Devtools不好跟踪修改
```

* 修改状态

  ![image-20201025165459956](../image/image-20201025165459956.png)

![image-20201025180950203](../image/image-20201025180950203.png)

## 3.基本使用

![image-20201025180834915](../image/image-20201025180834915.png)

#### state:

* 基本使用
* state单一状态树

![image-20201025182613740](../image/image-20201025182613740.png)

####getters:

* 类似于计算属性

```js
getters:{
    powerCounter(state){
        return state.counter*state.counter 
    }
}

{{$store.getters.powerCounter}}

//getters传值进去
返回一个函数
```



![image-20201025210355696](../image/image-20201025210355696.png)

####mutations：修改状态

![image-20201025211100460](../image/image-20201025211100460.png)

```js
//store/index.js
state:{
    counter:1000
},
 mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }
    },
        
//App.vue
<h2>{{$store.state.counter}}</h2>
addition(){
    this.$store.commit('increment')		
}

```

* mutations传入参数

```js
//store/index.js
mutations:{
        increment(state,count){
            state.counter+=count
        }
},
    
//App.vue
    addcount(count){
        this.$store.commit('increment',count)
    }
```

![image-20201025212041220](../image/image-20201025212041220.png)

* 提交风格

![image-20201025212758359](../image/image-20201025212758359.png)

![image-20201025212823362](../image/image-20201025212823362.png)

#### vuex数据响应式原理

* 在state中一开始就定义好的 会加入到响应式系统中（观察者模式）

![image-20201025215852332](../image/image-20201025215852332.png)

![image-20201025220247297](../image/image-20201025220247297.png)

* mutation的类型常量

![image-20201025222234208](../image/image-20201025222234208.png)

#### actions:

![image-20201025235953015](../image/image-20201025235953015.png)

![image-20201025230924379](../image/image-20201025230924379.png)

```js
//store/index.js
actions:{
    aupdateinfo(context){		//context在这里相当于store
        setTimeout(()=>{
            context.commit('updateinfo')
        },1000)
        
    }
}

//App.vue
updateinfo(){
    this.$store.dispatch('aupdateinfo')
}
```

* 回调函数，告诉更改完成

![image-20201025234552218](../image/image-20201025234552218.png)

更好的方式 ， promise

![image-20201025235330367](../image/image-20201025235330367.png)



#### modules：

![image-20201026083526536](../image/image-20201026083526536.png)

![image-20201026083831043](../image/image-20201026083831043.png)

​      modules里state的内容被放进了整个state中，mutations、getters都跟之前用法一样，（可能是链式查找？）

* getters

![image-20201026084601968](../image/image-20201026084601968.png)

* actions

![image-20201026084949429](../image/image-20201026084949429.png)

![image-20201026091406772](../image/image-20201026091406772.png)