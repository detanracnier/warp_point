(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),u=n.n(c),l=n(8),o=n(17),s=n(1),i=n(9),m=n.n(i),p=n(11);function h(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){var t=e.setToken,n=Object(a.useState)(),c=Object(l.a)(n,2),u=c[0],o=c[1],s=Object(a.useState)(),i=Object(l.a)(s,2),b=i[0],f=i[1],E=function(){var e=Object(p.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h({username:u,password:b});case 3:a=e.sent,t(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Please Log In"),r.a.createElement("form",{onSubmit:E},r.a.createElement("label",null,r.a.createElement("p",null,"Username"),r.a.createElement("input",{type:"text",onChange:function(e){return o(e.target.value)}})),r.a.createElement("label",null,r.a.createElement("p",null,"Password"),r.a.createElement("input",{type:"password",onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Submit"))))}var E=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return n?r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:["/customer/dashboard"]},r.a.createElement("h1",null,"Customer Dashboard")),r.a.createElement(s.a,{exact:!0,path:["/carrier/dashboard"]},r.a.createElement("h1",null,"Carrier Dashboard"))))):r.a.createElement(f,{setToken:c})};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d047f34d.chunk.js.map