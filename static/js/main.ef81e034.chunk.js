(this["webpackJsonpgoit-react-hw-04-hooks-feedback-new-version"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback-new-version"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(4),r=n.n(i),o=(n(10),n(2)),l=(n(11),function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(c.jsx)("button",{type:"button",className:"btn",onClick:function(){return n(e)},children:e},e)}))}),u=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:"section",children:[Object(c.jsx)("h2",{className:"title",children:t}),n]})},b=(n(12),function(e){var t=e.good,n=e.neutral,a=e.bad,s=e.total,i=e.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:"text",children:["Good: ",t]}),Object(c.jsxs)("li",{className:"text",children:["Neutral: ",n]}),Object(c.jsxs)("li",{className:"text",children:["Bad: ",a]}),Object(c.jsxs)("li",{className:"text",children:["Total: ",s]}),Object(c.jsxs)("li",{className:"text",children:["Positive feedback: ",i,"%"]})]})}),j=(n(13),function(e){var t=e.children;return Object(c.jsx)("div",{className:"container",children:t})}),d=(n(14),function(e){var t=e.message;return Object(c.jsx)("p",{className:"message",children:t})});var h=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(0),r=Object(o.a)(i,2),h=r[0],f=r[1],O=Object(a.useState)(0),x=Object(o.a)(O,2),v=x[0],g=x[1],m=function(){return n+h+v};return Object(c.jsxs)(j,{children:[Object(c.jsx)(u,{title:"Please leave feedback",children:Object(c.jsx)(l,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":s((function(e){return e+1}));break;case"neutral":f((function(e){return e+1}));break;case"bad":g((function(e){return e+1}));break;default:return}}})}),Object(c.jsx)(u,{title:"Statistics",children:m()?Object(c.jsx)(b,{good:n,neutral:h,bad:v,total:m(),positivePercentage:Math.round(n/m()*100)||0}):Object(c.jsx)(d,{message:"No feedback given"})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.ef81e034.chunk.js.map