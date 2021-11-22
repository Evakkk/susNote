# 前端 css 高级技巧
###### 精灵图
* 当网页图像过多时，服务器会频繁接收和发送请求图片，造成服务器请求压力过大
```
	为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了css精灵技术（也称 CSS Sprites、CSS雪碧）


精灵技术主要针对于 背景图片 使用。就是把多个小背景图片整合到一张大图片中。
```

* 精灵技术使用（主要针对背景图片）
```
 1.移动背景图片位置，此时可以用background-position
 2.移动距离为这个目标图片的x，y坐标。（网页中 x往右为正 y往下为正）
 3.一般是往上往左移动，所以数值一般是负值
```

###### 字体图标
* 字体图标使用场景：主要用于显示网页中通用常用的一些小图标

* 字体图标 iconfont 。展示的图标，本质属于字体。

* 字体图标下载 (一个压缩包)
```
icomoon字库	 http://icomoon.io
阿里iconfont字体 	http://www.iconfont.cn/
```

* 字体图标的使用
```
1.把下载包里面的fonts文件夹放入页面根目录下
2.在css样式中全局声明字体（复制黏黏）
3.从demo.html复制框框出来 font-family:'icomoon'
```

* 字体图标的追加 selection.json


###### css三角做法
```
.box{
	width: 0;
	heght: 0;
	line-height: 0; （为了兼容性，照顾低版本浏览器）
	font-size: 0; （为了兼容性，照顾低版本浏览器）
	border: 50px solid transparent;
	border-top-color: pink;
}

```


###### css 用户界面样式
* 更改用户的鼠标样式 cursor属性
```
值
	default：小白 默认；
	pointer：小手；
	move：移动；
	text：文本；
	not-allowed：禁止；

```

* 表单轮廓 outline
```
	input{
	 	outline: none;
		或者
		outline: 0;
	}

```

* 防止表单域拖拽 resize
```
	textarea{
		resize: none;
	}
```


######  vertical-align 属性应用
* css的vertical-align属性使用场景：经常用于设置图片或者表单（行内块元素）和文字垂直对齐。
 		（baseline（默认。基线）、top、middel（中线）、bottom（底线））
* 只针对于`行内内元素或者行内块元素`有效（如果是块级元素设置背景图片可以用display转换成行内块）

```
	img{
		vertical-align:middle;
	}
	
	<img src="images/ss.jpg" alt=""> 我想要和图片对齐

```

* 解决图片底部默认空白缝隙问题
	bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。（ja j底下是底线 a底下是基线）
```
主要解决方法有两种：
	1.给图片添加 vertical-align:middle|top|bottom;等。（提倡使用）
	2.把图片转换为块级元素 display。
```

###### 溢出的文字省略号显示
* 单行文本溢出显示省略号
```
	/* 1.强制一行内显示文本 */
	white-space: nowrap;		（默认 normal 显示不开自动换行）

	/* 2.超出部分隐藏 */
	overflow: hidden;

	/* 3.文字用省略号替代超出部分 */
	text-overflow: ellipsis;	
```

* 多行文本溢出显示省略号（可以让后台人员做）
	有较大兼容性问题，适合于webkit浏览器或移动端（了解就行 去百度搜）

###### 常见布局技巧
* margin负值的运用
```
多个盒子排列
两个边框重叠（1px+1px=2px）
让margin-left：-1px;


1.让每个盒子marfin往左侧移动-1px正好压住相邻盒子边框
2.鼠标经过某个盒子的时候提高当前盒子的层级即可（如果没有定位则加相对定位（保留位置），如果有定位，则加z-index）

li :hover{
	position: relative;		//没定位情况
	z-index: 1;			//有定位情况
	border:1px solid blue;
}
```

* 文字围绕浮动元素
```
	左边图片，右边文字。不需要设置两个盒子。巧妙的利用文字围绕浮动元素的特性。只要设置左边浮动就可以，浮动的元素不会压住文字。
```

* 行内块元素巧妙运用
	页码连续 可以利用行内块元素本身有间隙来制作。

* css 三角巧妙运用
```
wigth: 0;
height: 0;
border-top: 100px solid transparent;
border-righr: 50px solid blue;
border-bottom: 0 solid transparent;
border-left: 0 solid transparent;

或者 ：
wigth: 0;
height: 0;
border-color: transparent red transparent transparent;
border-stlye: solid;
border-width:100px 8px 0 0;
```

###### css 初始化 （css reset）
* 对一些样式进行初始化设置
```
*{
	margin: 0；
	padding: 0;
}
em,i{
	font-stlye:normal;
}
li{
	list-stlye: none;
}
img{
	border: 0;		//兼容性
	vertical-align: middle;
}
buttton{
	cursor:pointer;
}
清除浮动啥的

等等等等
```

* display和visibility区别

```css
display:none;		//隐藏，并且不分配空间
visibility:hidden;		//虽然隐藏了，但是会为它分配
opacity:0;				//设置透明度，0
```

