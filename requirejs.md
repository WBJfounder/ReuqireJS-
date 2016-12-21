
#简介requirejs
1.如今最常用的JavaScript库之一是RequireJS
2.谈起RequireJS，你无法绕过提及JavaScript模块是什么，以及AMD是什么
####AMD规范简述
AMD全程Asynchronous Module Definition（即异步模块加载机制)
AMD很短也很简单，但它却完整描述了模块的定义，依赖关系，引用关系以及加载机制
人话好理解（其实说白了就是AMD是一个模块定义、依赖、引用和加载的的规章制度，不用过多考虑别的，
作为一个规范，只需要了解它唯一的一个语法API，就是define函数，define的语法格式是这样的
define([module-name?], [array-of-dependencies?], [module-factory-or-object]);
module-name: 模块标识，可以省略。
array-of-dependencies: 所依赖的模块，可以省略。
module-factory-or-object: 模块的实现，或者一个JavaScript对象。
）
###是不是不懂这个define函数语法格式有啥用？既然说现在总结requirejs那就用里面的define解释
requirejs中define是一个全局函数哦（其实理不理解都无所谓，会用就行）
define（['这里面是依赖的js文件不用写js后缀'],function(){

}）
define第一个参数可以不传哦
而第二个参数function()这里面写一个形参接收依赖的js文件（一般语义化里面写js文件名）
###requirejs中还有一个全局函数require，这个函数用法和define差不多的哦
require（['这里面是依赖的js文件不用写js后缀'],function(){

}）
require第一个参数可以不传哦
而第二个参数function()这里面写一个形参接收依赖的js文件（一般语义化里面写js文件名）
####requirejs中还有一个配置RequireJS的函数（config）
使用方法是：require.config({
     baseUrl:'用于加载模块的根路径'，
     paths：{
         起别名用的比如jquery，减少名字太长的困扰
         jquery：'jquery-3.0.1.min.js'
     }
})
#####简单说一下requirejs用发步骤和一些注意事项
#######首先引入requirejs ：  
    //注意这是第一中写法最好放在html之后也就是页面最下面或者body闭合标签的上面（加载问题）
        data-main属性的作用是，指定网页程序的主模块 
        <script data-main="main" src="js/require.js" ></script>
    //async属性表明这个文件需要异步加载，避免网页失去响应。
      IE不支持这个属性，只支持defer，所以把defer也写上。    
        <script src="js/require.js" defer async="true" ></script>
#######然后创建main.js这个入口模块了 
#######其次在main.js这个主模块中写全局配置文件
    require.config({
        paths：{
            //起别名以后直接用jquery
            'jquery':'jquery-3.0.1.min.js'
        }
    })
    //加载模块这里加载了jquery模块和a模块所以要把自己写的模块拿过来哦
        function里面就是处理函数的一些行为
    require(['jquery','a'],function($,a){
         $('body').css('background-color','red')
         console.log(a.ss(1,2))
    })       
###基本的一些requirejs知识先到这然后上一些我的代码，知道这些基本简单的就够用了，一些扩展的东西后面会提到
版权@WBJ_