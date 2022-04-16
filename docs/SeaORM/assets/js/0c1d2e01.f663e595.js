"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1586],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),v=a,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},479:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="Save",s={unversionedId:"basic-crud/save",id:"version-0.5.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.5.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/SeaORM/docs/0.5.x/basic-crud/save",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/05-basic-crud/04-save.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:4,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Update",permalink:"/SeaORM/docs/0.5.x/basic-crud/update"},next:{title:"Delete",permalink:"/SeaORM/docs/0.5.x/basic-crud/delete"}},u=[{value:"Save Behaviour",id:"save-behaviour",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"save"},"Save"),(0,i.kt)("p",null,"This is a helper method to save (insert / update) ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,i.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,i.kt)("p",null,"When saving an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,i.kt)("inlineCode",{parentName:"li"},"NotSet")),(0,i.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,i.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::ActiveValue::NotSet;\n\nlet banana = fruit::ActiveModel {\n    id: NotSet, // primary key is NotSet\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `NotSet`\n};\n\n// Insert, because primary key `id` is `NotSet`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Unchanged`\nlet banana: fruit::ActiveModel = banana.save(db).await?;\n')))}p.isMDXComponent=!0}}]);