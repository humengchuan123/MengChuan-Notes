   作用域分局部和全局作用域

   #全局作用域： 

    最外层函数定义的变量拥有全局作用域，即对任何内部函数来说，都是可以访问的

   #局部作用域：
    var scope = "global";
    function fn(){
        console.log(scope);//result:undefined
        var scope = "local";
        console.log(scope);//result:local;
    }

    #作用域链

    据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问

    #闭包

    内部函数的作用域链仍然保持着对父函数活动对象的引用，就是闭包

    闭包有两个作用： 
    第一个就是可以读取自身函数外部的变量（沿着作用域链寻找） 
    第二个就是让这些外部变量始终保存在内存中 
    function f1(){
        var a = 10;
        function f2(){
            console.log(a)
        }
        return f2
    }




