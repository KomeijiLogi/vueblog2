(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{52:function(t,s,a){t.exports={example:"example_KU-QR1qx"}},54:function(t,s,a){"use strict";var n=a(52),e=a.n(n);s.default=e.a},93:function(t,s,a){"use strict";a.r(s);var n={mounted:function(){document.querySelector("."+this.$style.example).textContent="这个块是被内联的脚本渲染的，样式也采用了内联样式。"}},e=a(54),r=a(0);var c=Object(r.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("pre",[a("code",[t._v(t._s(2))])]),t._m(13),a("p",[t._v("同样地，也可以使用指令:")]),t._m(14),t._m(15),t._m(16),a("pre",[a("code",t._l(3,function(s){return a("span",[t._v(t._s(s)+" ")])}))]),t._m(17),a("p",[t._v("编译后的组件没有私有数据，但可以访问 "),a("router-link",{attrs:{to:"./custom-themes.html#site-and-page-metadata"}},[t._v("网站的元数据")]),t._v("，举例来说：")],1),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),a("p",[t._v("你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：")]),t._m(31),a("demo-1"),a("OtherComponent"),t._m(32),t._m(33),t._m(34),a("p",{staticClass:"demo",class:t.$style.example})],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"在-markdown-中-使用-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-markdown-中-使用-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 Markdown 中 使用 Vue")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"浏览器的-api-访问限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的-api-访问限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器的 API 访问限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当你在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染，因此所有的 Vue 相关代码都应当遵循 "),s("a",{attrs:{href:"https://ssr.vuejs.org/zh/universal.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("编写通用代码")]),this._v(" 的要求。简而言之，请确保只在 "),s("code",[this._v("beforeMounted")]),this._v(" 或者 "),s("code",[this._v("mounted")]),this._v(" 访问浏览器 / DOM 的 API。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你正在使用，或者需要展示一个对于 SSR 不怎么友好的组件（比如包含了自定义指令），你可以将它们包裹在内置的 "),s("code",[this._v("<ClientOnly>")]),this._v(" 组件中：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请注意，这并不能解决一些组件或库在"),s("strong",[this._v("导入")]),this._v("时就试图访问浏览器 API 的问题 —— 如果需要使用这样的组件或库，你需要在合适的生命周期钩子中"),s("strong",[this._v("动态导入")]),this._v("它们：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"模板语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插值","aria-hidden":"true"}},[this._v("#")]),this._v(" 插值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("每一个 Markdown 文件将首先被编译成 HTML，接着作为一个 Vue 组件传入 "),s("code",[this._v("vue-loader")]),this._v("，这意味着你可以在文本中使用 Vue 风格的插值：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ 1 + 1 }}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 指令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"访问网站以及页面的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问网站以及页面的数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问网站以及页面的数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("{{ $page }}\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"path"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"title"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"escaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#escaping","aria-hidden":"true"}},[this._v("#")]),this._v(" Escaping")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认情况下，块级 (block) 的代码块将会被自动包裹在 "),s("code",[this._v("v-pre")]),this._v(" 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 "),s("code",[this._v("v-pre")]),this._v(" 来包裹：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Input")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("::: v-pre\n"),s("span",{attrs:{class:"token code keyword"}},[this._v("`{{ This will be displayed as-is }}`")]),this._v("\n:::\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Output")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[s("code",[this._v("{{ This will be displayed as-is }}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所有在 "),s("code",[this._v(".vuepress/components")]),this._v(" 中找到的 "),s("code",[this._v("*.vue")]),this._v(" 文件将会自动地被注册为全局的异步组件，如：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      └─ OtherComponent.vue\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("重要！")]),s("p",[this._v("请确保一个自定义组件的名字包含连接符或者是 PascalCase，否则，它将会被视为一个内联元素，并被包裹在一个 "),s("code",[this._v("<p>")]),this._v(" 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， "),s("code",[this._v("<p>")]),this._v(" 标签中不允许放置任何块级元素。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"脚本和样式提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本和样式提升","aria-hidden":"true"}},[this._v("#")]),this._v(" 脚本和样式提升")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 "),a("code",[t._v("<script>")]),t._v(" 或者 "),a("code",[t._v("<style>")]),t._v(" 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 "),a("code",[t._v("<script>")]),t._v(" 和 "),a("code",[t._v("<style>")]),t._v(" 标签。")])}],!1,function(t){this.$style=e.default.locals||e.default},null,null);s.default=c.exports}}]);