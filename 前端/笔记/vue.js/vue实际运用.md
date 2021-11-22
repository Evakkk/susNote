# 使用到的

### watch

在Vue中，用watch来响应数据的变化

```html
 <input type="text" v-model="userName"/>  
```

```js
#第一种
//监听   当userName值发生变化时触发
watch: {
	userName (newName, oldName) {
		console.log(newName)
	}
}
//第一次绑定不会立即执行，当值改变时才执行

#第二种
watch:{
    userName:{
        handler(newName,oldName){
            console.log(newName)
        },
        immediate: true
    }
}

#第三种
//当需要监听对象改变时，设置deep为true
watch: {
	cityName: {
		handler(newName, oldName) {
			console.log(newName)
		},
		immediate: true,
		deep: true
	}
}
//此时会给cityName的所有属性都加上监听函数
//如果只是想给对象的某个属性监听
watch: {
	'cityName.name': {
		handler(newName, oldName) {
			console.log(newName)
		},
		immediate: true,
		deep: true
	}
}

# 注
1. 数组的变化不需要深度监听
2. 在watch中不要使用箭头函数，因为箭头函数中的this是指向当前作用域

# watch computed 区别
数据变化响应，执行异步操作，高性能消耗，用watch
初始化、数据改变时 执行 computed
```

### created、mounted

**created:**在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

**mounted:**在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

其实两者比较好理解，通常created使用的次数多，而mounted通常是在一些插件的使用或者组件的使用中进行操作，比如插件chart.js的使用: var ctx = document.getElementById(ID); 通常会有这一步，而如果你写入组件中，你会发现在created中无法对chart进行一些初始化配置，一定要等这个html渲染完后才可以进行，那么mounted就是不二之选。下面看一个例子（用组件）。

```vue
Vue.component("demo1",{
        data:function(){
            return {
                name:"",
                age:"",
                city:""
            }
        },
        template:"<ul><li id='name'>{{name}}</li><li>{{age}}</li><li>{{city}}</li></ul>",
        created:function(){
            this.name="唐浩益"
            this.age = "12"
            this.city ="杭州"
            var x = document.getElementById("name")//第一个命令台错误
            console.log(x.innerHTML);
        },
        mounted:function(){
            var x = document.getElementById("name")//第二个命令台输出的结果
            console.log(x.innerHTML);
        }
    });
    var vm = new Vue({
        el:"#example1"
    })
```


可以看到输出如下：

![image-20211026141421301](../../../../../2021/record/image/image-20211026141421301.png)

可以看到都在created赋予初始值的情况下成功渲染出来了。
但是同时看console台如下：

![image-20211026141430850](../../../../../2021/record/image/image-20211026141430850.png)

可以看到第一个报了错，实际是因为找不到id，getElementById(ID) 并没有找到元素，原因如下：
在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素
而在mounted中，由于此时html已经渲染出来了，所以可以直接操作dom节点，故输出了结果“唐浩益”。


