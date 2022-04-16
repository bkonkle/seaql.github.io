"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[583],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,h=f["".concat(l,".").concat(d)]||f[d]||c[d]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={},l="Set up the Graph Query Engine",u={unversionedId:"install-and-config/setup-graph-queery-engine",id:"install-and-config/setup-graph-queery-engine",title:"Set up the Graph Query Engine",description:"Set up the database",source:"@site/docs/01-install-and-config/01-setup-graph-queery-engine.md",sourceDirName:"01-install-and-config",slug:"/install-and-config/setup-graph-queery-engine",permalink:"/StarfishQL/docs/install-and-config/setup-graph-queery-engine",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/01-install-and-config/01-setup-graph-queery-engine.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StarfishQL Concepts",permalink:"/StarfishQL/docs/introduction/starfish-ql"},next:{title:"Crawling crates.io Data",permalink:"/StarfishQL/docs/install-and-config/crawling-crates-io-data"}},p={},c=[{value:"Set up the database",id:"set-up-the-database",level:2},{value:"Run the tests",id:"run-the-tests",level:2},{value:"Start the query engine",id:"start-the-query-engine",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"set-up-the-graph-query-engine"},"Set up the Graph Query Engine"),(0,s.kt)("h2",{id:"set-up-the-database"},"Set up the database"),(0,s.kt)("p",null,"Set up a MySQL",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," database connection with Docker:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'docker run \\\n    --name "mysql-8.0" \\\n    --env MYSQL_DB="mysql" \\\n    --env MYSQL_USER="sea" \\\n    --env MYSQL_PASSWORD="sea" \\\n    --env MYSQL_ALLOW_EMPTY_PASSWORD="yes" \\\n    --env MYSQL_ROOT_PASSWORD="root" \\\n    -d -p 3306:3306 mysql:8.0\ndocker stop "mysql-8.0"\n')),(0,s.kt)("h2",{id:"run-the-tests"},"Run the tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# starfish-ql/starfish/\nDATABASE_URL="mysql://root:root@localhost:3306" cargo test --all\n')),(0,s.kt)("h2",{id:"start-the-query-engine"},"Start the query engine"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# starfish-ql/starfish/\ncargo run --release\n")),(0,s.kt)("p",null,"Alternatively, use the default compilation profile so that logs and SQL commands are displayed in the terminal."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# starfish-ql/starfish/\ncargo run\n")),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Until ",(0,s.kt)("a",{parentName:"li",href:"https://crates.io/crates/sea-query"},"SeaQuery")," provides more support, only MySQL databases are supported in StarfishQL.",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);