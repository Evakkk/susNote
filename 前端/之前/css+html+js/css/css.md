# ǰ�� css����
* �ı�
```
color �ı���ɫ
text-align �ı�����
text-indent �ı�����
text-deroration �ı�װ�Σ��»��ߵȣ�
line-height �и�
```

* ����ѡ����
```
	���ѡ������ div ul(div�����е�ul)
	��Ԫ��ѡ������ div>ul��div�µĶ��� ul��
	����ѡ������ div��p{} (��������)
	α��ѡ������ ����ð�ű�ʾ�� :hover :first-child��
			����α�ࣺ ����ð�˳��д lvha��(ͨ����Ҫ��a����ָ�� bodyָ����ɫ����Ч)
						a:link{}��δ�����ʣ�
						a:visited{}���ѱ����ʣ�
						a:hover{}�����λ�������� �����ͣ��
						a:active{}��ѡ�����Ӽ���갴��δ����
			:focusα��ѡ������������ѡȡ��ý���ı�Ԫ�أ������ѡ����һ����Ա���
						input:focus{}����ù���inputԪ�أ�


```

* cssԪ�ص���ʾģʽ
	![��Ԫ��](kuaiyuansu.png)
	![��Ԫ��2](kuaiyuansu2.png)

	![����Ԫ��](hangneiyaunsu.png)

	![���ڿ�Ԫ��](hangneikuai.png)

* cssԪ����ʾģʽ��ת��
	ת��Ϊ��Ԫ�أ� display:block; (��)
	ת��Ϊ����Ԫ�أ� display:inline; (������)
	ת��Ϊ���ڿ�Ԫ�أ�display:inline-block;

* ����ͼƬ
	background-color
	background-image
	background-repeat
	background-position:x y;
		����λ���� left top bottom center...����ֻ����һ����һ��Ĭ��center��
		����ȷ��λ 20px 50px ...����ֻ����һ����һ��Ĭ��center�� 	�ٷֱȣ�50%��
		����ϵ�λ 20px center...����ֻ����һ����һ��Ĭ��center��
	![����](background.png)

* css�������ԣ���Ҫ����
	![����](css.png)

Ȩ�ؼ���1

```
li {
	color: red;
}
ul li {
	color:green
}


<ul>
	<li>	��������ɫ	</li>
	<li>	��Ϊul li ��Ȩ�ص��Ӹ� Ϊ11	</li>
	<li>	li��Ȩ��Ϊ1	</li>
</ul>

```
	
Ȩ�ؼ���2

```
//��Ҫ��һ��li��ǩ����Ϊ��ɫ
.list li{
	color:red;
}
.pink{		//�˷�������.list liȨ��Ϊ11 .pinkΪ10
	color:pink;
}

//�������
.list .pink{
	color:pink;		//Ȩ��Ϊ20
}

<ul class="list">
	<li class="pink">	��ɫ	</li>
	<li>	��ɫ	</li>
	<li>	��ɫ	</li>
</ul>
```

* ����ģ��
	1. ��ɲ��֣����߿���߾ࡢ�ڱ߾ࡢʵ�����ݣ���border��margin��padding��content��

```
			�߿��д��	border: 1px solid red;
			�߿�ֿ�д��	border-top: 1px solid pink;
			���ϸ�߱߿�	border-collapse: collapse;   
					�������Ҫ���ø����ԡ�����߿���ص� һ��td 1px ����ұߺ���һ��Ϊ2px��
```
		
ע������

```
	�߿��ڱ߾��Ŵ���� ԭ��200**200
			���߿�10px ���ӻ��� 220220��
			�������ڱ߾�10px ���ӻ���240*240��

	���ӣ�
		������������һ�� ��ʱ���ú��ӿ�߹̶����Ӵ�С������
		���������padding��Ŵ���ӵ�ԭ��ֻ�����ڱ߾ࡣ����Ժ�����䲻ͬ�������Ӵ�С��
```

   ��߾������`�鼶����`ˮƽ����

```
	    �������������1. ���ӱ���ָ�����	2. ����������߾���Ϊauto
	    ��������д����1. margin-left: auto; 	margin-right: auto
					 2.	margin: auto;
					 3.	margin: 0 auto;
 ```


   2. `���ڿ�Ԫ��`��ֱ��߾�ĺϲ��� `��߾�ϲ�����`��
		![���ں���](��߾��ֵܺϲ�.png)
```
	���������(������Ա���)
		1.����ֻ��һ���������marginֵ
```
   3. `Ƕ�׿�Ԫ��`��ֱ��ߵľ����ݣ� `��߾�ϲ�����`��
		![��߾���������](��߾ุ�Ӻϲ�.png)
```
��Ԫ�غ���{
	width: 400px;
    height: 400px;
	margin:40px auto;
    background-color: #ff8500;	
}
��Ԫ�غ���{
	width: 100px;
    height: 100px;
	margin:30px auto;
    background-color: red;	
}	��Ԫ�ػ����ݽϴ����߾�ֵ



	�����������������ѱ��⣩
		1.����Ϊ��Ԫ�ض����ϱ߿� ����߿�
			border: 1px solid transparent; (���ñ߿�͸�������ǻ�Ŵ���� ���ñ߿�͸�����߿򲿷���ɫΪbackground���õ���ɫ)
		2.����Ϊ��Ԫ�ض������ڱ߾ࣨ���ڱ߾ࣩ
			padding: 1px; (��Ŵ����)
		3.����Ϊ��Ԫ�����overflow:hidden	������Ŵ���ӣ��Ƚϳ��ã�

```

   4. �������߾�
		Ԫ�غܶ඼����Ĭ������߾࣬����ڽ�����ҳ����ǰ��Ҫ���������߾�
```
	* {
		margin: 0;
		padding: 0;
	}


	!ע�⣺
		����Ԫ��Ϊ���չ˼����ԣ�����ֻ������������߾࣬��Ҫ������������߾ࡣ����ת��Ϊ�鼶�����ڿ�Ԫ�ؾͿ����ˡ�



```

* ����������
	![����������](problem.png)



* css3������������ʽ���м����Ե����⣬IE9�����ϲſ��ԣ�
```
Բ�Ǳ߿�	border-radius:10px;  // (����д�ٷ��� 50%;)
			border-radius:10px 20px 30px 40px;�����Ͽ�ʼ˳ʱ�룩
������Ӱ	box-shadow:10px 10px 10px -4px rgba(0,0,0,0.3)
������Ӱ	text-shadow:5px 5px 6px rgba(0,0,0,0.3)
				h-shadow��ˮƽ�ƶ��� v-shadow����ֱ�ƶ��� blur(��ʵ) color
	
```

![������Ӱ](box-shadow.png)



