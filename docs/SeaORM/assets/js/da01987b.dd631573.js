"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[8543],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},s="Streaming",l={unversionedId:"advanced-query/streaming",id:"version-0.7.x/advanced-query/streaming",title:"Streaming",description:"Use async stream on any Select for reducing memory allocation to improve efficiency.",source:"@site/versioned_docs/version-0.7.x/09-advanced-query/07-streaming.md",sourceDirName:"09-advanced-query",slug:"/advanced-query/streaming",permalink:"/SeaORM/docs/advanced-query/streaming",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/09-advanced-query/07-streaming.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction",permalink:"/SeaORM/docs/advanced-query/transaction"},next:{title:"Custom Active Model",permalink:"/SeaORM/docs/advanced-query/custom-active-model"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"streaming"},"Streaming"),(0,o.kt)("p",null,"Use async stream on any ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," for reducing memory allocation to improve efficiency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// Stream all fruits\nlet mut stream = Fruit::find().stream(db).await?;\n\nwhile let Some(item) = stream.try_next().await? {\n    let item: fruit::ActiveModel = item.into();\n    // do something with item\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// Stream all fruits with name contains character "a"\nlet mut stream = Fruit::find()\n    .filter(fruit::Column::Name.contains("a"))\n    .order_by_asc(fruit::Column::Name)\n    .stream(db)\n    .await?;\n')),(0,o.kt)("p",null,"Note that the stream object will exclusively hold onto the connection until dropped, preventing the connection to be borrowed by others."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"{\n    let s1 = Fruit::find().stream(db).await?;\n    let s2 = Fruit::find().stream(db).await?;\n    let s3 = Fruit::find().stream(db).await?;\n    // 3 connections are held\n}\n// All streams are dropped and connections are returned to the connection pool\n")))}d.isMDXComponent=!0}}]);