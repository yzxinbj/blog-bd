整个页面就body 里面有一张长图，但在移动端底部有一条白条；
结局办法如下

设置font-size为0或者将图片设置为display：block
添加float：left;

# safari中高度100%失效问题及解决方案
这是一个在Vue项目中嵌套iframe产生的问题，具体表现为：在Safari浏览器中，页面渲染完成后，拉伸页面宽度，iframe中的内容高度溢出，且无法滚动到溢出部分。

chrome、firefox都没有发生这个问题，虽然知道是CSS在Safari中的解析差异引起的，但具体是什么原因，还需要做定位，避免后续同类问题的采坑。