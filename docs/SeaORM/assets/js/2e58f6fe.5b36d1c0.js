"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3949],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Debug Log",s={unversionedId:"install-and-config/debug-log",id:"version-0.6.x/install-and-config/debug-log",title:"Debug Log",description:"SeaORM (with debug-print feature turned on) logs debug messages via the tracing crate.",source:"@site/versioned_docs/version-0.6.x/02-install-and-config/04-debug-log.md",sourceDirName:"02-install-and-config",slug:"/install-and-config/debug-log",permalink:"/SeaORM/docs/0.6.x/install-and-config/debug-log",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.6.x/02-install-and-config/04-debug-log.md",tags:[],version:"0.6.x",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connection Pool",permalink:"/SeaORM/docs/0.6.x/install-and-config/connection"},next:{title:"Using `sea-orm-cli`",permalink:"/SeaORM/docs/0.6.x/generate-entity/sea-orm-cli"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-log"},"Debug Log"),(0,o.kt)("p",null,"SeaORM (with ",(0,o.kt)("inlineCode",{parentName:"p"},"debug-print")," feature turned on) logs debug messages via the ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},(0,o.kt)("inlineCode",{parentName:"a"},"tracing"))," crate."),(0,o.kt)("p",null,"You need to setup ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing-subscriber"},(0,o.kt)("inlineCode",{parentName:"a"},"tracing-subscriber"))," to capture and view the debug log. See the snippet below and a complete example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub async fn main() {\n    tracing_subscriber::fmt()\n        .with_max_level(tracing::Level::DEBUG)\n        .with_test_writer()\n        .init();\n\n    // ...\n}\n")),(0,o.kt)("p",null,"To filter debug log from ",(0,o.kt)("inlineCode",{parentName:"p"},"sea_orm"),", you can:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm\n[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1\n")))}d.isMDXComponent=!0}}]);