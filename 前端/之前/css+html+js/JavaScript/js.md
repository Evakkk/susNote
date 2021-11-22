# JavaScript��DOM��BOM��
### ����
* ����DOM��������Ҫ�����Ԫ�صĲ�������Ҫ�д���������ɾ���ġ��顢���Բ������¼�������
### DOM��document��--�ӿ�
* console.log() // console.div() ����Ԫ�ض��󣬿��Կ���������Ժͷ���
* ��ȡԪ�أ���ȡ����һ������
```
1. getElementById()			---����һ������

2. getElementsByTagName()     ---���ض�����ָ����ǩ���� ����ļ��ϣ�����α������ʽ��
	element.getElementsByTagName();
	���� var ol=document.getElementsByTagName('ol');
		var lis=ol[0].getElementsByTagName('li');
	
	---1��2�����÷������Ƽ�ʹ��

3. getElementsByClassName();	---���ض���ļ���		��HTML5�����ģ�

4. querySelector('ѡ����');		---����ָ��ѡ�������ص� һ ��Ԫ�ض���   ��HTML5�����ģ�

5. querySelectorAll(); 		---����ָ��ѡ����������Ԫ�ض��󼯺�   	��HTML5�����ģ�

6. ����Ԫ�أ�body..��
	var bodyEle=document.body;			---��ȡbody
	var htmlEle=document.documentElement;		---��ȡhtml
```

* �¼���Ҫ�� ���¼�Դ���¼����͡��¼��������

* ����Ԫ�أ��ı�Ԫ�����ݡ����ԣ�	----�ܶ඼�ǿɶ�д
```
1. element.innerText='';
	����ʼλ�õ���ֹλ�����ݣ�����ȥ��html��ǩ��ͬʱ�ո�ͻ���Ҳ��ȥ��
2. element.innerHTML='';		----(�õıȽ϶�)
	����ʼλ�õ���ֹλ�õ�ȫ�����ݣ�������html��ǩ��ͬʱ�����ո�ͻ���

���𣺣����ǿɶ�д��
	var div = document.querySelector('div');
	div.innerText = '<strong>�����ǣ�</strong> 2019';		---ȥ����ǩ�ո�ͻ������
	div.innerHTML = '<strong>�����ǣ�</strong> 2019';		---����ȫ���������


3. element.src='';		element.title='';

4. element.disabled=true;

5. ��ʽ����  
	��1�� element.style			---������ʽ����	element.style.backgroundColor='';
	��2�� element.className		---������ʽ���� element.className='change';

6. element.getAttribute('����');

```

* ����Ԫ�أ�����	---���Բ���
```
��ȡĳ������ֵ
1. element.����;						---div.src;
2. element.getAttribute('����');		---div.getAttribute('src');

��ֵĳ������ֵ
1. element.����;						---div.src='';
2. element.setAttribute('����',ֵ);		---div.setAttribute('src','1.png');

�Ƴ�����
1. element.removeAttribute('����');


����
1. element.����		��ȡ��������ֵ��Ԫ�ر����Դ������ԣ�
2. element.getAttribute('����') 	��Ҫ����Զ������ԣ����ǳ���Ա�Զ��������



``` 

* �¼����� onclick��onfocus��onblur��onmouseover��onmouseout��mousemove

* H5�涨�Զ������� data- ��ͷ��Ϊ������
	�Զ��� data-index
	������� element.dataset.index
ADZDAGY

* �ڵ���������ýڵ�㼶��ϵ������Ҫ����	----��ȡԪ�أ�����
```
��ȡ��
1.���ڵ㣺element.parentNode

2.�ӽڵ㣺element.childNodes�����ȡԪ�ؽ�㡢�ı���㣨���绻�У������Բ��Ƽ�ʹ�ã�
	element.children���Ƽ�ʹ�ã�
��1����һ�����һ���ӽڵ� ele.firstChild���ı���㡢Ԫ�ؽ�㣩
	ele.firstElementChild��Ԫ�ؽ�㣬���м��������⣩
��2��û���������⣬�һ�ȡ��һ��/���һ��Ԫ�ؽ��
	ele.children[0]  ele.children[ele.children.length-1]

3.�ֵܽڵ�
��1��ele.nextSibling(Ԫ�ؽ�㡢�ı����)
	ele.previousSibling(Ԫ�ؽ�㡢�ı����)
��2��ele.nextElementSibling��Ԫ�ؽ�㣬�м��������⣩
	ele.previousElementSibling��Ԫ�ؽ�㣬�м��������⣩
	�����Լ���װһ��û�м���������ĺ�������ȡԪ�ؽ��

4.�����ڵ㡢��ӽڵ�
	var tagName=document.createElement('tagName');
	node.appendChild(child)		---��ӵ���Ԫ�����ĩβ
	node.insertBefore(child,ָ��Ԫ��)		---��ӵ���Ԫ�ص�ָ�����ӵ�ǰ�棨ele.children[0]��

5.ɾ���ڵ�
	node.removeChild(child)

6.���ƽڵ�
	node.cloneNode();	--������Ų���Ϊ�ջ�false������ǳ������ֻ��¡���ƽڵ㱾������¡������ӽڵ㣨���ı����ȣ�
	node.cloneNode(true);	--��ȿ���


```

* ��ֹ������ת
```
 <a href='javascript:void(0);'>

 <a href='javascript:;'>
```

* ��������Ҳ��Ҳ�����
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

* ���ֶ�̬����Ԫ�صķ�ʽ
```
1. document.write('<div>123</div>');	
	---�ĵ���ִ����ϣ������ᵼ��ҳ��ȫ���ػ棨���»��ƣ���ֻʣdiv�ˣ�

2. ele.innerHTML('<div>123</div>');		

3. var cdiv=document.createElement('div');		
	ele.appendChild(cdiv);

2��3����
	(1).ƴ���ַ���
	for(100){
		par.innerHTML += '<a href='#'>�ٶ�</a>';
	}
		---�ȽϺ�ʱ��3s

	(2).�ṹ������
	for(100){
		var a=document.createElement('a');
		par.appendChild(a);
	}
		---��ܶ� 26ms
	
	(3).  1�ĸĽ��������飬������
	var arr = [];
	for(100){
		arr.push('<a href='#'>�ٶ�</a>');
	}
	par.innerHTML=arr.join('');		
		---Ч����ߣ�6ms
	
```
### DOM������ �¼��߼�
* ע���¼������¼���
```
���ַ�ʽ��

1.��ͳע�᷽ʽ��btn.onclick=function(){}
	�ص㣺ע���¼���Ψһ�ԣ�ͬһ��Ԫ��ͬһ���¼�ֻ������һ��������������ĻḲ��ǰ��ģ�

2.��������ע�᷽ʽ��addEventListener()	---�Ƽ�ʹ�ã������м���������
	��ע��˳������ִ��
	btn.addEventListener('click',function{
	})
```

* ɾ���¼�������¼���
```
1.��ͳע�᷽ʽ�� btn.onclick=null;

2.��������ע�᷽ʽ��
btn.addEventListener('click',fn);
btn.removeEventListener('click',fn)
		
```

* DOM�¼���
	�¼�����ʱ����Ԫ�ؽڵ�֮�䰴���ص��˳�򴫲�������������̼�DOM�¼���
```
1.�������׶Σ�������׶Ρ�Ŀ��׶Ρ���ð�ݽ׶�

2.js����ֻ��ִ�в������ð�����е�һ���׶�

3.addEventListener�ĵ�����������true�����ڲ���׶�

4.onclick��ʽ��addEventListener�ĵ�����������false��ʡ�ԣ�����ð�ݽ׶�

5.��Щ�¼���û��ð�ݵġ�
```

* �¼�����
```
div.onclick=function(event){}			---(����дe)

1.event����һ���¼�����

2.�¼�����ֻ��������ʱ��Ż���ڣ�����ϵͳ�������Զ������ģ�����Ҫ���Ǵ��ݲ���

3.�¼�����������ʱ���һϵ��������ݵļ��ϣ�����������������Ϣ������������/����ʱ�䣬�û��������ĸ���������Ϣ��

4.�м��������⣨ie678  window.event��	---�����Դ��� e=e||window.event



�¼���������Ժͷ�����
	1.e.target	���ص��Ǵ����¼��Ķ���Ԫ�أ�		---ul>li ����ָ�����ĸ�li
		��1����this������	---this���ص��ǰ��¼��Ķ���Ԫ�أ�
				ul li ��ul�� ���ǵ��li ��thisָ��ul��e.targetָ�������Ǹ�li��

	2.e.type  �����¼����ͣ�����click��mouseover�ȣ�

	3.e.preventDefault()	��ֹĬ����Ϊ�������Ӳ���ת�����ύ��ť���ύ��

	4.��ֹ�¼�ð�ݵ����ַ�ʽ��
		��1��e.stopPropagation()����		--�Ƽ�ʹ��
		��2��e.cancelBubble = true;����		--��ie678��
```

* �¼�ί�� ���¼�ð�ݴ����ĺô���
```
ԭ�� ����ÿ���ӽڵ㵥�������¼������������������ڸ��ڵ��ϣ�Ȼ������ð��ԭ��Ӱ������ÿ���ӽڵ�

ul>li 
���ÿ��li������ ��ul���ü����¼���e.target���Ի�ȡ����Ķ���
```
### BOM
###### window�������������������
###### window���£�document��location��navigation��screen��history
###### window��һ��ȫ�ֶ��󣬶�����ȫ��������ı����ͺ�����������window�����Ժͷ���

###### �����¼�
* ���ڼ����¼� load
```
window.load=function(){}
����
window.addEventListener("load",function(){});

���ĵ���ȫ������ɻᴥ�����¼�
```

* ��load����	---DomContentLoaded��IE9����֧�֣�
```
document.addEventListener("DomContentLoaded",function(){});

����DOM������ɣ���������ʽ��ͼƬ��flash�ȣ�Ԫ�ؼ�����...��

���ã���ҳ��ͼƬ����ʱ������load�����ʣ���Ҫ�Ⱥܾá�
```

* ���������¼�   ---resize
```
window.onresize = function(){}
window.addEventListener("resize",function(){});

���ڷ����仯����

ע�⣺ 
1.ֻҪ���ڴ�С�������ر仯�ͻᴥ�����¼�
2.�����������Ӧʽ���֡�window.innerWidth ��ǰ���ڿ��
```

* ��ʱ��   ---setTimeout()����
```
	window.setTimeout(���ú���,[�ӳٺ�����]);	--ʡ��ʱ��Ĭ��0
	
setTimeout(function(){},1000);

ע�� ҳ���п����кܶඨʱ�������Ծ�������ʱ�������� 
	var timer1=setTimeout(callback,1000);
	
�����ʱ��	clearTimeout(timer1);
```

* ��ʱ��  ---setInterval
```
	ÿ��һ��ʱ�����һ�κ���
```

* ������ʱ��������
```
setTimeout			---��ʱ����һ��
setInterval			---ÿ���ӳ�ʱ����ú������ظ����ã�


---setTimeoutҲ����ʵ���ظ�����(�о�������)
	tim();
	var timer1=null;
	function tim(){
		timer1=setTimeout(tim,1000);
	}
```

* this ָ�����⣨ָ���������ߣ�������
```
this��ָ���ں��������ʱ����ȷ�����˵ģ�ֻ���ں���ִ�е�ʱ�����ȷ��thisָ��˭��
һ������� this������ָ����� ---�������Ķ���



1.ȫ��������ķ���--�����߶���window
	function Fn(){
		console.log(this);			//thisָ��window
	}
	Fn();

2. var han = {
		sayHi:function(){
			console.log(this);		//thisָ����� han�������
		}
	}

	---han�Ƕ���sayHi������Ҫ����  han.sayHi();

3. ���캯��
	function Fn(){
		console.log(this);			//thisָ��fun�Ǹ�ʵ������
	}
	var fun = new Fn();				---Fn(); ֱ�ӵ��ã�
```

* js��ͬ�����첽
```
	ͬ�����񣺶��������߳���ִ�У��γ�һ��ִ��ջ��
	�첽���񣺣�ͨ���ص�����ʵ�ֵģ�
			1.��ͨ�¼��� click��resize��
			2.��Դ���أ� load��error��
			3.��ʱ����setInterval��setInterval��

jsִ�л��ƣ���ִ��ͬ�������첽���������������С���ִ��ͬ��������ִ���첽����

ע���������¼�����������򲻷�����������У�����˲ŷŽ�ȥִ�С�



���ӣ�	
	consle.log(1);						�첽���̴���
	document.onclick=fn	
	consle.log(2);
	setTimeout(fn,3000);

	��ִ�����1����ִ��click�ύ���첽���̴������������������У��������������������У�Ȼ��ִ�����2��Ȼ��ִ��setTimeout�ύ���첽���̴���3s����뵽������С�

	ִ��ջ���ͬ������󣬽���������е�����ȡһ������ӵ�ִ��ջ����ִ�С�������������������������������뵽ִ��ջ������ѭ���Ĺ��̳������¼�ѭ����event loop��

	����ͼʾ��jsִ�л���.png
```

* location����
```
location.href�� ����url
location.search������
location.hash��#����Ĳ��֣�ê������

������		
location.assign();			---�ض���
location.replace();			--�滻��ǰҳ������¼��ʷ
location.reload();			---���¼���ҳ��
```
* navigator�����ж����ƶ��˻���pc�˵�

* history����
```
	history.forward();		==		history.go(1);
	history.back();		==		history.go(-1);
	history.go(2);	---ǰ������

```