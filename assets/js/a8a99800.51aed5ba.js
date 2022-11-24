"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[1044],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),s=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(a),d=n,k=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return a?r.createElement(k,o(o({ref:e},c),{},{components:a})):r.createElement(k,o({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},173:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={},o="Ambari SCOM Management Pack",l={unversionedId:"ambari-plugin-contribution/scom/index",id:"ambari-plugin-contribution/scom/index",title:"Ambari SCOM Management Pack",description:"This information is intended for Apache Hadoop and Microsoft System Center Operations Manager users who install the Ambari SCOM Management Pack.",source:"@site/docs/ambari-plugin-contribution/scom/index.md",sourceDirName:"ambari-plugin-contribution/scom",slug:"/ambari-plugin-contribution/scom/",permalink:"/docs/ambari-plugin-contribution/scom/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-plugin-contribution/scom/index.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Ambari Plugin Contributions",permalink:"/docs/ambari-plugin-contribution/"},next:{title:"Installation",permalink:"/docs/ambari-plugin-contribution/scom/installation"}},m={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Versions",id:"versions",level:3},{value:"Useful Resources",id:"useful-resources",level:3},{value:"Get Started",id:"get-started",level:2},{value:"Overview",id:"overview",level:3},{value:"Architecture",id:"architecture",level:3}],c={toc:s};function p(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ambari-scom-management-pack"},"Ambari SCOM Management Pack"),(0,n.kt)("p",null,"This information is intended for ",(0,n.kt)("strong",{parentName:"p"},"Apache Hadoop")," and ",(0,n.kt)("strong",{parentName:"p"},"Microsoft System Center Operations Manager")," users who install the ",(0,n.kt)("strong",{parentName:"p"},"Ambari SCOM Management Pack"),"."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("h3",{id:"versions"},"Versions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ambari SCOM Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Ambari Server Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1.5.1"),(0,n.kt)("td",{parentName:"tr",align:null},"1.5.1.2.0.0.0-673")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1.4.4"),(0,n.kt)("td",{parentName:"tr",align:null},"1.4.4.1.0.0.1-472")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0.9.0"),(0,n.kt)("td",{parentName:"tr",align:null},"1.2.5"),(0,n.kt)("td",{parentName:"tr",align:null},"1.2.5.0.9.0.0-60")))),(0,n.kt)("p",null,"The Ambari SCOM contribution can be found in the Apache Ambari project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/tree/trunk/contrib/ambari-scom"},"https://github.com/apache/ambari/tree/trunk/contrib/ambari-scom"))),(0,n.kt)("h3",{id:"useful-resources"},"Useful Resources"),(0,n.kt)("p",null,"The following links connect you to information about common tasks that are associated with System Center Management Packs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkId=211463"},"Administering the Management Pack Life Cycle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkID=142351"},"How to Import a Management Pack in Operations Manager 2007")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkID=117777"},"How to Monitor Using Overrides")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://technet.microsoft.com/en-us/library/hh321655.aspx"},"How to Create a Run As Account in Operations Manager 2007")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkID=165412"},"How to Modify an Existing Run As Profile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkId=209940"},"How to Export Management Pack Customizations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://go.microsoft.com/fwlink/?LinkId=209941"},"How to Remove a Management Pack"))),(0,n.kt)("p",null,"For questions about Operations Manager and monitoring packs, see the ",(0,n.kt)("a",{parentName:"p",href:"http://social.technet.microsoft.com/Forums/systemcenter/en-US/home?category=systemcenteroperationsmanager"},"System Center Operations Manager community forum"),"."),(0,n.kt)("p",null,"A useful resource is the ",(0,n.kt)("a",{parentName:"p",href:"http://opsmgrunleashed.wordpress.com/"},"System Center Operations Manager Unleashed blog"),', which contains "By Example" posts for specific monitoring packs.'),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ambari SCOM")," extends the functionality of ",(0,n.kt)("strong",{parentName:"p"},"Microsoft System Center Operations Manager")," to monitor Apache Hadoop clusters, and leverages Ambari (and the Ambari REST API) to obtain Hadoop metrics. The Ambari SCOM Management Pack will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatically discover all nodes within a Hadoop cluster(s)."),(0,n.kt)("li",{parentName:"ul"},"Proactively monitor the availability and capacity."),(0,n.kt)("li",{parentName:"ul"},"Proactively notify when the health is critical."),(0,n.kt)("li",{parentName:"ul"},"Intuitively and efficiently visualize the health of Hadoop cluster via dashboards")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2878).Z,width:"1502",height:"776"})),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Ambari SCOM is made up of the following components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Component"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambari SCOM Management Pack"),(0,n.kt)("td",{parentName:"tr",align:null},"The Ambari SCOM Management Pack extends the functional of Microsoft System Center Operations Manager to monitor Hadoop clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambari SCOM Server"),(0,n.kt)("td",{parentName:"tr",align:null},"The Ambari SCOM Server component connects to the Hadoop cluster components and exposes a REST API for the Ambari SCOM Management Pack.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ResourceProvider"),(0,n.kt)("td",{parentName:"tr",align:null},"An Ambari ResourceProvider is a pluggable interface in Ambari enables the customization of the Ambari SCOM Server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ClusterLayout ResourceProvider"),(0,n.kt)("td",{parentName:"tr",align:null},"An Ambari ResourceProvider implementation that supplies information on cluster layout (i.e. where Hadoop master and slave components are installed) to the Ambari SCOM Server. This allows Ambari to know how and where to access components of the Hadoop cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Property ResourceProvider"),(0,n.kt)("td",{parentName:"tr",align:null},"An Ambari ResourceProvider implementation that integrates with the SQL Server database instance for retrieving stored Hadoop metrics.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQL Server"),(0,n.kt)("td",{parentName:"tr",align:null},"A SQL Server instance that stores the metrics emitted from Hadoop via the SqlServerSink and the Hadoop Metrics2 interface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SqlServerSink"),(0,n.kt)("td",{parentName:"tr",align:null},"This is a Hadoop Metrics2 sink designed to consume metrics emitted from the Hadoop cluster. Ambari SCOM provides a SQL Server implementation.")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4709).Z,width:"827",height:"381"})))}p.isMDXComponent=!0},4709:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ambari-scom-arch-a7941b1b0b7288715e8f5d3bd4bf8f57.jpg"},2878:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/ambari-scom-10293ba44ce6c7360b538dedf43b6bcc.jpg"}}]);