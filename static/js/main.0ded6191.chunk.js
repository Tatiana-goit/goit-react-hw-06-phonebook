(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={section:"Filter_section__34z6x",text:"Filter_text__1F6CF",input:"Filter_input__2gxIW"}},13:function(e,t,n){e.exports={backDrop:"Modal_backDrop__R2YSJ",content:"Modal_content__3WZzC"}},15:function(e,t,n){e.exports={container:"Container_container__1YtyY"}},18:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"},{"id":"id-5","name":"Tatiana Taranushchenko","number":"369-25-14"}]')},24:function(e,t,n){},25:function(e,t,n){},3:function(e,t,n){e.exports={form:"ContactForm_form__1g75A",label:"ContactForm_label__2za9r",name:"ContactForm_name__49CSm",input:"ContactForm_input__1cpms"}},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(24),n(8)),s=(n(25),n(14)),u=n(15),l=n.n(u),b=n(1);function d(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})}var j=n(2),m="ADD_CONTACT",p="DELETE_CONTACT",O="CHANGE_FILTER",f=n(35),h=function(e){return e.contact},x=function(e){return e.filter},_=function(e){var t=h(e),n=x(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},v=n(3),C=n.n(v);function N(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],u=i[1],l=Object(j.c)(h),d=Object(j.b)(),p=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},O=function(){c(""),u("")};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:C.a.form,onSubmit:function(e){if(e.preventDefault(),l.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return O(),alert("".concat(n," is already in the directory"));d(function(e){var t=e.name,n=e.number;return{type:m,payload:{id:Object(f.a)(),name:t,number:n}}}({name:n,number:s})),O()},children:[Object(b.jsxs)("label",{className:C.a.label,children:[Object(b.jsx)("span",{className:C.a.name,children:"Name"}),Object(b.jsx)("input",{className:C.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:p})]}),Object(b.jsxs)("label",{className:C.a.label,children:[Object(b.jsx)("span",{className:C.a.name,children:"Number"}),Object(b.jsx)("input",{className:C.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:p})]}),Object(b.jsx)("button",{className:C.a.button,type:"submit",children:"Add"})]})})}var y=n(5),g=n.n(y);function w(){var e=Object(j.c)(_),t=Object(j.b)();return Object(b.jsx)("ul",{className:g.a.list,children:e.map((function(e){var n=e.name,a=e.number,c=e.id;return Object(b.jsxs)("li",{className:g.a.item,children:[Object(b.jsxs)("div",{className:g.a.info,children:[Object(b.jsxs)("p",{className:g.a.name,children:[" ",n]}),Object(b.jsxs)("p",{className:g.a.number,children:[" ",a]})]}),Object(b.jsx)("button",{type:"button",onClick:function(){return t(function(e){return{type:p,payload:e}}(c))},children:"Delete"})]},c)}))})}var k=n(10),A=n.n(k);function L(){var e=Object(j.c)(x),t=Object(j.b)();return Object(b.jsxs)("div",{className:A.a.section,children:[Object(b.jsx)("span",{className:A.a.text,children:" \u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(b.jsx)("input",{className:A.a.input,type:"text",value:e,onChange:function(e){return t((n=e.currentTarget.value,{type:O,payload:n}));var n}})]})}var E=n(13),T=n.n(E);function F(e){var t=e.toggleModal,n=e.children;Object(a.useEffect)((function(){return window.addEventListener("keydown",c),window.removeEventListener("keydown",i)}));var c=function(e){"Escape"===e.code&&t()},i=function(e){e.currentTarget===e.target&&t()};return Object(r.createPortal)(Object(b.jsx)("div",{className:T.a.backDrop,onClick:i,children:Object(b.jsx)("div",{className:T.a.content,children:n})}),document.getElementById("modalRoot"))}function S(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(){return c(!n)};return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d,{children:[Object(b.jsxs)("h1",{children:[Object(b.jsx)(s.a,{}),"Phonebook"]}),Object(b.jsx)("button",{className:"center_button",type:"button",onClick:r,children:"Add contact"}),n&&Object(b.jsx)(F,{toggleModal:r,children:Object(b.jsx)(N,{})}),Object(b.jsxs)("h2",{children:[Object(b.jsx)(s.b,{}),"Contacts"]}),Object(b.jsx)(L,{}),Object(b.jsx)(w,{})]})})}var D=n(6),z=n(17),M=n(19),I=n(18),J=Object(D.combineReducers)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case m:return[].concat(Object(M.a)(e),[a]);case p:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return n===O?a:e}}),R=J,Z=Object(D.createStore)(R,Object(z.composeWithDevTools)());i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j.a,{store:Z,children:Object(b.jsx)(S,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={list:"ContactList_list__30I8t",item:"ContactList_item__3Ujw1",info:"ContactList_info__3yjpL",name:"ContactList_name__1xujP"}}},[[33,1,2]]]);
//# sourceMappingURL=main.0ded6191.chunk.js.map