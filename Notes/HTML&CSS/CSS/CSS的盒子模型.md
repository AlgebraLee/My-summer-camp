#### CSS的盒子模型

![CSS 框模型](https://www.w3school.com.cn/i/css/boxmodel.gif)

元素总宽度 = 宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距

元素总高度 = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距

#### 1.高度/宽度

| 属性                                                         | 描述                 |
| :----------------------------------------------------------- | :------------------- |
| [height](https://www.w3school.com.cn/cssref/pr_dim_height.asp) | 设置元素的高度。     |
| [width](https://www.w3school.com.cn/cssref/pr_dim_width.asp) | 设置元素的宽度。     |
| [max-height](https://www.w3school.com.cn/cssref/pr_dim_max-height.asp) | 设置元素的最大高度。 |
| [max-width](https://www.w3school.com.cn/cssref/pr_dim_max-width.asp) | 设置元素的最大宽度。 |
| [min-height](https://www.w3school.com.cn/cssref/pr_dim_min-height.asp) | 设置元素的最小高度。 |
| [min-width](https://www.w3school.com.cn/cssref/pr_dim_min-width.asp) | 设置元素的最小宽度。 |

- auto - 默认。浏览器计算高度和宽度。
- *length* - 以 px、cm 等定义高度/宽度。
- % - 以包含块的百分比定义高度/宽度。
- initial - 将高度/宽度设置为默认值。
- inherit - 从其父值继承高度/宽度。

#### 2.外边距

| 属性                                                         | 描述                                       |
| :----------------------------------------------------------- | :----------------------------------------- |
| [margin](https://www.w3school.com.cn/cssref/pr_margin.asp)   | 简写属性。在一个声明中设置所有外边距属性。 |
| [margin-bottom](https://www.w3school.com.cn/cssref/pr_margin-bottom.asp) | 设置元素的下外边距。                       |
| [margin-left](https://www.w3school.com.cn/cssref/pr_margin-left.asp) | 设置元素的左外边距。                       |
| [margin-right](https://www.w3school.com.cn/cssref/pr_margin-right.asp) | 设置元素的右外边距。                       |
| [margin-top](https://www.w3school.com.cn/cssref/pr_margin-top.asp) | 设置元素的上外边距。                       |

###### 外边距简写

| 四个值         | 三个值       | 两个值     | 一个值   |
| -------------- | ------------ | ---------- | -------- |
| 上  右  下  左 | 上  左右  下 | 上下  左右 | 上下左右 |

###### 外边距合并

**外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。**

**合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者**

**注释：**只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

#### 3.外边距

| 属性                                                         | 描述                                           |
| :----------------------------------------------------------- | :--------------------------------------------- |
| [padding](https://www.w3school.com.cn/cssref/pr_padding.asp) | 用于在一条声明中设置所有内边距属性的简写属性。 |
| [padding-bottom](https://www.w3school.com.cn/cssref/pr_padding-bottom.asp) | 设置元素的下内边距。                           |
| [padding-left](https://www.w3school.com.cn/cssref/pr_padding-left.asp) | 设置元素的左内边距。                           |
| [padding-right](https://www.w3school.com.cn/cssref/pr_padding-right.asp) | 设置元素的右内边距。                           |
| [padding-top](https://www.w3school.com.cn/cssref/pr_padding-top.asp) | 设置元素的上内边距。                           |

**内边距和元素高度**

CSS width 属性指定元素内容区域的宽度。内容区域是元素（盒模型）的内边距、边框和外边距内的部分。

因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。这通常是不希望的结果。

#### 
