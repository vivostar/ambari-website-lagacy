"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[2064],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=m(i),u=a,d=h["".concat(o,".").concat(u)]||h[u]||p[u]||n;return i?r.createElement(d,s(s({ref:t},c),{},{components:i})):r.createElement(d,s({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,s=new Array(n);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var m=2;m<n;m++)s[m]=i[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8964:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=i(7462),a=(i(7294),i(3905));const n={},s="Ambari Metrics - Whitelisting",l={unversionedId:"ambari-design/metrics/ambari-metrics-whitelisting",id:"ambari-design/metrics/ambari-metrics-whitelisting",title:"Ambari Metrics - Whitelisting",description:"In large clusters (500+ nodes), sometimes there are performance issues seen in AMS aggregations. In the ambari-metrics-collector log file, we can see log lines that look like",source:"@site/docs/ambari-design/metrics/ambari-metrics-whitelisting.md",sourceDirName:"ambari-design/metrics",slug:"/ambari-design/metrics/ambari-metrics-whitelisting",permalink:"/docs/ambari-design/metrics/ambari-metrics-whitelisting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/metrics/ambari-metrics-whitelisting.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Ambari Server Metrics",permalink:"/docs/ambari-design/metrics/ambari-server-metrics"},next:{title:"Quick Links",permalink:"/docs/ambari-design/quick-links"}},o={},m=[{value:"How do we enable whitelisting in AMS.",id:"how-do-we-enable-whitelisting-in-ams",level:2}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ambari-metrics---whitelisting"},"Ambari Metrics - Whitelisting"),(0,a.kt)("p",null,"In large clusters (500+ nodes), sometimes there are performance issues seen in AMS aggregations. In the ambari-metrics-collector log file, we can see log lines that look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"20:51:30,952 INFO 2080712366@qtp-974606690-381 AsyncProcess:1597 - #1, waiting for 13948 actions to finish\n20:51:31,601 INFO 1279097595@qtp-974606690-359 AsyncProcess:1597 - #1, waiting for 19376 actions to finish\n")),(0,a.kt)("p",null,"In Ambari 3.0.0, we are tackling these performance issues through a complete schema and aggregation logic revamp. Until then, we can use AMS whitelisting to reduce the number of metrics tracked by AMS, there by solving this scale problem. "),(0,a.kt)("h2",{id:"how-do-we-enable-whitelisting-in-ams"},"How do we enable whitelisting in AMS."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Until Ambari 2.4.3"),"\nA metric whitelist file can be used to track the set of metrics in AMS. All other metrics will be discarded."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEPS")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metric whitelist file is present in /etc/ambari-metrics-collector/conf. If not present in older Ambari versions, it can be downloaded from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/blob/trunk/ambari-metrics/ambari-metrics-timelineservice/conf/unix/metrics_whitelist"},"https://github.com/apache/ambari/blob/trunk/ambari-metrics/ambari-metrics-timelineservice/conf/unix/metrics_whitelist")," to the collector host."),(0,a.kt)("li",{parentName:"ul"},"Adding config ams-site : timeline.metrics.whitelist.file = <path_to_whitelist_file>"),(0,a.kt)("li",{parentName:"ul"},"Restart AMS collector"),(0,a.kt)("li",{parentName:"ul"},"Verify whitelisting config was used. In ambari-metrics-collector log file, verify the line 'Whitelisting # metrics'.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"From Ambari 2.5.0 onwards"),"\nFrom Ambari 2.5.0, more refinements for whitelisting were included."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"App Blacklisting")," - Blacklist metrics from one or more services. Other service metrics will be entirely allowed or controlled through a whitelist file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ams-site : timeline.metrics.apps.blacklist = hbase,namenode\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"App Whitelisting")," - Whitelist metrics from one or more services."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ams-site:timeline.metrics.apps.whitelist = nimbus,datanode   \n")),(0,a.kt)("p",{parentName:"li"}," NOTE : The App name can be found from the metadata URL :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"http:<metrics_collector_host>:6188/ws/v1/timeline/metrics/metadata\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Metric Whitelisting")," - Same as the whitelisting method in Ambari 2.4.3 (through a whitelist file).\nIn addition to supplying metric names in the whitelist file, patterns can also be supplied using the .",(0,a.kt)("em",{parentName:"p"},"p")," perfix. For example, a pattern can be specified as follows"))),(0,a.kt)("p",null,"._p_dfs.FSNamesystem.*"),(0,a.kt)("p",null,"._p_jvm.JvmMetrics*"),(0,a.kt)("p",null,"An example of a metric whitelisting file that has both metrics and patterns - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/blob/trunk/ambari-metrics/ambari-metrics-timelineservice/src/test/resources/test_data/metric_whitelist.dat"},"https://github.com/apache/ambari/blob/trunk/ambari-metrics/ambari-metrics-timelineservice/src/test/resources/test_data/metric_whitelist.dat"),"."),(0,a.kt)("p",null,"These whitelisting/blacklisting techniques can be used together."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you just have timeline.metrics.whitelist.file = ","<","some_file",">",", only metrics in that file will be allowed (irrespective of whatever apps might be sending them). "),(0,a.kt)("li",{parentName:"ul"},"If you just have timeline.metrics.apps.blacklist = datanode, all datanode metrics will be disallowed. Metrics from all other services will be allowed."),(0,a.kt)("li",{parentName:"ul"},"If you just have timeline.metrics.apps.whitelist = namenode, it is not useful since there is no blacklisting at all. "),(0,a.kt)("li",{parentName:"ul"},"If you have metric whitelisting enabled (through a file), and have timeline.metrics.apps.blacklist = datanode, all datanode metrics will be disallowed. The whitelisted metrics from other services will be allowed."),(0,a.kt)("li",{parentName:"ul"},"If you have timeline.metrics.apps.blacklist = datanode, timeline.metrics.apps.whitelist = namenode and metric whitelisting enabled (through a file), datanode metrics will be blacklisted, all namenode metrics will be allowed, and whitelisted metrics from other services will be allowed.")))}p.isMDXComponent=!0}}]);