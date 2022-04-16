"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2257],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5886:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={slug:"2021-08-30-release-model",title:"Release Model",author:"Chris Tsang",author_title:"SeaQL Team",author_url:"https://github.com/tyt2y3",author_image_url:"https://avatars.githubusercontent.com/u/1782664?v=4",tags:["news"]},u=void 0,s={permalink:"/SeaORM/blog/2021-08-30-release-model",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/blog/2021-08-30-release-model.md",source:"@site/blog/2021-08-30-release-model.md",title:"Release Model",description:"Today we will outline our release plan in the near future.",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[{label:"news",permalink:"/SeaORM/blog/tags/news"}],readingTime:.85,truncated:!1,authors:[{name:"Chris Tsang",title:"SeaQL Team",url:"https://github.com/tyt2y3",imageURL:"https://avatars.githubusercontent.com/u/1782664?v=4"}],prevItem:{title:"Introducing SeaORM",permalink:"/SeaORM/blog/2021-09-20-introducing-sea-orm"},nextItem:{title:"Hello World",permalink:"/SeaORM/blog/2021-08-07-hello-world"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we will outline our release plan in the near future."),(0,o.kt)("p",null,"One of Rust's slogan is ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/appendix-07-nightly-rust.html#stability-without-stagnation"},"Stability Without Stagnation"),", and SeaQL's take on it, is 'progression without stagnation'."),(0,o.kt)("p",null,"Before reaching ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),", we will be releasing every week, incorporating the latest changes and merged pull requests. There will be at most one incompatible release per month, so you will be expecting ",(0,o.kt)("inlineCode",{parentName:"p"},"0.2")," in Sep 2021 and ",(0,o.kt)("inlineCode",{parentName:"p"},"0.9")," in Apr 2022. We will decide by then whether the next release is an incremental ",(0,o.kt)("inlineCode",{parentName:"p"},"0.10")," or a stable ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,o.kt)("p",null,"After that, a major release will be rolled out every year. So you will probably be expecting a ",(0,o.kt)("inlineCode",{parentName:"p"},"2.0")," in 2023."),(0,o.kt)("p",null,"All of these is only made possible with a solid infrastructure. While we have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/actions"},"test suite"),", its coverage will likely never be enough. We urge you to submit test cases to SeaORM if a particular feature is of importance to you."),(0,o.kt)("p",null,"We hope that a rolling release model will provide momentum to the community and propell us forward in the near future."))}f.isMDXComponent=!0}}]);