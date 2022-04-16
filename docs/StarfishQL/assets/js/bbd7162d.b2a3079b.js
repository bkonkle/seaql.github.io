"use strict";(self.webpackChunkstarfish_ql=self.webpackChunkstarfish_ql||[]).push([[123],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],c={},l="Calculating Node Connectivity",s={unversionedId:"architecture-of-graph-query-engine/calculating-node-connectivity",id:"architecture-of-graph-query-engine/calculating-node-connectivity",title:"Calculating Node Connectivity",description:"In the most trivial sense, node connectivity can be approached by investigating the numbers of in-connections and out-connections at each node. Existing metrics in graph theory include the in-degree and out-degree in directed graphs, as well as the degree in undirected graphs.",source:"@site/docs/02-architecture-of-graph-query-engine/05-calculating-node-connectivity.md",sourceDirName:"02-architecture-of-graph-query-engine",slug:"/architecture-of-graph-query-engine/calculating-node-connectivity",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/calculating-node-connectivity",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/StarfishQL/docs/02-architecture-of-graph-query-engine/05-calculating-node-connectivity.md",tags:[],version:"current",lastUpdatedBy:"Chris Tsang",lastUpdatedAt:1650115992,formattedLastUpdatedAt:"4/16/2022",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mutate Operations",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/mutate-operations"},next:{title:"Querying Graph Data",permalink:"/StarfishQL/docs/architecture-of-graph-query-engine/querying-graph-data"}},u={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calculating-node-connectivity"},"Calculating Node Connectivity"),(0,a.kt)("p",null,"In the most trivial sense, node connectivity can be approached by investigating the numbers of in-connections and out-connections at each node. Existing metrics in graph theory include the in-degree and out-degree in directed graphs, as well as the degree in undirected graphs."),(0,a.kt)("p",null,"However, those existing metrics only provide limited capacity for graph analysis, as they only take 1 layer of graph traversal into account, ignoring the recursive nature of graphs. Hence, we've devised the weight-decaying connectivity metrics which support more in-depth graph analysis."),(0,a.kt)("p",null,"If we define the weight-decay factor ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," to be a scalar in ","[0, 1]",", we can obtain the connectivity of a node by recursively sampling the degrees of its ancestor/descendant nodes, as follows:"),(0,a.kt)("p",null,"Without loss of generality, assume that we want to find the ",(0,a.kt)("em",{parentName:"p"},"in-connectivity")," of node ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"find_in_conn(n, f):\n    if f is close enough to 0.0:\n        return in_deg(n)\n\n    let in_conn = in_deg(n)\n    for each child c of n:\n        in_conn += f * find_in_conn(c, f * f)\n    return in_conn\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: This algorithm can be implemented with a stack/queue instead of using recursion for performance improvement. Also, graphs with cycles are ignored in this trivial algorithm, but it's simple to deal with in practice.")),(0,a.kt)("a",{id:"weight-decay-factors"}),(0,a.kt)("p",null,"Different weight-decay factors lead to different interesting connectivity metrics, most noticeably:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When it is ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," (",(0,a.kt)("em",{parentName:"li"},"Simple connectivity"),"), the connectivity is simply the trivial degrees.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"As the weight essentially decays to 0 immediately in this case, the ",(0,a.kt)("em",{parentName:"li"},"Decay Mode")," is ",(0,a.kt)("em",{parentName:"li"},"Immediate"),"."))),(0,a.kt)("li",{parentName:"ul"},"When it is ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," (",(0,a.kt)("em",{parentName:"li"},"Compound connectivity"),"), the connectivity takes into account ",(0,a.kt)("strong",{parentName:"li"},"all")," the ancestor/descendant nodes in the connected component of the node of interest.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"As the weight essentially never decays in this case, the ",(0,a.kt)("em",{parentName:"li"},"Decay Mode")," is ",(0,a.kt)("em",{parentName:"li"},"None"),"."))),(0,a.kt)("li",{parentName:"ul"},"When it is anything in between (",(0,a.kt)("em",{parentName:"li"},"Complex connectivity"),"), the connectivity ",(0,a.kt)("em",{parentName:"li"},"decays")," throughout traversal, which is a nice property for some use cases.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In this case, the ",(0,a.kt)("em",{parentName:"li"},"Decay Mode")," is associated with a speed: ",(0,a.kt)("em",{parentName:"li"},"the smaller the factor, the faster the decay speed"),".")))))}h.isMDXComponent=!0}}]);