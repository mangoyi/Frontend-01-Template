# 每周总结可以写在这里

Interation

while()                         var 
do ... while()                  const/let
                                in
for(; ;)

for (  in  ) 

for (  of  )

for(let i =0; i<10; i++) {
    console.log(i)
}

标签，循环，break， continue

LabelledStatement      [[type]]: break continue
IterationStatement     [[value]]: --
ContinueStatement      [[target]]: label
BreakStatement
SwitchStatement

try

try {

} catch () {

} finally {

}

简单语句

ExpressionStatement
EmptyStatement
DebuggerStatement


作用域和上下文区别： 


上下文指的是在用户的电脑上，内存里面存储变量的地方。


声明：

FunctionDeclartion
GenerationDeclartion
AsyncFunctionDeclartion
AsyncGeneratorDeclartion
VariableStatement
ClassDeclartion
LexicalDeclaration

异步编程for循环执行!!!!!!

var x = 0
function foo() {
    var o = { x: 1 };
    x = 2;
    with(o) {
        var x = 3;
    }
    console.log(x)  // 2
}

foo()
console.log(x)  // 0

// *

Javascript 对象机制

Object 对象， 英文的翻译  世间一切

三只一模一样的鱼，其实是三个对象
三只鱼互不影响
因此在计算机中描述这三只鱼的时候，必须把相同的数据存储三份

即使状态完全一致的两个对象，也并不相等

用状态来描述对象
状态的改变即是行为

state 状态

behavior 行为

identifier 标识

封装复用解耦 用来描述架构方面的合理性

封装性好的，别人不容易犯错误

复用性，抽象合理，总是非常适合使用的
解耦， 不同模块的关联性很弱
内聚， 

c++, c, java 多继承是自然而然的事情

javascript最早的对象思想
核心思想： 函数式和原型

Object in JavaScript

Data property

[[value]]
writable
enumerable
configurable

Accessor Property  => vue 2.0 基于这个去实现属性变化

get
set
enumerable
configurable

Js用属性来统一抽象对象状态和行为

数据属性用于描述状态
访问器属性则用于描述行为

数据属性中如果存储函数，也可以用于描述行为


原型链！！！

Object API/Grammar

1. {}, Object.defineProperty  主流
2. Object.create / Object.setPrototypeOf / Object.getPrototypeOf  主流
3. new / class /extends 主流
4. new / function / prototype  遗留历史的尘埃中

Function Object

函数还有一个行为call

new 配合 class

function go() {}
尽量不要出现 new go()


// 找出js对象中所有的特殊的对象的总结

'美'.codePointAt(0).toString(2)
