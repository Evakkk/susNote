# ǰ�� css �߼�����
###### ����ͼ
* ����ҳͼ�����ʱ����������Ƶ�����պͷ�������ͼƬ����ɷ���������ѹ������
```
	Ϊ����Ч�ؼ��ٷ��������պͷ�������Ĵ��������ҳ��ļ����ٶȣ�������css���鼼����Ҳ�� CSS Sprites��CSSѩ�̣�


���鼼����Ҫ����� ����ͼƬ ʹ�á����ǰѶ��С����ͼƬ���ϵ�һ�Ŵ�ͼƬ�С�
```

* ���鼼��ʹ�ã���Ҫ��Ա���ͼƬ��
```
 1.�ƶ�����ͼƬλ�ã���ʱ������background-position
 2.�ƶ�����Ϊ���Ŀ��ͼƬ��x��y���ꡣ����ҳ�� x����Ϊ�� y����Ϊ����
 3.һ�������������ƶ���������ֵһ���Ǹ�ֵ
```

###### ����ͼ��
* ����ͼ��ʹ�ó�������Ҫ������ʾ��ҳ��ͨ�ó��õ�һЩСͼ��

* ����ͼ�� iconfont ��չʾ��ͼ�꣬�����������塣

* ����ͼ������ (һ��ѹ����)
```
icomoon�ֿ�	 http://icomoon.io
����iconfont���� 	http://www.iconfont.cn/
```

* ����ͼ���ʹ��
```
1.�����ذ������fonts�ļ��з���ҳ���Ŀ¼��
2.��css��ʽ��ȫ���������壨�����𤣩
3.��demo.html���ƿ����� font-family:'icomoon'
```

* ����ͼ���׷�� selection.json


###### css��������
```
.box{
	width: 0;
	heght: 0;
	line-height: 0; ��Ϊ�˼����ԣ��չ˵Ͱ汾�������
	font-size: 0; ��Ϊ�˼����ԣ��չ˵Ͱ汾�������
	border: 50px solid transparent;
	border-top-color: pink;
}

```


###### css �û�������ʽ
* �����û��������ʽ cursor����
```
ֵ
	default��С�� Ĭ�ϣ�
	pointer��С�֣�
	move���ƶ���
	text���ı���
	not-allowed����ֹ��

```

* ������ outline
```
	input{
	 	outline: none;
		����
		outline: 0;
	}

```

* ��ֹ������ק resize
```
	textarea{
		resize: none;
	}
```
	

######  vertical-align ����Ӧ��
* css��vertical-align����ʹ�ó�����������������ͼƬ���߱������ڿ�Ԫ�أ������ִ�ֱ���롣
 		��baseline��Ĭ�ϡ����ߣ���top��middel�����ߣ���bottom�����ߣ���
* ֻ�����`������Ԫ�ػ������ڿ�Ԫ��`��Ч������ǿ鼶Ԫ�����ñ���ͼƬ������displayת�������ڿ飩

```
	img{
		vertical-align:middle;
	}
	
	<img src="images/ss.jpg" alt=""> ����Ҫ��ͼƬ����

```

* ���ͼƬ�ײ�Ĭ�Ͽհ׷�϶����
	bug��ͼƬ�ײ����һ���հ׷�϶��ԭ�������ڿ�Ԫ�ػ�����ֵĻ��߶��롣��ja j�����ǵ��� a�����ǻ��ߣ�
```
��Ҫ������������֣�
	1.��ͼƬ��� vertical-align:middle|top|bottom;�ȡ����ᳫʹ�ã�
	2.��ͼƬת��Ϊ�鼶Ԫ�� display��
```

###### ���������ʡ�Ժ���ʾ
* �����ı������ʾʡ�Ժ�
```
	/* 1.ǿ��һ������ʾ�ı� */
	white-space: nowrap;		��Ĭ�� normal ��ʾ�����Զ����У�

	/* 2.������������ */
	overflow: hidden;

	/* 3.������ʡ�Ժ������������ */
	text-overflow: ellipsis;	
```

* �����ı������ʾʡ�Ժţ������ú�̨��Ա����
	�нϴ���������⣬�ʺ���webkit��������ƶ��ˣ��˽���� ȥ�ٶ��ѣ�

###### �������ּ���
* margin��ֵ������
```
�����������
�����߿��ص���1px+1px=2px��
��margin-left��-1px;


1.��ÿ������marfin������ƶ�-1px����ѹס���ں��ӱ߿�
2.��꾭��ĳ�����ӵ�ʱ����ߵ�ǰ���ӵĲ㼶���ɣ����û�ж�λ�����Զ�λ������λ�ã�������ж�λ�����z-index��

li :hover{
	position: relative;		//û��λ���
	z-index: 1;			//�ж�λ���
	border:1px solid blue;
}
```

* ����Χ�Ƹ���Ԫ��
```
	���ͼƬ���ұ����֡�����Ҫ�����������ӡ��������������Χ�Ƹ���Ԫ�ص����ԡ�ֻҪ������߸����Ϳ��ԣ�������Ԫ�ز���ѹס���֡�
```

* ���ڿ�Ԫ����������
	ҳ������ �����������ڿ�Ԫ�ر����м�϶��������

* css ������������
```
wigth: 0;
height: 0;
border-top: 100px solid transparent;
border-righr: 50px solid blue;
border-bottom: 0 solid transparent;
border-left: 0 solid transparent;

���� ��
wigth: 0;
height: 0;
border-color: transparent red transparent transparent;
border-stlye: solid;
border-width:100px 8px 0 0;
```

###### css ��ʼ�� ��css reset��
* ��һЩ��ʽ���г�ʼ������
```
*{
	margin: 0��
	padding: 0;
}
em,i{
	font-stlye:normal;
}
li{
	list-stlye: none;
}
img{
	border: 0;		//������
	vertical-align: middle;
}
buttton{
	cursor:pointer;
}
�������ɶ��

�ȵȵȵ�
```