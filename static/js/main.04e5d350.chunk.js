(this["webpackJsonpbp-mobile"]=this["webpackJsonpbp-mobile"]||[]).push([[0],{251:function(e,t,a){e.exports=a(411)},257:function(e,t,a){},258:function(e,t,a){},306:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),o=(a(256),a(43)),i=(a(257),a(248)),u=a(166),m=a.n(u),b=a(220),s=a(82),d=a(418),f=a(430),h=a(431),v=a(432),y=a(433),O=a(434),j=(a(258),a(77)),p=function(e){var t=e.title,a=e.onClickAction;return l.a.createElement("div",{onClick:a,className:"menu-content-block"},l.a.createElement(j.a,{block:!0,type:"primary"},t))},E=a(424),g=function(e){var t=e.labelTitle,a=e.placeholder,n=e.type,r=e.id,c=e.htmlFor,o=e.value,i=e.onChange;return l.a.createElement("div",{className:"menu-content-block"},l.a.createElement("label",{htmlFor:c},t),l.a.createElement(E.a,{value:o,onChange:function(e){return i(e.target.value)},id:r,placeholder:a,type:n}))},x=a(421),C=x.a.Option,Y=function(e){var t=e.title,a=void 0===t?"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b:":t,n=e.defaultValue,r=void 0===n?"circle":n,c=e.onChange,o=e.id,i=void 0===o?"addSelect":o,u=e.htmlFor,m=void 0===u?"addSelect":u,b=e.value;return l.a.createElement("div",{className:"menu-content-block"},l.a.createElement("label",{htmlFor:m},a),l.a.createElement(x.a,{id:i,value:b,defaultValue:r,style:{width:"100%"},onChange:c},l.a.createElement(C,{value:"circle"},"circle"),l.a.createElement(C,{value:"star"},"star"),l.a.createElement(C,{value:"square"},"square"),l.a.createElement(C,{value:"diamond"},"diamond"),l.a.createElement(C,{value:"triangleUp"},"triangleUp")))},X=d.a.SubMenu,k=function(e){var t=e.menuOpen,a=e.x,r=e.y,c=e.changeX,i=e.changeY,u=e.addObj,m=e.setSymbol,b=e.delObj,s=e.changeFill,j=e.fill,E=e.restart,x=e.rotateObj,C=e.changeRadius,k=e.radius,F=e.searchObj,T=e.newY,w=e.newX,S=e.changeNewX,N=e.changeNewY,M=e.moveObj,A=["sub1","sub2","sub3","sub4","sub5"],I=Object(n.useState)([]),q=Object(o.a)(I,2),R=q[0],z=q[1];return l.a.createElement("div",{style:t?{right:0}:null,className:"menu-content"},l.a.createElement("h2",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),l.a.createElement(d.a,{mode:"inline",openKeys:R,onOpenChange:function(e){var t=e.find((function(e){return-1===R.indexOf(e)}));-1===A.indexOf(t)?z([e]):z(t?[t]:[])},style:{width:256}},l.a.createElement(X,{onTitleClick:E,key:"sub1",icon:l.a.createElement(f.a,null),title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442"},l.a.createElement(g,{id:"addObjX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"addObjX",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",onChange:c,value:a}),l.a.createElement(g,{id:"addObjY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"addObjY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y:",onChange:i,value:r}),l.a.createElement(Y,{onChange:m}),l.a.createElement(g,{id:"addObjColor",type:"color",htmlFor:"addObjColor",labelTitle:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442:",onChange:s,value:j}),l.a.createElement(p,{onClickAction:u,title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442"})),l.a.createElement(X,{icon:l.a.createElement(h.a,null),key:"sub2",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onTitleClick:E},l.a.createElement(g,{id:"delObjX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"delObjX",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",onChange:c,value:a}),l.a.createElement(g,{id:"delObjY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"delObjY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y:",onChange:i,value:r}),l.a.createElement(p,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onClickAction:b})),l.a.createElement(X,{icon:l.a.createElement(v.a,null),key:"sub3",title:"\u041d\u0430\u0439\u0442\u0438 \u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onTitleClick:E},l.a.createElement(g,{id:"searchObjX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"searchObjX",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",onChange:c,value:a}),l.a.createElement(g,{id:"searchObjY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"searchObjY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y:",onChange:i,value:r}),l.a.createElement(p,{title:"\u041d\u0430\u0439\u0442\u0438 \u043e\u0431\u044a\u0435\u043a\u0442",onClickAction:F})),l.a.createElement(X,{key:"sub4",icon:l.a.createElement(y.a,null),title:"\u0412\u0440\u0430\u0449\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onTitleClick:E},l.a.createElement(g,{id:"rotateObjX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"rotateObjX",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X:",onChange:c,value:a}),l.a.createElement(g,{id:"rotateObjY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"rotateObjY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y:",onChange:i,value:r}),l.a.createElement(g,{id:"setRadius",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0434\u0438\u0443\u0441",type:"number",htmlFor:"delObjY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0434\u0438\u0443\u0441:",onChange:C,value:k}),l.a.createElement(p,{onClickAction:x,title:"\u0412\u0440\u0430\u0449\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442"})),l.a.createElement(X,{icon:l.a.createElement(O.a,null),key:"sub5",title:"\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onTitleClick:E},l.a.createElement(g,{id:"moveObjX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"moveObjX",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X:",onChange:c,value:a}),l.a.createElement(g,{id:"moveObjY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"moveObjY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y:",onChange:i,value:r}),l.a.createElement(g,{id:"moveObjNewX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"moveObjNewX",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X:",onChange:S,value:w}),l.a.createElement(g,{id:"moveObjNewY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"moveObjNewY",labelTitle:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y:",onChange:N,value:T}),l.a.createElement(p,{title:"\u041f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",onClickAction:M}))))},F="\u041e\u0431\u044a\u0435\u043a\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!",T="\u041e\u0431\u044a\u0435\u043a\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b!",w="\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 0 \u0438 \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 10!",S=function(e,t){var a=e.find((function(e){return e.x===t.x&&e.y===t.y}));if(a)return a},N=function(e){return(0^e.x)===e.x&&(0^e.y)===e.y},M=function(e){if(0<=e.x&&e.x<=10&&0<=e.y&&e.y<=10)return!0},A=function(){var e=document.querySelector(".error");e.classList.add("error-active"),setTimeout((function(){e.classList.remove("error-active")}),5e3)},I=function(e,t,a,n){var l=Object(s.a)(e);return l.forEach((function(e){!0===e.animate&&(e.x=t,e.y=a)})),new Promise((function(e){setTimeout((function(){e(l)}),n)}))},q=function(e,t,a){return 0===a?"\u0420\u0430\u0434\u0438\u0443\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d \u043d\u0443\u043b\u044e!":0<=e+a&&e+a<=10&&(0<=t+a&&t+a<=10)&&(0<=e-a&&e-a<=10)&&(0<=t-a&&t-a<=10)?void 0:"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0434\u0438\u0443\u0441! \u041e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b \u0441\u0435\u0442\u043a\u0438."},R=a(422),z=function(e){var t=e.hideModal,a=e.modalIsOpen,n=e.x,r=e.y,c=e.changeX,o=e.changeY,i=e.changeFill,u=e.fill,m=e.setSymbol,b=e.symbol,s=e.changeObj;return l.a.createElement(R.a,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442",visible:a,onOk:s,onCancel:t,cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430"},l.a.createElement("div",{className:"menu-modal"},l.a.createElement(g,{id:"objX",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 X",type:"number",htmlFor:"objX",labelTitle:"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430 X:",onChange:c,value:n}),l.a.createElement(g,{id:"objY",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443 Y",type:"number",htmlFor:"objY",labelTitle:"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430 Y:",onChange:o,value:r}),l.a.createElement(Y,{value:b,id:"objSymbol",htmlFor:"objSymbol",onChange:m,title:"\u0421\u0438\u043c\u0432\u043e\u043b"}),l.a.createElement(g,{id:"objColor",type:"color",htmlFor:"objColor",labelTitle:"\u0426\u0432\u0435\u0442:",onChange:i,value:u})))},B=function(e){var t=e.menuOpen,a=e.data,r=e.setData,c=e.setMessage,u=e.toggleMenuOpen,d=Object(n.useState)(0),f=Object(o.a)(d,2),h=f[0],v=f[1],y=Object(n.useState)(0),O=Object(o.a)(y,2),j=O[0],p=O[1],E=Object(n.useState)(0),g=Object(o.a)(E,2),x=g[0],C=g[1],Y=Object(n.useState)(0),X=Object(o.a)(Y,2),R=X[0],B=X[1],D=Object(n.useState)(0),J=Object(o.a)(D,2),L=J[0],U=J[1],V=Object(n.useState)("circle"),W=Object(o.a)(V,2),K=W[0],P=W[1],$=Object(n.useState)("#000000"),G=Object(o.a)($,2),H=G[0],Q=G[1],Z=Object(n.useState)(null),_=Object(o.a)(Z,2),ee=_[0],te=_[1],ae=Object(n.useState)(!1),ne=Object(o.a)(ae,2),le=ne[0],re=ne[1],ce=function(){re(!1),de()},oe=function(e){v(e)},ie=function(e){p(e)},ue=function(e){C(e)},me=function(e){B(e)},be=function(e){Q(e)},se=function(e){U(e)},de=function(){oe(0),ie(0),be("#000000"),se(0),ue(0),me(0),P("circle")},fe=function(){var e=Object(b.a)(m.a.mark((function e(){var t,n,l,o,i,b,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=+L,n=+h,l=+j,!((o=a.findIndex((function(e){return e.x===n&&e.y===l})))<0)){e.next=8;break}return c("\u041e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442! \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e."),A(),e.abrupt("return");case 8:if(!(i=q(n,l,t))){e.next=13;break}return c(i),A(),e.abrupt("return");case 13:return u(!1),(b=Object(s.a)(a))[o].animate=!0,e.next=18,I(b,n+t,l,1e3);case 18:return d=e.sent,r(d),e.next=22,I(b,n,l+t,1e3);case 22:return d=e.sent,r(d),e.next=26,I(b,n-t,l,1e3);case 26:return d=e.sent,r(d),e.next=30,I(b,n,l-t,1e3);case 30:return d=e.sent,r(d),e.next=34,I(b,n+t,l,1e3);case 34:return d=e.sent,r(d),e.next=38,I(b,n,l,1e3);case 38:d=e.sent,o=a.findIndex((function(e){return!0===e.animate})),delete d[o].animate,r(d),de(),u(!0);case 44:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{menuOpen:t,x:h,changeX:oe,newX:x,changeNewX:ue,y:j,changeY:ie,addObj:function(){var e=function(e,t){return S(e,t)?F:N(t)?M(t)?[].concat(Object(s.a)(e),[t]):w:T}(a,{x:+h,y:+j,symbol:K,fill:H});if(de(),"string"===typeof e)return c(e),void A();r(e),console.log(a)},newY:R,changeNewY:me,setSymbol:P,delObj:function(){var e=function(e,t){return S(e,t)?e.filter((function(e){return e.x!==t.x&&e.y!==t.y})):"\u041e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d!"}(a,{x:+h,y:+j});if("string"===typeof e)return c(e),void A();de(),r(Object(s.a)(e))},rotateObj:fe,fill:H,changeFill:be,restart:de,moveObj:function(){var e=function(e,t,a){if(!S(e,t))return"\u041e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d!";if(!N(a))return T;if(!M(a))return w;if(S(e,a))return F;var n=e.findIndex((function(e){return e.x===t.x&&e.y===t.y})),l=Object(s.a)(e);return l[n].x=a.x,l[n].y=a.y,l}(a,{x:+h,y:+j},{x:+x,y:+R});if("string"===typeof e)return c(e),void A();r(e),de()},changeRadius:se,radius:L,searchObj:function(){var e,t=S(a,{x:+h,y:+j});if(!t)return c("\u041e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d! :("),void A();v((e=t).x),p(e.y),P(e.symbol),Q(e.fill),te(e),console.log(e),re(!0)}}),l.a.createElement(z,{changeFill:be,fill:H,hideModal:ce,modalIsOpen:le,x:h,changeX:oe,y:j,changeY:ie,setSymbol:P,symbol:K,changeObj:function(){var e=Object(i.a)({},ee);e.x=+h,e.y=+j,e.fill=H,e.symbol=K;var t=function(e,t,a){if(t.x!==a.x&&t.y!==a.y){if(S(e,a))return F;if(!N(a))return T;if(!M(a))return w}var n=Object(s.a)(e);return n.forEach((function(e){e.x===t.x&&e.y===t.y&&(e.x=a.x,e.y=a.y,e.fill=a.fill,e.symbol=a.symbol)})),n}(a,ee,e);if("string"===typeof t)return c(t),void A();r(t),ce()}}))},D=(a(306),a(165)),J=a.n(D),L=function(e){var t=e.message;return l.a.createElement("div",{className:"error"},l.a.createElement("div",{className:"error-icon"},l.a.createElement(J.a,{style:{color:"#1890FF",fontSize:"50px"}})),l.a.createElement("p",{className:"error-text"},t||"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 :("))},U=a(420),V=a(428),W=a(425),K=function(e){var t=e.data;return l.a.createElement("div",{className:"grid"},l.a.createElement(U.a,{theme:V.a.material,domain:{x:[0,10],y:[0,10]},animate:{duration:1e3}},l.a.createElement(W.a,{size:5,data:t,style:{data:{fill:function(e){var t=e.datum;return t.fill?t.fill:"black"}}}})))};var P=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([{x:1,y:1,fill:"#000000",symbol:"circle"},{x:2,y:2,fill:"#ffc0cb",symbol:"circle"},{x:3,y:3,fill:"#ffd700",symbol:"circle"}]),i=Object(o.a)(c,2),u=i[0],m=i[1],b=Object(n.useState)(""),s=Object(o.a)(b,2),d=s[0],f=s[1];return l.a.createElement("div",{className:"App"},l.a.createElement(B,{setMessage:function(e){return f(e)},menuOpen:a,data:u,setData:m,toggleMenuOpen:r}),l.a.createElement(K,{data:u}),l.a.createElement(L,{message:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[251,1,2]]]);
//# sourceMappingURL=main.04e5d350.chunk.js.map