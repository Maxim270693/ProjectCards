(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{17:function(e,t,n){e.exports={error:"Error_error__26zij",errorNumber:"Error_errorNumber__1P-7v",errorMessage:"Error_errorMessage__3Hv2U",errorCat:"Error_errorCat__1mfc6"}},20:function(e,t,n){e.exports={superInput:"Input_superInput__2w9-n",errorInput:"Input_errorInput__1puZx",error:"Input_error__jdUai"}},29:function(e,t,n){e.exports={myButton:"Button_myButton__3haxA"}},30:function(e,t,n){e.exports={checkbox:"Checkbox_checkbox__3ecVR",spanClassName:"Checkbox_spanClassName__1fWOQ"}},41:function(e,t,n){e.exports={testPageBlock:"TestPage_testPageBlock__1knRz"}},50:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),s=n(22),i=n.n(s),o=n(4),u=(n(50),n(21)),l=n(39),j=n(2),d=n(12),b=n.n(d),O=n(16),h=n(40),p=n.n(h).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),f=function(e){return p.post("auth/login",e).then((function(e){return e.data}))},x=function(){return p.delete("auth/me")},m=function(e){return p.post("auth/register",e)},v=function(){return p.post("auth/me")},_=function(e,t){return p.get("/cards/pack?page=".concat(e,"&pageCount=").concat(t))},g=function(e){return p.post("/cards/pack",{cardsPack:e})},C=function(e){return p.delete("/cards/pack?id=".concat(e))},N=function(e){return p.put("/cards/pack",{cardsPack:e})};!function(e){e.LOGIN="AUTH/LOGIN",e.LOGOUT="AUTH/LOGOUT",e.UPDATE_USER="AUTH/UPDATE_USER",e.IS_LOADING="AUTH/IS_LOADING",e.IS_AUTH="AUTH/IS_AUTH",e.IS_REGISTER="IS_REGISTER",e.ERROR="AUTH/ERROR"}(c||(c={}));var E,k=function(e){return{type:c.LOGIN,payload:e}},P=function(e){return{type:c.IS_LOADING,payload:{isLoading:e}}},y=function(e){return{type:c.ERROR,payload:{error:e}}},S={name:null,_id:null,avatar:null,isLoading:!1,isAuth:!1,isRegister:!1,error:null},A=n(42),R={cardPacks:[],cardPacksTotalCount:1474,maxCardsCount:103,minCardsCount:0,page:1,pageCount:10,token:"09aadab0-b1ae-11eb-9596-21f90af40386",tokenDeathTime:1621269460955};!function(e){e.SET_PACKS="PACKS/SET_PACKS",e.ADD_PACK="PACKS/ADD_PACK",e.CHANGE_CURRENT_PAGE="PACKS/CHANGE_CURRENT_PAGE",e.DELETE_PACK="PACKS/DELETE_PACK"}(E||(E={}));var T=function(e){return{type:E.CHANGE_CURRENT_PAGE,currentPage:e}},I=function(e){return{type:E.DELETE_PACK,id:e}},w=function(e){return function(e,t){e(P(!0));var n=t().decks.pageCount,c=t().decks.page;_(c,n).then((function(t){var n;e((n=t.data.cardPacks,{type:E.SET_PACKS,payload:n})),e(T(c))})).catch((function(t){var n=t.response.data.error;e(y(n)),alert(n)})).finally((function(){e(P(!1))}))}},G=function(){return function(e){e(P(!0)),g({name:"GOGO",private:!1}).then((function(t){var n;e((n=t.data.newCardsPack,{type:E.ADD_PACK,payload:n})),e(w())})).finally((function(){e(P(!1))}))}},L=Object(u.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.LOGIN:return Object(j.a)(Object(j.a)({},e),t.payload);case c.LOGOUT:return Object(j.a)(Object(j.a)({},e),{},{name:null,_id:null,avatar:null,error:"logged out",isAuth:!1});case c.UPDATE_USER:case c.IS_LOADING:return Object(j.a)(Object(j.a)({},e),t.payload);case c.IS_AUTH:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.payload),{},{error:null});case c.IS_REGISTER:case c.ERROR:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SET_PACKS:return Object(j.a)(Object(j.a)({},e),{},{cardPacks:t.payload});case E.ADD_PACK:return Object(j.a)(Object(j.a)({},e),{},{cardPacks:[].concat(Object(A.a)(e.cardPacks),[t.payload])});case E.CHANGE_CURRENT_PAGE:return Object(j.a)(Object(j.a)({},e),{},{page:t.currentPage});case E.DELETE_PACK:return Object(j.a)(Object(j.a)({},e),{},{cardPacks:e.cardPacks.filter((function(e){return e._id!==t.id}))});default:return e}}}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,D=Object(u.d)(L,U(Object(u.a)(l.a))),B=n(13),K=n(5),H=(n(70),n(0)),F=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user.isAuth})),n=Object(o.c)((function(e){return e.user.error})),a=Object(o.c)((function(e){return e.user.avatar})),s=Object(o.c)((function(e){return e.user.name}));Object(r.useEffect)((function(){t||e((function(e){e(P(!0)),v().then((function(t){e(k(t.data))})).catch((function(t){e(y(t.response.data.error))})).finally((function(){e(P(!1))}))}))}),[]);return n?Object(H.jsx)(K.a,{to:de.LOGIN}):Object(H.jsxs)("div",{children:[Object(H.jsxs)("div",{className:"description",children:[Object(H.jsx)("div",{children:Object(H.jsx)("img",{src:a||"",alt:"userPhoto"})}),Object(H.jsx)("div",{className:"name",children:s})]}),Object(H.jsx)("button",{className:"logOut",onClick:function(){e(function(){var e=Object(O.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:n=e.sent,console.log(n),t({type:c.LOGOUT}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",alert(r);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},children:"LogOut"})]})},M=n(15),V=n(20),W=n.n(V),Z=function(e){var t=e.type,n=e.onChange,c=e.defaultValue,r=e.onChangeText,a=e.onKeyPress,s=e.onEnter,i=e.error,o=(e.className,e.spanClassName),u=Object(M.a)(e,["type","onChange","defaultValue","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(o||""),d="".concat(W.a.superInput," ").concat(i?W.a.errorInput:W.a.superInput);return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("input",Object(j.a)({type:t,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),"Enter"===e.key&&s&&s()},className:d,defaultValue:c},u)),i&&Object(H.jsx)("span",{className:l,children:i})]})},z=(n(74),n(29)),Y=n.n(z),J=function(e){var t=e.error,n=e.className,c=Object(M.a)(e,["error","className"]),r="".concat(t?Y.a.error:Y.a.myButton," ").concat(n);return Object(H.jsx)("button",Object(j.a)({className:r},c))},X=function(){return Object(H.jsxs)("div",{className:"RecoveryPassBlock",children:[Object(H.jsx)("h2",{children:"Recovery password"}),Object(H.jsxs)("div",{className:"RecoveryPassBlock__form",children:[Object(H.jsx)("label",{htmlFor:"recov",children:"Enter your email:"}),Object(H.jsx)(Z,{id:"recov"}),Object(H.jsx)(J,{type:"submit",children:"Send"}),Object(H.jsx)("p",{className:"RecoveryPassBlock__text",children:"* We will send you an email with further instructions on password recovery"})]})]})},$=n(17),q=n.n($);var Q=function(){return Object(H.jsxs)("div",{className:q.a.error,children:[Object(H.jsx)("div",{className:q.a.errorNumber,children:"404"}),Object(H.jsx)("div",{className:q.a.errorMessage,children:"Page not found!"}),Object(H.jsx)("div",{className:q.a.errorMessage,children:"Choose another page"}),Object(H.jsx)("div",{className:q.a.cat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ee=n(30),te=n.n(ee),ne=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(te.a.checkbox," ").concat(c||"");return Object(H.jsxs)("label",{children:[Object(H.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},a)),r&&Object(H.jsx)("span",{className:te.a.spanClassName,children:r})]})},ce=n(41),re=n.n(ce),ae=function(){return Object(H.jsxs)("div",{className:re.a.testPageBlock,children:[Object(H.jsx)("h1",{children:"Test component page"}),Object(H.jsxs)("div",{children:[Object(H.jsx)("h3",{children:"Button"}),Object(H.jsx)(J,{children:"Click"})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("h3",{children:"Input"}),Object(H.jsx)(Z,{})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("h3",{children:"Checkbox"}),Object(H.jsx)(ne,{})]})]})},se=n(10),ie=(n(75),n(76),function(){return Object(H.jsx)("div",{className:"lds-css",children:Object(H.jsxs)("div",{className:"lds-double-ring",children:[Object(H.jsx)("div",{}),Object(H.jsx)("div",{})]})})}),oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user})),n=t.isAuth,a=t.isLoading,s=Object(r.useState)("nya-admin@nya.nya"),i=Object(se.a)(s,2),u=i[0],l=i[1],j=Object(r.useState)("1qazxcvBG"),d=Object(se.a)(j,2),h=d[0],p=d[1],x=Object(r.useState)(!1),m=Object(se.a)(x,2),v=m[0],_=m[1],g=Object(r.useState)(!1),C=Object(se.a)(g,2),N=C[0],E=C[1],y=Object(r.useState)(!1),S=Object(se.a)(y,2),A=S[0],R=S[1];return n?Object(H.jsx)(K.a,{to:de.PROFILE}):Object(H.jsx)("section",{className:"login",children:Object(H.jsxs)("div",{className:"login__container",children:[a?Object(H.jsx)(ie,{}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Login"}),"Email",Object(H.jsx)(Z,{type:"email",value:u,onChange:function(e){var t=e.target;_(!1),l(t.value)}}),"Password",Object(H.jsx)(Z,{type:"password",value:h,onChange:function(e){E(!1),p(e.target.value)}})]}),Object(H.jsx)(B.b,{to:de.SIGNUP,children:"Sign Up (Registration)"}),Object(H.jsx)(ne,{onChangeChecked:function(e){R(e)},children:"Remember me!"}),Object(H.jsx)("button",{onClick:function(){var t;v||N||e((t={email:u,password:h,rememberMe:A},function(){var e=Object(O.a)(b.a.mark((function e(n){var r,a,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(P(!0)),e.next=4,f(t);case 4:r=e.sent,a=r.name,s=r.avatar,i=r._id,n(k({name:a,avatar:s,_id:i})),n((u=!0,{type:c.IS_AUTH,payload:{isAuth:u}})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),o=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",alert(o);case 16:return e.prev=16,n(P(!1)),e.finish(16);case 19:case"end":return e.stop()}var u}),e,null,[[0,12,16,19]])})));return function(t){return e.apply(this,arguments)}}()))},onMouseDown:function(){new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(u)||_(!0),h.length<6&&E(!0)},children:"Submit"})]}),v&&Object(H.jsx)("p",{className:"error",children:"Enter valid email"}),N&&Object(H.jsxs)("p",{className:"error",children:["Enter longer password more then 6 symbols Now: ",h.length]})]})})},ue=(n(77),function(){var e=Object(o.c)((function(e){return e.user.isRegister})),t=Object(o.c)((function(e){return e.user.isLoading})),n=Object(o.b)(),a=Object(r.useState)(""),s=Object(se.a)(a,2),i=s[0],u=s[1],l=Object(r.useState)(""),j=Object(se.a)(l,2),d=j[0],h=j[1],p=Object(r.useState)(""),f=Object(se.a)(p,2),x=f[0],v=f[1],_=Object(r.useState)(""),g=Object(se.a)(_,2),C=g[0],N=g[1],E=Object(r.useState)(""),k=Object(se.a)(E,2),y=k[0],S=k[1],A=Object(r.useState)(""),R=Object(se.a)(A,2),T=R[0],I=R[1],w=function(){return i?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(i)?d?d.length<8?S("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u0441\u043c\u0432\u043e\u043b\u043e\u0432"):x!==d?I("\u041d\u0435\u043f\u0440\u0430\u0432\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"):void 0:S("\u041f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):N("\u041d\u0435\u043f\u0440\u0430\u0432\u0435\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441\u0441"):N("\u041f\u043e\u043b\u0435 email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")};return e?Object(H.jsx)(K.a,{to:de.LOGIN}):Object(H.jsx)(H.Fragment,{children:t?Object(H.jsx)("div",{className:"wrapper",children:Object(H.jsx)(ie,{})}):Object(H.jsxs)("div",{className:"wrapper",children:[Object(H.jsx)("h2",{className:"wrapper_title",children:"Register"}),Object(H.jsx)("div",{className:"from_text",children:Object(H.jsx)(Z,{className:"form_text_input input",type:"email",onChange:function(e){u(e.currentTarget.value),N("")},value:i,onBlur:w,placeholder:"email"})}),Object(H.jsx)("div",{className:"from_password",children:Object(H.jsx)(Z,{className:"from_password_input input",type:"password",onChange:function(e){h(e.currentTarget.value),S("")},value:d,onBlur:w,placeholder:"password"})}),Object(H.jsx)("div",{className:"from_password_double",children:Object(H.jsx)(Z,{className:"from_password_double_input input",type:"password",onChange:function(e){v(e.currentTarget.value),I("")},value:x,onBlur:w,placeholder:"passwordConfirmation"})}),Object(H.jsxs)("div",{className:C?"errors":"",children:[" ",C," "]}),Object(H.jsxs)("div",{className:y?"errors":"",children:[" ",y," "]}),Object(H.jsxs)("div",{className:T?"errors":"",children:[" ",T]}),Object(H.jsx)("button",{className:"wrapper_btn_register btn",onClick:function(){var e;i&&d&&x&&n((e={email:i,password:d},function(){var t=Object(O.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(P(!0)),t.prev=1,t.next=4,m(e);case 4:t.sent,n((r=!0,{type:c.IS_REGISTER,payload:{isRegister:r}})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0.response.data.error);case 11:return t.prev=11,n(P(!1)),t.finish(11);case 14:case"end":return t.stop()}var r}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()))},onMouseDown:w,children:" register"}),Object(H.jsx)("a",{href:"http://localhost:3000/#/login",className:"wrapper_btn_signIn btn",children:"Sign In"})]})})}),le=(n(78),function(){var e=[{title:"Profile",link:de.PROFILE},{title:"Login",link:de.LOGIN},{title:"SignUp",link:de.SIGNUP},{title:"TestPage",link:de.TESTPAGE},{title:"Recovery",link:de.RECOVERY},{title:"Packs",link:de.PACKS}];return Object(H.jsx)("div",{className:"headerBlock",children:Object(H.jsx)("div",{className:"headerBlock__navBar",children:e.map((function(e){return Object(H.jsx)(B.c,{activeClassName:"headerBlock__navBar-active",className:"headerBlock__navBar-item",to:e.link,children:e.title},e.link)}))})})}),je=(n(79),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user.isAuth})),n=Object(o.c)((function(e){return e.decks.cardPacks})),c=Object(o.c)((function(e){return e.decks.page})),a=Object(o.c)((function(e){return e.decks.pageCount})),s=Object(o.c)((function(e){return e.decks.cardPacksTotalCount})),i=Object(o.c)((function(e){return e.user.isLoading}));Object(r.useEffect)((function(){e(w())}),[c]);for(var u=Math.ceil(s/a),l=[],j=1;j<=u;j++)l.push(j);return t?Object(H.jsx)(H.Fragment,{children:i?Object(H.jsx)("div",{className:"wrapper",children:Object(H.jsx)(ie,{})}):Object(H.jsxs)("div",{className:"wrapper_packs",children:[l.map((function(t,n){return Object(H.jsx)("span",{className:c===t?"page":"",onClick:function(){e(T(t))},children:t+" "},n)})),Object(H.jsx)("h4",{children:"Packs page"}),Object(H.jsx)("input",{type:"checkbox"}),Object(H.jsx)("span",{children:"my packs"}),Object(H.jsx)("h4",{children:"Card packs"}),Object(H.jsx)("table",{id:"simple-board",children:Object(H.jsxs)("tbody",{children:[Object(H.jsxs)("tr",{id:"row0",children:[Object(H.jsx)("td",{id:"cell0-0",children:"name"}),Object(H.jsx)("td",{id:"cell0-1",children:"cards count"}),Object(H.jsx)("td",{id:"cell0-2",children:"updated"}),Object(H.jsx)("td",{id:"cell0-2",children:"url"}),Object(H.jsx)("td",{id:"cell0-2",children:Object(H.jsx)("button",{onClick:function(){e(G())},children:"add"})})]}),n.map((function(t){return Object(H.jsxs)("tr",{children:[Object(H.jsx)("td",{children:t.name}),Object(H.jsx)("td",{children:t.cardsCount}),Object(H.jsx)("td",{children:t.updated}),Object(H.jsx)("td",{}),Object(H.jsxs)("td",{children:[Object(H.jsx)("button",{onClick:function(){var n;e((n=t._id,function(e){e(P(!0)),C(n).then((function(t){e(I(t.data.deletedCardsPack._id))})).catch((function(t){var n=t.response.data.error;e(I(n)),alert(n)})).finally((function(){e(P(!1))}))}))},children:"delete"}),Object(H.jsx)("button",{onClick:function(){var n;e((n={_id:t._id,name:"Vasya"},function(e){e(P(!0)),N(n).then((function(e){})).finally((function(){e(P(!1))}))}))},children:"update"}),Object(H.jsx)("a",{href:"",children:"cards"})]})]},t._id)}))]})})]})}):Object(H.jsx)(K.a,{to:de.LOGIN})}),de={PROFILE:"/profile",LOGIN:"/login",RECOVERY:"/recovery",SIGNUP:"/signUp",TESTPAGE:"/testPage",SETNEWPASSWORD:"/SetNewPassword",PACKS:"/packs"};var be=function(){return Object(H.jsxs)("div",{children:[Object(H.jsx)(le,{}),Object(H.jsxs)(K.d,{children:[Object(H.jsx)(K.b,{path:"/",exact:!0,render:function(){return Object(H.jsx)(K.a,{to:de.PROFILE})}}),Object(H.jsx)(K.b,{path:de.PROFILE,render:function(){return Object(H.jsx)(F,{})}}),Object(H.jsx)(K.b,{path:de.LOGIN,render:function(){return Object(H.jsx)(oe,{})}}),Object(H.jsx)(K.b,{path:de.SIGNUP,render:function(){return Object(H.jsx)(ue,{})}}),Object(H.jsx)(K.b,{path:de.RECOVERY,render:function(){return Object(H.jsx)(X,{})}}),Object(H.jsx)(K.b,{path:de.TESTPAGE,render:function(){return Object(H.jsx)(ae,{})}}),Object(H.jsx)(K.b,{path:de.PACKS,render:function(){return Object(H.jsx)(je,{})}}),Object(H.jsx)(K.b,{render:function(){return Object(H.jsx)(Q,{})}})]})]})};var Oe=function(){return Object(H.jsx)("div",{children:Object(H.jsx)(B.a,{children:Object(H.jsx)(be,{})})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(o.a,{store:D,children:Object(H.jsx)(Oe,{})})}),document.getElementById("root")),he()}},[[80,1,2]]]);
//# sourceMappingURL=main.58a343be.chunk.js.map