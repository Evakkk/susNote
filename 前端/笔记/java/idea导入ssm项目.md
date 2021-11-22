# 注意事项

#### applicationContext.xml问题

从WEB-INF移到resource底下

![img](../image/1226254-20180228092517987-1749941415.png)

![img](../image/1226254-20180228092601499-1838794807.png)

同时在pom里的配置：将resources目录打包到web-inf/classes目录下

```xml
<resources>
    <resource>
        <directory>src/main/resources</directory>
        <includes>
            <include>**/*.properties</include>
            <include>**/*.xml</include>
        </includes>
        <filtering>true</filtering>
    </resource>
    <resource>
        <directory>src/main/java</directory>
        <includes>
            <include>**/*.xml</include>
        </includes>
    </resource>
</resources>
```

#### 标识问题

​	resources等标识要对

![image-20201117100753596](../image/image-20201117100753596.png)

#### web.xml

![image-20201117103839378](../image/image-20201117103839378.png)

#### 其他核对

![image-20201117104157790](../image/image-20201117104157790.png)



#### 404

之前一直404好像是 resources资源没标识，识别不到