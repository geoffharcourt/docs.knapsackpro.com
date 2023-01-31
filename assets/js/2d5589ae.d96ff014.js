"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[735],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),_=s(r),f=a,d=_["".concat(p,".").concat(f)]||_[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=_;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},9417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={pagination_next:null,pagination_prev:null,toc_max_heading_level:2},i="Reference",c={unversionedId:"javascript-typescript/reference",id:"javascript-typescript/reference",title:"Reference",description:"KNAPSACKPROTESTFILELISTSOURCEFILE",source:"@site/docs/javascript-typescript/reference.md",sourceDirName:"javascript-typescript",slug:"/javascript-typescript/reference",permalink:"/javascript-typescript/reference",draft:!1,editUrl:"https://github.com/KnapsackPro/docs.knapsackpro.com/tree/main/docusaurus/docs/javascript-typescript/reference.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,toc_max_heading_level:2},sidebar:"sidebar"},p={},s=[{value:"<code>KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE</code>",id:"knapsack_pro_test_file_list_source_file",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("h2",{id:"knapsack_pro_test_file_list_source_file"},(0,a.kt)("inlineCode",{parentName:"h2"},"KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE")),(0,a.kt)("p",null,"File containing the list of tests to run. When ",(0,a.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE")," is set, both ",(0,a.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_PATTERN")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"KNAPSACK_PRO_TEST_FILE_EXCLUDE_PATTERN")," are ignored."),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"KNAPSACK_PRO_TEST_FILE_LIST_SOURCE_FILE=__tests__/fixtures/list.txt\n\n# list.txt\n__tests__/a.test.js\n__tests__/b.test.js\n__tests__/c.test.js \n")))}u.isMDXComponent=!0}}]);