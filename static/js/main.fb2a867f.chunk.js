(this["webpackJsonpnumeral-systems"]=this["webpackJsonpnumeral-systems"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),c=n.n(a),s=n(8),i=n.n(s),l=n(12),j=n(119),o=n(116),u=n(112),b=n(115),d=n(104),h=n(117),m=n(111),O=n(109),x=n(108),f=n(110),g=n(13),p=n(38),v=n(39);function y(){var e=Object(p.a)(["\n    display: inline;\n    font-weight: 900;\n    font-size: 18px;\n    font-family: 'Roboto';\n    margin-top: 0px;\n    margin-bottom: 0px;\n    background-color: yellow;\n"]);return y=function(){return e},e}function F(){var e=Object(p.a)(["\n    font-weight: 500;\n    font-size: 18px;\n    font-family: 'Roboto';\n    margin-top: 0px;\n    margin-bottom: 0px;\n"]);return F=function(){return e},e}var B=v.a.p(F()),S=v.a.p(y()),T=function(e){var t=e.number,n=e.base,c=Object(a.useState)([]),s=Object(l.a)(c,2),i=s[0],j=s[1];return Object(a.useEffect)((function(){j([Object(r.jsxs)(r.Fragment,{children:[t,Object(r.jsx)("sub",{children:n})," = "]})]);for(var e=function(e){j((function(a){return[].concat(Object(g.a)(a),[Object(r.jsxs)(r.Fragment,{children:[(c=t[e],["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"].findIndex((function(e){return e===c})))," * ",n,Object(r.jsx)("sup",{children:t.length-e-1})]})]);var c})),e===t.length-1?j((function(e){return[].concat(Object(g.a)(e),[Object(r.jsx)(r.Fragment,{children:" = "})])})):j((function(e){return[].concat(Object(g.a)(e),[Object(r.jsx)(r.Fragment,{children:" + "})])}))},a=0;a<t.length;a++)e(a);j((function(e){return[].concat(Object(g.a)(e),[Object(r.jsxs)(S,{children:[parseInt(t,n),Object(r.jsx)("sub",{children:"10"})]})])}))}),[t,n]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(B,{children:i.map((function(e){return e}))})})},w=function(e){var t=e.decimalNumber,n=e.toBase,s=e.output,i=Object(a.useState)([]),j=Object(l.a)(i,2),o=j[0],u=j[1];return Object(a.useEffect)((function(){var e=Math.floor(t/n),a=[t%n],s=e<2*(n-1)&&0!==e?[Object(r.jsx)(r.Fragment,{children:"".concat(n," * ")}),Object(r.jsx)(S,{children:e}),Object(r.jsx)(r.Fragment,{children:" + "})]:[Object(r.jsx)(r.Fragment,{children:"".concat(n," * ").concat(e," + ")})];s.push(Object(r.jsx)(S,{children:a[0]}));var i=[];for(i.push(Object(r.jsx)(r.Fragment,{children:s.map((function(e,t){return Object(r.jsx)(c.a.Fragment,{children:e},t)}))}));e>n-1;){a.push(e%n),e=Math.floor(e/n),(s=["".concat(n," * ")]).push("(".concat(n," * ").repeat(a.length-1)),e<n?s.push(Object(r.jsx)(S,{children:e})):s.push(e);for(var l=a.length-1;l>=0;l--)s.push(" + "),s.push(Object(r.jsx)(S,{children:a[l]})),0!==l&&s.push(")");i.push(Object(r.jsx)(r.Fragment,{children:s.map((function(e,t){return Object(r.jsx)(c.a.Fragment,{children:e},t)}))}))}u(i)}),[t,n]),Object(r.jsxs)(r.Fragment,{children:[o.map((function(e,n){return Object(r.jsxs)(B,{children:[t,Object(r.jsx)("sub",{children:"10"})," = ",e]},n)})),Object(r.jsx)("div",{style:{marginTop:15},children:Object(r.jsxs)(d.a,{variant:"h6",gutterBottom:!0,children:["Now we can read the number from the marked digits: ",Object(r.jsxs)(S,{children:[s,Object(r.jsx)("sub",{children:n})]})]})})]})},C=function(e){var t=e.input,n=e.fromBase,a=e.toBase,c=e.output;return t?Object(r.jsxs)("div",{style:{marginTop:30},children:[Object(r.jsx)(d.a,{variant:"h5",gutterBottom:!0,children:"How does it work?"}),n===a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{variant:"subtitle1",gutterBottom:!0,children:"This one was easy! The bases are the same..."}),Object(r.jsxs)(d.a,{variant:"subtitle2",gutterBottom:!0,style:{fontSize:18},children:[t,Object(r.jsx)("sub",{children:n})," = ",t,Object(r.jsx)("sub",{children:a})]})]}):null,n!==a&&10!==n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{variant:"subtitle1",gutterBottom:!0,children:"At first the number is converted into the decimal system:"}),Object(r.jsx)(T,{number:t,base:n})]}):null,n!==a&&10!==a?Object(r.jsxs)("div",{style:10===n?null:{marginTop:40},children:[Object(r.jsx)(d.a,{variant:"subtitle1",gutterBottom:!0,children:'We convert the decimal number using the "Honers\' method"'}),Object(r.jsx)(w,{decimalNumber:parseInt(t,n),toBase:a,output:c})]}):null]}):null},E=[{name:"Binary (base 2)",base:2,digits:["0","1"]},{name:"Ternary (base 3)",base:3,digits:["0","1","2"]},{name:"Quaternary (base 4)",base:4,digits:["0","1","2","3"]},{name:"Quinary (base 5)",base:5,digits:["0","1","2","3","4"]},{name:"Senary (base 6)",base:6,digits:["0","1","2","3","4","5"]},{name:"Septenary (base 7)",base:7,digits:["0","1","2","3","4","5","6"]},{name:"Octal (base 8)",base:8,digits:["0","1","2","3","4","5","6","7"]},{name:"Nonary (base 9)",base:9,digits:["0","1","2","3","4","5","6","7","8"]},{name:"Decimal / Denary (base 10)",base:10,digits:["0","1","2","3","4","5","6","7","8","9"]},{name:"Hexadecimal (base 16)",base:16,digits:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]}],I=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),g=i[0],p=i[1],v=Object(a.useState)(10),y=Object(l.a)(v,2),F=y[0],B=y[1],S=Object(a.useState)(2),T=Object(l.a)(S,2),w=T[0],I=T[1],k=function(e){var t="Error";return E.forEach((function(n){if(n.base===e)return t=n.name})),t},D=function(e){if(!e)return c(""),p("");if(function(e){var t=e.slice(-1);return E.find((function(e){return e.base===F})).digits.includes(t)}(e)){c(e);for(var t,n,r=parseInt(e,F),a="";r>0;)t=r%w,a=16!==w?t.toString()+a:((n=t)<0||n>15?(alert('Could not convert "'.concat(n,'" into hex')),0):E.find((function(e){return 16===e.base})).digits[n])+a,r=Math.floor(r/w);p(a)}};return Object(a.useEffect)((function(){return D(n)})),Object(r.jsxs)("div",{style:{paddingBottom:300},children:[Object(r.jsx)(x.a,{position:"static",style:{background:"#1976d2"},children:Object(r.jsx)(O.a,{children:Object(r.jsx)(f.a,{children:Object(r.jsx)(d.a,{variant:"h6",children:"Numeral Systems"})})})}),Object(r.jsxs)(f.a,{style:{marginTop:50},children:[Object(r.jsx)(d.a,{variant:"h5",gutterBottom:!0,children:"Convert numbers between different numeral systems"}),Object(r.jsx)(d.a,{variant:"subtitle1",gutterBottom:!0,children:"Here you can convert numbers from different numeral systems into one another."}),Object(r.jsxs)(m.a,{container:!0,spacing:3,style:{marginTop:10},children:[Object(r.jsx)(m.a,{item:!0,xs:6,sm:2,children:Object(r.jsxs)(u.a,{fullWidth:!0,children:[Object(r.jsx)(j.a,{children:"From"}),Object(r.jsx)(b.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:F,onChange:function(e){c(""),p(""),B(e.target.value)},children:E.map((function(e){return Object(r.jsx)(o.a,{value:e.base,children:e.name},e.base)}))})]})}),Object(r.jsx)(m.a,{item:!0,xs:6,sm:2,children:Object(r.jsxs)(u.a,{fullWidth:!0,children:[Object(r.jsx)(j.a,{children:"To"}),Object(r.jsx)(b.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:w,onChange:function(e){return I(e.target.value)},children:E.map((function(e){return Object(r.jsx)(o.a,{value:e.base,children:e.name},e.base)}))})]})}),Object(r.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(r.jsx)(h.a,{fullWidth:!0,label:k(F),value:n,onChange:function(e){return D(e.target.value.toUpperCase())}})}),Object(r.jsx)(m.a,{item:!0,xs:12,sm:4,children:Object(r.jsx)(h.a,{disabled:!0,multiline:!0,fullWidth:!0,label:k(w),value:g})})]}),n?Object(r.jsx)("div",{style:{marginTop:20},children:Object(r.jsxs)(d.a,{variant:"h6",gutterBottom:!0,children:[n,Object(r.jsx)("sub",{children:F})," = ",g,Object(r.jsx)("sub",{children:w})]})}):null,Object(r.jsx)(C,{input:n,output:g,fromBase:F,toBase:w})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(69);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),k()}},[[70,1,2]]]);
//# sourceMappingURL=main.fb2a867f.chunk.js.map