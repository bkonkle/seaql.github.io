"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1251],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=i,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5038:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},p="Traits and Types",d={unversionedId:"internal-design/trait-and-type",id:"version-0.6.x/internal-design/trait-and-type",title:"Traits and Types",description:"Entity",source:"@site/versioned_docs/version-0.6.x/10-internal-design/01-trait-and-type.md",sourceDirName:"10-internal-design",slug:"/internal-design/trait-and-type",permalink:"/SeaORM/docs/0.6.x/internal-design/trait-and-type",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/10-internal-design/01-trait-and-type.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Active Model",permalink:"/SeaORM/docs/0.6.x/advanced-query/custom-active-model"},next:{title:"Derive Macros",permalink:"/SeaORM/docs/0.6.x/internal-design/derive-macro"}},m=[{value:"Entity",id:"entity",children:[],level:2},{value:"Column",id:"column",children:[],level:2},{value:"Primary Key",id:"primary-key",children:[],level:2},{value:"Model",id:"model",children:[],level:2},{value:"Active Model",id:"active-model",children:[],level:2},{value:"Active Enum",id:"active-enum",children:[],level:2},{value:"Relation",id:"relation",children:[],level:2},{value:"Related",id:"related",children:[],level:2},{value:"Linked",id:"linked",children:[],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"traits-and-types"},"Traits and Types"),(0,r.kt)("h2",{id:"entity"},"Entity"),(0,r.kt)("p",null,"A unit struct that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityTrait"))," representing a table in the database."),(0,r.kt)("p",null,"This trait contains the properties of an entity including"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table Name (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityName")),")"),(0,r.kt)("li",{parentName:"ul"},"Column (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait")),")"),(0,r.kt)("li",{parentName:"ul"},"Relation (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait")),")"),(0,r.kt)("li",{parentName:"ul"},"Primary Key (implemented ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyTrait"))," and ",(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyToColumn")),")")),(0,r.kt)("p",null,"This trait also provides an API for CRUD actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select: ",(0,r.kt)("inlineCode",{parentName:"li"},"find"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"find_*")),(0,r.kt)("li",{parentName:"ul"},"Insert: ",(0,r.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"insert_*")),(0,r.kt)("li",{parentName:"ul"},"Update: ",(0,r.kt)("inlineCode",{parentName:"li"},"update"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"update_*")),(0,r.kt)("li",{parentName:"ul"},"Delete: ",(0,r.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"delete_*"))),(0,r.kt)("h2",{id:"column"},"Column"),(0,r.kt)("p",null,"An enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ColumnTrait"))," representing all columns of the table and the column types and attributes."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," provides mapping to column identifier with static lifetime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all column variants")),(0,r.kt)("h2",{id:"primary-key"},"Primary Key"),(0,r.kt)("p",null,"An enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"PrimaryKeyTrait"))," representing the primary key. Each primary key variant must have a corresponding column variant."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"IdenStatic"))," provides mapping to primary key identifier with static lifetime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all primary key variants")),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"A struct that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTrait"))," storing the query result in memory. This is intended for readonly purposes, and it is stateless."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"FromQueryResult"))," converts raw query result into corresponding model")),(0,r.kt)("h2",{id:"active-model"},"Active Model"),(0,r.kt)("p",null,"A struct that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModelTrait"))," representing insert/update actions. This is intended to be edited and saved into database."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveModelBehavior"))," defines handlers for different actions on an active model")),(0,r.kt)("h2",{id:"active-enum"},"Active Enum"),(0,r.kt)("p",null,"A enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"ActiveEnum"))," representing value stored in database as a Rust enum variant."),(0,r.kt)("h2",{id:"relation"},"Relation"),(0,r.kt)("p",null,"An enum that implements ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"RelationTrait"))," defined relations with other entities."),(0,r.kt)("p",null,"It also implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Iterable"))," allows SeaORM core to iterate over all relation variants")),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("p",null,"A generic trait, ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Related")),", defines join paths to help you query related entities together, especially helpful in many-to-many relations."),(0,r.kt)("h2",{id:"linked"},"Linked"),(0,r.kt)("p",null,"A trait, ",(0,r.kt)("a",{parentName:"p",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"Linked")),", defines complex join paths including chained relation, self referencing relation and multiple relations between two entities."))}s.isMDXComponent=!0}}]);