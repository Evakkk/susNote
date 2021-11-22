[Linux操作系统基础](https://blog.csdn.net/cckevincyh/article/details/80468296)

[linux基础命令xmind脑图](https://blog.csdn.net/weixin_43217942/article/details/107349240)

[linux常用命令详解](https://blog.csdn.net/weixin_43217942/article/details/107733471)

[*vi命令汇总](https://www.cnblogs.com/fwl8888/p/9416375.html)

# 命令

```shell
基础命令相关一：Cd、ls、pwd、help、man、if、for、while、case、select、read、test、ansible、iptables、firewall-cmd、salt、mv、cut、uniq、sort、wc、source、sestatus、setenforce;

基础命令相关二：Date、ntpdate、crontab、rsync、ssh、scp、nohup、sh、bash、hostname、hostnamectl、source、ulimit、export、env、set、at、dir、db_load、diff、dmsetup、declare;

用户权限相关：Useradd、userdel、usermod、groupadd、groupmod、groupdel、Chmod、chown、chgrp、umask、chattr、lsattr、id、who、whoami、last、su、sudo、w、chpasswd、chroot;

文件管理相关：Touch、mkdir、rm、rmdi、vi、vim、cat、head、tail、less、more、find、sed、grep、awk、echo、ln、stat、file;

软件资源管理：Rpm、yum、tar、unzip、zip、gzip、wget、curl、rz、sz、jar、apt-get、bzip2、service、systemctl、make、cmake、chkconfig;

系统资源管理：Fdisk、mount、umount、mkfs.ext4、fsck.ext4、parted、lvm、dd、du、df、top、iftop、free、w、uptime、iostat、vmstat、iotop、ps、netstat、lsof、ss、sar;

网络管理相关：Ping、ifconfig、ip addr、ifup、ifdown、nmcli、route、nslookup、traceroute、dig、tcpdump、nmap、brctl、ethtool、setup、arp、ab、iperf;

Linux系统开关机：Init、reboot、shutdown、halt、poweroff、runlevel、login、logout、exit。
```

## 常用命令

* ls命令
    ```
    ls：仅罗列出当前文件名或目录名 就像Windows里的文件列表。

    ll：罗列出当前文件或目录的详细信息，含有时间、读写权限、大小、时间等信息 ，像Windows显示的详细信息。ll是“ls -l"的别名。相当于Windows里的快捷方式。可以理解为 ll 和 ls -l 的功能是相同的， ll 是 ls -l 的别名。

    ls -lrt 表示 按修改时间 倒序 列出当前工作目录下的所有文件的详细信息

    -lrt 实际上是代表了 "-l -r -t" 这三个选项集合。
        1）-l 表示开启长列表输出，打开了就会输出文件权限、引用计数、所有者、所属组、文件大小、修改日期和文件名称这些详细的信息。

        2）-t 以时间排序，最新的文件会排在上面。

        3）-r 表示反向排序、倒序输出。

        4）-x 按列输出，横向排序。

        5）-u 按照文件上次被访问的时间排序。
    ```

* cp命令：主要用于复制文件或目录。

  ```js
  cp CutOverPage_YY.jsp CutOverPageYY.jsp.2021.8.5
  
  #小技巧
  cp a.conf{,.bak}	//拷贝配置文件，命令等价于cp a.conf a.conf.bak
  ```
  
* vi命令：[vi命令详解](https://www.cnblogs.com/myios/p/3691685.html)

    ```
    vi是所有UNIX系统都会提供的屏幕编辑器，它提供了一个视窗设备，通过它可以编辑文件。当然，对UNIX系统略有所知的人，或多或少都觉得vi超级难用，但vi是最基本的编辑器，所以希望读者能好好把它学起来，以后在UNIX世界里必将畅行无阻、游刃有余，因为其他几种文本处理器并非UNIX标准配备。说不定别人的Linux机器没安装joe或pico，如果您不会vi，那您可能就没辄了。
    
    　　vi的基本概念
    
    　　基本上vi可分为三种操作状态，分别是命令模式（Command mode）、插入模式（Insert mode）和底线命令模式（Last line mode），
    
    　　各模式的功能区分如下：
    
    　　1． Comand mode：控制屏幕光标的移动，字符或光标的删除，移动复制某区段及进入Insert mode下，或者到Last line mode。
    
    　　2． Insert mode：唯有在Insert mode下，才可做文字数据输入，按Esc等可回到Comand mode。
    
    　　3． Last line mode：将储存文件或离开编辑器，也可设置编辑环境，如寻找字符串、列出行号等。
    
    　　不过可以把vi简化成两个模式，即是将Last line mode也算入Command mode,把vi分成Command 和Insert mode。
    ```

* pwd命令：pwd是Linux中一个非常有用而又十分简单的命令，pwd是词组print working directory的首字母缩写，即打印工作目录；工作目录就是你当前所处于的那个目录。

![img](../../image/vim-vi-workmodel.png)



## 常用命令解析

```js
#操作文件或目录常用命令
pwd 显示当前工作目录（print working directory）
touch 创建空文件				                    
mkdir 创建目录（make directoriy）
-p 父目录不存在情况下先生成父目录 （parents）            
cp 复制文件或目录（copy）
-r 递归处理，将指定目录下的文件与子目录一并拷贝（recursive）     
mv 移动文件或目录、文件或目录改名（move）

rm 删除文件（remove）
-r 同时删除该目录下的所有文件（recursive）
-f 强制删除文件或目录（force）
rmdir 删除空目录（remove directoriy）
cat显示文本文件内容 （catenate）
more、less 分页显示文本文件内容
head、tail查看文本中开头或结尾部分的内容
head -n  5  a.log 查看a.log文件的前5行
tail  -F b.log 循环读取（follow）

#常用命令
wc 统计文本的行数、字数、字符数（word count）
-m 统计文本字符数
-w 统计文本字数
-l 统计文本行数
find 在文件系统中查找指定的文件
find /etc/ -name "aaa"
grep 在指定的文本文件中查找指定的字符串
ln 建立链接文件（link）
-s 对源文件建立符号连接，而非硬连接（symbolic）

top 显示当前系统中耗费资源最多的进程 
ps 显示瞬间的进程状态
-e /-A 显示所有进程，环境变量
-f 全格式
-a 显示所有用户的所有进程（包括其它用户）
-u 按用户名和启动时间的顺序来显示进程
-x 显示无控制终端的进程
kill 杀死一个进程
kill -9 pid
df 显示文件系统磁盘空间的使用情况

du 显示指定的文件（目录）已使用的磁盘空间的总
-h文件大小以K，M，G为单位显示（human-readable）
-s只显示各档案大小的总合（summarize）
free 显示当前内存和交换空间的使用情况 
netstat 显示网络状态信息
-a 显示所有连接和监听端口
-t (tcp)仅显示tcp相关选项
-u (udp)仅显示udp相关选项
-n 拒绝显示别名，能显示数字的全部转化成数字。
-p 显示建立相关链接的程序名
ifconfig 网卡网络配置详解 
ping 测试网络的连通性 

#备份压缩命令
gzip 压缩（解压）文件或目录，压缩文件后缀为gz 
bzip2 压缩（解压）文件或目录，压缩文件后缀为bz2 
tar 文件、目录打（解）包

#gzip命令
命令格式：gzip [选项] 压缩（解压缩）的文件名
-d将压缩文件解压（decompress）
-l显示压缩文件的大小，未压缩文件的大小，压缩比（list）
-v显示文件名和压缩比（verbose）
-num用指定的数字num调整压缩的速度，-1或--fast表示最快压缩方法（低压缩比），-9或--best表示最慢压缩方法（高压缩比）。系统缺省值为6

#关机/重启命令
shutdown系统关机 
-r 关机后立即重启
-h 关机后不重新启动
halt 关机后关闭电源 shutdown -h
reboot 重新启动 shutdown -r

#
善于查看man page（manual）等帮助文档

利用好Tab键

掌握好一些快捷键

 ctrl + c（停止当前进程）
 ctrl + r（查看命令历史）
 ctrl + l（清屏，与clear命令作用相同）
```

