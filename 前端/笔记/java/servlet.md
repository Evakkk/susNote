## tomcat

* 端口配置

```js
通过配置 tomcat 目录下 conf 中的 server.xml 文件修改 Tomcat 端口号

<Connector port="8080" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443" />

```

## web项目

`在 web-inf/web.xml 中配置默认访问启始页面。`

* page指令：通过设置内部的多个属性定义整个页面的属性

  ​	<%@ page 属性 1="属性值"  属性 2="属性值 1,属性值 2" %>

* HTML 注释在 JSP 文件被编译后保留，JSP 注释则被丢弃。重要信息的注释

不要使用 HTML 注释。

![image-20201027135418832](../image/image-20201027135418832.png)

### jsp

#### 1. request

![image-20201027145630465](../image/image-20201027145630465.png)

#### 2. 乱码问题

* **表单以** **POST** **方法提交**

![image-20201027145937009](../image/image-20201027145937009.png)

* **表单以** **GET** **方法提交**

以 GET 方式提交的数据作为查询字符串被附加到 URL 的末端发送到服务器。

![image-20201027150052227](../image/image-20201027150052227.png)

#### 3. response

![image-20201027150354480](../image/image-20201027150354480.png)

* 转发和重定向

  ```js
  问题：能否在 welcome.jsp 页面获得登陆用户名？如何解决？
  解决：使用转发取代重定向实现页面跳转。
  ```

  

![image-20201027151350835](../image/image-20201027151350835.png)

#### 4. session

![image-20201027151957443](../image/image-20201027151957443.png)

![image-20201027152009917](../image/image-20201027152009917.png)

* 使用

![image-20201027153817261](../image/image-20201027153817261.png)

#### 5. include指令

* 页面重用：静态模型（html）使用的是 iframe ，jsp中使用include

  ​	<%@ include file=*"**文件路径**"* %>

#### 6. application

​	类似于系统的“全局变量”，用于在同一个服务器内的所有用于之间的数据共享，

​	对于整个 web 服务器，application 对象有且只有一个实例。

![image-20201027155718055](../image/image-20201027155718055.png)

![image-20201027160429440](../image/image-20201027160429440.png)

![image-20201027160512448](../image/image-20201027160512448.png)

#### 7. pageContext

​	提供了在 JSP 运行时访问和其相关的环境信息的能力。通过 pageContext 对象可

​	以访问和当前 JSP 页面相关联的所有作用域，以及页面属性。

![image-20201027162931131](../image/image-20201027162931131.png)

#### 8. **JSP** **内置对象的作用域**

​	我们保存在内置对象中的信息，它的作用域是不同的。

​	JSP 提供了四种作用域：page 作用域、request 作用域、session 作用域、application

作用域。

###### page作用域

指单一 JSP 页面范围，page 作用域内的对象只能在创建该对象的页面中访问。

```js
//testOne.jsp
<%
 String name = "page";
pageContext.setAttribute("name",name);
%>
testOne:<%=pageContext.getAttribute("name") %>
<%
	pageContext.include("testTwo.jsp");
%>
    
//testTwo.jsp
testTwo:<%=pageContext.getAttribute("name") %>
```

![image-20201027163642439](../image/image-20201027163642439.png)

###### request作用域

​	request 作用域内的对象则是与客户端的请求绑定在一起。request 作用域内的对象在页面转发或者包含中同样有效，即**调用RequestDispatcher 的 forward()方法**转向的页面或者**调用 include()方法**包含的页面，都可以访问 request 作用域内的对象。

###### session作用域

​	JSP 容器为每一次会话创建一个 session 对象。在会话有效期内，只要将数据绑定到 session 中，则该数据可以被本次会话的其他资源访问。

![image-20201027164006195](../image/image-20201027164006195.png)

![image-20201027164013117](../image/image-20201027164013117.png)

###### application作用域

​	application 对象的作用域是整个 web 应用程序。当服务器启动后，就会为 web程序创建一个 application 对象，被所有用户共享，它的作用域最大。

#### 9. cookie

​	Cookie 是 Web 服务器向用户的浏览器发送的一段 ASCII 码文本。

​	主要用于：特定对象追踪，统计网页浏览次数，记录用户登录信息，推荐个性化服务等等。不要将敏感信息保存在 cookie 中。

![image-20201027164415543](../image/image-20201027164415543.png)

![image-20201027164555277](../image/image-20201027164555277.png)

![image-20201027164615443](../image/image-20201027164615443.png)

#### 10. session cookie 比较

![image-20201027164846209](../image/image-20201027164846209.png)

### 数据源配置

#### 1. JNDI

![image-20201027170042547](../image/image-20201027170042547.png)

* **如何实现在 Tomcat 中发布一条信息供所有的 Web 应用程序使用？**

​               ![image-20201027170110077](../image/image-20201027170110077.png)

​           ![image-20201027170120207](../image/image-20201027170120207.png)

#### 2.数据库连接池

![image-20201027170424973](../image/image-20201027170424973.png)

![image-20201027170307359](../image/image-20201027170307359.png)

![image-20201027170321808](../image/image-20201027170321808.png)

![image-20201027170336879](../image/image-20201027170336879.png)

### servlet

Servlet 就是运行在服务器端的 Java 程序。

![image-20201027171131255](../image/image-20201027171131255.png)

#### 1. **Servlet** **生命周期** 

* **加载和实例化**
* **初始化**
* **服务**
* **销毁**

#### 2. servlet 编译和部署

![image-20201027190334211](../image/image-20201027190334211.png)

![image-20201027175153940](../image/image-20201027175153940.png)

![image-20201027193314049](../image/image-20201027193314049.png)



* 创建servlet

* 部署servlet

  在 web.xml 中，添加对 Servlet 的配置。

  ![image-20201027174658101](../image/image-20201027174658101.png)

![image-20201027174853600](../image/image-20201027174853600.png)

![image-20201027174903707](../image/image-20201027174903707.png)

* 编写 JSP 访问 Servlet

![image-20201027175128442](../image/image-20201027175128442.png)

![image-20201027193729406](../image/image-20201027193729406.png)

```js
  /  代表根目录
 ./  代表当前路径
```

![image-20201027194200568](../image/image-20201027194200568.png)

![image-20201027200256386](../image/image-20201027200256386.png)

![](../image/image-20201027202655968.png)

![image-20201027202839286](../image/image-20201027202839286.png)

#### 3. 获得 Servlet 初始化参数

![image-20201027175800339](../image/image-20201027175800339.png)

![image-20201027175814714](../image/image-20201027175814714.png)

#### 4. servlet 和 jsp区别

![image-20201027180015459](../image/image-20201027180015459.png)

![image-20201027180050315](../image/image-20201027180050315.png)

### 过滤器 filter

![image-20201027190438878](../image/image-20201027190438878.png)

![image-20201027190637094](../image/image-20201027190637094.png)