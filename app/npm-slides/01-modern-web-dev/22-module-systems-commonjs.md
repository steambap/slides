## CommonJs 模块

* **`require("...")`**: 加载一个模块,
  * **`require("./helpers.js")`**: ... 使用相对路径加载
  * **`require("jquery")`**: ... 从标准库或依赖中加载
* **`exports`** or **`module.exports`** 输出

``` js
var $ = require("jquery");

exports.doSomething = function() {
	return 42;
}
```