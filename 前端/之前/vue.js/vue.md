# vue.js
##### vue介绍
* Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：
```
1. vue是JavaScript框架

2. 简化Dom操作

3. 响应式数据驱动

4. https://cn.vuejs.org
```
##### vue核心
* 数据驱动（mvvm模型，只要改变model的数据，视图层就会自动更新）
* 视图组件： 把整一个网页的拆分成一个个区块，每个区块我们可以看作成一个组件。网页由多个组件拼接或者嵌套组成。
##### el挂载点、data元素对象
* el挂载点
```
-----html
<div id="mes">
	{{ message }}
</div>

-----js
var fir=new vue({
	el: "#mes",
	data:{
		message:"显示此内容"
	}
})
```

* data元素对象
```
data:{
	message:"显示此内容";
	student:{
		name: "林",
		sex: "女"
	}，
	school:["闽师","厦大","福大"]
}


------html
{{ message}}
{{ student.name}}
{{ school[0] }}
```

##### 本地应用
* 用vue开发网页效果

* vue指令
```
1. 内容绑定、事件绑定
	v-text、v-html、v-on

2. 显示切换、属性绑定
	v-show、v-if、v-bind

3. 列表循环、表单元素绑定
	v-for、v-on（补充）、v-model
```

* 详解
   1. v-text	设置标签文本值
```
1. 全部替换h2里的内容
	-----html
	<div id="mes">
		<h2 v-text="message+'!'"></h2>
	</div>

	-----js
	var fir=new vue({
		el: "#mes",
		data:{
			message:"显示此内容"
		}
	})

2. 部分替换h2里的内容
	-----html
	<div id="mes">
		<h2> 深圳{{message+"!"}} </h2>
	</div>

	-----js
	var fir=new vue({
		el: "#mes",
		data:{
			message:"显示此内容"
		}
	})

```

* v-on		为元素绑定事件
```
	-----html
	<div id="mes">
		<h2 v-on:click="方法">随便 </h2>
		<h2 @click="方法">随便 </h2>

		<h2 v-on:mouseenter="doIt">随便 </h2>
		
	</div>
	-----js
	var fir=new vue({
		el: "#mes",
		data:{
			food:"西兰花"
		},
		methods:{
			doIt:function(){
				alert(this.food);
				this.food+="追加";
			}
		}
	})
```

* v-show		根据表达值的真假，切换元素的显示和隐藏（操纵css样式）（本质 切换元素的display）
```
	-----html
	<div id="mes">
		<img src="" v-show="true">
		<img src="" v-show="isShow">
		<img src="" v-show="age>18">		---表达式，解析为布尔值
	</div>

	-----js
	var fir=new vue({
		el: "#mes",
		data:{
			isShow:true,
			age:16
		}
	})
```

* v-if		根据表达值的真假，切换元素的显示和隐藏（操纵dom元素）（本质 直接从结构中添加删除）
```
	-----html
	<div id="mes">
		<p src="" v-if="true">
		<p src="" v-if="isShow">
		<p src="" v-if="表达式">		---表达式，解析为布尔值
	</div>

	-----js
	var fir=new vue({
		el: "#mes",
		data:{
			isShow:true,
			age:16
		}
		methods:{
			toggleIsShow:function){
				this.isShow = !this.isShow
			}
		}
	})
```

* v-show和v-if区别
```
	1. v-show	操纵css样式（本质 切换元素的display）

	2. v-if		操纵dom元素（本质 直接从结构中添加移除）

频繁切换的元素使用 v-show
```

* v-bind		设置元素的属性
```
-----html
	<img v-bind:src="imgSrc">
	<img v-bind:class="isActive?'active':''">
	<img v-bind:class="{active:isActive}">
	<img :src="imgSrc">
	

-----js
	var fir=new vue({
		el: "#mes",
		data:{
			imgSrc:"",
			isActive:false
		}
	})
```

* v-for		根据数据生成列表结构
```
-----html
	<div id="app">
		<ul>
			<li v-for="item in arr">
				{{item}}
			</li>

			或者

			<li v-for="(item,index) in arr">
				{{index}}{{item}}
			</li>
		</ul>
	</div>

-----js
	var app=new vue({
		el: "#app",
		data:{
			arr:[1,2,3,4,5]
		}
	})
```

* v-on补充		传递自定义参数，事件修饰符
```
	<h2 @click="doIt(p1,p2)">随便 </h2>
	<input type="text"	@keyup.enter="sayHi" />
```

* v-model		获取和设置表单元素的值（双向数据绑定）
```
-----html
	<div id="app">
		<input type="text" v-model="message" />
	</div>

-----js
	var app=new vue({
		el: "#app",
		data:{
			message:"双向绑定，同步更新"
		}
	})
```
##### 组件
* 在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例	
##### 网络应用
* 网络请求库	axios
		 需导入axios.min.js
```
axios.get(地址?key=value&key2=value2).then（function(){response},funciton(){err}）

axios.post(地址,{key=value&key2=value2}).then(function(){response},funciton(){err}）
```

* axios+vue
```
-----vue
data:{
	joke:"消化"
}

methods:{
	getJock:function(){
		this.joke;					------能获取的到
		var that=this;				------因为在axios里，this指向改变，所以先存起来
		axios.get("....").then
		(function(response){
			this.joke;				------this指向改变，获取不到	
			that.joke;				-----能获取
		},function(err){})
	}
}
```

* this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象
*  ['this指向问题'](https://www.cnblogs.com/pssp/p/5216085.html)
##### 综合应用