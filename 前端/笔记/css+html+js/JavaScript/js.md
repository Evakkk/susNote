

# JavaScript（DOM、BOM）

### 概括
* 关于DOM操作，主要针对于元素的操作，主要有创建、增、删、改、查、属性操作、事件操作。
### DOM（document）--接口
* console.log() // console.div() 返回元素对象，可以看里面的属性和方法
* 获取元素（获取的是一个对象）
```
1. getElementById()			---返回一个对象

2. getElementsByTagName()     ---返回都带有指定标签名的 对象的集合（返回伪数组形式）
	element.getElementsByTagName();
	例： var ol=document.getElementsByTagName('ol');
		var lis=ol[0].getElementsByTagName('li');
	
	---1、2古老用法，不推荐使用

3. getElementsByClassName();	---返回对象的集合		（HTML5新增的）

4. querySelector('选择器');		---根据指定选择器返回第 一 个元素对象   （HTML5新增的）

5. querySelectorAll(); 		---返回指定选择器的所有元素对象集合   	（HTML5新增的）

6. 特殊元素（body..）
	var bodyEle=document.body;			---获取body
	var htmlEle=document.documentElement;		---获取html
```

* 事件三要素 （事件源、事件类型、事件处理程序）

* 操作元素（改变元素内容、属性）	----很多都是可读写
```
1. element.innerText='';
	从起始位置到终止位置内容，但它去除html标签，同时空格和换行也会去掉
2. element.innerHTML='';		----(用的比较多)
	从起始位置到终止位置的全部内容，它包括html标签，同时保留空格和换行

区别：（都是可读写）
	var div = document.querySelector('div');
	div.innerText = '<strong>今天是：</strong> 2019';		---去掉标签空格和换行添加
	div.innerHTML = '<strong>今天是：</strong> 2019';		---保留全部内容添加


3. element.src='';		element.title='';

4. element.disabled=true;

5. 样式属性  
	（1） element.style			---行内样式操作	element.style.backgroundColor='';
	（2） element.className		---类名样式操作 element.className='change';

6. element.getAttribute('属性');

```

* 操作元素（补）	---属性操作
```
获取某个属性值
1. element.属性;						---div.src;
2. element.getAttribute('属性');		---div.getAttribute('src');

设值某个属性值
1. element.属性;						---div.src='';
2. element.setAttribute('属性',值);		---div.setAttribute('src','1.png');

移除属性
1. element.removeAttribute('属性');


区别：
1. element.属性		获取内置属性值（元素本身自带的属性）
2. element.getAttribute('属性') 	主要获得自定义属性，我们程序员自定义的属性



```

* 事件类型 onclick、onfocus、onblur、onmouseover、onmouseout、mousemove

* H5规定自定义属性 data- 开头作为属性名
	自定义 data-index
	因此新增 element.dataset.index
ADZDAGY

* 节点操作（利用节点层级关系）（重要！）	----获取元素（补）
```
获取：
1.父节点：element.parentNode

2.子节点：element.childNodes（会获取元素结点、文本结点（比如换行），所以不推荐使用）
	element.children（推荐使用）
（1）第一个最后一个子节点 ele.firstChild（文本结点、元素结点）
	ele.firstElementChild（元素结点，但有兼容性问题）
（2）没兼容性问题，且获取第一个/最后一个元素结点
	ele.children[0]  ele.children[ele.children.length-1]

3.兄弟节点
（1）ele.nextSibling(元素结点、文本结点)
	ele.previousSibling(元素结点、文本结点)
（2）ele.nextElementSibling（元素结点，有兼容性问题）
	ele.previousElementSibling（元素结点，有兼容性问题）
	可以自己封装一个没有兼容性问题的函数，获取元素结点

4.创建节点、添加节点
	var tagName=document.createElement('tagName');
	node.appendChild(child)		---添加到父元素里的末尾
	node.insertBefore(child,指定元素)		---添加到父元素的指定孩子的前面（ele.children[0]）

5.删除节点
	node.removeChild(child)

6.复制节点
	node.cloneNode();	--如果括号参数为空或false，则是浅拷贝，只克隆复制节点本身，不克隆里面的子节点（即文本结点等）
	node.cloneNode(true);	--深度拷贝


```

* 阻止链接跳转
```
 <a href='javascript:void(0);'>

 <a href='javascript:;'>
```

* 数组里面也可也存对象
```
	var data=[{
		name:'lin',
		score:98
	},{
		name:'wan',
		score:36
	},{
		name:'qu',
		score:88
	}];
```

* 三种动态创建元素的方式
```
1. document.write('<div>123</div>');	
	---文档流执行完毕，则它会导致页面全部重绘（重新绘制，即只剩div了）

2. ele.innerHTML('<div>123</div>');		

3. var cdiv=document.createElement('div');		
	ele.appendChild(cdiv);

2、3区别
	(1).拼接字符串
	for(100){
		par.innerHTML += '<a href='#'>百度</a>';
	}
		---比较耗时间3s

	(2).结构更清晰
	for(100){
		var a=document.createElement('a');
		par.appendChild(a);
	}
		---快很多 26ms
	
	(3).  1的改进采用数组，最后加入
	var arr = [];
	for(100){
		arr.push('<a href='#'>百度</a>');
	}
	par.innerHTML=arr.join('');		
		---效率最高，6ms
	
```
### DOM（补） 事件高级
* 注册事件（绑定事件）
```
两种方式：

1.传统注册方式：btn.onclick=function(){}
	特点：注册事件的唯一性，同一个元素同一个事件只能设置一个处理函数（后面的会覆盖前面的）

2.方法监听注册方式：addEventListener()	---推荐使用，不过有兼容性问题
	按注册顺序依次执行
	btn.addEventListener('click',function{
	})
```

* 删除事件（解绑事件）
```
1.传统注册方式： btn.onclick=null;

2.方法监听注册方式：
btn.addEventListener('click',fn);
btn.removeEventListener('click',fn)
		
```

* DOM事件流
	事件发生时会在元素节点之间按照特点的顺序传播，这个传播过程即DOM事件流
```
1.分三个阶段：↓捕获阶段、目标阶段、↑冒泡阶段

2.js代码只能执行捕获或者冒泡其中的一个阶段

3.addEventListener的第三个参数是true，则处于捕获阶段

4.onclick方式、addEventListener的第三个参数是false或省略，则处于冒泡阶段

5.有些事件是没有冒泡的。
```

* 事件对象
```
div.onclick=function(event){}			---(或者写e)

1.event就是一个事件对象

2.事件对象只有了有了时间才会存在，它是系统给我们自动创建的，不需要我们传递参数

3.事件对象是我们时间的一系列相关数据的集合（例：鼠标点击的相关信息，鼠标点击坐标等/键盘时间，用户按下了哪个按键等信息）

4.有兼容性问题（ie678  window.event）	---兼容性处理 e=e||window.event



事件对象的属性和方法：
	1.e.target	返回的是触发事件的对象（元素）		---ul>li 可以指向点的哪个li
		（1）与this的区别	---this返回的是绑定事件的对象（元素）
				ul li 给ul绑定 但是点击li （this指向ul，e.target指向点击的那个li）

	2.e.type  返回事件类型（返回click、mouseover等）

	3.e.preventDefault()	阻止默认行为（让链接不跳转，让提交按钮不提交）

	4.阻止事件冒泡的两种方式：
		（1）e.stopPropagation()方法		--推荐使用
		（2）e.cancelBubble = true;属性		--（ie678）
```

* 事件委托 （事件冒泡带来的好处）
```
原理： 不是每个子节点单独设置事件监听器，而是设置在父节点上，然后利用冒泡原理影响设置每个子节点

ul>li 
点击每个li都弹出 给ul设置监听事件，e.target可以获取点击的对象
```
### BOM
###### window对象是浏览器顶级对象
###### window底下：document、location、navigation、screen、history
###### window是一个全局对象，定义在全局作用域的变量和函数，都会变成window的属性和方法

###### 常见事件
* 窗口加载事件 load
```
window.load=function(){}
或者
window.addEventListener("load",function(){});

当文档完全加载完成会触发该事件
```

* 与load相似	---DomContentLoaded（IE9以上支持）
```
document.addEventListener("DomContentLoaded",function(){});

仅当DOM加载完成，不包括样式表，图片，flash等（元素加载完...）

适用：当页面图片过多时，适用load不合适，需要等很久。
```

* 调整窗口事件   ---resize
```
window.onresize = function(){}
window.addEventListener("resize",function(){});

窗口发生变化触发

注意： 
1.只要窗口大小发生像素变化就会触发该事件
2.常做来完成响应式布局。window.innerWidth 当前窗口宽度
```

* 定时器   ---setTimeout()方法
```
	window.setTimeout(调用函数,[延迟毫秒数]);	--省略时间默认0
	
setTimeout(function(){},1000);

注： 页面中可能有很多定时器，所以经常给定时器起名字 
	var timer1=setTimeout(callback,1000);
	
清除定时器	clearTimeout(timer1);
```

* 定时器  ---setInterval
```
	每隔一段时间调用一次函数
```

* 两个定时器的区别
```
setTimeout			---延时调用一次
setInterval			---每隔延迟时间调用函数（重复调用）


---setTimeout也可以实现重复调用(感觉不好用)
	tim();
	var timer1=null;
	function tim(){
		timer1=setTimeout(tim,1000);
	}
```

* this 指向问题（指向函数调用者！！！）
```
this的指向在函数定义的时候是确定不了的，只有在函数执行的时候才能确定this指向谁，
一般情况下 this的最终指向的是 ---调用它的对象



1.全局作用域的方法--调用者都是window
	function Fn(){
		console.log(this);			//this指向window
	}
	Fn();

2. var han = {
		sayHi:function(){
			console.log(this);		//this指向的是 han这个对象
		}
	}

	---han是对象，sayHi方法需要调用  han.sayHi();

3. 构造函数
	function Fn(){
		console.log(this);			//this指向fun那个实例对象
	}
	var fun = new Fn();				---Fn(); 直接调用？
```

* js的同步和异步
```
	同步任务：都放在主线程上执行，形成一个执行栈。
	异步任务：（通过回调函数实现的）
			1.普通事件： click、resize等
			2.资源加载： load、error等
			3.定时器：setInterval、setInterval等

js执行机制：先执行同步任务，异步任务放入任务队列中。先执行同步任务，再执行异步任务。

注：例如点击事件，若不点击则不放入任务队列中，点击了才放进去执行。



例子：	
	consle.log(1);						异步进程处理
	document.onclick=fn	
	consle.log(2);
	setTimeout(fn,3000);

	先执行输出1；再执行click提交到异步进程处理，若点击放入任务队列，若不点击不放入任务队列；然后执行输出2；然后执行setTimeout提交到异步进程处理，3s后加入到任务队列。

	执行栈完成同步任务后，将任务队列中的任务（取一个）添加到执行栈继续执行。若任务队列中有添加新任务，则继续加入到执行栈。反复循环的过程称做：事件循环（event loop）

	具体图示：js执行机制.png
```

* location对象
```
location.href： 整个url
location.search：参数
location.hash：#后面的部分，锚点链接

方法：		
location.assign();			---重定向
location.replace();			--替换当前页，不记录历史
location.reload();			---重新加载页面
```
* navigator对象：判断是移动端还是pc端等

* history对象
```
	history.forward();		==		history.go(1);
	history.back();		==		history.go(-1);
	history.go(2);	---前进两步

```