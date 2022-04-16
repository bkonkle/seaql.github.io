"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2921],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7727:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],p={},l="Index",c={unversionedId:"index",id:"version-0.6.x/index",title:"Index",description:"SeaORM Tutorials",source:"@site/versioned_docs/version-0.6.x/01-index.md",sourceDirName:".",slug:"/index",permalink:"/SeaORM/docs/0.6.x/index",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/01-index.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What is an ORM",permalink:"/SeaORM/docs/0.6.x/introduction/orm"}},s=[{value:"SeaORM Tutorials",id:"seaorm-tutorials",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Learn More",id:"learn-more",children:[],level:2}],m={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"index"},"Index"),(0,i.kt)("h2",{id:"seaorm-tutorials"},"SeaORM Tutorials"),(0,i.kt)("p",null,"If you prefer step-by-step tutorials on how to use SeaORM. You can checkout ",(0,i.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sea-orm-tutorial/"},"SeaORM Tutorials"),"!"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/introduction/orm"},"What is an ORM"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/introduction/async"},"Async Programming in Rust"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/introduction/sea-orm"},"SeaORM Concepts")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Installation & Configuration"),(0,i.kt)("p",{parentName:"li"},"1.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/install-and-config/database-and-async-runtime"},"Choosing a Database & Async Runtime")),(0,i.kt)("p",{parentName:"li"},"1.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/install-and-config/schema"},"Schema Management")),(0,i.kt)("p",{parentName:"li"},"1.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/install-and-config/connection"},"Connection Pool")),(0,i.kt)("p",{parentName:"li"},"1.4 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/install-and-config/debug-log"},"Debug Log"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generating Entities"),(0,i.kt)("p",{parentName:"li"},"2.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"},"Using ",(0,i.kt)("inlineCode",{parentName:"a"},"sea-orm-cli"))),(0,i.kt)("p",{parentName:"li"},"2.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/entity-structure"},"Entity Structure")),(0,i.kt)("p",{parentName:"li"},"2.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/expanded-entity-structure"},"Expanded Entity Structure")),(0,i.kt)("p",{parentName:"li"},"2.4 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-entity/enumeration"},"Enumeration"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generating Database Schema"),(0,i.kt)("p",{parentName:"li"},"3.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-database-schema/create-table"},"Create Table")),(0,i.kt)("p",{parentName:"li"},"3.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/generate-database-schema/create-enum"},"Create Enum"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Migration"),(0,i.kt)("p",{parentName:"li"},"4.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/migration/setting-up-migration"},"Setting Up Migration")),(0,i.kt)("p",{parentName:"li"},"4.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/migration/writing-migration"},"Writing Migration")),(0,i.kt)("p",{parentName:"li"},"4.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/migration/running-migration"},"Running Migration"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Basic CRUD"),(0,i.kt)("p",{parentName:"li"},"5.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/select"},"SELECT: find, filter, sort, paging")),(0,i.kt)("p",{parentName:"li"},"5.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/insert"},"INSERT: Model & ActiveModel, insert many")),(0,i.kt)("p",{parentName:"li"},"5.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/update"},"UPDATE: find & save, update many")),(0,i.kt)("p",{parentName:"li"},"5.4 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/save"},"SAVE: insert or update")),(0,i.kt)("p",{parentName:"li"},"5.5 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/delete"},"DELETE: delete one & delete many")),(0,i.kt)("p",{parentName:"li"},"5.6 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/json"},"JSON")),(0,i.kt)("p",{parentName:"li"},"5.7 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/basic-crud/raw-sql"},"Raw SQL query")))),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Relations"),(0,i.kt)("p",{parentName:"li"},"6.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/relation/one-to-one"},"One to One")),(0,i.kt)("p",{parentName:"li"},"6.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/relation/one-to-many"},"One to Many")),(0,i.kt)("p",{parentName:"li"},"6.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/relation/many-to-many"},"Many to Many")),(0,i.kt)("p",{parentName:"li"},"6.4 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/relation/chained-relations"},"Chained Relations")),(0,i.kt)("p",{parentName:"li"},"6.5 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/relation/self-referencing"},"Self Referencing")),(0,i.kt)("p",{parentName:"li"},"6.6 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/relation/bakery-schema"},"Bakery Schema"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Writing Tests"),(0,i.kt)("p",{parentName:"li"},"7.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/write-test/testing"},"Robust & Correct")),(0,i.kt)("p",{parentName:"li"},"7.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/write-test/mock"},"Mock Interface")),(0,i.kt)("p",{parentName:"li"},"7.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/write-test/sqlite"},"Using SQLite"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Advanced Queries"),(0,i.kt)("p",{parentName:"li"},"8.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/custom-select"},"Custom select")),(0,i.kt)("p",{parentName:"li"},"8.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/conditional-expression"},"Conditional expressions")),(0,i.kt)("p",{parentName:"li"},"8.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/aggregate-function"},"Aggregate functions")),(0,i.kt)("p",{parentName:"li"},"8.4 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/custom-joins"},"Custom Joins")),(0,i.kt)("p",{parentName:"li"},"8.5 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/subquery"},"Subquery")),(0,i.kt)("p",{parentName:"li"},"8.6 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/transaction"},"Transaction")),(0,i.kt)("p",{parentName:"li"},"8.7 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/streaming"},"Streaming")),(0,i.kt)("p",{parentName:"li"},"8.8 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/advanced-query/custom-active-model"},"Custom Active Model"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Internal Design"),(0,i.kt)("p",{parentName:"li"},"9.1 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/internal-design/trait-and-type"},"Traits and Types")),(0,i.kt)("p",{parentName:"li"},"9.2 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/internal-design/derive-macro"},"Derive Macros")),(0,i.kt)("p",{parentName:"li"},"9.3 ",(0,i.kt)("a",{parentName:"p",href:"/SeaORM/docs/0.6.x/internal-design/diesel"},"Compare with Diesel")))))}d.isMDXComponent=!0}}]);