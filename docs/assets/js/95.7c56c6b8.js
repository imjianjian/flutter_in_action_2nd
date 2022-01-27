(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{618:function(t,a,s){"use strict";s.r(a);var e=s(45),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-1-移动开发技术简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-移动开发技术简介"}},[t._v("#")]),t._v(" 1.1 移动开发技术简介")]),t._v(" "),s("p",[t._v("本节将主要介绍一下移动开发技术的进化历程，了解一下 Flutter 技术出现的背景。笔者认为，了解一门新技术出现的背景是非常重要的，因为只有了解之前是什么样的，才能理解为什么会是现在这样。")]),t._v(" "),s("h2",{attrs:{id:"_1-1-1-原生开发与跨平台技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-原生开发与跨平台技术"}},[t._v("#")]),t._v(" 1.1.1 原生开发与跨平台技术")]),t._v(" "),s("h3",{attrs:{id:"原生开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原生开发"}},[t._v("#")]),t._v(" 原生开发")]),t._v(" "),s("p",[t._v("原生应用程序是指某一个移动平台（比如iOS或安卓）所特有的应用，使用相应平台支持的开发工具和语言，并直接调用系统提供的SDK API。比如Android原生应用就是指使用Java或Kotlin语言直接调用Android SDK开发的应用程序；而iOS原生应用就是指通过Objective-C或Swift语言直接调用iOS SDK开发的应用程序。原生开发有以下主要优势：")]),t._v(" "),s("ul",[s("li",[t._v("可访问平台全部功能（GPS、摄像头）；")]),t._v(" "),s("li",[t._v("速度快、性能高、可以实现复杂动画及绘制，整体用户体验好；")])]),t._v(" "),s("p",[t._v("主要缺点：")]),t._v(" "),s("ul",[s("li",[t._v("平台特定，开发成本高；不同平台必须维护不同代码，人力成本随之变大；")]),t._v(" "),s("li",[t._v("内容固定，动态化弱，大多数情况下，有新功能更新时只能发版；")])]),t._v(" "),s("p",[t._v("在移动互联网发展初期，业务场景并不复杂，原生开发还可以应对产品需求迭代。 但近几年，随着物联网时代到来、移动互联网高歌猛进，日新月异，在很多业务场景中，传统的纯原生开发已经不能满足日益增长的业务需求。主要表现在：")]),t._v(" "),s("ul",[s("li",[t._v("动态化内容需求增大；当需求发生变化时，纯原生应用需要通过版本升级来更新内容，但应用上架、审核是需要周期的，这对高速变化的互联网时代来说是很难接受的，所以，对应用动态化(不发版也可以更新应用内容)的需求就变的迫在眉睫。")]),t._v(" "),s("li",[t._v("业务需求变化快，开发成本变大；由于原生开发一般都要维护Android、iOS两个开发团队，版本迭代时，无论人力成本，还是测试成本都会变大。")])]),t._v(" "),s("p",[t._v("总结一下，纯原生开发主要面临动态化和开发成本两个问题，而针对这两个问题，诞生了一些跨平台的动态化框架。")]),t._v(" "),s("h3",{attrs:{id:"跨平台技术简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨平台技术简介"}},[t._v("#")]),t._v(" 跨平台技术简介")]),t._v(" "),s("p",[t._v("针对原生开发面临问题，业界一直都在努力寻找好的解决方案，而时至今日，已经有很多跨平台框架（注意，本书中所指的“跨平台”若无特殊说明，即特指 Android 和 iOS 两个平台），根据其原理，主要分为三类：")]),t._v(" "),s("ul",[s("li",[t._v("H5 + 原生（Cordova、Ionic、微信小程序）")]),t._v(" "),s("li",[t._v("JavaScript 开发 + 原生渲染 （React Native、Weex）")]),t._v(" "),s("li",[t._v("自绘UI + 原生 (Qt for mobile、Flutter)")])]),t._v(" "),s("p",[t._v("在接下来的章节中我们逐个来看看这三类框架的原理及优缺点。")]),t._v(" "),s("h2",{attrs:{id:"_1-1-2-hybrid技术简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-hybrid技术简介"}},[t._v("#")]),t._v(" 1.1.2 Hybrid技术简介")]),t._v(" "),s("h3",{attrs:{id:"h5-原生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5-原生"}},[t._v("#")]),t._v(" H5 + 原生")]),t._v(" "),s("p",[t._v("这类框架主要原理就是将 App 中需要动态变动的内容通过HTML5（简称 H5）来实现，通过原生的网页加载控件WebView （Android）或 WKWebView（iOS）来加载（以后若无特殊说明，我们用WebView来统一指代 Android 和 iOS 中的网页加载控件）。这种方案中，H5 部分是可以随时改变而不用发版，动态化需求能满足；同时，由于 H5 代码只需要一次开发，就能同时在 Android 和 iOS 两个平台运行，这也可以减小开发成本，也就是说，H5 部分功能越多，开发成本就越小。我们称这种 H5 + 原生 的开发模式为"),s("strong",[t._v("混合开发")]),t._v(" ，采用混合模式开发的App我们称之为"),s("strong",[t._v("混合应用")]),t._v("或 "),s("strong",[t._v("HTMLybrid App")]),t._v("  ，如果一个应用的大多数功能都是 H5 实现的话，我们称其为 "),s("strong",[t._v("Web App")]),t._v(" 。")]),t._v(" "),s("p",[t._v("目前混合开发框架的典型代表有：Cordova、Ionic 。大多数 App 中都会有一些功能是 H5 开发的，至少目前为止，HTMLybrid App 仍然是最通用且最成熟的跨端解决方案。")]),t._v(" "),s("p",[t._v("在此，我们需要提一下小程序，目前国内各家公司小程序应用层的开发技术栈是 Web 技术栈，而底层渲染方式基本都是 WebView 和原生相结合的方式。")]),t._v(" "),s("h3",{attrs:{id:"混合开发技术点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混合开发技术点"}},[t._v("#")]),t._v(" 混合开发技术点")]),t._v(" "),s("p",[t._v("如之前所述，原生开发可以访问平台所有功能，而混合开发中，H5代码是运行在 WebView 中，而 WebView 实质上就是一个浏览器内核，其 JavaScript 依然运行在一个权限受限的沙箱中，所以对于大多数系统能力都没有访问权限，如无法访问文件系统、不能使用蓝牙等。所以，对于 H5 不能实现的功能，就需要原生去做了。")]),t._v(" "),s("p",[t._v("混合框架一般都会在原生代码中预先实现一些访问系统能力的 API ， 然后暴露给 WebView 以供 JavaScript 调用。这样一来，WebView 中 JavaScript 与原生 API 之间就需要一个通信的桥梁，主要负责 JavaScript 与原生之间传递调用消息，而消息的传递必须遵守一个标准的协议，它规定了消息的格式与含义，我们把依赖于 WebView 的用于在 JavaScript 与原生之间通信并实现了某种消息传输协议的工具称之为 "),s("strong",[t._v("WebView JavaScript Bridge")]),t._v(" , 简称 "),s("strong",[t._v("JsBridge")]),t._v("，它也是混合开发框架的核心。")]),t._v(" "),s("h4",{attrs:{id:"示例-javascript调用原生api获取手机型号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-javascript调用原生api获取手机型号"}},[t._v("#")]),t._v(" 示例：JavaScript调用原生API获取手机型号")]),t._v(" "),s("p",[t._v("下面我们以 Android 为例，实现一个获取手机型号的原生 API 供 JavaScript 调用。在这个示例中将展示 JavaScript 调用原生 API 的流程，读者可以直观的感受一下调用流程。我们选用笔者在Github上开源的 dsBridge作为 JsBridge 来进行通信。dsBridge 是笔者实现的一个跨平台的 JsBridge 库，此示例中只使用其同步调用功能。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("首先在原生中实现获取手机型号的API "),s("code",[t._v("getPhoneModel")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" JSAPI "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JavascriptInterface")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPhoneModel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("将原生API通过WebView注册到JsBridge中")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wendu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dsbridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DWebView")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DWebView继承自WebView，由dsBridge提供  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DWebView")]),t._v(" dwebView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DWebView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findViewById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dwebview"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注册原生API到JsBridge")]),t._v("\ndwebView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addJavascriptObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("在JavaScript中调用原生API")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dsBridge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dsbridge"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接调用原生API `getPhoneModel`")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dsBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getPhoneModel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印机型")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])]),t._v(" "),s("p",[t._v("上面示例演示了 JavaScript 调用原生 API 的过程，同样的，一般来说优秀的 JsBridge 也支持原生调用 JavaScript ，dsBridge 也是支持的，如果您感兴趣，可以去 Github dsBridge 项目主页查看。")]),t._v(" "),s("p",[t._v("现在，我们回头来看一下，混合应用无非就是在第一步中预先实现一系列 API 供 JavaScript 调用，让 JavaScript 有访问系统功能的能力，看到这里，我相信你也可以自己实现一个混合开发框架了。")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("混合应用的优点是动态内容是 H5，Web 技术栈，社区及资源丰富，缺点是性能体验不佳，对于复杂用户界面或动画，WebView 有时会不堪重任。")]),t._v(" "),s("h2",{attrs:{id:"_1-1-3-react-native、weex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-react-native、weex"}},[t._v("#")]),t._v(" 1.1.3 React Native、Weex")]),t._v(" "),s("p",[t._v("本篇主要介绍一下 "),s("strong",[t._v("JavaScript开发 + 原生渲染")]),t._v(" 的跨平台框架原理。")]),t._v(" "),s("p",[t._v("React Native （简称 RN ）是 Facebook 于 2015 年 4 月开源的跨平台移动应用开发框架，是 Facebook 早先开源的 Web 框架 React 在原生移动应用平台的衍生产物，目前支持 iOS 和 Android 两个平台。RN 使用JSX 语言（扩展后的 JavaScript，主要是可以在 JavaScript 中写 HTML标签）和 CSS 来开发移动应用。因此，熟悉 Web 前端开发的技术人员只需很少的学习就可以进入移动应用开发领域。")]),t._v(" "),s("p",[t._v("由于 RN 和 React 原理相通，并且 Flutter在应用层也是受 React 启发，很多思想也都是相通的，因此，我们有必要深入了解一下React原理。")]),t._v(" "),s("p",[t._v("React 是一个"),s("strong",[t._v("响应式")]),t._v("的 Web 框架，我们先了解一下两个重要的概念：DOM 树与响应式编程。")]),t._v(" "),s("h3",{attrs:{id:"dom树与控件树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom树与控件树"}},[t._v("#")]),t._v(" DOM树与控件树")]),t._v(" "),s("p",[t._v("文档对象模型（Document Object Model，简称DOM），是 W3C 组织推荐的处理可扩展标志语言的标准编程接口，一种独立于平台和语言的方式访问和修改一个文档的内容和结构。换句话说，这是表示和处理一个 HTML 或XML 文档的标准接口。简单来说，DOM 就是文档树，与用户界面控件树对应，在前端开发中通常指 HTML 对应的渲染树，但广义的 DOM 也可以指 Android 中的 XML 布局文件对应的控件树，而术语"),s("strong",[t._v("DOM操作")]),t._v("就是指直接来操作渲染树（或控件树）， 因此，可以看到其实 DOM 树和控件树是等价的概念，只不过前者常用于 Web 开发中，而后者常用于原生开发中。")]),t._v(" "),s("h3",{attrs:{id:"响应式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式编程"}},[t._v("#")]),t._v(" 响应式编程")]),t._v(" "),s("p",[t._v("React 中提出一个重要思想：状态改变则UI随之自动改变。而 React 框架本身就是响应用户状态改变的事件而执行重新构建用户界面的工作，这就是典型的 "),s("strong",[t._v("响应式")]),t._v(" 编程范式，下面我们总结一下 React 中响应式原理：")]),t._v(" "),s("ul",[s("li",[t._v("开发者只需关注状态转移（数据），当状态发生变化，React 框架会自动根据新的状态重新构建UI。")]),t._v(" "),s("li",[t._v("React 框架在接收到用户状态改变通知后，会根据当前渲染树，结合最新的状态改变，通过 Diff 算法，计算出树中变化的部分，然后只更新变化的部分（DOM操作），从而避免整棵树重构，提高性能。")])]),t._v(" "),s("p",[t._v("值得注意的是，在第二步中，状态变化后 React 框架并不会立即去计算并渲染 DOM 树的变化部分，相反，React会在 DOM 树的基础上建立一个抽象层，即"),s("strong",[t._v("虚拟DOM")]),t._v("树，对数据和状态所做的任何改动，都会被自动且高效的同步到虚拟 DOM ，最后再批量同步到真实 DOM 中，而不是每次改变都去操作一下DOM。")]),t._v(" "),s("p",[t._v("为什么不能每次改变都直接去操作 DOM 树？这是因为在浏览器中每一次 DOM 操作都有可能引起浏览器的重绘或回流（重新排版布局，确定 DOM 节点的大小和位置）：")]),t._v(" "),s("ol",[s("li",[t._v("如果 DOM 只是外观风格发生变化，如颜色变化，会导致浏览器重绘界面。")]),t._v(" "),s("li",[t._v("如果 DOM 树的结构发生变化，如尺寸、布局、节点隐藏等导致，浏览器就需要回流。")])]),t._v(" "),s("p",[t._v("而浏览器的重绘和回流都是比较昂贵的操作，如果每一次改变都直接对 DOM 进行操作，这会带来性能问题，而批量操作只会触发一次 DOM 更新，会有更高的性能。")]),t._v(" "),s("blockquote",[s("p",[t._v("思考题：Diff操作和DOM批量更新难道不应该是浏览器的职责吗？第三方框架中去做合不合适？")])]),t._v(" "),s("h3",{attrs:{id:"react-native"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-native"}},[t._v("#")]),t._v(" React Native")]),t._v(" "),s("p",[t._v("上文已经提到 React Native 是 React 在原生移动应用平台的衍生产物，那两者主要的区别是什么呢？其实，主要的区别在于虚拟 DOM 映射的对象是什么。React中虚拟 DOM 最终会映射为浏览器 DOM 树，而 RN 中虚拟 DOM会通过 JavaScriptCore 映射为原生控件。")]),t._v(" "),s("p",[t._v("JavaScriptCore 是一个JavaScript解释器，它在React Native中主要有两个作用：")]),t._v(" "),s("ol",[s("li",[t._v("为 JavaScript 提供运行环境。")]),t._v(" "),s("li",[t._v("是 JavaScript 与原生应用之间通信的桥梁，作用和 JsBridge 一样，事实上，在 iOS 中，很多 JsBridge 的实现都是基于 JavaScriptCore 。")])]),t._v(" "),s("p",[t._v("而 RN 中将虚拟 DOM 映射为原生控件的过程主要分两步：")]),t._v(" "),s("ol",[s("li",[t._v("布局消息传递； 将虚拟 DOM 布局信息传递给原生；")]),t._v(" "),s("li",[t._v("原生根据布局信息通过对应的原生控件渲染；")])]),t._v(" "),s("p",[t._v("至此，React Native 便实现了跨平台。 相对于混合应用，由于React Native是 原生控件渲染，所以性能会比混合应用中 H5 好一些，同时 React Native 提供了很多原生组件对应的 Web 组件，大多数情况下开发者只需要使用 Web 技术栈 就能开发出 App。我们可以发现，这样也就做到了维护一份代码，便可以跨平台了。")]),t._v(" "),s("h3",{attrs:{id:"weex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weex"}},[t._v("#")]),t._v(" Weex")]),t._v(" "),s("p",[t._v("Weex 是阿里巴巴于 2016 年发布的跨平台移动端开发框架，思想及原理和 React Native 类似，底层都是通过原生渲染的，不同是应用层开发语法 （即 DSL，Domain Specific Language）：Weex 支持 Vue 语法和 Rax 语法，Rax 的 DSL(Domain Specific Language) 语法是基于 React JSX 语法而创造，而 RN 的 DSL 是基于 React 的，不支持 Vue。")]),t._v(" "),s("h3",{attrs:{id:"总结-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结-2"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("JavaScript 开发 + 原生渲染 的方式主要优点如下：")]),t._v(" "),s("ol",[s("li",[t._v("采用 Web 开发技术栈，社区庞大、上手快、开发成本相对较低。")]),t._v(" "),s("li",[t._v("原生渲染，性能相比 H5 提高很多。")]),t._v(" "),s("li",[t._v("动态化较好，支持热更新。")])]),t._v(" "),s("p",[t._v("不足：")]),t._v(" "),s("ol",[s("li",[t._v("渲染时需要 JavaScript 和原生之间通信，在有些场景如拖动可能会因为通信频繁导致卡顿。")]),t._v(" "),s("li",[t._v("JavaScript 为脚本语言，执行时需要解释执行 （这种执行方式通常称为 JIT，即 Just In Time，指在执行时实时生成机器码），执行效率和编译类语言（编译类语言的执行方式为 AOT ，即 Ahead Of Time，指在代码执行前已经将源码进行了预处理，这种预处理通常情况下是将源码编译为机器码或某种中间码）仍有差距。")]),t._v(" "),s("li",[t._v("由于渲染依赖原生控件，不同平台的控件需要单独维护，并且当系统更新时，社区控件可能会滞后；除此之外，其控件系统也会受到原生UI系统限制，例如，在 Android 中，手势冲突消歧规则是固定的，这在使用不同人写的控件嵌套时，手势冲突问题将会变得非常棘手。这就会导致，如果需要自定义原生渲染组件时，开发和维护成本过高。")])]),t._v(" "),s("h2",{attrs:{id:"_1-1-4-qt-mobile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-qt-mobile"}},[t._v("#")]),t._v(" 1.1.4 Qt Mobile")]),t._v(" "),s("p",[t._v("我们看看最后一种跨平台技术：自绘UI + 原生。这种技术的思路是：通过在不同平台实现一个统一接口的渲染引擎来绘制UI，而不依赖系统原生控件，所以可以做到不同平台UI的一致性。")]),t._v(" "),s("p",[t._v("注意，自绘引擎解决的是 UI 的跨平台问题，如果涉及其它系统能力调用，依然要涉及原生开发。这种平台技术的优点如下：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("性能高；由于自绘引擎是直接调用系统API来绘制UI，所以性能和原生控件接近。")])]),t._v(" "),s("li",[s("p",[t._v("灵活、组件库易维护、UI外观保真度和一致性高；由于UI渲染不依赖原生控件，也就不需要根据不同平台的控件单独维护一套组件库，所以代码容易维护。由于组件库是同一套代码、同一个渲染引擎，所以在不同平台，组件显示外观可以做到高保真和高一致性；另外，由于不依赖原生控件，也就不会受原生布局系统的限制，这样布局系统会非常灵活。")])])]),t._v(" "),s("p",[t._v("不足：")]),t._v(" "),s("ol",[s("li",[t._v("动态性不足；为了保证UI绘制性能，自绘UI系统一般都会采用 AOT 模式编译其发布包，所以应用发布后，不能像 Hybrid 和 RN 那些使用 JavaScript（JIT）作为开发语言的框架那样动态下发代码。")]),t._v(" "),s("li",[t._v("应用开发效率低：Qt 使用 C++ 作为其开发语言，而编程效率是直接会影响 App 开发效率的，C++ 作为一门静态语言，在 UI 开发方面灵活性不及 JavaScript 这样的动态语言，另外，C++需要开发者手动去管理内存分配，没有 JavaScript 及Java中垃圾回收（GC）的机制。")])]),t._v(" "),s("p",[t._v("也许你已经猜到 Flutter 就属于这一类跨平台技术，没错，Flutter 正是实现一套自绘引擎，并拥有一套自己的 UI 布局系统，且同时在开发效率上有了很大突破。不过，自绘制引擎的思路并不是什么新概念，Flutter并不是第一个尝试这么做的，在它之前有一个典型的代表，即大名鼎鼎的Qt。")]),t._v(" "),s("h3",{attrs:{id:"qt-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-简介"}},[t._v("#")]),t._v(" Qt 简介")]),t._v(" "),s("p",[t._v("Qt 是一个1991年由 Qt Company 开发的跨平台 C++ 图形用户界面应用程序开发框架。2008年，Qt Company 科技被诺基亚公司收购，Qt 也因此成为诺基亚旗下的编程语言工具。2012年，Qt 被 Digia 收购。2014年4月，跨平台集成开发环境 Qt Creator 3.1.0 正式发布，实现了对于 iOS 的完全支持，新增 WinRT、Beautifier 等插件，废弃了无 Python 接口的 GDB 调试支持，集成了基于 Clang 的 C/C++ 代码模块，并对 Android 支持做出了调整，至此实现了全面支持 iOS、Android、WP，它提供给应用程序开发者构建图形用户界面所需的所有功能。")]),t._v(" "),s("p",[t._v("但是，Qt 虽然在 PC 端获得了巨大成功，备受社区追捧，然而其在移动端却表现不佳，在近几年，虽然偶尔能听到 Qt 的声音，但一直很弱，无论 Qt 本身技术如何、设计思想如何，但事实上终究是败了，究其原因，笔者认为主要有四：")]),t._v(" "),s("p",[t._v("第一：Qt 移动开发社区太小，学习资料不足，生态不好。")]),t._v(" "),s("p",[t._v("第二：官方推广不利，支持不够。")]),t._v(" "),s("p",[t._v("第三：移动端发力较晚，市场已被其它动态化框架占领（ Hybrid 和 RN )。")]),t._v(" "),s("p",[t._v("第四：在移动开发中，C++ 开发和Web开发栈相比有着先天的劣势，直接结果就是 Qt 开发效率太低。")]),t._v(" "),s("p",[t._v("基于此四点，尽管 Qt 是移动端开发跨平台自绘引擎的先驱，但却成为了烈士。")]),t._v(" "),s("h2",{attrs:{id:"_1-1-5-flutter出世"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-5-flutter出世"}},[t._v("#")]),t._v(" 1.1.5 Flutter出世")]),t._v(" "),s("p",[t._v("“千呼万唤始出来”，铺垫这么久，现在终于等到本书的主角出场了！")]),t._v(" "),s("p",[t._v("Flutter 是 Google 发布的一个用于创建跨平台、高性能移动应用的框架。Flutter 和 Qt mobile 一样，都没有使用原生控件，相反都实现了一个自绘引擎，使用自身的布局、绘制系统。那么，我们会担心，Qt mobile 面对的问题Flutter是否也一样，Flutter会不会步入Qt mobile后尘，成为另一个烈士？要回到这个问题，我们先来看看Flutter诞生过程：从 2017 年 Google I/O 大会上，Google 首次发布 Flutter 到 2021年8月底，已经有 127K 的 Star，Star 数量 Github 上排名前 20 。经历了4年多的时间，Flutter 生态系统得以快速增长，国内外有非常基于 Flutter 的成功案例，国内的互联网公司基本都有专门的 Flutter 团队。总之，历时 4 年，Flutter 发展飞快，已在业界得到了广泛的关注和认可，在开发者中受到了热烈的欢迎，成为了移动跨端开发中最受欢迎的框架之一。")]),t._v(" "),s("p",[t._v("现在，我们来和 Qt mobile做一个对比：")]),t._v(" "),s("ol",[s("li",[t._v("生态：Flutter 生态系统发展迅速，社区非常活跃，无论是开发者数量还是第三方组件都已经非常可观。")]),t._v(" "),s("li",[t._v("技术支持：现在 Google 正在大力推广Flutter，Flutter 的作者中很多人都是来自Chromium团队，并且 Github上活跃度很高。另一个角度，从 Flutter 诞生到现在，频繁的版本发布也可以看出 Google 对 Flutter的投入的资源不小，所以在官方技术支持这方面，大可不必担心。")]),t._v(" "),s("li",[t._v("开发效率：一套代码，多端运行；并且在开发过程中 Flutter 的热重载可帮助开发者快速地进行测试、构建UI、添加功能并更快地修复错误。在 iOS 和 Android 模拟器或真机上可以实现毫秒级热重载，并且不会丢失状态。这真的很棒，相信我，如果你是一名原生开发者，体验了Flutter开发流后，很可能就不想重新回去做原生了，毕竟很少有人不吐槽原生开发的编译速度。")])]),t._v(" "),s("p",[t._v("基于以上三点，相信读者和笔者一样，已经迫不及待的想要去了解一下 Flutter 了。到现在为止，我们已经对移动端开发技术有了一个全面的了解，接下来我们便要进入本书的主题，你准备好了吗！")]),t._v(" "),s("h2",{attrs:{id:"_1-1-6-小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-6-小结"}},[t._v("#")]),t._v(" 1.1.6 小结")]),t._v(" "),s("p",[t._v("本章主要介绍了目前移动开发中三种跨平台技术，现在我们从框架角度对比一下它们，如表1-1所示：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("技术类型")]),t._v(" "),s("th",[t._v("UI渲染方式")]),t._v(" "),s("th",[t._v("性能")]),t._v(" "),s("th",[t._v("开发效率")]),t._v(" "),s("th",[t._v("动态化")]),t._v(" "),s("th",[t._v("框架代表")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("H5 + 原生")]),t._v(" "),s("td",[t._v("WebView渲染")]),t._v(" "),s("td",[t._v("一般")]),t._v(" "),s("td",[t._v("高")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("Cordova、Ionic")])]),t._v(" "),s("tr",[s("td",[t._v("JavaScript + 原生渲染")]),t._v(" "),s("td",[t._v("原生控件渲染")]),t._v(" "),s("td",[t._v("好")]),t._v(" "),s("td",[t._v("中")]),t._v(" "),s("td",[t._v("支持")]),t._v(" "),s("td",[t._v("RN、Weex")])]),t._v(" "),s("tr",[s("td",[t._v("自绘UI + 原生")]),t._v(" "),s("td",[t._v("调用系统API渲染")]),t._v(" "),s("td",[t._v("好")]),t._v(" "),s("td",[t._v("Flutter高, Qt低")]),t._v(" "),s("td",[t._v("默认不支持")]),t._v(" "),s("td",[t._v("Qt、Flutter")])])])]),t._v(" "),s("center",[t._v("表1-1: 跨平台技术对比")]),t._v("\n上表中开发语言主要指应用层的开发语言，而开发效率，是指整个开发周期的效率，包括编码时间、调试时间、以及排错、处理兼容性问题时间。动态化主要指是否支持动态下发代码和是否支持热更新。值得注意的是 Flutter 的Release 包默认是使用 Dart AOT 模式编译的，所以不支持动态化，但 Dart 还有 JIT 或 snapshot 运行方式，这些模式都是支持动态化的。\n")],1)}),[],!1,null,null,null);a.default=v.exports}}]);