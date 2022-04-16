"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2197],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(m,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},m="Writing Migration",s={unversionedId:"migration/writing-migration",id:"version-0.7.x/migration/writing-migration",title:"Writing Migration",description:"Each migration contains two methods: up and down. The up method is used to alter the database schema, such as adding new tables, columns or indexes, while the down method revert the actions performed in the up method.",source:"@site/versioned_docs/version-0.7.x/05-migration/02-writing-migration.md",sourceDirName:"05-migration",slug:"/migration/writing-migration",permalink:"/SeaORM/docs/migration/writing-migration",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.7.x/05-migration/02-writing-migration.md",tags:[],version:"0.7.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Migration",permalink:"/SeaORM/docs/migration/setting-up-migration"},next:{title:"Running Migration",permalink:"/SeaORM/docs/migration/running-migration"}},p=[{value:"Creating Migration File",id:"creating-migration-file",children:[],level:2},{value:"Defining Migration",id:"defining-migration",children:[{value:"SeaQuery",id:"seaquery",children:[{value:"Schema Creation Methods",id:"schema-creation-methods",children:[],level:4},{value:"Schema Mutation Methods",id:"schema-mutation-methods",children:[],level:4},{value:"Schema Inspection Methods",id:"schema-inspection-methods",children:[],level:4}],level:3},{value:"Raw SQL",id:"raw-sql",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-migration"},"Writing Migration"),(0,i.kt)("p",null,"Each migration contains two methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"down"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," method is used to alter the database schema, such as adding new tables, columns or indexes, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," method revert the actions performed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," method."),(0,i.kt)("h2",{id:"creating-migration-file"},"Creating Migration File"),(0,i.kt)("p",null,"You can create migration by duplicating an existing migration file or copy the template below. Remember to name the file according to naming convention ",(0,i.kt)("inlineCode",{parentName:"p"},"mYYYYMMDD_HHMMSS_migration_name.rs")," and update the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-schema/0.5/sea_schema/migration/trait.MigrationName.html#tymethod.name"},(0,i.kt)("inlineCode",{parentName:"a"},"MigrationName::name"))," method accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/m20220101_000001_create_table.rs"',title:'"migration/src/m20220101_000001_create_table.rs"'},'use sea_schema::migration::prelude::*;\n\npub struct Migration;\n\nimpl MigrationName for Migration {\n    fn name(&self) -> &str {\n        "m20220101_000001_create_table"\n    }\n}\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .create_table( ... )\n            .await\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        manager\n            .drop_table( ... )\n            .await\n    }\n}\n')),(0,i.kt)("p",null,"Also, you have to include the new migration in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-schema/0.5/sea_schema/migration/migrator/trait.MigratorTrait.html#tymethod.migrations"},(0,i.kt)("inlineCode",{parentName:"a"},"MigratorTrait::migrations"))," method. Note that the migrations should be sorted in chronological order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="migration/src/lib.rs"',title:'"migration/src/lib.rs"'},"pub use sea_schema::migration::*;\n\nmod m20220101_000001_create_table;\n\npub struct Migrator;\n\n#[async_trait::async_trait]\nimpl MigratorTrait for Migrator {\n    fn migrations() -> Vec<Box<dyn MigrationTrait>> {\n        vec![\n            Box::new(m20220101_000001_create_table::Migration),\n        ]\n    }\n}\n")),(0,i.kt)("h2",{id:"defining-migration"},"Defining Migration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/sea-schema/0.5/sea_schema/migration/manager/struct.SchemaManager.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SchemaManager"))," helps you define migration in SeaQuery or in raw SQL"),(0,i.kt)("h3",{id:"seaquery"},"SeaQuery"),(0,i.kt)("p",null,"Click ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query#usage"},"here")," to take a quick tour of SeaQuery."),(0,i.kt)("h4",{id:"schema-creation-methods"},"Schema Creation Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create Table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use entity::post;\n\nmanager\n    .create_table(\n        sea_query::Table::create()\n            .table(post::Entity)\n            .if_not_exists()\n            .col(\n                ColumnDef::new(post::Column::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key(),\n            )\n            .col(ColumnDef::new(post::Column::Title).string().not_null())\n            .col(ColumnDef::new(post::Column::Text).string().not_null())\n            .to_owned()\n    )\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"If you don't have SeaORM entities defined?"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager\n    .create_table(\n        Table::create()\n            .table(Post::Table)\n            .if_not_exists()\n            .col(\n                ColumnDef::new(Post::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key(),\n            )\n            .col(ColumnDef::new(Post::Title).string().not_null())\n            .col(ColumnDef::new(Post::Text).string().not_null())\n            .to_owned()\n    )\n\n#[derive(Iden)]\npub enum Post {\n    Table,\n    Id,\n    Title,\n    Text,\n}\n")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create Index"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_index(sea_query::Index::create())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create Foreign Key"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_foreign_key(sea_query::ForeignKey::create())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create Data Type (PostgreSQL only)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.create_type(sea_query::Type::create())\n")))),(0,i.kt)("h4",{id:"schema-mutation-methods"},"Schema Mutation Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Drop Table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use entity::post;\n\nmanager\n    .drop_table(\n        sea_query::Table::drop()\n            .table(post::Entity)\n            .to_owned()\n    )\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"If you don't have SeaORM entities defined?"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager\n    .drop_table(\n        sea_query::Table::drop()\n            .table(Post::Table)\n            .to_owned()\n    )\n\n#[derive(Iden)]\npub enum Post {\n    Table,\n    Id,\n    Title,\n    Text,\n}\n")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alter Table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.alter_table(sea_query::Table::alter())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rename Table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.rename_table(sea_query::Table::rename())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Truncate Table"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.truncate_table(sea_query::Table::truncate())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Drop Index"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_index(sea_query::Index::drop())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Drop Foreign Key"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_foreign_key(sea_query::ForeignKey::drop())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alter Data Type (PostgreSQL only)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.alter_type(sea_query::Type::alter())\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Drop Data Type (PostgreSQL only)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.drop_type(sea_query::Type::drop())\n")))),(0,i.kt)("h4",{id:"schema-inspection-methods"},"Schema Inspection Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Has Table",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.has_table(table_name)\n"))),(0,i.kt)("li",{parentName:"ul"},"Has Column",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"manager.has_column(table_name, column_name)\n")))),(0,i.kt)("h3",{id:"raw-sql"},"Raw SQL"),(0,i.kt)("p",null,"Besides, you can define migration in raw SQL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::Statement;\nuse sea_schema::migration::prelude::*;\n\npub struct Migration;\n\nimpl MigrationName for Migration {\n    fn name(&self) -> &str {\n        "m20220101_000001_create_table"\n    }\n}\n\n#[async_trait::async_trait]\nimpl MigrationTrait for Migration {\n    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let sql = "CREATE TABLE `cake` ( `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, `name` varchar(255) NOT NULL )";\n        let stmt = Statement::from_string(manager.get_database_backend(), sql.to_owned());\n        manager.get_connection().execute(stmt).await.map(|_| ())\n    }\n\n    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {\n        let sql = "DROP TABLE `cake`";\n        let stmt = Statement::from_string(manager.get_database_backend(), sql.to_owned());\n        manager.get_connection().execute(stmt).await.map(|_| ())\n    }\n}\n')))}u.isMDXComponent=!0}}]);