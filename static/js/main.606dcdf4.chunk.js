(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"header":{"title":"Hello!","subtitle":"I\'m Ricardo","text":"Web/Android developer","image":"/images/yo.jpg"},"about":{"hello":"Hi, I\'m Ricardo Cuanalo, software developer.","description":"Soy de M\xe9xico, tengo 22 a\xf1os y trabajo como desarrollador de front-end. En particular me especializo en aplicaciones web con ReactJS y NestJS. Me gusta el trabajo en equipo, soy paciente y curioso para aprender cosas nuevas. Me encanta ayudar a mis compa\xf1eros y compartir mi experiencia.","photo":"/images/avatar.png","text":["I like to understand how the things work.","I enjoy create amazing things","I study in BUAP"],"subtext":"#js #reactjs #nestjs #nodejs #mysql"},"projects":[{"id":0,"name":"Streaming radio website","link":"https://radioenlinea.click","description":"Web application to listen radio streaming (React + NodeJs + MySQL)","image":"RadioStreaming.png"},{"id":1,"name":"Todo list app","link":"https://github.com/Ricardo272727/todo-list-app","description":"To do list app colaborative, organize tasks in a team. (React + NodeJs + MongoDB)","image":"Tasks.png"},{"id":2,"name":"Piano game","link":"https://github.com/Ricardo272727/react-piano","description":"A simple web application to play piano. (React)","image":"Piano.png"},{"id":3,"name":"100 mexicanos dijeron game","link":"https://github.com/Ricardo272727/100-mexicanos-dijeron-react","description":"A funny game for the family, enjoy answer popular questions and compete with other team. (React)","image":"cien_mexicanos.png"},{"id":4,"name":"Laboratory management system","link":"https://github.com/Ricardo272727/blog-management-system","description":"Platform for manage laboratories and inventory from school, (React + NodeJS + Mysql + Knex + Ajv)","image":"laboratory_management.png"},{"id":5,"name":"React file browser cu - Library","link":"https://github.com/Ricardo272727/react-file-browser-cu","description":"Javascript library for display folders and files on a tree structure, faster and very customizable. (React)","image":"file_browser_cu.png"},{"id":6,"name":"Online radio dashboard","link":"http://radioenlinea.click:3001","description":"Dashboard for manage streamers and online radio transmission","image":"radio_en_linea_dash.png"},{"id":7,"name":"Browser code editor","link":"https://github.com/Ricardo272727/blog-management-system","description":"In progress... a simple browser code editor for js and react (React)","image":"browser_code_editor.png"},{"id":8,"name":"Streaming radio apps","link":"https://play.google.com/store/apps/dev?id=7327780089688144648&hl=es_MX&gl=US","description":"Android apps for radio online, chat and listen music. (Android kotlin)","image":"apps.png"}],"experience":[{"id":0,"name":"TecnoPubliMX","link":"https://tecnopublimx.com","image":"tecnopubli.png"},{"id":1,"name":"Octopy","link":"https://octopy.com","image":"octopy.png"}]}')},32:function(e,a,t){e.exports=t(63)},46:function(e,a,t){},47:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),i=t.n(c),l=t(6),o=t(28),m=t.n(o),s=t(64),d=t(65),u=t(66),p=(t(46),t(47),function(e){return r.a.createElement("div",{className:"circular-photo"},r.a.createElement("img",{src:e.src,className:"img-fluid wow fadeInRight",alt:e.alt||"image"}))}),f=t(5),g=function(e){var a=Object(f.b)((function(e){return e.data.header}));return r.a.createElement(s.a,{fluid:!0,className:"header-section"},r.a.createElement(d.a,null,r.a.createElement(u.a,{xs:12}),r.a.createElement(u.a,{xs:{size:10,offset:1},md:{size:8,offset:2}},r.a.createElement("div",{className:"paper"},r.a.createElement("h1",{className:"wow fadeInLeft"},a.title),r.a.createElement("h2",{className:"wow fadeInRight"},a.subtitle),r.a.createElement("p",{className:"wow fadeInLeft"},a.text),r.a.createElement(p,{src:a.image})))))},E=(t(50),function(e){return r.a.createElement("div",{className:"tab wow backInLeft"},r.a.createElement("div",{className:"tab-child"},r.a.createElement("h4",null,e.children)))}),b=(t(51),function(e){var a=Object(f.b)((function(e){return e.data.about}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"about"},r.a.createElement(E,null,"About me"),r.a.createElement(s.a,{className:"py-5 main"},r.a.createElement(d.a,{className:"pt-5"},r.a.createElement(u.a,{xs:12,md:{size:10,offset:1}},r.a.createElement("div",{className:"hello wow fadeInLeft"},r.a.createElement("h3",null,a.hello||"Hi, I'm Ricardo!")),r.a.createElement("div",{className:"description wow fadeInRight"},r.a.createElement("p",null,a.description)),r.a.createElement("div",{className:"photo wow fadeInLeft"},r.a.createElement("img",{src:a.photo,alt:a.name})))))))}),h=(t(52),function(e){var a=e.name,t=e.link,n=e.image,c=e.description;return r.a.createElement("div",{className:"project wow fadeInTopLeft mt-3"},r.a.createElement("a",{href:t,className:"link",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"images/"+n,className:"img-fluid",alt:a||"Project image"})),r.a.createElement("div",{className:"ct-title"},r.a.createElement("span",null,a||"Project name")),r.a.createElement("div",{className:"description"},c)))}),y=(t(53),function(e){var a=Object(f.b)((function(e){return e.projects}));return r.a.createElement("section",{className:"projects"},r.a.createElement(E,null,"Projects"),r.a.createElement(s.a,{className:"py-5"},r.a.createElement(d.a,{className:"wow fadeInLeft"},a.map((function(e){return r.a.createElement(u.a,{xs:12,md:4,key:e.id},r.a.createElement(h,e))})))))}),k=t(31),j=(t(54),t(9)),v=function(e){var a=Object(n.useState)(!1),t=Object(k.a)(a,2),c=t[0],i=t[1],o=function(){return i(!c)},m=window.innerWidth>=768||c?"":"hidden";return r.a.createElement("nav",{className:"navbar"},r.a.createElement("button",{onClick:o,className:"btn-toggle"},r.a.createElement(j.a,null)),r.a.createElement("ul",{className:m},r.a.createElement("li",null,r.a.createElement(l.Link,{to:"header",smooth:"easeInQuad",duration:250,onClick:o},r.a.createElement(j.c,null))),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"about",smooth:"easeInQuad",duration:250,onClick:o,offset:-50},"About")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"projects",smooth:"easeInQuad",duration:250,onClick:o,offset:-50},"Projects")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"experience",smooth:"easeInQuad",duration:250,onClick:o,offset:-50},"Experience")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Ricardo272727",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("span",null,"Github"),r.a.createElement(j.b,{className:"ml-3"})))))},w=(t(55),function(e){return r.a.createElement("footer",null,r.a.createElement("a",{href:"mailto:cuanaloricardo@gmail.com?subject=Hola"},"cuanaloricardo@gmail.com"),r.a.createElement("a",{href:"https://github.com/Ricardo272727",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"Github"),r.a.createElement(j.b,{className:"ml-3"})))}),N=(t(56),t(57),t(58),t(30)),x=(t(59),t(60),function(e){var a=e.type,t=e.children,n=e.onClick;return r.a.createElement("button",{onClick:n,className:"slide-button "+a},r.a.createElement("span",null,t))}),I=function(){var e=Object(n.useRef)(null);return r.a.createElement(N.Parallax,{blur:2,bgImage:"/images/971.jpg",bgImageAlt:"Programming",strength:200,className:"wow fadeInLeft"},r.a.createElement("a",{ref:e,href:"mailto:cuanaloricardo@gmail.com?subject=Hola",target:"_blank",rel:"noopener noreferrer",style:{display:"none"}},"Mail to cuanaloricardo@gmail.com"),r.a.createElement("div",{style:{height:"60vh",display:"flex",alignItems:"flex-end",padding:"2rem"}},r.a.createElement("div",{className:"send-email"},r.a.createElement(x,{onClick:function(){e.current&&e.current.click()},type:"right"}," ","Contact me"," "))))},R=(t(61),t(62),function(e){e.id;var a=e.name,t=e.image,n=e.link;return r.a.createElement("div",{className:"experience-item"},r.a.createElement("h1",null,a),r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/".concat(t),alt:a})))}),O=function(e){var a=Object(f.b)((function(e){return e.experience}));return r.a.createElement("section",{className:"experience"},r.a.createElement(E,null,"Experience"),r.a.createElement(s.a,{className:"py-5"},r.a.createElement(d.a,{className:"wow fadeInLeft"},a.map((function(e){return r.a.createElement(u.a,{xs:12,key:e.id},r.a.createElement(R,{id:e.id,name:e.name,image:e.image,link:e.link}))})))))};var _=function(){return Object(n.useEffect)((function(){new m.a.WOW({live:!1}).init()})),Object(n.useEffect)((function(){var e=document.getElementById("loading");e&&(e.style.display="none")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(l.Element,{name:"header"},r.a.createElement(g,null)),r.a.createElement(I,null),r.a.createElement(l.Element,{name:"about"},r.a.createElement(b,null)),r.a.createElement(l.Element,{name:"projects"},r.a.createElement(y,null)),r.a.createElement(l.Element,{name:"experience"},r.a.createElement(O,null)),r.a.createElement(w,null))},L=t(10),S=t(13),A="SET_PROJECTS",P="SET_DATA",C=t(14),J={data:C,projects:C.projects,experience:C.experience},M=Object(S.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return Object(L.a)(Object(L.a)({},e),{},{projects:a.projects});case P:return Object(L.a)(Object(L.a)({},e),{},{data:a.data});default:return e}}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:M},r.a.createElement(_,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.606dcdf4.chunk.js.map