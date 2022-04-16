"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2233],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(d,".").concat(p)]||m[p]||l[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1626:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},d="Create Index",c={unversionedId:"generate-database-schema/create-index",id:"version-0.7.x/generate-database-schema/create-index",title:"Create Index",description:"To create indexes in database instead of writing IndexCreateStatement manually, you can derive it from Entity using Schema::createindexfromentity. This method will help you create database indexes defined in Entity.",source:"@site/versioned_docs/version-0.7.x/04-generate-database-schema/03-create-index.md",sourceDirName:"04-generate-database-schema",slug:"/generate-database-schema/create-index",permalink:"/SeaORM/docs/generate-database-schema/create-index",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/04-generate-database-schema/03-create-index.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Enum",permalink:"/SeaORM/docs/generate-database-schema/create-enum"},next:{title:"Setting Up Migration",permalink:"/SeaORM/docs/migration/setting-up-migration"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-index"},"Create Index"),(0,i.kt)("p",null,"To create indexes in database instead of writing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html"},(0,i.kt)("inlineCode",{parentName:"a"},"IndexCreateStatement"))," manually, you can derive it from ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_index_from_entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Schema::create_index_from_entity")),". This method will help you create database indexes defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"."),(0,i.kt)("p",null,"Below we use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/indexes.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"Indexes"))," entity to demo its generated SQL statement. You can construct the same statement with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html"},(0,i.kt)("inlineCode",{parentName:"a"},"IndexCreateStatement")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{sea_query, tests_cfg::*, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nlet stmts = schema.create_index_from_entity(indexes::Entity);\nassert_eq!(stmts.len(), 2);\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index1_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index1Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[0]), builder.build(&idx));\n\nlet idx = sea_query::Index::create()\n    .name("idx-indexes-index2_attr")\n    .table(indexes::Entity)\n    .col(indexes::Column::Index2Attr)\n    .to_owned();\nassert_eq!(builder.build(&stmts[1]), builder.build(&idx));\n')))}m.isMDXComponent=!0}}]);