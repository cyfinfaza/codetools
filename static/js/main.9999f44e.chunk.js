(this["webpackJsonpcodetools-react"]=this["webpackJsonpcodetools-react"]||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(45),i=n.n(r),o=n(3),s=n(47),l=n(8),d=n.n(l),u=n(4),j=n(15),b=n(5),m=(n(53),n(0));function h(e){var t=e.children,n=e.onClose,c=e.open,a=e.title,r=e.noCloseButton,i=void 0!==r&&r;return Object(m.jsxs)("div",{className:"modal",style:c?{opacity:1,transform:"none",pointerEvents:"all"}:{opacity:0,transform:"scale(0.8)",pointerEvents:"none"},children:[Object(m.jsx)("h1",{style:{marginTop:0},children:a}),t,!i&&Object(m.jsx)("button",{className:"hoverfancy",style:{position:"absolute",top:"16px",right:"16px",width:"48px",height:"48px",display:"flex",WebkitAlignItems:"center",WebkitBoxAlign:"center",msFlexAlign:"center",alignItems:"center",WebkitBoxPack:"center",WebkitJustifyContent:"center",msFlexPack:"center",justifyContent:"center"},onClick:n,children:Object(m.jsx)("i",{className:"material-icons",style:{color:"white"},children:"close"})})]})}function p(e){var t=e.children,n=e.open;return Object(m.jsx)("div",{className:"loadingScreen",style:n?{opacity:1,transform:"none",pointerEvents:"all"}:{opacity:0,transform:"none",pointerEvents:"none"},children:Object(m.jsx)("div",{className:"loaderContent",style:{transform:n?"none":"scale(0.8)"},children:t})})}function x(e){var t=e.name,n=e.compareKey,c=e.changeKeyMethod,a=e.keyName,r="clickfancy";return a==n&&(r+=" tab_clicked"),Object(m.jsx)("div",{className:r,onClick:function(){return c(a)},children:t})}var f=n(46);function O(e){var t=e.arg,n=e.onDelete,c=e.onChange,a=t.text,r=t.output,i=t.id,o=t.match,s=null;return null!=o&&(s=o?"#0F0":"#FD0"),Object(m.jsxs)("div",{className:"arg_mutable arg",children:[Object(m.jsxs)("div",{className:"inputdiv",children:[Object(m.jsx)("p",{children:"("}),Object(m.jsx)("input",{type:"text",className:"argin monofont",value:a,onChange:function(e){return c(e,i)},placeholder:"args",size:"1"}),Object(m.jsx)("p",{children:")"}),Object(m.jsx)("button",{className:"removeButton hoverfancy",onClick:function(){return n(i)},children:Object(m.jsx)("i",{className:"material-icons",children:"close"})})]}),Object(m.jsxs)("p",{className:"resultText monofont",children:[Object(m.jsx)("i",{className:"material-icons outputArrow",style:{width:24,transform:"translateY(25%)",color:s},children:"arrow_forwards"}),Object(m.jsx)("span",{className:"resultOutput",children:r})]})]})}function g(e){var t=e.arg,n=t.text,c=t.output,a=t.match,r=null;return null!=a&&(r=a?"#0F0":"#FD0"),Object(m.jsxs)("div",{className:"arg_readonly arg",children:[Object(m.jsx)("div",{className:"inputdiv",children:Object(m.jsxs)("p",{children:["( ",Object(m.jsx)("span",{className:"argText",children:n})," )"]})}),Object(m.jsxs)("p",{className:"resultText monofont",children:[Object(m.jsx)("i",{className:"material-icons outputArrow",style:{width:24,transform:"translateY(25%)",color:r},children:"arrow_forwards"}),Object(m.jsx)("span",{className:"resultOutput",children:c})]})]})}n(57);var y,v,C,N=1,w=!1,k=!1,S={code:"java",starterCode:"java",description:"html"},_={code:{wordWrap:"off"},starterCode:{wordWrap:"off"},description:{wordWrap:"on"}};function D(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=n.length,a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*c));return t}var I=function(e){var t,n,a,r,i,l,I=e.editorType,E=e.contentID,F=Object(c.useState)({title:null,timeout:null}),T=Object(b.a)(F,2),A=T[0],B=T[1],W=Object(c.useState)(!1),K=Object(b.a)(W,2),R=K[0],M=K[1],L=Object(c.useState)("contentLoading"),J=Object(b.a)(L,2),z=J[0],P=J[1],Y=Object(c.useState)(null),q=Object(b.a)(Y,2),H=q[0],U=q[1],G=Object(c.useState)(null),Q=Object(b.a)(G,2),V=(Q[0],Q[1],Object(c.useState)({code:null,starterCode:null,description:null})),X=Object(b.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)([]),te=Object(b.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useRef)();ae.current=ne;var re=Object(c.useState)([]),ie=Object(b.a)(re,2),oe=ie[0],se=ie[1],le=Object(c.useRef)();le.current=oe;var de=Object(c.useState)({icon:"info",text:"Connecting to ECWS",style:"fancybutton_warn",enabled:!1}),ue=Object(b.a)(de,2),je=ue[0],be=ue[1],me=Z[H];function he(){return pe.apply(this,arguments)}function pe(){return(pe=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=N||!w){e.next=6;break}return N+=1,k=!0,e.next=5,fetch("/contentset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then((function(e){return e.json()})).then((function(e){N=1}));case 5:k&&M(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(e){var t=ne.filter((function(t){return t.id!==e}));ce(t)}function fe(e,t){var n=ne.map((function(n){return n.id==t&&(n.text=e.target.value),n}));ce(n)}function Oe(){return(Oe=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return be({icon:"hourglass_full",text:"Saving...",style:"fancybutton_half",enabled:!1}),e.next=3,he();case 3:return be({icon:"hourglass_full",text:"Requesting...",style:"fancybutton_half",enabled:!0}),e.next=6,fetch("/fetchsession").then((function(e){return e.json()})).then((function(e){return t=e.data}));case 6:console.log(t),v.send(JSON.stringify({contentID:E,id_sig:C,auth:t}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)(Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/contentget?id="+E).then((function(e){return e.json()})).then(function(){var e=Object(j.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"error"!=t.status){e.next=5;break}return P("fatalError"),console.error(t),e.abrupt("return");case 5:if(t=t.data,n={},(c={}).code=t.code,C=t.id_sig,ce(t.args_mutable.map((function(e){return{id:e.id,text:e.arg,output:"No Output"}}))),"editor_standalone"!=I&&"challenge"!=I||(n.title=t.title,c.description=t.description),"challenge"==I&&(c.starterCode=t.starterCode),t.timeout&&(n.timeout=t.timeout),"editor_challenge"!=I){e.next=18;break}return e.next=17,fetch("/contentget?id="+t.assocChallenge).then((function(e){return e.json()})).then((function(e){e=e.data,n.title=e.title,c.description=e.description}));case 17:se(t.args_immutable.map((function(e){return{id:e.id,text:e.arg,output:"No Output"}})));case 18:$(c),Object(u.a)({},c),B(n),Object(u.a)({},n),setInterval(he,1e4),P(null),document.getElementById("header").style.display="flex",U("code");case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e),P("fatalError")}));case 2:(v=new WebSocket("wss://upstairs-direct.secure1.cy2.me/ecws/runcode")).addEventListener("open",(function(){be({icon:"play_arrow",text:"Run Code",style:"",enabled:!0})})),v.addEventListener("message",(function(e){var t=JSON.parse(e.data);"statusUpdate"===t.type?be({icon:"hourglass_full",text:t.status,style:"fancybutton_half",enabled:!0}):"error"===t.type?be({icon:"error",text:t.error,style:"fancybutton_error",enabled:!0}):"jobComplete"===t.type&&(be({icon:"check_circle",text:"Tests Complete",style:"fancybutton_on",enabled:!0}),ce(ae.current.map((function(e){var n=t.data.filter((function(t){return t.id===e.id}))[0];return n?Object(u.a)(Object(u.a)({},e),n):e}))),se(le.current.map((function(e){var n=t.data.filter((function(t){return t.id===e.id}))[0];return n?Object(u.a)(Object(u.a)({},e),n):e}))))})),v.addEventListener("close",(function(e){be({icon:"error",text:"ECWS Offline",style:"fancybutton_error",enabled:!1})}));case 6:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)((function(){var e=ne.map((function(e){return{id:e.id,arg:e.text}})),t=Object(u.a)(Object(u.a)(Object(u.a)({contentID:E},Z),A),{},{args_mutable:e});for(var n in t)null!==t[n]&&void 0!==t[n]||delete t[n];y=t,M(!0),k=!1}),[Z,A,ne]),Object(c.useEffect)((function(){w=R}),[R]),Object(c.useEffect)((function(){console.info("ECWS Run: "+je.text)}),[je]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"modalContainer",style:null==z||"contentLoading"==z?{}:{backgroundColor:"#8884"},children:[Object(m.jsx)(h,{open:"changeTitle"==z,title:"Change Title",onClose:function(){return P(null)},children:Object(m.jsx)("input",{onKeyDown:function(e){13==e.keyCode&&P(null)},type:"text",style:{width:"100%",boxSizing:"border-box",height:"32px"},value:A.title?A.title:"",onChange:function(e){return B(Object(u.a)(Object(u.a)({},A),{},{title:e.target.value}))},placeholder:"New title"})}),Object(m.jsx)(h,{open:"editConfig"==z,title:"Edit Config",onClose:function(){return P(null)},children:Object(m.jsxs)("div",{style:(t={display:"flex",flexDirection:"row",msFlexDirection:"row"},Object(o.a)(t,"flexDirection","row"),Object(o.a)(t,"alignItems","center"),Object(o.a)(t,"WebkitBoxAlign","center"),Object(o.a)(t,"msFlexAlign","center"),Object(o.a)(t,"alignItems","center"),t),children:[Object(m.jsxs)("label",{style:{marginRight:"10px"},htmlFor:"timeout",children:["Timeout:"," "]}),Object(m.jsx)("select",{value:A.timeout?A.timeout:5,onChange:function(e){return B(Object(u.a)(Object(u.a)({},A),{},{timeout:parseInt(e.target.value)}))},children:function(){for(var e=[],t=1;t<=15;t++)e.push(Object(m.jsx)("option",{value:t,children:t+" seconds"},t));return e}()})]})}),Object(m.jsxs)(p,{open:"contentLoading"==z,children:[Object(m.jsx)("img",{src:"/static/CodeToolsLogo.svg",style:{width:"50%",marginBottom:16}}),Object(m.jsx)("div",{className:"loadingBar",style:{width:"100%",height:8}})]}),Object(m.jsx)(h,{open:"fatalError"==z,title:"Fatal Error",noCloseButton:!0,onClose:function(){return P(null)},children:Object(m.jsx)("p",{children:"An error has caused this editor to stop. Check the console for details. Reoad the editor."})})]}),Object(m.jsxs)("div",{className:"editor-main",style:null==z?{}:{pointerEvents:"none",userSelect:"none"},children:[Object(m.jsxs)("div",{id:"descriptionSidebar",className:"sidebar",children:[Object(m.jsx)("h1",{id:"contentTitle",style:{marginBottom:"0"},children:null==A.title?"Loading...":A.title}),"editor_challenge"!=I&&Object(m.jsx)("button",{style:{margin:"12px",marginLeft:"0"},onClick:function(){return P("changeTitle")},children:"Change Title"}),Object(m.jsx)("p",{style:{marginTop:"24px"},id:"contentDescription",children:null==Z.description?"Loading...":Z.description})]}),Object(m.jsxs)("div",{className:"threeCenter",children:["editor_standalone"==I&&Object(m.jsxs)("div",{className:"tabs",children:[Object(m.jsx)(x,{name:"Code",keyName:"code",compareKey:H,changeKeyMethod:U}),Object(m.jsx)(x,{name:"Description",keyName:"description",compareKey:H,changeKeyMethod:U})]}),"challenge"==I&&Object(m.jsxs)("div",{className:"tabs",children:[Object(m.jsx)(x,{name:"Solution",keyName:"code",compareKey:H,changeKeyMethod:U}),Object(m.jsx)(x,{name:"Starter Code",keyName:"starterCode",compareKey:H,changeKeyMethod:U}),Object(m.jsx)(x,{name:"Description",keyName:"description",compareKey:H,changeKeyMethod:U})]}),"editor_challenge"==I&&Object(m.jsx)("div",{className:"tabs",children:Object(m.jsx)(x,{name:"Code",keyName:"code",compareKey:H,changeKeyMethod:U})}),Object(m.jsx)(f.a,{id:"monacoContainer",className:"monacoContainer",defaultLanguage:S[H],theme:"vs-dark",options:Object(u.a)(Object(u.a)({minimap:{enabled:!1}},_[H]),{},{fontFamily:"DM Mono, monospace"}),value:me,path:H,onChange:function(e){var t=Object(u.a)({},Z);t[H]=e,$(t)}})]}),Object(m.jsxs)("div",{id:"argsSidebar",className:"sidebar",children:[Object(m.jsx)("h1",{children:"challenge"==I?"Prepare Tests":"Run and Test"}),Object(m.jsxs)("button",{id:"runbutton",className:"fancybutton "+(je.enabled?"fancybutton_enabled ":"")+je.style,style:{width:"100%",margin:"0"},onClick:je.enabled?function(){return Oe.apply(this,arguments)}:null,children:[Object(m.jsx)("i",{className:"material-icons",children:je.icon}),Object(m.jsx)("span",{children:je.text})]}),Object(m.jsxs)("div",{id:"compilerError",style:(n={display:"none",flexDirection:"column",msFlexDirection:"column"},Object(o.a)(n,"flexDirection","column"),Object(o.a)(n,"alignItems","center"),Object(o.a)(n,"WebkitBoxAlign","center"),Object(o.a)(n,"msFlexAlign","center"),Object(o.a)(n,"alignItems","center"),Object(o.a)(n,"color","#F88"),n),children:[Object(m.jsxs)("p",{style:(a={display:"flex",alignItems:"center",WebkitBoxAlign:"center",msFlexAlign:"center"},Object(o.a)(a,"alignItems","center"),Object(o.a)(a,"marginBottom","8px"),a),children:[Object(m.jsx)("i",{className:"material-icons",style:{marginRight:"8px"},children:"warning"})," ","Compiler Error"]}),Object(m.jsx)("p",{id:"compilerErrorText",className:"monofont",style:{margin:"0",fontSize:"12px",msFlexItemAlign:"flex-start",alignSelf:"flex-start"},children:"Error not displayed."})]}),"editor_challenge"==I&&Object(m.jsx)("div",{id:"challengeCompletedMessage",style:(r={display:"none",flexDirection:"column",msFlexDirection:"column"},Object(o.a)(r,"flexDirection","column"),Object(o.a)(r,"alignItems","center"),Object(o.a)(r,"WebkitBoxAlign","center"),Object(o.a)(r,"msFlexAlign","center"),Object(o.a)(r,"alignItems","center"),Object(o.a)(r,"color","#8F8"),r),children:Object(m.jsxs)("p",{style:(i={display:"flex",alignItems:"center",WebkitBoxAlign:"center",msFlexAlign:"center"},Object(o.a)(i,"alignItems","center"),Object(o.a)(i,"marginBottom","8px"),i),children:[Object(m.jsx)("i",{className:"material-icons",style:{marginRight:"8px"},children:"check_circle"})," ","Challenge Completed"]})}),Object(m.jsxs)("div",{id:"argslist",style:{minHeight:"24px"},children:[oe.map((function(e){return Object(m.jsx)(g,{arg:e},e.id)})),ne.map((function(e){return Object(m.jsx)(O,{arg:e,onChange:fe,onDelete:xe},e.id)}))]}),Object(m.jsxs)("div",{style:(l={display:"flex",flexDirection:"column",msFlexDirection:"column"},Object(o.a)(l,"flexDirection","column"),Object(o.a)(l,"alignItems","center"),Object(o.a)(l,"WebkitBoxAlign","center"),Object(o.a)(l,"msFlexAlign","center"),Object(o.a)(l,"alignItems","center"),Object(o.a)(l,"width","100%"),l),children:[Object(m.jsxs)("button",{className:"hoverfancy",onClick:function(){var e=Object(s.a)(ne);e.push({id:D(10),output:"No Output",text:""}),ce(e)},style:{paddingRight:"12px",marginTop:"12px"},children:[Object(m.jsx)("i",{className:"material-icons",children:"add"})," New Test"]}),"editor_challenge"!=I&&Object(m.jsxs)("button",{id:"setConfiguration",className:"hoverfancy",onClick:function(){return P("editConfig")},style:{paddingRight:"10px",marginTop:"12px"},children:[Object(m.jsx)("i",{className:"material-icons",style:{marginRight:"4px",fontSize:"24px"},children:"tune"}),"Config"]})]})]})]}),Object(m.jsxs)("div",{id:"uploadStatusDiv",className:"uploadStatusDiv uploadStatusColored",style:{backgroundColor:R?"#FD0":"#0F0"},children:[Object(m.jsx)("i",{id:"uploadStatusIcon",className:"material-icons",style:{marginRight:"4px"},children:R?"sync":"cloud_done"}),Object(m.jsx)("span",{id:"uploadStatusText",children:R?"Saving...":"Saved"})]}),Object(m.jsx)("div",{className:"uploadStatusLine uploadStatusColored",style:{backgroundColor:R?"#FD0":"#0F0"},children:"something"})]})};document.getElementById("header").style.display="none",console.log(window.location.pathname);var E="{{editorType}}"==window.editorType_server?"editor_challenge":window.editorType_server,F="{{myContentID}}"==window.myContentID_server?"7181559b-0de6-4b78-b40d-3b719fbe8fb7":window.myContentID_server;i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{editorType:E,contentID:F})}),document.getElementById("root"))},53:function(e,t,n){},86:function(e,t){}},[[131,1,2]]]);
//# sourceMappingURL=main.9999f44e.chunk.js.map