"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[8378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={},o="Metrics",s={unversionedId:"ambari-design/metrics/index",id:"ambari-design/metrics/index",title:"Metrics",description:'Ambari Metrics System ("AMS") is a system for collecting, aggregating and serving Hadoop and system metrics in Ambari-managed clusters.',source:"@site/docs/ambari-design/metrics/index.md",sourceDirName:"ambari-design/metrics",slug:"/ambari-design/metrics/",permalink:"/docs/ambari-design/metrics/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/metrics/index.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Enhanced Service Dashboard",permalink:"/docs/ambari-design/service-dashboard/"},next:{title:"Metrics Collector API Specification",permalink:"/docs/ambari-design/metrics/metrics-collector-api-specification"}},c={},l=[{value:"Terminology",id:"terminology",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Learn More",id:"learn-more",level:2}],m={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ambari Metrics System"),' ("AMS") is a system for collecting, aggregating and serving Hadoop and system metrics in Ambari-managed clusters.'),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Term"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambari Metrics System (\u201cAMS\u201d)"),(0,n.kt)("td",{parentName:"tr",align:null},"The built-in metrics collection system for Ambari.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metrics Collector"),(0,n.kt)("td",{parentName:"tr",align:null},"The standalone server that collects metrics, aggregates metrics, serves metrics from the Hadoop service sinks and the Metrics Monitor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metrics Monitor"),(0,n.kt)("td",{parentName:"tr",align:null},"Installed on each host in the cluster to collect system-level metrics and forward to the Metrics Collector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metrics Hadoop Sinks"),(0,n.kt)("td",{parentName:"tr",align:null},"Plugs into the various Hadoop components sinks to send Hadoop metrics to the Metrics Collector.")))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Following image depicts the high level conceptual architecture of the new Ambari Metrics System:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(845).Z,title:"AMS Arch",width:"955",height:"443"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Metrics Collector"),' is daemon that receives data from registered publishers (the Monitors and Sinks). The Collector itself is build using Hadoop technologies such as HBase Phoenix and ATS. The Collector can store data on the local filesystem (referred to as "embedded mode") or use an external HDFS (referred to as "distributed mode").'),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"Browse the following to learn more about the ",(0,n.kt)("a",{parentName:"p",href:"/docs/ambari-design/metrics/metrics-api-specification"},"Ambari Metrics REST API")," specification and about advanced ",(0,n.kt)("a",{parentName:"p",href:"/docs/ambari-design/metrics/configuration"},"Configuration")," of AMS."))}d.isMDXComponent=!0},845:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ams-arch-e1f8a953ce31cdf3b26cd39c3ebac341.jpg"}}]);