(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{455:function(t,a,s){"use strict";s.r(a);var e=s(22),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"一-配置服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-配置服务器"}},[t._v("#")]),t._v(" 一.配置服务器")]),t._v(" "),s("p",[t._v("在catalina.sh 中添加 address 调试端口 9999  "),s("strong",[t._v("catalina.sh的位置在tocmat下的bin目录")])]),t._v(" "),s("blockquote",[s("p",[t._v("以下方法任选其一")])]),t._v(" "),s("p",[t._v("第一种方法")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,address=9999,suspend=n,server=y"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("第二种方法")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('CATALINA_OPTS="-server -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=9999" \n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"二-配置ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-配置ide"}},[t._v("#")]),t._v(" 二.配置IDE")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"编辑启动配置","data-src":"/images/posts/problem-idea-remote-debug/20180720213720867.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"点击+号,选择remote","data-src":"/images/posts/problem-idea-remote-debug/2018072021380811.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"将host改成服务器的ip地址,port改成刚配置好的端口.","data-src":"/images/posts/problem-idea-remote-debug/20180720213902702.png",loading:"lazy"}})]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("以debug模式运行")]),t._v(" "),s("p",[t._v("当控制台出现“Connected to the target VM, address: ‘xx.xx.xx.xx:9999’, transport: ‘socket’”的字样即可,记得加入要调试的断点.")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("#end")])])}),[],!1,null,null,null);a.default=r.exports}}]);