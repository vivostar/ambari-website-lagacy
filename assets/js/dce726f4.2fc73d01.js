"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[8830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},i="Developer Tools",l={unversionedId:"ambari-dev/developer-tools",id:"ambari-dev/developer-tools",title:"Developer Tools",description:"Diff and Merge tools",source:"@site/docs/ambari-dev/developer-tools.md",sourceDirName:"ambari-dev",slug:"/ambari-dev/developer-tools",permalink:"/docs/ambari-dev/developer-tools",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ambari-dev/developer-tools.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Development in Docker",permalink:"/docs/ambari-dev/development-in-docker"},next:{title:"Feature Flags",permalink:"/docs/ambari-dev/feature-flags"}},s={},c=[{value:"Diff and Merge tools",id:"diff-and-merge-tools",level:2},{value:"Integrating Araxis to Git as your Diff and Merge tool",id:"integrating-araxis-to-git-as-your-diff-and-merge-tool",level:3},{value:"Git Best Practices",id:"git-best-practices",level:2},{value:"Useful Git Commands",id:"useful-git-commands",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developer-tools"},"Developer Tools"),(0,n.kt)("h2",{id:"diff-and-merge-tools"},"Diff and Merge tools"),(0,n.kt)("p",null,"Araxis has been kind enough to give us free licenses for Araxis Merge if you work on open source, just submit a request at ",(0,n.kt)("a",{parentName:"p",href:"http://www.araxis.com/buy/open-source"},"http://www.araxis.com/buy/open-source")),(0,n.kt)("p",null,"Download from ",(0,n.kt)("a",{parentName:"p",href:"http://www.araxis.com/url/merge/download.uri"},"http://www.araxis.com/url/merge/download.uri")),(0,n.kt)("p",null,"You will be prompted for your serial number when you run the application for the first time. To enter a new serial number into an existing installation, click the Re-Register... button in the About window."),(0,n.kt)("h3",{id:"integrating-araxis-to-git-as-your-diff-and-merge-tool"},"Integrating Araxis to Git as your Diff and Merge tool"),(0,n.kt)("p",null,"After installing Araxis Merge,"),(0,n.kt)("p",null,"On Mac OS X,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Drag Araxis across to your ~/Applications folder as normal"),(0,n.kt)("li",{parentName:"ul"},"Copy the contents of the Utilities folder to (e.g.) /usr/local/araxis/bin"),(0,n.kt)("li",{parentName:"ul"},'Add the path to your startup script: export PATH="$PATH:/usr/local/araxis/bin"')),(0,n.kt)("p",null,"In your .gitconfig file (tested on Mac OS X),"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[diff]\n        tool = araxis\n[difftool]\n        prompt = false\n[merge]\n        tool = araxis_merge\n[mergetool "araxis_merge"]\n        cmd = araxisgitmerge "$PWD/$REMOTE" "$PWD/$BASE" "$PWD/$LOCAL" "$PWD/$MERGED"\n')),(0,n.kt)("h2",{id:"git-best-practices"},"Git Best Practices"),(0,n.kt)("p",null,"This is just a personal preference, but it may be easier to create one Git branch per Jira/feature. E.g.,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git checkout trunk\ngit checkout -b AMBARI12345                             # create the branch and switch to it\ngit branch --set-upstream-to=origin/trunk AMBARI12345   # set the upstream so that git pull --rebase will get the HEAD from trunk\n# Do work,\ngit commit -m "AMBARI-12345. Foo (username)"\n# Do more work\ngit commit --amend                                      # edit the last commit\ngit pull --rebase\n  \n# If conflicts are detected, then run\ngit mergetool                                           # should be easy if you have Araxis Merge setup to do a 3-way merge\ngit rebase --continue\ngit push origin HEAD:trunk\n')),(0,n.kt)("h2",{id:"useful-git-commands"},"Useful Git Commands"),(0,n.kt)("p",null,"In your .gitconfig file,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[alias]\n        st = status\n        ci = commit\n        br = branch\n        co = checkout\n        dc = diff --cached\n        dtc = difftool --cached\n        lg = log -p\n        lsd = log --graph --decorate --pretty=oneline --abbrev-commit --all\n        slast = show --stat --oneline HEAD\n        pshow = show --no-prefix --format=format:%H --full-index\n        pconfig = config --list\n")),(0,n.kt)("p",null,"Also, in your ~/.bashrc or ~/.profile file,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"alias branchshow='for k in `git branch|perl -pe s/^..//`;do echo -e `git show --pretty=format:\"%Cgreen%ci %Cblue%cr%Creset\" $k|head -n 1`\\\\t$k;done|sort'\n")),(0,n.kt)("p",null,"This command will show all of your branches sorted by the last commit times, which is useful if you develop one feature per branch."))}p.isMDXComponent=!0}}]);