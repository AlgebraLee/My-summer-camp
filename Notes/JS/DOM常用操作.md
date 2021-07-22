## DOM常用操作

### 创建节点

`createElement()`：传入标签类型，创建一个节点

示例:

```js
var op = document.createElement('p');
```

### 获取节点

| 函数                      | 功能                                         |
| ------------------------- | -------------------------------------------- |
| `getElementById()`        | 通过标签id获得节点                           |
| `getElementByClassName()` | 通过标签class名获得节点（获得的是class数组） |
| `getElementByTagName()`   | 通过标签类型获得节点（获得的是标签数组）     |

### 常用的结点方法

| 函数                | 功能                   | 示例                                               |
| ------------------- | ---------------------- | -------------------------------------------------- |
| `appendChile()`     | 将传入节点加入到标签中 | `oDiv.appendChile('oP');`                          |
| `getAttribute()`    | 获取标签属性           | `oA.getAttribute('href');`                         |
| `setAttribute()`    | 设置标签属性           | `oA.setAttribute('href','https://www.baidu.com');` |
| `removeAttribute()` | 删除标签属性           | `oA.removeAttribute('hreaf');`                     |
| `removeChild()`     | 删除结点下的标签       | `oDiv.removeChild(oP);`                            |

### 设置结点内容

`innerHTML`：将内容解析HTML及脚本写入标签内

示例：

```js
oP.innerHTML = hello <strong>world</strong>
```

`innerText`：将内容以文本的形式写入标签内

示例：

```js
oP.innerHTML = hello world
```

**注意**：`innerHTML`**可以解析标签**，`innerText`**则将内容原封不动地填入标签内**

设置元素id:`oP.id = 'op1'`

设置类名class:`oP.className = 'para1';`

### 设置style属性 

示例:

```js
oP.style.backgroundColor = 'blue';
```

**注意:style属性内用'-'表示的，在js中全部变成驼峰式写法，而且设置属性要用引号引起来**

如设置字体大小：

在css中：`font-size = 16px;`

在js中：`oP.style.fontSize = '16px';`

