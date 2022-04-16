"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[5233],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||r;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8618:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],o={},c="Chained Relations",d={unversionedId:"relation/chained-relations",id:"version-0.5.x/relation/chained-relations",title:"Chained Relations",description:"If you have multiple join paths between two entities or have complex joins that chain through multiple entities, you can define it with Linked. Take this as a simple example, where we join cake and filling via an intermediate cake_filling table.",source:"@site/versioned_docs/version-0.5.x/06-relation/04-chained-relations.md",sourceDirName:"06-relation",slug:"/relation/chained-relations",permalink:"/SeaORM/docs/0.5.x/relation/chained-relations",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.5.x/06-relation/04-chained-relations.md",tags:[],version:"0.5.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:4,frontMatter:{},sidebar:"version-0.5.x/tutorialSidebar",previous:{title:"Many to Many",permalink:"/SeaORM/docs/0.5.x/relation/many-to-many"},next:{title:"Self Referencing",permalink:"/SeaORM/docs/0.5.x/relation/self-referencing"}},s=[{value:"Lazy Loading",id:"lazy-loading",children:[],level:3},{value:"Eager Loading",id:"eager-loading",children:[],level:3}],f={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chained-relations"},"Chained Relations"),(0,r.kt)("p",null,"If you have multiple join paths between two entities or have complex joins that chain through multiple entities, you can define it with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/entity/trait.Linked.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Linked")),". Take ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"this")," as a simple example, where we join cake and filling via an intermediate cake_filling table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Relation::Filling.def(),\n        ]\n    }\n}\n")),(0,r.kt)("p",null,"Alternatively, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationDef")," can be defined on the fly, where the following is equivalent to the above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\npub struct CakeToFilling;\n\nimpl Linked for CakeToFilling {\n    type FromEntity = cake::Entity;\n\n    type ToEntity = filling::Entity;\n\n    fn link(&self) -> Vec<RelationDef> {\n        vec![\n            cake_filling::Relation::Cake.def().rev(),\n            cake_filling::Entity::belongs_to(filling::Entity)\n                .from(cake_filling::Column::FillingId)\n                .to(filling::Column::Id)\n                .into(),\n        ]\n    }\n}\n")),(0,r.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,r.kt)("p",null,"Find fillings that can be filled into a cake with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked"},(0,r.kt)("inlineCode",{parentName:"a"},"find_linked"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let cake_model = cake::Model {\n    id: 12,\n    name: "".to_owned(),\n};\n\nassert_eq!(\n    cake_model\n        .find_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        r#"SELECT `filling`.`id`, `filling`.`name`"#,\n        r#"FROM `filling`"#,\n        r#"INNER JOIN `cake_filling` ON `cake_filling`.`filling_id` = `filling`.`id`"#,\n        r#"INNER JOIN `cake` ON `cake`.`id` = `cake_filling`.`cake_id`"#,\n        r#"WHERE `cake`.`id` = 12"#,\n    ]\n    .join(" ")\n);\n')),(0,r.kt)("h3",{id:"eager-loading"},"Eager Loading"),(0,r.kt)("p",null,"Find all pairs of cake and filling together in a single select with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.5/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked"},(0,r.kt)("inlineCode",{parentName:"a"},"find_also_linked"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .find_also_linked(cake::CakeToFilling)\n        .build(DbBackend::MySql)\n        .to_string(),\n    [\n        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",\n        "`filling`.`id` AS `B_id`, `filling`.`name` AS `B_name`",\n        "FROM `cake`",\n        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id`",\n        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",\n    ]\n    .join(" ")\n);\n')))}p.isMDXComponent=!0}}]);