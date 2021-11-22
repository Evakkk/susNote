# bootstrap框架
#### 基本
* xs(<768px)、sm(≥768px)、md(≥992px)、lg(≥1200px)
* 后面覆盖前面，也就是说：
	1. 如果只设置xs 后面宽度更大的会按照xs的设置的份数分
	2. 如果只设置lg 前面宽度更小的会堆叠，lg不会生效
* bootstrap有默认padding值15px左右
* 列嵌套最好加个行row 这样可以去掉父级的padding值，而且高度自动与父级一致
* 列偏移 col-md-offset-6		（偏移6份）
* .col-md-push-* (推) 和 .col-md-pull-* （拉）
* 响应式工具
	* hidden-xs（在超小屏下隐藏，其他显示）	visible-xs（在超小屏下显示，其他隐藏）
	* hidden-sm（在小屏下隐藏，其他显示） visible-sm
	* hidden-md（在中屏下隐藏，其他显示） visible-md
	* hidden-lg（在大屏下隐藏，其他显示） visible-lg
#### [bootstrap简单介绍](https://blog.csdn.net/vanliujian/article/details/106226397)
