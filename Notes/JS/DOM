### DOM(Document Object Model文档对象模型)

#### 1.概述

##### 1.`DOM`

**DOM的作用是将网页转化为一个JavaScript对象，从而可以用脚本进行各种操作（比如增删内容）**

浏览器会根据DOM模型，将结构化文档（比如HTML和XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。

**DOM只是一个接口规范，可以用各种语言实现。**所以严格地说，DOM不是JavaScript语法的一部分，但是DOM操作是JavaScript最常见的任务，离开了DOM，JavaScript就无法控制网页。另一方面，JavaScript也是最常用于DOM操作的语言。

##### 2.结点

**DOM的最小组成单位叫节点。**

节点的类型有七种：

- `Document`：整个文档树的顶层节点

- `DocumentType`：`doctype`标签（比如`<!DOCTYPE html>`）

- `Element`：网页的各种HTML标签（比如`<body>`、`<a>`等）

- `Attr`：网页元素的属性（比如`class="right"`）

- `Text`：标签之间或标签包含的文本

- `Comment`：注释

- `DocumentFragment`：文档的片段

**浏览器提供一个原生的节点对象Node,上面这七种节点都继承了Node，因此具有一些共同的属性和方法**

##### 3.节点树

**一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构，这种树状结构就是DOM树。**

浏览器原生提供document节点，代表整个文档。文档的第一层有两个节点，第一个是文档节点（`<!doctype html>`）,第二个是HTML网页的顶层容器标签`<html>`。后者构成了树结构的根节点（root node），其他HTML标签节点都是它的下级标签。

除了根节点，其他节点都有三种层级关系。

- 父节点关系（`parentNode`）：直接的那个上级节点
- 子节点关系（`childNodes`）：直接的下级节点
- 同级节点关系（`sibling`）：拥有同一个父节点的节点

DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括`firstChild`（第一个子节点）和`lastChild`（最后一个子节点）等属性，同级节点接口包括`nextSibling`（紧邻在后的那个同级节点）和`previousSibling`（紧邻在前的那个同级节点）属性。

#### 2.`Node`接口

**所有DOM节点对象都继承了Node借接口，拥有一些共同的属性和方法，这是DOM操作的基础。**

##### 1.属性

###### 1.1`Node.prototype.nodeType`

****`nodeType`属性返回一个整数值，表示节点的类型。****

不同节点的`nodeType`属性值和对应的常量如下。

- 文档节点（document）：9，对应常量`Node.DOCUMENT_NODE`
- 元素节点（element）：1，对应常量`Node.ELEMENT_NODE`
- 属性节点（`attr`）：2，对应常量`Node.ATTRIBUTE_NODE`
- 文本节点（text）：3，对应常量`Node.TEXT_NODE`
- 文档片断节点（`DocumentFragment`）：11，对应常量`Node.DOCUMENT_FRAGMENT_NODE`
- 文档类型节点（`DocumentType`）：10，对应常量`Node.DOCUMENT_TYPE_NODE`
- 注释节点（Comment）：8，对应常量`Node.COMMENT_NODE`

*确定节点类型时，使用`nodeType`属性是常用方法。*

###### 1.2`Node.protype.nodeName`

****`nodeName`属性返回节点的名称****

不同节点的`nodeName`属性值如下。

- 文档节点（`document`）：`#document`
- 元素节点（`element`）：大写的标签名
- 属性节点（`attr`）：属性的名称
- 文本节点（`text`）：`#text`
- 文档片断节点（`DocumentFragment`）：`#document-fragment`
- 文档类型节点（`DocumentTyp`）：文档的类型
- 注释节点（`Comment`）：`#comment`

###### 1.3`Node.prototype.nodeValue`

****`nodeValue`属性返回一个字符串，表示当前节点本身的文本值，该属性可读写****

只有文本节点（text）、注释节点（comment）和属性节点（`attr`）有文本值，因此这三类节点的`nodeValue`可以返回结果，其他类型的节点一律返回`null`。同样的，也只有这三类节点可以设置`nodeValue`属性的值，其他类型的节点设置无效。

###### 1.4`Node.protype.textContent`

***`textContent`属性返回当前节点和它的所有后代节点的文本内容。***

`textContent`属性自动忽略当前节点内部的 HTML 标签，返回所有文本内容。

该属性是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它还有一个好处，就是自动对 HTML 标签转义。这很适合用于用户提供的内容。

对于文本节点（text）、注释节点（comment）和属性节点（attr），`textContent`属性的值与`nodeValue`属性相同。对于其他类型的节点，该属性会将每个子节点（不包括注释节点）的内容连接在一起返回。如果一个节点没有子节点，则返回空字符串。

文档节点（document）和文档类型节点（doctype）的`textContent`属性为`null`。如果要读取整个文档的内容，可以使用`document.documentElement.textContent`。

###### 1.5`Node.protoype.baseURI`

***`baseURI`属性返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上的相对路径的 URL。该属性为只读。***

如果无法读到网页的 URL，`baseURI`属性返回`null`。

该属性的值一般由当前网址的 URL（即`window.location`属性）决定，但是可以使用 HTML 的`<base>`标签，改变该属性的值。设置了以后，`baseURI`属性就返回`<base>`标签设置的值。

###### 1.6`Node.prototype.ownerDocument`

****`Node.ownerDocument`属性返回当前节点所在的顶层文档对象，即`document`对象。****

`document`对象本身的`ownerDocument`属性，返回`null`。

###### 1.7`Node.prototype.nextSibling`

****`Node.nextSibling`属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回`null`。****

注意，该属性还包括文本节点和注释节点（`<!-- comment -->`）。因此如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格。

`nextSibling`属性可以用来遍历所有子节点。

###### 1.8`Node.prototype.previousSibling`

****`previousSibling`属性返回当前节点前面的、距离最近的一个同级节点。如果当前节点前面没有同级节点，则返回`null`。****

注意，该属性还包括文本节点和注释节点。因此如果当前节点前面有空格，该属性会返回一个文本节点，内容为空格。

###### 1.9`Node.prototype.parentNode`

****`parentNode`属性返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。****

文档节点（document）和文档片段节点（documentfragment）的父节点都是`null`。另外，对于那些生成后还没插入 DOM 树的节点，父节点也是`null`。

###### 1.10`Node.prototype.parentElement`

****`parentElement`属性返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回`null`。****

由于父节点只可能是三种类型：元素节点、文档节点（document）和文档片段节点（documentfragment）。`parentElement`属性相当于把后两种父节点都排除了。

###### 1.11`Node.prototype.firstChild` ,`Node.prototype.lastChild`

****`firstChild`属性返回当前节点的第一个子节点，如果当前节点没有子节点，则返回`null`。****

注意，`firstChild`返回的除了元素节点，还可能是文本节点或注释节点。

`lastChild`属性返回当前节点的最后一个子节点，如果当前节点没有子节点，则返回`null`。用法与`firstChild`属性相同。

###### 1.12`Node.prototype.childNodes`

****`childNodes`属性返回一个类似数组的对象（`NodeList`集合），成员包括当前节点的所有子节点。****

使用该属性，可以遍历某个节点的所有子节点。

文档节点（document）就有两个子节点：文档类型节点（docType）和 HTML 根元素节点。

注意，除了元素节点，`childNodes`属性的返回值还包括文本节点和注释节点。如果当前节点不包括任何子节点，则返回一个空的`NodeList`集合。由于`NodeList`对象是一个动态集合，一旦子节点发生变化，立刻会反映在返回结果之中。

###### 1.13`Node.prtotype.isConnected`

****`isConnected`属性返回一个布尔值，表示当前节点是否在文档之中。****

##### 2.方法

###### 2.1`Node.prototype.appendChild()`

****`appendChild()`方法接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。****

如果参数节点是 DOM 已经存在的节点，`appendChild()`方法会将其从原来的位置，移动到新位置。

如果`appendChild()`方法的参数是`DocumentFragment`节点，那么插入的是`DocumentFragment`的所有子节点，而不是`DocumentFragment`节点本身。返回值是一个空的`DocumentFragment`节点。

###### 2.2`Node.prototype.hasChildNodes()`

****`hasChildNodes`方法返回一个布尔值，表示当前节点是否有子节点。****

注意，子节点包括所有类型的节点，并不仅仅是元素节点。哪怕节点只包含一个空格，`hasChildNodes`方法也会返回`true`。

判断一个节点有没有子节点，有许多种方法，下面是其中的三种。

- `node.hasChildNodes()`
- `node.firstChild !== null`
- `node.childNodes && node.childNodes.length > 0`

`hasChildNodes`方法结合`firstChild`属性和`nextSibling`属性，可以遍历当前节点的所有后代节点。

###### 2.3`Node.prototype.cloneNode()`

****`cloneNode`方法用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点。****

该方法有一些使用注意点。

（1）克隆一个节点，会拷贝该节点的所有属性，但是会丧失`addEventListener`方法和`on-`属性（即`node.onclick = fn`），添加在这个节点上的事件回调函数。

（2）该方法返回的节点不在文档之中，即没有任何父节点，必须使用诸如`Node.appendChild`这样的方法添加到文档之中。

（3）克隆一个节点之后，DOM 有可能出现两个有相同`id`属性（即`id="xxx"`）的网页元素，这时应该修改其中一个元素的`id`属性。如果原节点有`name`属性，可能也需要修改。

###### 2.4`Node.prototype.insertBefore()`

****`insertBefore`方法用于将某个节点插入父节点内部的指定位置。****

`insertBefore`方法接受两个参数，第一个参数是所要插入的节点`newNode`，第二个参数是父节点`parentNode`内部的一个子节点`referenceNode`。`newNode`将插在`referenceNode`这个子节点的前面。返回值是插入的新节点`newNode`。

如果`insertBefore`方法的第二个参数为`null`，则新节点将插在当前节点内部的最后位置，即变成最后一个子节点。

注意，如果所要插入的节点是当前 DOM 现有的节点，则该节点将从原有的位置移除，插入新的位置。

由于不存在`insertAfter`方法，如果新节点要插在父节点的某个子节点后面，可以用`insertBefore`方法结合`nextSibling`属性模拟。

如果要插入的节点是`DocumentFragment`类型，那么插入的将是`DocumentFragment`的所有子节点，而不是`DocumentFragment`节点本身。返回值将是一个空的`DocumentFragment`节点。

###### 2.5`Node.prototype.removeChild()`

****`removeChild`方法接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。****

###### 2.6`Node.prototype.replaceChild()`

****`replaceChild`方法用于将一个新的节点，替换当前节点的某一个子节点。****

###### 2.7`Node.prototype.contains()`

`**contains`方法返回一个布尔值，表示参数节点是否满足以下三个条件之一。**

- **参数节点为当前节点。**
- **参数节点为当前节点的子节点。**
- **参数节点为当前节点的后代节点。**

###### 2.8`Node.prototype.compareDocumentPosition()`

****`compareDocumentPosition`方法的用法，与`contains`方法完全一致，返回一个六个比特位的二进制值，表示参数节点与当前节点的关系。****

| 二进制值 | 十进制值 | 含义                                               |
| -------- | -------- | -------------------------------------------------- |
| 000000   | 0        | 两个节点相同                                       |
| 000001   | 1        | 两个节点不在同一个文档（即有一个节点不在当前文档） |
| 000010   | 2        | 参数节点在当前节点的前面                           |
| 000100   | 4        | 参数节点在当前节点的后面                           |
| 001000   | 8        | 参数节点包含当前节点                               |
| 010000   | 16       | 当前节点包含参数节点                               |
| 100000   | 32       | 浏览器内部使用                                     |

###### 2.9`Node.prototype.isEqualNode()`,`Node.prototype.isSameNode()`

****`isEqualNode`方法返回一个布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。****

****`isSameNode`方法返回一个布尔值，表示两个节点是否为同一个节点。****

###### 2.10`Node.prototype.normalize()`

****`normalize`方法用于清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。****

###### 2.11`Node.prototype.getRootNode()`

****`getRootNode()`方法返回当前节点所在文档的根节点`document`，与`ownerDocument`属性的作用相同。****

该方法可用于`document`节点自身，这一点与`document.ownerDocument`不同。

#### 3.`NodeList`接口，`HTMLCollection`接口

*节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点：`NodeList`和`HTMLCollection`。*

*这两种集合都属于接口规范。许多 DOM 属性和方法，返回的结果是`NodeList`实例或`HTMLCollection`实例。主要区别是，`NodeList`可以包含各种类型的节点，`HTMLCollection`只能包含 HTML 元素节点*。

##### 1.`NodeList`接口

###### 1.1概述

****`NodeList`实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到`NodeList`实例。****

- ****`Node.childNodes`****
- ****`document.querySelectorAll()`等节点搜索方法****

`NodeList`实例很像数组，可以使用`length`属性和`forEach`方法。但是，它不是数组，不能使用`pop`或`push`之类数组特有的方法。

注意，NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有`Node.childNodes`返回的是一个动态集合，其他的 NodeList 都是静态集合。

###### 1.2`NodeList.prototype.length`

****`length`属性返回 NodeList 实例包含的节点数量。****

###### 1.3`NodeList.prototype.forEach()`

****`forEach`方法用于遍历 NodeList 的所有成员。它接受一个回调函数作为参数，每一轮遍历就执行一次这个回调函数，用法与数组实例的`forEach`方法完全一致。****

###### 1.4`NodeList.prototype.item()`

****`item`方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。****

如果参数值大于实际长度，或者索引不合法（比如负数），`item`方法返回`null`。如果省略参数，`item`方法会报错。

所有类似数组的对象，都可以使用方括号运算符取出成员。一般情况下，都是使用方括号运算符，而不使用`item`方法。

###### 1.5`NodeList.prototype.keys()`,`NodeList.prototype.values()`,`NodeList.prototype.entries()`

**这三个方法都返回一个 ES6 的遍历器对象，可以通过`for...of`循环遍历获取每一个成员的信息。区别在于，`keys()`返回键名的遍历器，`values()`返回键值的遍历器，`entries()`返回的遍历器同时包含键名和键值的信息。**

##### 2.`HTMLCollection`接口

###### 2.1概述

`HTMLCollection`是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与`NodeList`接口不同，`HTMLCollection`没有`forEach`方法，只能使用`for`循环遍历。

返回`HTMLCollection`实例的，主要是一些`Document`对象的集合属性，比如`document.links`、`document.forms`、`document.images`等。

`HTMLCollection`实例都是动态集合，节点的变化会实时反映在集合中。

如果元素节点有`id`或`name`属性，那么`HTMLCollection`实例上面，可以使用`id`属性或`name`属性引用该节点元素。如果没有对应的节点，则返回`null`。

###### 2.2`HTMLCollection.prototype.length`

****`length`属性返回`HTMLCollection`实例包含的成员数量。****

###### 2.3`HTMLCollection.prototype.item`

****`item`方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。****

由于方括号运算符也具有同样作用，而且使用更方便，所以一般情况下，总是使用方括号运算符。

如果参数值超出成员数量或者不合法（比如小于0），那么`item`方法返回`null`。

###### 2.4`HTMLCollection.prototype.namedItem`

****`namedItem`方法的参数是一个字符串，表示`id`属性或`name`属性的值，返回对应的元素节点。如果没有对应的节点，则返回`null`。****

#### 4.`ParentNode`接口,`ChildNode`接口

节点对象除了继承 Node 接口以外，还拥有其他接口。`ParentNode`接口表示当前节点是一个父节点，提供一些处理子节点的方法。`ChildNode`接口表示当前节点是一个子节点，提供一些相关方法。

##### 1.`ParentNode`接口

如果当前节点是父节点，就会混入了（mixin）`ParentNode`接口。由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有`ParentNode`接口。

###### 1.1`ParentNode.children`

****`children`属性返回一个`HTMLCollection`实例，成员是当前节点的所有元素子节点。该属性只读。****

注意，`children`属性只包括元素子节点，不包括其他类型的子节点（比如文本子节点）。如果没有元素类型的子节点，返回值`HTMLCollection`实例的`length`属性为`0`。

另外，`HTMLCollection`是动态集合，会实时反映 DOM 的任何变化。

###### 1.2`ParentNode.firstElmentChild`

****`firstElementChild`属性返回当前节点的第一个元素子节点。如果没有任何元素子节点，则返回`null`。****

###### 1.3`ParentNode.lastElmentChild`

****`lastElementChild`属性返回当前节点的最后一个元素子节点，如果不存在任何元素子节点，则返回`null`。****

###### 1.4`ParentNode.childElmentCount`

`childElementCount`属性返回一个整数，表示当前节点的所有元素子节点的数目。如果不包含任何元素子节点，则返回`0`。

###### 1.5`ParentNode.append()`,`ParentNode.prepend()`

****`append()`方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面。****

该方法不仅可以添加元素子节点（参数为元素节点），还可以添加文本子节点（参数为字符串）。

该方法没有返回值。

注意，该方法与`Node.prototype.appendChild()`方法有三点不同。

- `append()`允许字符串作为参数，`appendChild()`只允许子节点作为参数。
- `append()`没有返回值，而`appendChild()`返回添加的子节点。
- `append()`可以添加多个子节点和字符串（即允许多个参数），`appendChild()`只能添加一个节点（即只允许一个参数）。

****`prepend()`方法为当前节点追加一个或多个子节点，位置是第一个元素子节点的前面。它的用法与`append()`方法完全一致，也是没有返回值。****

##### 2.`ChildNode`接口

*如果一个节点有父节点，那么该节点就拥有了`ChildNode`接口。*

###### 2.1`ChildNode.remove()`

****`remove()`方法用于从父节点移除当前节点。****

###### 2.2`ChildNode.before()`,`ChildNode.after()`

****`before()`方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点。****

注意，该方法不仅可以插入元素节点，还可以插入文本节点。

****`after()`方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。用法与`before`方法完全相同。****

###### 2.3`ChildNode.replaceWith()`

****`replaceWith()`方法使用参数节点，替换当前节点。参数可以是元素节点，也可以是文本节点。****

#### 5.`Document`节点

##### 1.概述

`document`节点对象代表整个文档，每张网页都有自己的document对象。

`window.document`属性就指向这个对象。只要浏览器开始载入HTML文档，该对象就存在了，可以直接使用。

`document`对象有不同的方法可以获取。

- 正常的网页，直接使用`document`或`window.document`。
- `iframe`框架里面的网页，使用`iframe`节点的`contentDocument`属性。
- Ajax操作返回的文档，使用`XMLHttpRequest`对象的`responseXML`属性。
- 内部节点的`ownerDocument`属性。

`document`对象继承了`Eventarget`接口和`Node`接口，并且混入（mixin）了`ParentNode`接口。这意味着，这些接口的方法都可以在`document`对象上调用。除此之外，`document`对象还有很多自己的属性和方法。

##### 2.属性

###### 2.1快捷方式属性

1. `document.defaultView`属性返回`document`对象所属的`window`对象。如果当前文档不属于window对象，该属性返回null。
2. `document.doctype`是document对象的第一个子节点。
3. `document.documentElement`返回当前文档的根元素结点(root)。它通常是document节点的第二个子节点，紧跟在`document.doctype`节点的后面。HTML网页的该属性，一般是`<HTML>`节点。
4. `document.body`属性指向`<body>`节点，`document.head`属性指向`<head>`节点。这两个属性是可读写的，如果改写它们的值，相当于移除所有子节点。
5. `document.scrollElement`属性返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。标准模式下，这个属性返回的文档的根元素`document.documentElement`（即`<html>`）。兼容（quirk）模式下，返回的是`<body>`元素，如果该元素不存在，返回null。
6. `document.activeElement`属性返回获得当前焦点(focus)的DOM元素。通常，这个属性返回的是`<input>`、`<textarea>`、`<select>`等表单元素，如果当前没有焦点元素，返回`<body>`元素或`null`。
7. `document.fullscreenElement`属性返回当前以全屏状态展示的DOM元素。如果不是全屏状态，该属性返回null.

###### 2.2节点属性集合

1. `document.links`属性返回当前文档所有设定了href属性的`<a>`和`<area>`节点。
2. `document.forms`属性返回所有`<forms>`表单节点。除了使用序列号，id属性和name属性也可以用来引用表单。
3. `document.images`属性返回页面所有`<img>`图片节点。
4. `document.embeds`,`document.plugins`都返回所有`<embed>`节点。
5. `document.scripts`属性返回所有`<script>`节点。
6. `document.styleSheets`属性返回文档内嵌或引入的样式表集合。

###### 2.3文档静态信息属性

1. `document.documentURI`,`document.URI`都返回一个字符串，表示当前文档的网址。不同之处是他们继承自不同的接口，`documentURI`继承自Document接口，可用于所有文档；URL继承自`HTMLDocument`接口，只能用于HTML文档。如果文档的锚点（#anchor）变化，这两个属性都会跟着变化。
2. `document.domain`属性返回当前文档的域名，不包含协议和端口。
3. `document.location`Location对象是浏览器提供的原生对象，提供URI相关的信息和操作方法。通过`window.loaction`和`document.location`属性，可以拿到这个对象。
4. `document.lastModified`属性返回一个字符串，表示当前文档最后修改的时间。不同浏览器的返回值，日期格式是不一样的。
5. `document.title`属性返回当前文档的标题。默认情况下，返回`<title>`节点的值。但是该属性是可写的，一旦被修改，就返回修改后的值。
6. `document.characterSet`属性返回当前文档的编码，比如UTF-8,ISO-8859-1等
7. `document.referrer`属性返回一个字符串，表示当前文档的访问者来自哪里。
8. `document.dir`返回一个字符串，表示文字方向。
9. `document.compatMode`属性返回浏览器处理文档的模式，可能的值为`BackCompat`(向后兼容模式)和`CSS1Compat`（严格模式）。

###### 2.4文档状态属性

1. `document.hidden`属性返回一个布尔值，表示当前页面是否可见。如窗口最小化，浏览器切换了Tab，都会导致页面不可见，使得`document.hidden`返回true.

2. `document.visibilityState`返回文档地可见状态。它的值有四种可能。

   > - `visible`：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
   > - `hidden`：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
   > - `prerender`：页面处于正在渲染状态，对于用户来说，该页面不可见。
   > - `unloaded`：页面从内存里面卸载了。

   这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能。

3. `document.readyState`属性返回当前文档的状态，共有三种可能的值。

   - `loading`：加载 HTML 代码阶段（尚未完成解析）
   - `interactive`：加载外部资源阶段
   - `complete`：加载完成

   这个属性变化的过程如下。

   1. 浏览器开始解析 HTML 文档，`document.readyState`属性等于`loading`。
   2. 浏览器遇到 HTML 文档中的`<script>`元素，并且没有`async`或`defer`属性，就暂停解析，开始执行脚本，这时`document.readyState`属性还是等于`loading`。
   3. HTML 文档解析完成，`document.readyState`属性变成`interactive`。
   4. 浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，`document.readyState`属性变成`complete`。

###### 2.5`document.cookie`

`document.cookie`属性用来操作浏览器 Cookie

###### 2.6`document.designMode`

`document.designMode`属性控制当前文档是否可编辑。该属性只有两个值`on`和`off`，默认值为`off`。一旦设为`on`，用户就可以编辑整个文档的内容。

###### 2.7`document.currentScript`

`document.currentScript`属性只用在`<script>`元素的内嵌脚本或加载的外部脚本之中，返回当前脚本所在的那个 DOM 节点，即`<script>`元素的 DOM 节点。

###### 2.8`document.implementation`

`document.implementation`属性返回一个`DOMImplementation`对象。该对象有三个方法，主要用于创建独立于当前文档的新的 Document 对象。

- `DOMImplementation.createDocument()`：创建一个 XML 文档。
- `DOMImplementation.createHTMLDocument()`：创建一个 HTML 文档。
- `DOMImplementation.createDocumentType()`：创建一个 DocumentType 对象。

##### 3.方法

###### 3.1`document.open()`,`document.close()`

`document.open`方法清除当前文档所有内容，使得文档处于可写状态，供`document.write`方法写入内容。

`document.close`方法用来关闭`document.open()`打开的文档。

###### 3.2`document.write()`,`document.writeln()`

`document.write`方法用于向当前文档写入内容。

在网页的首次渲染阶段，只要页面没有关闭写入（即没有执行`document.close()`），`document.write`写入的内容就会追加在已有内容的后面。

###### 3.3`document.querySelector()`,`document.querySelectorAll()`

`document.querySelector`方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回`null`。

`document.querySelectorAll`方法与`querySelector`用法类似，区别是返回一个`NodeList`对象，包含所有匹配给定选择器的节点。

###### 3.4`document.getElementsByTagName()`

`document.getElementsByTagName()`方法搜索 HTML 标签名，返回符合条件的元素。它的返回值是一个类似数组对象（`HTMLCollection`实例），可以实时反映 HTML 文档的变化。如果没有任何匹配的元素，就返回一个空集。

###### 3.5`document.getElementsByClassName()`

`document.getElementsByClassName()`方法返回一个类似数组的对象（`HTMLCollection`实例），包括了所有`class`名字符合指定条件的元素，元素的变化实时反映在返回结果中。

###### 3.6`document.getElementsByName()`

`document.getElementsByName()`方法用于选择拥有`name`属性的 HTML 元素（比如`<form>`、`<radio>`、`<img>`、`<frame>`、`<embed>`和`<object>`等），返回一个类似数组的的对象（`NodeList`实例），因为`name`属性相同的元素可能不止一个。

###### 3.7`document.getElementById()`

`document.getElementById()`方法返回匹配指定`id`属性的元素节点。如果没有发现匹配的节点，则返回`null`。

###### 3.8`document.elementFromPoint()`,`document.elementsFromPoint()`

`document.elementFromPoint()`方法返回位于页面指定位置最上层的元素节点。

`elementFromPoint`方法的两个参数，依次是相对于当前视口左上角的横坐标和纵坐标，单位是像素。如果位于该位置的 HTML 元素不可返回（比如文本框的滚动条），则返回它的父元素（比如文本框）。如果坐标值无意义（比如负值或超过视口大小），则返回`null`。

`document.elementsFromPoint()`返回一个数组，成员是位于指定坐标（相对于视口）的所有元素。

###### 3.9`document.createElement()`

`document.createElement`方法用来生成元素节点，并返回该节点。

`createElement`方法的参数为元素的标签名，即元素节点的`tagName`属性，对于 HTML 网页大小写不敏感，即参数为`div`或`DIV`返回的是同一种节点。如果参数里面包含尖括号（即`<`和`>`）会报错。

###### 3.10`document.createTextNode()`

`document.createTextNode`方法用来生成文本节点（`Text`实例），并返回该节点。它的参数是文本节点的内容。

###### 3.11`document.createAttribute()`

`document.createAttribute`方法生成一个新的属性节点（`Attr`实例），并返回它。

###### 3.12`document.createComment()`

###### 3.13`document.createDocumentFragment()`

###### 3.14`document.createEvent()`

###### 3.15`document.addEvenListener()`,`document.removeEvenListener()`,`document.dispatchEvent()`

###### 3.16`document.hasFocus()`

###### 3.17`document.adoptNode()`,`document.importNode()`

###### 3.18`document.createNodeIterator()`

###### 3.19`document.createTreeWalker()`

###### 3.20`document.exeCommand()`,`document.queryCommandSupported()`,`document.queryCommandEnabled()`

###### 3.21`document.getSelection()`

#### 6.`Element`节点

##### 1.简介

##### 2.实例属性

###### 2.1元素特性的相关属性

###### 2.2元素状态的相关属性

###### 2.3`Elment.attributes`,

###### 2.4`Elment.className`,`Element.classList`

###### 2.5`Elment.dataset`

###### 2.6`Elment.innerHTML`

###### 2.7`Elment.outerHTML`

###### 2.8`Elment.clientHeight`,`Element.clientWidth`

###### 2.9`Elment.clientLeft`,`Element.clientTop`

###### 2.10`Elment.scrollHeight`,`Element.scrollWidth`

###### 2.11`Elment.scrollLeft`,`Element.scrollTop`

###### 2.12`Elment.offsetParent`

###### 2.13`Elment.offsetHeight`,`Element.offsetWidth`

###### 2.14`Elment.offsetLeft`,`Element.offsetTop`

###### 2.15`Elment.style`,

###### 2.16`Elment.children`,`Element.childElementCount`

###### 2.17`Elment.firstElementChild`,`Element.lastElementChild`

###### 2.18`Elment.nextElementSibling`,`Element.previousElementSibling`

##### 3.实例方法

###### 3.1属性相关方法

###### 3.2`Element.querySelector()`

###### 3.3`Element.querySelectorAll()`

###### 3.4`Elementf.getElementsByClassName()`

###### 3.5`Element.getEleementsByTagName()`

###### 3.6`Element.closest()`

###### 3.7`Element.matches()`

###### 3.8事件相关方法

###### 3.9`Element.scrollIntoView()`

###### 3.10`Element.getBoundingClientRect()`

###### 3.11`Element.getClientRects()`

###### 3.12`Element.insertAdjacentElement()`

###### 3.13`Element.insertAdjacentHTML()`,`Element.insertAdjacentText()`

###### 3.14`Element.remove()`

###### 3.15`Element.focus()`,`Elementf.blur()`

###### 3.16`Element.click()`

#### 7.属性的操作

##### 1.`Element.attributes`属性

##### 2.元素的标准属性

##### 3.属性操作的标准方法

###### 3.1概述

###### 3.2`Element.getAttribute()`

###### 3.3`Element.getAttributeNames()`

###### 3.4`Element.setAttribute()`

###### 3.5`Element.hasAttribute()`

###### 3.6`Element.hasAttributes()`

###### 3.7`Element.removeAttribute()`

##### 4.dataset属性

#### 8.`Text`节点和`DocumentFragment`节点

##### 1.`Text`节点的概念

##### 2.Text节点的属性

###### 2.1data

###### 2.2wholeText

###### 2.3length

###### 2.4nextElementSibling,previousElementSibling

##### 3.Text节点的方法

###### 3.1`appendData()`,`deleteData()`,`insertData()`,`replaceData()`,`subStringData()`

###### 3.2`remove()`

###### 3.3`splitText()`

##### 4.DocumentFragment节点

#### 9.CSS操作

##### 1.`HTML`元素的style属性

##### 2.`CSSStyleDeclaration`接口

###### 2.1简介

###### 2.2`CSSStyleDeclaration`实例属性

###### 2.3`CSSStyleDeclaration`实例方法

##### 3.CSS模块的侦测

##### 4.CSS对象

###### 4.1`CSS.escape()`

###### 4.2`CSS.supports()`

##### 5.`window.getComputedStyle()`

##### 6.`CSS`伪元素

##### 7.`StyleSheet`接口

###### 7.1概述

###### 7.2实例属性

###### 7.3实例方法

##### 8.实例：添加样式表

##### 9.`CSSRuleList`接口·

##### 10.`CSSRule`接口

###### 10.1概述

###### 10.2`CSSRule`实例的属性

###### 10.3`CSSStyleRule`接口

###### 10.4`CSSMediaRule`接口

##### 11.`window.matchMedia()`

###### 11.1基本用法

###### 11.2`MediaQueryList`接口的实例属性

###### 11.3`MediaQueryList`接口的实例方法
