/*! kui-vue v1.9.2 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{KxEz:function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"theme"},[s("h2",[e._v("定制主题")]),e._v(" "),s("p",[e._v("主题可以根据自己的喜好，和项目定制的风格来开发，可以定制颜色和圆角风格。")]),e._v(" "),s("img",{attrs:{src:t("irBC")}}),e._v(" "),s("br"),e._v(" "),s("h3",[e._v("覆盖定制")]),e._v(" "),s("p",[e._v("如果项目使用webpack构建，可以通过覆盖less变量来定制主题")]),e._v(" "),s("p",[e._v("新建一个less 文件 如：'assets/styles/custom.less',写下如下内容：")]),e._v(" "),s("Code",{attrs:{lang:"js"}},[e._v("\n    "+e._s(e.a)+"\n  ")]),e._v(" "),s("p",[e._v("然后在入口文件 main.js 内导入这个 less 文件即可：")]),e._v(" "),s("Code",{attrs:{lang:"js"}},[e._v("\n    "+e._s(e.b)+"\n  ")])],1)},u=[];t.d(n,"a",function(){return s}),t.d(n,"b",function(){return u})},Z3Wf:function(e,n,t){"use strict";t.r(n);var s=t("KxEz"),u=t("zjHY");for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);var i=t("KHd+"),a=Object(i.a)(u.default,s.a,s.b,!1,null,null,null);a.options.__file="theme.vue",n.default=a.exports},irBC:function(e,n,t){e.exports=t.p+"img/theme.jpg?77e3bb3"},vlUn:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s,u=t("w3Nn"),r=(s=u)&&s.__esModule?s:{default:s};n.default={components:{Code:r.default},data:function(){return{a:"//引入 styles\n@import '~kui-vue/src/styles/index.less';\n\n// 主色覆盖为 ff0055\n@main :#ff0055;\n\n// 组件的圆角覆盖为5px\n@radius:~'5px';",b:"import Vue from 'vue';\nimport kui from 'kui-vue';\nimport 'assets/styles/custom.less';\n\nVue.use(kui);"}}}},zjHY:function(e,n,t){"use strict";t.r(n);var s=t("vlUn"),u=t.n(s);for(var r in s)"default"!==r&&function(e){t.d(n,e,function(){return s[e]})}(r);n.default=u.a}}]);