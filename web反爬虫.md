# 反爬虫

* 更改css加载字体

    
* Svg反爬虫（css替换）

    参考大众点评，如商家地址电话等对平台有商业价值的信息，不能直接在控制台复制。

    将常用文字和数字分别存在一个svg文件下，重要信息不直接显示，而是通过控制background-image来用svg替代显示。

* Canvas指纹反爬虫

    原理是不同的机器不同的硬件对于 Canvas 画出的图总是存在像素级别的误差，因此我们判断当对于访问来说大量的 canvas 的指纹一致的话，则认为是爬虫，则可以封掉它”。

