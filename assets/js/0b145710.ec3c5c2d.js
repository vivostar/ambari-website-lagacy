"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[7526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),h=i,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||n;return a?r.createElement(u,o(o({ref:t},c),{},{components:a})):r.createElement(u,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4060:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=a(7462),i=(a(7294),a(3905));const n={},o="Enhanced Service Dashboard",s={unversionedId:"ambari-design/service-dashboard/index",id:"ambari-design/service-dashboard/index",title:"Enhanced Service Dashboard",description:"This feature was first introduced in Ambari 2.1.0 release. Any Ambari release before 2.1.0 does not support this feature. Cluster is required to be upgraded to Ambari 2.1.0 or above to use this feature.",source:"@site/docs/ambari-design/service-dashboard/index.mdx",sourceDirName:"ambari-design/service-dashboard",slug:"/ambari-design/service-dashboard/",permalink:"/docs/ambari-design/service-dashboard/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-design/service-dashboard/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Enhanced Configs",permalink:"/docs/ambari-design/enhanced-configs/"},next:{title:"Metrics",permalink:"/docs/ambari-design/metrics/"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Service Dashboard Widgets",id:"service-dashboard-widgets",level:2},{value:"Graph",id:"graph",level:3},{value:"Graph Widget Definition",id:"graph-widget-definition",level:3},{value:"Gauge",id:"gauge",level:3},{value:"Number",id:"number",level:3},{value:"Template",id:"template",level:3},{value:"Widget Operations:",id:"widget-operations",level:2},{value:"Widget Browser",id:"widget-browser",level:2},{value:"Create Widget Wizard",id:"create-widget-wizard",level:3},{value:"Using Enhanced Service Dashboard feature",id:"using-enhanced-service-dashboard-feature",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enhanced-service-dashboard"},"Enhanced Service Dashboard"),(0,i.kt)("p",null,"This feature was first introduced in Ambari 2.1.0 release. Any Ambari release before 2.1.0 does not support this feature. Cluster is required to be upgraded to Ambari 2.1.0 or above to use this feature."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This document assumes that the service metrics are being exposed via Ambari. If this is not the case then please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/AMBARI/Metrics"},"Metrics"),"document for more related information.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The term Enhanced Service Dashboard is used for being able to seamlessly add new widgets to the service summary page and heatmap page. This feature enables stack service to be packaged with the widget definitions in the JSON format. These widget definitions will appear as default widgets on the service summary page and heatmap page on service installation. In addition new widgets for the service can be created any time on the deployed cluster."),(0,i.kt)("p",null,"Displaying default service dashboard widgets on service installation is a 3 step process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Push service metrics to Ambari Metric Collector.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Declare service metrics in service's metrics.json file of Ambari. This step is required to expose metrics via Ambari RESTful API.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define service widgets in the widgets.jsonfile."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Widget gets the data to be charted from the service metrics. It is important to validate that the required service metrics are being exposed from Ambari metrics endpoint before defining a widget.")),(0,i.kt)("h2",{id:"service-dashboard-widgets"},"Service Dashboard Widgets"),(0,i.kt)("p",null,"Ambari supports 4 widget types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Graph"),(0,i.kt)("li",{parentName:"ol"},"Gauge"),(0,i.kt)("li",{parentName:"ol"},"Number"),(0,i.kt)("li",{parentName:"ol"},"Template")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("p",null,"A widget to display line or area graphs that are derived from one or more than one service metrics value over a range of time.\n",(0,i.kt)("img",{src:a(1466).Z,title:"Graphs",width:"989",height:"177"})),(0,i.kt)("h3",{id:"graph-widget-definition"},"Graph Widget Definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "widget_name": "Memory Utilization",\n "description": "Percentage of total memory allocated to containers running in the cluster.",\n "widget_type": "GRAPH",\n "is_visible": true,\n "metrics": [\n   {\n     "name": "yarn.QueueMetrics.Queue=root.AllocatedMB",\n     "metric_path": "metrics/yarn/Queue/root/AllocatedMB",\n     "service_name": "YARN",\n     "component_name": "RESOURCEMANAGER",\n     "host_component_criteria": "host_components/HostRoles/ha_state=ACTIVE"\n   },\n   {\n     "name": "yarn.QueueMetrics.Queue=root.AvailableMB",\n     "metric_path": "metrics/yarn/Queue/root/AvailableMB",\n     "service_name": "YARN",\n     "component_name": "RESOURCEMANAGER",\n     "host_component_criteria": "host_components/HostRoles/ha_state=ACTIVE"\n   }\n ],\n "values": [\n   {\n     "name": "Memory Utilization",\n     "value": "${(yarn.QueueMetrics.Queue=root.AllocatedMB / (yarn.QueueMetrics.Queue=root.AllocatedMB + yarn.QueueMetrics.Queue=root.AvailableMB)) * 100}"\n   }\n ],\n "properties": {\n   "display_unit": "%",\n   "graph_type": "LINE",\n   "time_range": "1"\n }\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"widget_name:")," This is the name that will be displayed in the UI for the widget.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"description:"),"Description for the widget that will be displayed in the UI.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"widget_type:"),"This information is used by the widget to create the widget from the metric data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"is_visible:")," This boolean decides if the widget is shown on the service summary page by default or not.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"metrics:")," This is an array that includes all metrics definitions comprising the widget.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"metrics/name:")," Actual n ame of the metric as being pushed to the sink or emitted as JMX property by the service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"metrics/metric_path")," ",(0,i.kt)("strong",{parentName:"p"},":")," This is the path to which above mentioned metrics/name is mapped in metrics.json file for the service. Metric value will be exposed in the metrics attribute of the service component or host component endpoint of the Ambari API at the same path.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"metrics/service_name:"),"Name of the service containing the component emitting the metric.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"metrics/component_name:"),"Name of the component emitting the metric.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"metrics/host_component_criteria:"),"This is an optional field. Presence of this field means that the metric is host component metric and not a service component metric. If a metric is intended to be queried on host component endpoint then the criteria for choosing the host component needs to be specified over here. If this is left as a single space string then the first found host component will be queried for the metric.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"values:")," This is an array of datasets for the Graph widget. For other widget types this array always has one element.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"values/name:")," This field is used only for Graph widget type. This shows up as a label name in the legend for the dataset shown in a Graph widget type.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"values/value:")," This is the expression from which the value for the dataset is calculated. Expression contains references to the declared metric name and constant numbers which acts as valid operands. Expression also contains a valid set of operators {+,-,*,/} that can be used along with valid operands. Parentheses are also permitted in the expression.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"properties:")," These contains set of properties specific to the widget type. For Graph widget type it contains display_unit, graph_type and time_range. t ime_range field is currently not honored in the UI."))),(0,i.kt)("h3",{id:"gauge"},"Gauge"),(0,i.kt)("p",null,"A widget to display percentage calculated from current value of a metric or current values of more than one metric.\n",(0,i.kt)("img",{src:a(3552).Z,title:"Gauge",width:"206",height:"165"})),(0,i.kt)("h3",{id:"number"},"Number"),(0,i.kt)("p",null,"A widget to display a number optionally with a unit that can be calculated from the current value of a metric or current values of more than one metric."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2e3).Z,title:"Number",width:"391",height:"178"})),(0,i.kt)("h3",{id:"template"},"Template"),(0,i.kt)("p",null,"A widget to display one or more numbers calculated from current value of a metric or current values of more than one metric along with the embedded string."),(0,i.kt)("p",null,"Aggregator function for the Metric"),(0,i.kt)("p",null,"Aggregator function are related to only service component level metrics and are not supported for host component level metrics."),(0,i.kt)("p",null,"Ambari Metrics System supports 4 type of aggregation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"max"),": Maximum value of the metric across all host components"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"min"),": Minimum value of the metric across all host components"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"avg"),": Average value of the metric across all host components"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"sum"),": Sum of metric value recorded for each host components")),(0,i.kt)("p",null,"By default Ambari Metrics System uses the average aggregator function while computing value for a service component metric but this behavior can be overridden by suffixing metric name with the aggregator function name (._max ,._min ,._avg and ._sum )."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "widget_name": "Blocked Updates",\n "description": "Number of milliseconds updates have been blocked so the memstore can be flushed.",\n "default_section_name": "HBASE_SUMMARY",\n "widget_type": "GRAPH",\n "is_visible": true,\n "metrics": [\n   {\n     "name": "regionserver.Server.updatesBlockedTime._sum",\n     "metric_path": "metrics/hbase/regionserver/Server/updatesBlockedTime._sum",\n     "service_name": "HBASE",\n     "component_name": "HBASE_REGIONSERVER"\n   }\n ],\n "values": [\n   {\n     "name": "Updates Blocked Time",\n     "value": "${regionserver.Server.updatesBlockedTime._sum}"\n   }\n ],\n "properties": {\n   "display_unit": "ms",\n   "graph_type": "LINE",\n   "time_range": "1"\n }\n}\n')),(0,i.kt)("h2",{id:"widget-operations"},"Widget Operations:"),(0,i.kt)("p",null,"A Service that has widgets.json and metrics.json file will also be provided with following abilities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Widget Browser")," for performing widget related operations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create widget wizard")," for creating new desired service widgets in a cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Edit widget wizard")," for editing service widgets post creation."))),(0,i.kt)("h2",{id:"widget-browser"},"Widget Browser"),(0,i.kt)("p",null,"Widget Browser is the place from which actions can be performed on widgets like adding/removing a widget from the dashboard, sharing widget with other users and deleting a widget.While creating new widget, user can choose to share the widget with other users or not. All widgets that are created by the user + shared with the user + defined in the stack as default service widgets will be available in the widget browser of a user.\n",(0,i.kt)("img",{src:a(4992).Z,title:"Widget Browser",width:"1716",height:"1146"})),(0,i.kt)("h3",{id:"create-widget-wizard"},"Create Widget Wizard"),(0,i.kt)("p",null,"A custom desired widget can be created from the exposed service metrics using 3 step Create Widget wizard.\n",(0,i.kt)("img",{src:a(7590).Z,title:"Create Widget",width:"1154",height:"480"})),(0,i.kt)("h2",{id:"using-enhanced-service-dashboard-feature"},"Using Enhanced Service Dashboard feature"),(0,i.kt)("p",null,"If the existing service in Ambari is pushing the metrics to Ambari metrics collector then minimal work needs to be done. This includes adding metrics.json and widgets.json file for the service, and might include making changes to metainfo.xml file."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI-9910"},"AMBARI-9910")," added widgets to Accumulo service page. This work can be referred as an example to use Enhanced Service Dashboard feature.")))}p.isMDXComponent=!0},7590:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-widget-5562f4970ac860e8c49a98ac2b504e77.png"},3552:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gauge-39820bee06f707d0e80caa8a195541f3.png"},1466:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graphs-769c406c2ace47265ad7f0a0fb2ab122.png"},2e3:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/number-0084f036ea8ce9a13ce1b2652b8e2044.png"},4992:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/widget-browser-603bd739e713b2ac5e16c9dfba2510ba.png"}}]);