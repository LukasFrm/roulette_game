(this.webpackJsonproulette_game=this.webpackJsonproulette_game||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),s=(a(15),a(2)),u=a.n(s),o=a(4),i=a(3),m=a(1),f=(a(17),a(18),a(9));var b=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],l=a[1],s=e.layout,u=e.colorMap,o=e.gameResult,f=function(e,t){if(e===t)return"blink_me";e===t&&setTimeout((function(){return""}),4e3)};return Object(n.useEffect)((function(){for(var e=[],t=0;t<s.length;t++)e=[].concat(Object(i.a)(e),[c.a.createElement("button",{key:t,"data-id":"slot-".concat(s[t]),type:"button",className:"col-1 btn btn-".concat(u[s[t]]," ").concat(f(o,s[t])),style:{animation:o===s[t]&&"blinker 1s linear 5"}},s[t])]);l(e)}),[s]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Game board"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 "},c.a.createElement("div",{id:"game_board",className:"row"},r.map((function(e){return e})))),c.a.createElement("div",{className:"col-2"},c.a.createElement("div",{id:"spinner",style:{height:"100px"}}))))};var p=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)([]),u=Object(m.a)(s,2),o=u[0],i=u[1],f=e.stats,b=e.colorMap,p=e.gameResult;return Object(n.useEffect)((function(){var e=[],t=[];Object.values(f).map((function(a){return e.push(a.result),t.push(a.count),null})),l(e),i(t)}),[f]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Stats (last 200)"),c.a.createElement("table",{id:"stats",className:"table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"\xa0"),c.a.createElement("th",{colSpan:"5",className:"cold"},"Cold"),c.a.createElement("th",{colSpan:"27",className:"neutral"},"Neutral"),c.a.createElement("th",{colSpan:"5",className:"hot"},"Hot")),c.a.createElement("tr",null,c.a.createElement("th",null,"Slot"),r.map((function(e,t){return c.a.createElement("td",{key:t,className:"btn-".concat(b[e]),style:{animation:p===e&&"blinker 1s linear 5"}},e)}))),c.a.createElement("tr",null,c.a.createElement("th",null,"Hits"),o.map((function(e,t){var a="neutral";return t<5&&(a="cold"),t>31&&(a="hot"),c.a.createElement("td",{className:"".concat(a),key:t},e)}))))))};var E=function(e){var t=e.logs;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Log"),c.a.createElement("pre",{id:"log_box"},t.map((function(e){return e}))))};var v=function(e){var t=e.id,a=e.timer,n=e.events;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Events"),c.a.createElement("ul",{id:"event_box",className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Game ",t," will start in ",a," sec"),n.map((function(e,t){return c.a.createElement("li",{key:t,className:"list-group-item"},e)}))))};var d=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),d=s[0],j=s[1],h=Object(n.useState)({}),O=Object(m.a)(h,2),g=O[0],S=O[1],N=Object(n.useState)([]),x=Object(m.a)(N,2),k=x[0],w=x[1],y=Object(n.useState)([]),G=Object(m.a)(y,2),R=G[0],_=G[1],T=Object(n.useState)(1),F=Object(m.a)(T,2),I=F[0],M=F[1],C=Object(n.useState)(!1),D=Object(m.a)(C,2),L=D[0],H=D[1],J=Object(n.useState)([]),A=Object(m.a)(J,2),B=A[0],P=A[1],U=Object(n.useState)("https://dev-games-backend.advbet.com/v1/ab-roulette/1/"),W=Object(m.a)(U,2),q=W[0],z=W[1],K=Object(n.useState)(""),Q=Object(m.a)(K,2),V=Q[0],X=Q[1],Y=Object(n.useRef)(null),Z=function(e){_((function(t){return[].concat(Object(i.a)(t),[c.a.createElement("span",null,(new Date).toISOString()+" "+e)])}))},$=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a,n,c,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("Loading game board"),Z("GET .../configuration"),e.next=4,fetch("".concat(q,"/configuration"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,n=a.colors,c=a.results,l=a.positionToId,s={},c.forEach((function(e,t){return s[e]=n[t]})),r(s),j(l);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(q,"/stats?limit=200"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,S(a),Z("GET .../stats?limit=200");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){I||(clearInterval(Y.current),Y.current=null,te())}),[I]);var te=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z("Spinning the wheel"),!1!==L){e.next=13;break}return Z("GET .../game/1416587"),e.next=5,fetch("".concat(q,"/game/").concat(k.id));case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,X(a.result),H(!0),e.next=14;break;case 13:Z("Wheel is already spinning");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){null===V&&(Z("Still no result, continue spinning"),setTimeout((function(){te()}),2e3)),"number"===typeof V&&(Z("Result is ".concat(V)),H(!1),Z("Stopping the wheel"),P((function(e){return[].concat(Object(i.a)(e),["Game ".concat(k.id," ended, result is ").concat(V)])})),ne())}),[V]);var ae=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(q,"/nextGame"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,w(a),n=a.fakeStartDelta,Z("Checking for new game"),Z("GET .../nextGame"),Z("sleeping for fakeStartDelta ".concat(n," sec")),M(n),Y.current=setInterval((function(){M((function(e){return e-1}))}),1e3);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){ee(),$(),ae()};return Object(n.useEffect)((function(){ne()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"p-5 m-5"},c.a.createElement("h1",null,"Roulette Game"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"api_base"},"API base URL"),c.a.createElement("input",{className:"form-control",id:"api_base",value:q,onChange:function(e){return z(e.target.value)}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{stats:g,colorMap:a,gameResult:V}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-5"},c.a.createElement(b,{colorMap:a,layout:d,gameResult:V}),c.a.createElement(v,{id:k.id,timer:I,events:B})),c.a.createElement("div",{className:"col-1"},!0===L&&c.a.createElement(f.a,{animation:"border",role:"status"})),c.a.createElement("div",{className:"col-6"},c.a.createElement(E,{logs:R})))))};l.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d75553ef.chunk.js.map