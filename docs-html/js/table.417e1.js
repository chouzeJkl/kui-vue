/*! kui-vue v1.9.2 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+1lE":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={base:'<Button @click="bordered=!bordered" type="primary">表格边框</Button>\n<Button @click="mini=!mini" type="primary">mini</Button>\n<Table :data="data" :columns="col" :mini="mini" @selection="select" :text-max-length="20" :bordered="bordered"></Table>\n<script>\nexport default {\n  data() {\n    return {\n      code: code,\n      bordered: false,\n      mini: false,\n      data: [\n        { nick: "<a>链接文字长--链接文字长--链接文字长--</a>", center: "居中",right: "右对其", birthday: "", tip: \'短文字提示\', action: "" },\n        { nick: "高总", center: "居中",right: "右对其", birthday: "", tip: \'我是很长很长很长很长很长很长很长很长很长一段文字\', action: "" },\n        { nick: "娟娟", center: "居中",right: "右对其", birthday: "", tip: \'短文字提示\', action: "" },\n        { nick: "鱼雷", center: "居中",right: "右对其", birthday: "", tip: \'我是很长很长很长很长很长很长很长很长很长一段文字\', action: "" }\n      ],\n      col: [\n        { type: "selection" },\n        { title: "姓名", key: "nick",type:\'html\' },\n        { title: "右对其", key: "right", textAlign: "right" },\n        { title: "居中", key: "center", textAlign: "center" },\n        { title: "文字提示", key: "tip", },\n        {\n          title: "出生年月",\n          key: "birthday",\n          width: 150,\n          render: (h, p) => {\n            return h("DatePicker",\n              {\n                props: { mini: true, width: 120, lang: "en", transfer: true, value: p.row.birthday },\n                on: { change: v => { p.row.birthday = v; console.log(\'回调\', this.data) } }\n              },\n            );\n          }\n        },\n        {\n          title: "操作",\n          key: "action",\n          width: 100,\n          render: (h, p) => {\n            return h("Poptip",\n              {\n                props: { transfer: true, confirm: true, title: "是否删除数据？", placement: "left-bottom" },\n                on: { ok: () => { this.data.splice(p.index, 1); } }\n              },\n              [h("Button", { props: { type: "danger", mini: true } }, "删除")]\n            );\n          }\n        }\n      ],\n      row: []\n    };\n  },\n  methods: {\n    select(row) {\n      this.row = row;\n      console.log("当前选中：", row);\n    }\n  }\n};\n<\/script>'};e.default=i},"/GuI":function(t,e,n){"use strict";n.r(e);var i=n("gjD+"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},"052q":function(t,e,n){"use strict";n.r(e);var i=n("Zm/V"),r=n("/GuI");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var d=n("KHd+"),a=Object(d.a)(r.default,i.a,i.b,!1,null,null,null);a.options.__file="table.vue",e.default=a.exports},AGwT:function(t,e,n){"use strict";n.r(e);var i=n("mNc1"),r=n("f2WU");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var d=n("KHd+"),a=Object(d.a)(r.default,i.a,i.b,!1,null,null,null);a.options.__file="demo.vue",e.default=a.exports},LHuI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n("YEIV")),r=a(n("w3Nn")),o=a(n("Ff65")),d=a(n("7+I9"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:d.default},components:{Code:r.default,Collapse:o.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(0,i.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},ZNdt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n("AGwT"),o=(i=r)&&i.__esModule?i:{default:i};e.default=o.default},"Zm/V":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Table 表格")]),t._v(" "),n("Alert",[t._v("注意：非 template/render 模式下，需使用 k-table。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基础／组件嵌套",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary",mini:""},on:{click:function(e){t.bordered=!t.bordered}}},[t._v("表格边框")]),t._v(" "),n("Button",{attrs:{type:"primary",mini:""},on:{click:function(e){t.mini=!t.mini}}},[t._v("mini")]),t._v(" "),n("Table",{attrs:{data:t.data,columns:t.col,mini:t.mini,"text-max-length":20,bordered:t.bordered},on:{selection:t.select}})],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("表格没做太复杂的展示，通过\n      "),n("code",[t._v("bordered")]),t._v("可以设置是否有边框，\n      "),n("code",[t._v("mini")]),t._v("来设置表格大小模式")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("h3",[t._v("Table API")]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("Column API")]),t._v(" "),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border",staticStyle:{overflow:"visible"}},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("bordered")]),t._v(" "),n("td",[t._v("是否显示边框")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("header-fixed")]),t._v(" "),n("td",[t._v("是否固定表头")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("mini")]),t._v(" "),n("td",[t._v("表格是否为mini模式")]),t._v(" "),n("td",[t._v("Boolean ")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("显示的结构化数据")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[ ]")])]),t._v(" "),n("tr",[n("td",[t._v("columns")]),t._v(" "),n("td",[t._v("表格列的配置描述，")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[ ]")])]),t._v(" "),n("tr",[n("td",[t._v("noDataText")]),t._v(" "),n("td",[t._v("数据为空时显示的提示内容")]),t._v(" "),n("td",[t._v("String ")]),t._v(" "),n("td",[t._v("暂无数据")])]),t._v(" "),n("tr",[n("td",[t._v("selection")]),t._v(" "),n("td",[t._v("多选或单选触发，多选：返回当前所有已经选择的项"),n("br"),t._v("单选：返回所有勾选和 当前选择单项 ")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("列类型，可选值为 selection、html")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("列头显示文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("text-align")]),t._v(" "),n("td",[t._v("列文字对其方式 ，可选值left，center，right")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("text-max-length")]),t._v(" "),n("td",[t._v("表格的字符最大限度，超过部分会以点点点显示")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("对应列内容的字段名")]),t._v(" "),n("td",[t._v("String ")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("列宽")]),t._v(" "),n("td",[t._v("Number ")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("overflow")]),t._v(" "),n("td",[t._v("当设置列宽\n          "),n("code",[t._v("width")]),t._v("之后，超出文字是否隐藏以点点点显示")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("tooltip")]),t._v(" "),n("td",[t._v("文字过长隐藏之后，鼠标划过 是否展示title")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("render")]),t._v(" "),n("td",[t._v("自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引")]),t._v(" "),n("td",[t._v("Function ")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},f2WU:function(t,e,n){"use strict";n.r(e);var i=n("LHuI"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=r.a},"gjD+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("+1lE")),r=o(n("ZNdt"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:r.default},data:function(){var t=this;return{code:i.default,bordered:!1,mini:!1,data:[{nick:"<a>链接文字长--链接文字长--链接文字长--</a>",center:"居中",right:"右对其",birthday:"",tip:"短文字提示",action:""},{nick:"高总",center:"居中",right:"右对其",birthday:"",tip:"我是很长很长很长很长很长很长很长很长很长一段文字",action:""},{nick:"娟娟",center:"居中",right:"右对其",birthday:"",tip:"短文字提示",action:""},{nick:"鱼雷",center:"居中",right:"右对其",birthday:"",tip:"我是很长很长很长很长很长很长很长很长很长一段文字",action:""}],col:[{type:"selection"},{title:"姓名",key:"nick",type:"html"},{title:"右对其",key:"right",textAlign:"right"},{title:"居中",key:"center",textAlign:"center"},{title:"文字提示",key:"tip"},{title:"出生年月",key:"birthday",width:150,render:function(e,n){return e("DatePicker",{props:{mini:!0,width:120,lang:"en",transfer:!0,value:n.row.birthday},on:{change:function(e){n.row.birthday=e,console.log("回调",t.data)}}})}},{title:"操作",key:"action",width:100,render:function(e,n){return e("Poptip",{props:{transfer:!0,confirm:!0,title:"是否删除数据？",placement:"left-bottom"},on:{ok:function(){t.data.splice(n.index,1)}}},[e("Button",{props:{type:"danger",mini:!0}},"删除")])}}],row:[]}},methods:{select:function(t,e){this.row=t,console.log("当前选中：",t,e)}}}},mNc1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})}}]);