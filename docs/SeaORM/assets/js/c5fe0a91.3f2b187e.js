"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[4855],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Entity Structure",m={unversionedId:"generate-entity/entity-structure",id:"version-0.7.x/generate-entity/entity-structure",title:"Entity Structure",description:"Let's look at a simple Cake entity.",source:"@site/versioned_docs/version-0.7.x/03-generate-entity/02-entity-structure.md",sourceDirName:"03-generate-entity",slug:"/generate-entity/entity-structure",permalink:"/SeaORM/docs/generate-entity/entity-structure",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/03-generate-entity/02-entity-structure.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using `sea-orm-cli`",permalink:"/SeaORM/docs/generate-entity/sea-orm-cli"},next:{title:"Expanded Entity Structure",permalink:"/SeaORM/docs/generate-entity/expanded-entity-structure"}},u=[{value:"Entity",id:"entity",children:[{value:"Table Name",id:"table-name",children:[],level:3}],level:2},{value:"Column",id:"column",children:[{value:"Column Name",id:"column-name",children:[],level:3},{value:"Column Type",id:"column-type",children:[],level:3},{value:"Additional Properties",id:"additional-properties",children:[],level:3},{value:"Ignore Attribute",id:"ignore-attribute",children:[],level:3}],level:2},{value:"Primary Key",id:"primary-key",children:[{value:"Auto Increment",id:"auto-increment",children:[],level:3},{value:"Composite Key",id:"composite-key",children:[],level:3}],level:2},{value:"Relation",id:"relation",children:[],level:2}],d={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity-structure"},"Entity Structure"),(0,i.kt)("p",null,"Let's look at a simple ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs"},"Cake")," entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "cake")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub name: String,\n}\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n\nimpl ActiveModelBehavior for ActiveModel {}\n')),(0,i.kt)("h2",{id:"entity"},"Entity"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DeriveEntityModel")," macro does all the heavy lifting of defining an ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," with associating ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Column")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PrimaryKey"),"."),(0,i.kt)("h3",{id:"table-name"},"Table Name"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"table_name")," attribute specifies the corresponding table in the database.\nOptionally, you can also specify the database schema or database name by ",(0,i.kt)("inlineCode",{parentName:"p"},"schema_name"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(table_name = "cake", schema_name = "public")]\npub struct Model { ... }\n')),(0,i.kt)("h2",{id:"column"},"Column"),(0,i.kt)("h3",{id:"column-name"},"Column Name"),(0,i.kt)("p",null,"All column names are assumed to be in snake-case. You can override the column name by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"column_name")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_name = "name")]\npub name: String\n')),(0,i.kt)("h3",{id:"column-type"},"Column Type"),(0,i.kt)("p",null,"The column type will be derived automatically with the following mapping:"),(0,i.kt)("p",null,"For the mappings of Rust primitive data types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,i.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,i.kt)("br",null)," (",(0,i.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/enum.ColumnType.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Char")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"i8")),(0,i.kt)("td",{parentName:"tr",align:null},"TinyInteger")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"u8")),(0,i.kt)("td",{parentName:"tr",align:null},"TinyUnsigned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"i16")),(0,i.kt)("td",{parentName:"tr",align:null},"SmallInteger")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"u16")),(0,i.kt)("td",{parentName:"tr",align:null},"SmallUnsigned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"i32")),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"u32")),(0,i.kt)("td",{parentName:"tr",align:null},"Unsigned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"i64")),(0,i.kt)("td",{parentName:"tr",align:null},"BigInteger")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"u64")),(0,i.kt)("td",{parentName:"tr",align:null},"BigUnsigned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f32")),(0,i.kt)("td",{parentName:"tr",align:null},"Float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f64")),(0,i.kt)("td",{parentName:"tr",align:null},"Double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Vec<u8>")),(0,i.kt)("td",{parentName:"tr",align:null},"Binary")))),(0,i.kt)("p",null,"For the mappings of Rust non-primitive data types. You can check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"entity/prelude.rs"))," for all of the reexported types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rust type"),(0,i.kt)("th",{parentName:"tr",align:null},"Database Type ",(0,i.kt)("br",null)," (",(0,i.kt)("a",{parentName:"th",href:"https://docs.rs/sea-orm/0.7/sea_orm/entity/enum.ColumnType.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ColumnType")),")"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date"),": chrono::NaiveDate ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TimeDate"),": time::Date"),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Time"),": chrono::NaiveTime ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TimeTime"),": time::Time"),(0,i.kt)("td",{parentName:"tr",align:null},"Time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTime"),": chrono::NaiveDateTime ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TimeDateTime"),": time::PrimitiveDateTime"),(0,i.kt)("td",{parentName:"tr",align:null},"DateTime")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTimeLocal"),": chrono::DateTime","<","Local",">"," ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"DateTimeUtc"),": chrono::DateTime","<","Utc",">"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTimeWithTimeZone"),": chrono::DateTime","<","FixedOffset",">"," ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TimeDateTimeWithTimeZone"),": time::OffsetDateTime"),(0,i.kt)("td",{parentName:"tr",align:null},"TimestampWithTimeZone")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Uuid"),": uuid::Uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"Uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Json"),": serde_json::Value"),(0,i.kt)("td",{parentName:"tr",align:null},"Json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Decimal"),": rust_decimal::Decimal"),(0,i.kt)("td",{parentName:"tr",align:null},"Decimal")))),(0,i.kt)("p",null,"You can override the default mappings between a Rust type and ",(0,i.kt)("inlineCode",{parentName:"p"},"ColumnType")," by the ",(0,i.kt)("inlineCode",{parentName:"p"},"column_type")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text")]\npub name: String\n')),(0,i.kt)("h3",{id:"additional-properties"},"Additional Properties"),(0,i.kt)("p",null,"You can add additional properties ",(0,i.kt)("inlineCode",{parentName:"p"},"default_value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unique"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"indexed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nullable")," to a column."),(0,i.kt)("p",null,"If you specified a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"column_type")," for an optional attribute, you must also specify ",(0,i.kt)("inlineCode",{parentName:"p"},"nullable"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]\npub name: Option<String>\n')),(0,i.kt)("h3",{id:"ignore-attribute"},"Ignore Attribute"),(0,i.kt)("p",null,"If you want to ignore a particular model attribute such that it maps to no database column, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," annotation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(ignore)]\npub ignore_me: String\n")),(0,i.kt)("h2",{id:"primary-key"},"Primary Key"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key")," attribute to mark a column as the primary key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key)]\npub id: i32\n")),(0,i.kt)("h3",{id:"auto-increment"},"Auto Increment"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_increment")," is implied for ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key")," column. Override it by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[sea_orm(primary_key, auto_increment = false)]\npub id: i32\n")),(0,i.kt)("h3",{id:"composite-key"},"Composite Key"),(0,i.kt)("p",null,"This is usually the case in junction tables, where a two-column tuple is used as the primary key. Simply annotate multiple columns to define a composite primary key. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_increment")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for composite key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Model {\n    #[sea_orm(primary_key)]\n    pub cake_id: i32,\n    #[sea_orm(primary_key)]\n    pub fruit_id: i32,\n}\n")),(0,i.kt)("h2",{id:"relation"},"Relation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DeriveRelation")," macro is a simple wrapper to impl the ",(0,i.kt)("inlineCode",{parentName:"p"},"RelationTrait"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(DeriveRelation)]\npub enum Relation {\n    #[sea_orm(has_many = "super::fruit::Entity")]\n    Fruit,\n}\n')),(0,i.kt)("p",null,"expands into"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl RelationTrait for Relation {\n    fn def(&self) -> RelationDef {\n        match self {\n            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Learn more about relations in the next section."))}s.isMDXComponent=!0}}]);