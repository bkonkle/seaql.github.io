"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[532],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(m,o(o({ref:t},f),{},{components:n})):a.createElement(m,o({ref:t},f))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Data Storage",c={unversionedId:"architecture-of-graph-query-engine/data-storage",id:"architecture-of-graph-query-engine/data-storage",title:"Data Storage",description:"Storage of Entities",source:"@site/docs/02-architecture-of-graph-query-engine/03-data-storage.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/data-storage",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/data-storage",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/03-data-storage.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defining Graph Schema",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/defining-graph-schema"},next:{title:"Mutate Operations",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/mutate-operations"}},f={},p=[{value:"Storage of Entities",id:"storage-of-entities",level:2},{value:"Storage of Relations",id:"storage-of-relations",level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-storage"},"Data Storage"),(0,i.kt)("h2",{id:"storage-of-entities"},"Storage of Entities"),(0,i.kt)("p",null,"The definition of each entity leads to the creation of a node table."),(0,i.kt)("p",null,"For example, defining the entity ",(0,i.kt)("inlineCode",{parentName:"p"},"crate")," as in the last subsection creates the table which contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," key column which is going to store ",(0,i.kt)("em",{parentName:"li"},"unique")," identifiers of the crates (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"serde"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rand"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sea-orm"),")"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"attr_version")," column which is going to hold the ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," attribute of the crates",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Each attribute defined has its own column, prefixed by "attr_" to avoid confusion. An attribute called ',(0,i.kt)("inlineCode",{parentName:"li"},"name")," is also supported, though not recommended, because it will be stored as ",(0,i.kt)("inlineCode",{parentName:"li"},"attr_name"),"."))),(0,i.kt)("li",{parentName:"ul"},"Some columns to store the connectivity",(0,i.kt)("sup",{parentName:"li",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," of the crates with respect to the ",(0,i.kt)("inlineCode",{parentName:"li"},"depends")," relation.",(0,i.kt)("sup",{parentName:"li",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,i.kt)("h2",{id:"storage-of-relations"},"Storage of Relations"),(0,i.kt)("p",null,"Similarly, the definition of each relation leads to the creation of an edge table, as all relations are many-to-many in StarfishQL."),(0,i.kt)("p",null,"For example, defining the relation ",(0,i.kt)("inlineCode",{parentName:"p"},"depends")," as in the last subsection creates the table which contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"from_node")," foreign key column which is going to store ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," of crates"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"to_node")," foreign key column which is going to store ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," of crates")),(0,i.kt)("p",null,'To exemplify, the edge "',(0,i.kt)("em",{parentName:"p"},"sea-orm depends on serde"),'" is going to be stored as a ',(0,i.kt)("strong",{parentName:"p"},"record with ",(0,i.kt)("inlineCode",{parentName:"strong"},"from_node = sea-orm")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"to_node = serde")),". To store such an edge, both crates with names ",(0,i.kt)("inlineCode",{parentName:"p"},"sea-orm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"serde")," must exist in the first place and continue to exist.",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"All attributes are ",(0,i.kt)("em",{parentName:"li"},"nullable"),". If an attribute is not specified when the node is inserted, it becomes null.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"The connectivity is a set of metrics to describe, for any given node, how many other nodes is it related to. More on this in ",(0,i.kt)("a",{parentName:"li",href:"/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity"},"Calculating Node Connectivity"),".",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Note that even though defining new relations causes new columns to be created, any existing data in the tables involved is left untouched during this process.",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"Before inserting an edge, both of the nodes at its ends must have been inserted already. When a node is deleted, all edges with either end being the deleted node are also deleted (",(0,i.kt)("em",{parentName:"li"},"on delete cascade"),").",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);