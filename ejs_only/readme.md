
#ejs 游离于express 

## ejs根据json数据 通过一个template.html模板 生成 多个静态页面 ***.html
~~~
node index.js
~~~

## ejs 模板渲染在端口号3000查看结果
~~~
npm run start
~~~

###参考文献：
http://www.360doc.com/content/16/0115/10/597197_528136785.shtml
http://ejs.co/
http://www.embeddedjs.com/
http://hao.jser.com/archive/5630/

###js调用的方法主要有两种：
~~~
ejs.compile(str,options);
~~~
或者
~~~
ejs.render(str,options)
~~~