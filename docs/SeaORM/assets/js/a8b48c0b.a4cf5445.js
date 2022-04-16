"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1036],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,v=u["".concat(p,".").concat(s)]||u[s]||c[s]||i;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5904:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Derive Macros",m={unversionedId:"internal-design/derive-macro",id:"internal-design/derive-macro",title:"Derive Macros",description:"EntityModel",source:"@site/docs/10-internal-design/02-derive-macro.md",sourceDirName:"10-internal-design",slug:"/internal-design/derive-macro",permalink:"/SeaORM/docs/next/internal-design/derive-macro",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/10-internal-design/02-derive-macro.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Traits and Types",permalink:"/SeaORM/docs/next/internal-design/trait-and-type"},next:{title:"Compare with Diesel",permalink:"/SeaORM/docs/next/internal-design/diesel"}},d=[{value:"EntityModel",id:"entitymodel",children:[],level:2},{value:"Entity",id:"entity",children:[],level:2},{value:"Column",id:"column",children:[],level:2},{value:"Primary Key",id:"primary-key",children:[],level:2},{value:"Model",id:"model",children:[],level:2},{value:"Active Model",id:"active-model",children:[],level:2},{value:"Active Enum",id:"active-enum",children:[],level:2},{value:"Relation",id:"relation",children:[],level:2},{value:"Iterable",id:"iterable",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"derive-macros"},"Derive Macros"),(0,i.kt)("h2",{id:"entitymodel"},"EntityModel"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityModel"))," derive macro is the 'almighty' macro which automatically generates ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Column"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," from a given ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,i.kt)("h2",{id:"entity"},"Entity"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveEntity"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityTrait"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," and it assumes ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Column"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Relation")," exist in the current scope. It also provides implementation of ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Iden"))," and ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,i.kt)("h2",{id:"column"},"Column"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveColumn"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ColumnTrait"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Columns"),". It defines the identifier of each column by implementing ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Iden"))," and ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"IdenStatic")),". The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EnumIter"))," is also derived, allowing iteration over all enum variants."),(0,i.kt)("h2",{id:"primary-key"},"Primary Key"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DerivePrimaryKey"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey")," which defines tedious mappings between primary keys and columns. The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EnumIter"))," is also derived, allowing iteration over all enum variants."),(0,i.kt)("h2",{id:"model"},"Model"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveModel"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelTrait"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),", which provides setters and getters for all attributes in the model. It also implements ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"FromQueryResult"))," to convert a query result into the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,i.kt)("h2",{id:"active-model"},"Active Model"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveActiveModel"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveModelTrait"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," which provides setters and getters for all active values in the active model."),(0,i.kt)("h2",{id:"active-enum"},"Active Enum"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveActiveEnum"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," for any enums."),(0,i.kt)("h2",{id:"relation"},"Relation"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DeriveRelation"))," derive macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"RelationTrait"))," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Relation"),"."),(0,i.kt)("h2",{id:"iterable"},"Iterable"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"EnumIter"))," derived macro will implement ",(0,i.kt)("a",{parentName:"p",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"Iterable"))," to allow iteration over all enum variants."))}u.isMDXComponent=!0}}]);