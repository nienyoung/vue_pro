webpackJsonp([0],[,,function(e,t,a){a(13);var n=a(0)(null,a(25),"data-v-68e7edbc",null);e.exports=n.exports},,function(e,t,a){"use strict";var n=a(1),r=a(27),s=a(19),o=(a.n(s),a(20)),i=a.n(o),u=a(21),l=a.n(u);n.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Index",component:i.a},{path:"/manage",name:"Manage",component:l.a}]})},function(e,t,a){a(11);var n=a(0)(a(6),a(22),null,null);e.exports=n.exports},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a.n(n);t.default={components:{FooterNav:r.a},data:function(){return{isNowPage:!0}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a.n(n);t.default={components:{footerNav:r.a},data:function(){return{isNowPage:!0,showAdd:!1,showEdit:!1,books:[{name:"红楼梦"},{name:"西游记"},{name:"水浒传"},{name:"三国演义"}],nameValue:"",newName:"",editId:0}},methods:{add:function(){this.showAdd=!0},addName:function(){var e=this.nameValue;if(""==e.trim())alert("请输入新增图书名称");else{var t={};t.name=e,this.peoples.push(t)}},del:function(e){var t=e.target.offsetParent.id;this.peoples.splice(t,1)},edit:function(e){var t=e.target.offsetParent.id;this.showEdit=!0,this.editId=t,this.newName=this.peoples[t].name},cancel:function(){this.showEdit=!1},editName:function(){""==this.newName.trim()?alert("请输入图书名称"):(this.peoples[this.editId].name=this.newName,this.showEdit=!1)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(5),s=a.n(r),o=a(4);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t,a){e.exports=a.p+"static/img/logo.af5d533.png"},function(e,t,a){a(14);var n=a(0)(a(7),a(26),"data-v-f86128f2",null);e.exports=n.exports},function(e,t,a){var n=a(0)(a(8),a(24),null,null);e.exports=n.exports},function(e,t,a){a(12);var n=a(0)(a(9),a(23),null,null);e.exports=n.exports},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{src:a(18)}}),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage tc"},[a("button",{on:{click:e.add}},[e._v("新增")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdd,expression:"showAdd"}],staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nameValue,expression:"nameValue"}],attrs:{type:"text",placeholder:"请输入图书名称"},domProps:{value:e.nameValue},on:{input:function(t){t.target.composing||(e.nameValue=t.target.value)}}}),e._v(" "),a("button",{on:{click:e.addName}},[e._v("确定")])]),e._v(" "),a("table",[e._m(0,!1,!1),e._v(" "),e._l(e.books,function(t,n){return a("tr",[a("td",[e._v("\n\t\t\t\t"+e._s(t.name)+"\n\t\t\t")]),e._v(" "),a("td",{attrs:{id:n}},[a("span",{on:{click:e.edit}},[e._v("编辑")]),e._v(" "),a("span",{on:{click:e.del}},[e._v("删除")])])])})],2),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showEdit,expression:"showEdit"}],staticClass:"wrap"},[a("div",{staticClass:"content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text",placeholder:"请输入图书名称"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),a("button",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("button",{on:{click:e.editName}},[e._v("确定")])])]),e._v(" "),a("footer-nav",{class:{isManage:e.isNowPage}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("图书")]),e._v(" "),a("th",[e._v("操作")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("欢迎来到图书管理系统")]),e._v(" "),a("footer-nav",{class:{isIndex:e.isNowPage}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer fixed"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("首页")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/manage"}},[e._v("图书管理")])],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Essential Links")]),e._v(" "),e._m(0,!1,!1),e._v(" "),a("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1,!1,!1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}}],[10]);
//# sourceMappingURL=app.ce61afa78aa77b4d2443.js.map