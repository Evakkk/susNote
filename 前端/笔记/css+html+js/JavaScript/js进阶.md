# JavaScript��PC����ҳ��Ч��
#### offset ƫ��������̬�Ļ�ø�Ԫ�ص�λ�úʹ�С�ȣ�
* offsetLeft��offsetTop
	������ж�λ�ĸ�Ԫ�ص���ࣨ�ϲࣩ��ƫ�ƴ�С
		----��������û�ж�λ�����ǵ�body�ľ���

* offsetWidth��offsetHeight
	��ȡ��Ԫ�صĿ�Ⱥ͸߶�

* offsetParent
	���ش��ж�λ�ĸ��ף�û�д��ж�λ�ĸ����򷵻�body
* offset��style������
![����](offset��style������.png)

#### client �ͻ��ˣ���ȡԪ�ؿ������������Ϣ��
![client](client.png)
* ��offset����
```
offsetWidth��offsetHeight		---�����������padding���߿���������С
clientWidth��clientHeight		---�����������padding����������С

���߶�������λ
```

#### ����ִ�к���
* ����Ҫ���ã��������Լ�ִ�еĺ���

* д��
   1. (function(){})();
   2. (function(){}());
   3. ���Դ��ݲ���(function(a,b){})(1,2);

* �������þ��� ����������һ��������