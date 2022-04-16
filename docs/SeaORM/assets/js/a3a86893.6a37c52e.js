"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5126],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=o,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3926:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="One to Many",s={unversionedId:"relation/one-to-many",id:"version-0.7.x/relation/one-to-many",title:"One to Many",description:'A one-to-many relation is similar to a one-to-one relation. In the previous section, we gave the example of "a Cake entity has at most one Fruit topping". To make it a one-to-many relation, we remove the "at most one" constraint. So, we have a Cake entity that might have many Fruit toppings.',source:"@site/versioned_docs/version-0.7.x/07-relation/02-one-to-many.md",sourceDirName:"07-relation",slug:"/relation/one-to-many",permalink:"/SeaORM/docs/relation/one-to-many",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/07-relation/02-one-to-many.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"One to One",permalink:"/SeaORM/docs/relation/one-to-one"},next:{title:"Many to Many",permalink:"/SeaORM/docs/relation/many-to-many"}},p=[{value:"Defining the Relation",id:"defining-the-relation",children:[],level:2},{value:"Defining the Inverse Relation",id:"defining-the-inverse-relation",children:[],level:2}],m={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"one-to-many"},"One to Many"),(0,a.kt)("p",null,'A one-to-many relation is similar to a one-to-one relation. In the previous section, we gave the example of "a ',(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity has at most one ",(0,a.kt)("inlineCode",{parentName:"p"},"Fruit"),' topping". To make it a one-to-many relation, we remove the "at most one" constraint. So, we have a ',(0,a.kt)("inlineCode",{parentName:"p"},"Cake")," entity that might have many ",(0,a.kt)("inlineCode",{parentName:"p"},"Fruit")," toppings."),(0,a.kt)("h2",{id:"defining-the-relation"},"Defining the Relation"),(0,a.kt)("p",null,"This is almost identical to defining a one-to-one relation; the only difference is that we use ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity::has_many()")," method here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'{3,9,14} title="entity/cake.rs"',"{3,9,14}":!0,title:'"entity/cake.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Fruit,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n\nimpl Related<super::fruit::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Fruit.def()\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following is equivalent to the above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,a.kt)("h2",{id:"defining-the-inverse-relation"},"Defining the Inverse Relation"),(0,a.kt)("p",null,"It is the same as defining the one-to-one inverse relation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="entity/fruit.rs"',title:'"entity/fruit.rs"'},"#[derive(Copy, Clone, Debug, EnumIter)]\npub enum Relation {\n    Cake,\n}\n\nimpl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Cake => Entity::belongs_to(super::cake::Entity)\n                .from(Column::CakeId)\n                .to(super::cake::Column::Id)\n                .into(),\n        }\n    }\n}\n\nimpl Related<super::cake::Entity> for Entity {\n    fn to() -> RelationDef {\n        Relation::Cake.def()\n    }\n}\n")),(0,a.kt)("p",null,"Alternatively, the definition can be shortened by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro,\nwhere the following is equivalent to the above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(\n        belongs_to = "super::cake::Entity",\n        from = "Column::CakeId",\n        to = "super::cake::Column::Id"\n    )]\n    Cake,\n}\n')))}c.isMDXComponent=!0}}]);