# less
##### less基本介绍（Leaner Style Sheets）
* 向后兼容的 CSS 扩展语言，LESS是动态的样式表语言，通过简洁明了的语法定义，是编写 CSS的工作变得非常简单。
* 它是一门CSS预处理，扩充了CSS，增加了诸如变量、混合、函数等功能，让 CSS 更易维护、方便制作主题、扩充，Less 也可以运行在 Node 或浏览器端。
总结：让CSS更具维护性、主题性、扩展性！
##### less语法
* 变量（Variables）：@width: 10px;
* 混合（Mixins）：.bordered {...} 	.bordered();
	1. 将一系列属性从一个规则集中引入到另一个规则集方式
* 嵌套（Nesting），可以使用此方法将伪选择器（pseudo-selectors）与混合（mixins）一同使用。
	1. #main { &:after{}}:&表示当前选择器的父级
* @ 规则嵌套和冒泡
	1. @ 规则（例如 @media 或 @supports）
	2. @规则可以与选择器以相同的方式进行嵌套
	3. @ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。
* 运算（Operations）
	1. 算术运算符在加、减或比较之前会进行单位换算。计算的结果以最左侧操作数的单位类型为准。
	2. 如果单位换算无效或失去意义，则忽略单位。
	3. calc() 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值。
* 转义（Escaping）：任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出。@min768: ~"(min-width: 768px)";
* 函数（Functions）
* 命名空间和访问符#bundle() {
  .button {...}
  .citation { ... }
} 			---使用#bundle.button();
* 继承：
```
.animation {
  transition: all .3s ease-out;
  .hide {
    transform:scale(0);
  }
}
```
	1. #main { &:extend(.animation); }
	2. #main { &:extend(.animation .hide); }
	3. #wrap:extend(.animation all) {}	---继承全部
* 其他：
	1. 定义多个变量：less会从当前作用域中从下往上搜索，这个行为类似于css的定义：始终使用最后定义的属性值！
	2. .sugus{} 与 .sugus(){}区别：.sugus自己也会生成 .sugus() 只是定义规则
* [less语法详解](https://blog.csdn.net/weixin_44198965/article/details/90240858)
* [less简单语法介绍](https://blog.csdn.net/bbsyi/article/details/81475860)

# less、sass、stylus三者的区别是什么？
##### 三者都是CSS的预处理器，无需考虑浏览器的兼容性问题，可以在 CSS 中使用变量、简单的程序逻辑、函数等等在编程语言中的一些基本技巧，使CSS 更加简洁，不同的是写法上存在些差异