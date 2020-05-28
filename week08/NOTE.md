# 每周总结可以写在这里

css: inherit  css中的inherit 继承属性

1. 简单选择器 
   *
   div svg|a
   .cls
   #id
   [attr=value]
   :hover 伪类选择器
   ::before 伪元素选择器， 选择出来一个新的元素

在 html 的命名空间中选择 a 标签
在 svg 的命名空间中选择 a 标签

2. 选择器语法

复合选择器
<简单选择器><简单选择器><简单选择器> \* 或则 div 必须写在最前面
伪类和伪元素必须写在后面

复杂选择器
<复合选择器> 空格 <复合选择器>
<复合选择器> '>' <复合选择器> 只能并且仅仅选择子元素
<复合选择器> '~' <复合选择器>  
 <复合选择器> '+' <复合选择器>  
 <复合选择器> '||' <复合选择器> 比较复杂，较少用

3. 选择器优先级
   css 标准里面标准选择器优先级

   inline-style 选择器最高
   #id 选择器
   .cls 选择器
   div 选择器

#id div.a#id {}

四元组
[0, 2, 1, 1]

s = 0 * N^3 + 2 * N^2 + 1 * N^1 + 1

取 N=100000000
S = 200000100000001 浏览器的计算出来的权重的值(计算权重是没有顺序的)

4. 伪类

链接/行为(早期网页最多的是链接)
    :any-link
    :link(未访问的超链接) :visited(访问过的超链接)
    :hover (只会被鼠标触发)
    :active (点击就会active)
    :focus
    :target


树结构
    :empty
    :nth-child()
    :nth-last-child()
    :first-child :last-child   :only-child(only-child不建议使用)

逻辑型
    :not伪类
    :where :has


感觉知识被推翻了， css之前的权值判断是从左往右的

5. 伪元素
    ::before
    ::after

