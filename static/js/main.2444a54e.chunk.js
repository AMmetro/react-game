(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),s=c.n(r),i=(c(15),c(6)),o=c(3),l=(c(16),c(8)),u=c(10),j=c(9),d=c.p+"static/media/mus.032b32d7.mp3",b=c(0),h=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).playMy=function(){e.player.play()},e.render=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:e.playMy,children:"music "}),Object(b.jsx)("audio",{id:"sound",src:d,ref:function(t){return e.player=t}})]})},e}return c}(a.a.Component);var O=function(){var e,t=Object(n.useState)(Array(9).fill(null)),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(0),l=Object(o.a)(s,2),u=l[0],j=l[1],d=Object(n.useState)(!1),O=Object(o.a)(d,2),m=O[0],f=O[1],v=Object(n.useState)(100),p=Object(o.a)(v,2),x=p[0],g=p[1],y=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];u%2==0&&(e="X"),u%2!=0&&(e="O");var N=function(e){"X"===e.currentTarget.value&&j(0),"O"===e.currentTarget.value&&j(1)},k=function(e){for(var t=0;t<8;t++)e[y[t][0]]===e[y[t][1]]&&e[y[t][1]]===e[y[t][2]]&&null!=e[y[t][1]]&&alert(e[y[t][1]]+" win")};if(m)for(var w=1;w<999;){var _=Math.floor(8*Math.random());if(null==a[_]){var C=Object(i.a)(a);C[_]=e,f(!m),r(C),j(u+1),w=999}w++}var T=a.map((function(t,c){return Object(b.jsx)("div",{className:"game_cell",data:c,onClick:function(t){return function(t){var c=t.currentTarget.getAttribute("data"),n=Object(i.a)(a).map((function(t,n,a){return c==n&&null==t?(g(x+1),setTimeout((function(){f(!m)}),300),j(u+1),e):t}));r(n),k(n)}(t)},children:Object(b.jsx)("p",{className:"mark",children:t})})}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)("button",{onClick:function(){alert("fgh")},children:"sound"}),Object(b.jsxs)("div",{className:"main_container",children:[Object(b.jsx)("div",{className:"header",children:"TIC TOC GAME"}),Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("button",{className:"reset_game",onClick:function(){window.location.reload()},children:"Reset"}),Object(b.jsxs)("div",{className:"display",children:[Object(b.jsx)("span",{children:"\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0445\u043e\u0434\u043e\u0432"}),Object(b.jsx)("span",{className:"score_window",children:x})]}),Object(b.jsxs)("div",{className:"store_container",children:[Object(b.jsx)("button",{className:"store_button",onClick:function(){var e=JSON.stringify(a);localStorage.setItem("keyTicToc",e)},children:"Save"}),Object(b.jsx)("button",{className:"store_button",onClick:function(){var e=localStorage.getItem("keyTicToc");if(null!==e){var t=JSON.parse(e);r(t)}},children:"Restore"})]})]}),Object(b.jsxs)("div",{className:"choice_menu",children:[Object(b.jsx)("input",{type:"radio",id:"tic",name:"contact",value:"X",onClick:function(e){return N(e)},checked:!0}),Object(b.jsx)("label",{htmlFor:"tic",children:"\u0418\u0433\u0440\u0430\u0442\u044c \u043a\u0440\u0435\u0441\u0442\u0438\u043a\u0430\u043c\u0438"}),Object(b.jsx)("input",{type:"radio",id:"toc",name:"contact",value:"O",onClick:function(e){return N(e)}}),Object(b.jsx)("label",{htmlFor:"toc",children:"\u0418\u0433\u0440\u0430\u0442\u044c \u043d\u043e\u043b\u0438\u043a\u0430\u043c\u0438"})]}),Object(b.jsx)("div",{className:"game_box_container",children:T}),Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("a",{href:"https://rs.school/js/",children:Object(b.jsx)("img",{src:"https://rs.school/images/rs_school_js.svg",style:{width:"40px"}})}),Object(b.jsx)("span",{className:"git_link",children:"https://github.com/AMmetro/"}),Object(b.jsx)("span",{children:"youtube"})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(O,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2444a54e.chunk.js.map