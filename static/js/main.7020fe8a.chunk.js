(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(13),i=a.n(c),d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},l=(a(21),a(22),a(3)),o=a(15),j=(a(23),s.a.createContext({})),u=function(){var e=Object(r.useContext)(j);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(n.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,r=e.name,s=e.picture,c=e.phone,i=e.email,d=e.dob;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(n.jsx)("img",{src:s.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(n.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(n.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(n.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(n.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(n.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(d.date)})]},a.uuid)})):Object(n.jsx)(n.Fragment,{})})},b=(a(24),function(){var e=Object(r.useContext)(j);return Object(n.jsx)("div",{className:"datatable mt-5",children:Object(n.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,r=t.width;return Object(n.jsxs)("th",{className:"col",style:{width:r},onClick:function(){e.handleSort(a)},children:[a,Object(n.jsx)("span",{className:"pointer"})]},a)}))})}),Object(n.jsx)(u,{})]})})}),h=(a(25),function(){var e=Object(r.useContext)(j);return Object(n.jsx)("div",{className:"searchbox",children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"",children:"Search"})}),Object(n.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}})]})})});a(26);var m=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:Object(n.jsx)("div",{className:"search-area col-4",children:Object(n.jsx)(h,{})})})]})},f=a(14),v=a.n(f),O=function(){return v.a.get("https://randomuser.me/api/?results=200&nat=us")},p=(a(44),function(){var e=Object(r.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){O().then((function(e){console.log(e.data.results),s(Object(l.a)(Object(l.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(n.jsxs)(j.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,n=a.users.filter((function(e){var a=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(t,a),-1!==a.indexOf(t.toLowerCase()))return e}));s(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:n}))},handleSort:function(e){var t=a.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var n=a.filteredUsers.sort((function(a,n){return"ascend"===t?void 0===a[e]?1:void 0===n[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):"dob"===e?a[e].age-n[e].age:a[e].localeCompare(n[e]):void 0===a[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):"dob"===e?n[e].age-a[e].age:n[e].localeCompare(a[e])})),r=a.headings.map((function(a){return a.order=a.name===e?t:a.order,a}));s(Object(l.a)(Object(l.a)({},a),{},{filteredUsers:n,headings:r}))}},children:[Object(n.jsx)(m,{}),Object(n.jsx)("div",{className:"data-area",children:a.filteredUsers.length>0?Object(n.jsx)(b,{}):Object(n.jsx)("div",{})})]})});a(45);var g=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p,{})})};a(46);var x=function(e){var t=e.children;return Object(n.jsx)("div",{className:"wrapper",children:t})};a(47);var N=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})};a(48);var C=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(x,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(g,{})]})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),d()}},[[49,1,2]]]);
//# sourceMappingURL=main.7020fe8a.chunk.js.map