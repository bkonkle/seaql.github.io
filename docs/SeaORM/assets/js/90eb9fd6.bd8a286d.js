"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3471],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2081:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={},p="Update",l={unversionedId:"basic-crud/update",id:"basic-crud/update",title:"Update",description:"Update One",source:"@site/docs/06-basic-crud/03-update.md",sourceDirName:"06-basic-crud",slug:"/basic-crud/update",permalink:"/SeaORM/docs/next/basic-crud/update",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-basic-crud/03-update.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Insert",permalink:"/SeaORM/docs/next/basic-crud/insert"},next:{title:"Save",permalink:"/SeaORM/docs/next/basic-crud/save"}},c=[{value:"Update One",id:"update-one",children:[],level:2},{value:"Update Many",id:"update-many",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"update"},"Update"),(0,i.kt)("h2",{id:"update-one"},"Update One"),(0,i.kt)("p",null,"You will get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," from find result. If you want to save the model back into the database, you need to convert it into an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," ",(0,i.kt)("em",{parentName:"p"},"first"),". The generated query will only include the ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;\n\n// Into ActiveModel\nlet mut pear: fruit::ActiveModel = pear.unwrap().into();\n\n// Update name attribute\npear.name = Set("Sweet pear".to_owned());\n\n// Update corresponding row in database using primary key value\nlet pear: fruit::Model = pear.update(db).await?;\n')),(0,i.kt)("h2",{id:"update-many"},"Update Many"),(0,i.kt)("p",null,"You can also update multiple rows in the database without finding each ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," with SeaORM select."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Bulk set attributes using ActiveModel\nlet update_result: UpdateResult = Fruit::update_many()\n    .set(pear)\n    .filter(fruit::Column::Id.eq(1))\n    .exec(db)\n    .await?;\n\n// UPDATE `fruit` SET `cake_id` = NULL WHERE `fruit`.`name` LIKE '%Apple%'\nFruit::update_many()\n    .col_expr(fruit::Column::CakeId, Expr::value(Value::Null))\n    .filter(fruit::Column::Name.contains(\"Apple\"))\n    .exec(db)\n    .await?;\n")))}s.isMDXComponent=!0}}]);