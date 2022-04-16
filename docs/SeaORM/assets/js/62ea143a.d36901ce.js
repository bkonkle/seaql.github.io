"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[1237],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5586:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},c="Delete",d={unversionedId:"basic-crud/delete",id:"version-0.7.x/basic-crud/delete",title:"Delete",description:"Delete One",source:"@site/versioned_docs/version-0.7.x/06-basic-crud/05-delete.md",sourceDirName:"06-basic-crud",slug:"/basic-crud/delete",permalink:"/SeaORM/docs/basic-crud/delete",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/06-basic-crud/05-delete.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Save",permalink:"/SeaORM/docs/basic-crud/save"},next:{title:"JSON",permalink:"/SeaORM/docs/basic-crud/json"}},s=[{value:"Delete One",id:"delete-one",children:[],level:2},{value:"Delete by Primary Key",id:"delete-by-primary-key",children:[],level:2},{value:"Delete Many",id:"delete-many",children:[],level:2}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delete"},"Delete"),(0,o.kt)("h2",{id:"delete-one"},"Delete One"),(0,o.kt)("p",null,"Find a ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," from the database, then delete the corresponding row from database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let orange: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;\nlet orange: fruit::Model = orange.unwrap();\n\nlet res: DeleteResult = orange.delete(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,o.kt)("h2",{id:"delete-by-primary-key"},"Delete by Primary Key"),(0,o.kt)("p",null,"Instead of selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," from the database then deleting it. You could also delete a row from database directly by its primary key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let res: DeleteResult = Fruit::delete_by_id(38).exec(db).await?;\nassert_eq!(res.rows_affected, 1);\n")),(0,o.kt)("h2",{id:"delete-many"},"Delete Many"),(0,o.kt)("p",null,"You can also delete multiple rows from the database without finding each ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'\nlet res: DeleteResult = fruit::Entity::delete_many()\n    .filter(fruit::Column::Name.contains(\"Orange\"))\n    .exec(db)\n    .await?;\n\nassert_eq!(res.rows_affected, 2);\n")))}p.isMDXComponent=!0}}]);