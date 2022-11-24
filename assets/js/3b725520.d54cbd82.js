"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[9504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},s="Quick Start Guide",i={unversionedId:"quick-start/quick-start-guide",id:"quick-start/quick-start-guide",title:"Quick Start Guide",description:"This document shows how to quickly set up a cluster using Ambari on your local machine using virtual machines.",source:"@site/docs/quick-start/quick-start-guide.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-guide",permalink:"/docs/quick-start/quick-start-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start/quick-start-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ambariSidebar",previous:{title:"introduction",permalink:"/docs/introduction"},next:{title:"Quick Start for New VM Users",permalink:"/docs/quick-start/quick-start-for-new-vm-users"}},l={},u=[{value:"Modifying RAM for the VMs",id:"modifying-ram-for-the-vms",level:2},{value:"Taking Snapshots",id:"taking-snapshots",level:2},{value:"Misc",id:"misc",level:2},{value:"Kerberos Support",id:"kerberos-support",level:2},{value:"Pre-Configured Development Environment",id:"pre-configured-development-environment",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,r.kt)("p",null,"This document shows how to quickly set up a cluster using Ambari on your local machine using virtual machines."),(0,r.kt)("p",null,"This utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," so you will need to install both."),(0,r.kt)("p",null,"Note that the steps were tested on MacOS 10.8.4 / 10.8.5."),(0,r.kt)("p",null,'After you have installed VirtualBox and Vagrant on your computer, check out the "ambari-vagrant" repo on github:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/u39kun/ambari-vagrant.git\n")),(0,r.kt)("p",null,"Edit your ",(0,r.kt)("strong",{parentName:"p"},"/etc/hosts")," on your computer so that you will be able to resolve hostnames for the VMs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -s 'cat ambari-vagrant/append-to-etc-hosts.txt >> /etc/hosts'\n")),(0,r.kt)("p",null,"Copy the private key to your home directory (or some place convenient for you) so that it's easily accessible for uploading via Ambari Web:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant\n")),(0,r.kt)("p",null,"The above command shows the command usage and also creates a private key as ~/.vagrant.d/insecure_private_key. This key will be used in the following steps."),(0,r.kt)("p",null,"First, change directory to ambari-vagrant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ambari-vagrant\n")),(0,r.kt)("p",null,'You will see subdirectories for different OS\'s. "cd" into the OS that you want to test. ',(0,r.kt)("strong",{parentName:"p"},"centos6.8")," is recommended as this is quicker to launch than other OS's."),(0,r.kt)("p",null,"Now you can start VMs with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd centos6.8\ncp ~/.vagrant.d/insecure_private_key .\n./up.sh\n")),(0,r.kt)("p",null,"For example, ",(0,r.kt)("strong",{parentName:"p"},"up.sh 3")," starts 3 VMs. 3 seems to be a good number with 16GB of RAM without taxing the system too much."),(0,r.kt)("p",null,"With the default ",(0,r.kt)("strong",{parentName:"p"},"Vagrantfile"),", you can specify up to 10 (if your computer can handle it; you can even add more)."),(0,r.kt)("p",null,"VMs will have the FQDN"),(0,r.kt)("p",null,"If it is your first time running a vagrant command, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant init\n")),(0,r.kt)("p",null,"Log into the VM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant ssh c6801\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su -\n")),(0,r.kt)("p",null,"to make yourself root."),(0,r.kt)("p",null,"To install Ambari, you can build it yourself from source (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/ambari-dev/"},"Ambari Development"),"), or you can use published binaries."),(0,r.kt)("p",null,"As this is a Quick Start Guide to get you going quickly, ready-made, publicly available binaries are referenced in the steps below."),(0,r.kt)("p",null,"Note that these binaries were built and made publicly available via Hortonworks, a commercial vendor for Hadoop. This is for your convenience. Note that using the binaries shown here would make HDP, Hortonworks' distribution, available to be installed via Apache Ambari. The instructions here should still work (only the repo URLs need to be changed) if you have Ambari binaries from any other vendor/organization/individuals (the instructions here can be updated if anyone wanted to expand this to include such ready-made, publicly accessible binaries from any source - such contributions are welcome). This would also work if you had built the binaries yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# CentOS 6 (for CentOS 7, replace centos6 with centos7 in the repo URL)\n#\xa0\n# to test public release 2.5.1\nwget -O /etc/yum.repos.d/ambari.repo http://public-repo-1.hortonworks.com/ambari/centos6/2.x/updates/2.5.1.0/ambari.repo\nyum install ambari-server -y\n\n# Ubuntu 14 (for Ubuntu 16, replace ubuntu14 with ubuntu16 in the repo URL)\n# to test public release 2.5.1\nwget -O /etc/apt/sources.list.d/ambari.list http://public-repo-1.hortonworks.com/ambari/ubuntu14/2.x/updates/2.5.1.0/ambari.list\napt-key adv --recv-keys --keyserver keyserver.ubuntu.com B9733A7A07513CAD\napt-get update\napt-get install ambari-server -y\n\n# SUSE 11 (for SUSE 12, replace suse11 with suse12 in the repo URL)\n# to test public release 2.5.1\nwget -O /etc/zypp/repos.d/ambari.repo http://public-repo-1.hortonworks.com/ambari/suse11/2.x/updates/2.5.1.0/ambari.repo\nzypper install ambari-server -y\n")),(0,r.kt)("p",null,"Ambari offers many installation options (see ",(0,r.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/AMBARI/Ambari+User+Guides"},"Ambari User Guides"),"), but to get up and running quickly with default settings, you can run the following to set up and start ambari-server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ambari-server setup -s\nambari-server start\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For frontend developers only: see Frontend Development section below for extra setup instructions.")),(0,r.kt)("p",null,"Once Ambari Server is started, hit ",(0,r.kt)("a",{parentName:"p",href:"http://c6801.ambari.apache.org:8080"},"http://c6801.ambari.apache.org:8080")," (URL depends on the OS being tested) from your browser on your local computer."),(0,r.kt)("p",null,"Note that Ambari Server can take some time to fully come up and ready to accept connections. Keep hitting the URL until you get the login page."),(0,r.kt)("p",null,"Once you are at the login page, login with the default username ",(0,r.kt)("strong",{parentName:"p"},"admin")," and password ",(0,r.kt)("strong",{parentName:"p"},"admin"),"."),(0,r.kt)("p",null,"On the Install Options page, use the FQDNs of the VMs. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c6801.ambari.apache.org\nc6802.ambari.apache.org\nc6803.ambari.apache.org\n")),(0,r.kt)("p",null,"Alternatively, you can use a range expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"c68[01-03].ambari.apache.org\n")),(0,r.kt)("p",null,"Specify the the non-root SSH user ",(0,r.kt)("strong",{parentName:"p"},"vagrant"),", and upload ",(0,r.kt)("strong",{parentName:"p"},"insecure_private_key")," file that you copied earlier as the private key."),(0,r.kt)("p",null,"Follow the onscreen instructions to install your cluster."),(0,r.kt)("p",null,"When done testing, run ",(0,r.kt)("strong",{parentName:"p"},"vagrant destroy -f")," to purge the VMs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vagrant up"),"\nStarts a specific VM. up.sh is a wrapper for this call."),(0,r.kt)("p",null,"Note: if you don't specify the"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vagrant destroy -f"),"\nDestroys all VMs launched from the current directory (deletes them from disk as well)\nYou can optionally specify a specific VM to destroy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vagrant suspend"),"\nSuspends (snapshot) all VMs launched from the current directory so that you can resume them later\nYou can optionally specify a specific VM to suspend"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vagrant resume"),"\nResumes all suspended VMs launched from the current directory\nYou can optionally specify a specific VM to resume"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vagrant status"),"\nShows which VMs are running, suspended, etc."),(0,r.kt)("h2",{id:"modifying-ram-for-the-vms"},"Modifying RAM for the VMs"),(0,r.kt)("p",null,"Each VM is allocated 2GB of RAM. These can be changed by editing ",(0,r.kt)("strong",{parentName:"p"},"Vagrantfile"),". To change the RAM allocation, modify the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vb.customize ["modifyvm", :id, "--memory", 2048]\n')),(0,r.kt)("h2",{id:"taking-snapshots"},"Taking Snapshots"),(0,r.kt)("p",null,"Vagrant makes it easy to take snapshots of the entire cluster."),(0,r.kt)("p",null,"First, install the snapshot plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant plugin install vagrant-vbox-snapshot --plugin-version=0.0.2\n")),(0,r.kt)("p",null,'This enables the "vagrant snapshot" command. Note that the above installs vesion 0.0.2. if you install the latest plugin version 0.0.3 does not allow taking snapshots of the whole cluster at the same time (you have to specify a VM name).'),(0,r.kt)("p",null,"Run ",(0,r.kt)("strong",{parentName:"p"},"vagrant snapshot")," to see the syntax."),(0,r.kt)("p",null,"Note that the plugin tries to take a snapshot of all VMs configured in Vagrantfile. If you are always using 3 VMs, for example, you can comment out c68","[04-10]"," in Vagrantfile so that the snapshot commands only operate on c68","[01-03]","."),(0,r.kt)("p",null,"Note: Upon resuming a snapshot, you may find that time-sensitive services may be down (e.g, HBase RegionServer is down, etc.)"),(0,r.kt)("p",null,'Tip: After starting the VMs but before you do anything on the VMs, run "vagrant snapshot take init". This way, you can go back to the initial state of the VMs by running "vagrant snapshot go init"; this only takes seconds (much faster than starting the VMs up from scratch by using up.sh or "vagrant up"). Another advantage of this is that you can always go back to the initial state without destroying other named snapshots that you created.'),(0,r.kt)("h2",{id:"misc"},"Misc"),(0,r.kt)("p",null,"All VMs launched will have a directory called ",(0,r.kt)("strong",{parentName:"p"},"/vagrant")," inside the VM. This maps to the ",(0,r.kt)("strong",{parentName:"p"},"ambari-vagrant/")," directory on your local computer. You can use this shared directory mapping to push files, etc."),(0,r.kt)("p",null,"If you want to test OS's other than what's currently in the ",(0,r.kt)("strong",{parentName:"p"},"ambari-vagrant")," repo, please see ",(0,r.kt)("a",{parentName:"p",href:"http://www.vagrantbox.es/"},"http://www.vagrantbox.es/")," for all the readily available OS images you can test. Note that Ambari currently works on RHEL 5/6, CentOS 5/6, Oracle Linux 5/6, SUSE 11, and SLES 11. Ubuntu support is work in progress."),(0,r.kt)("h2",{id:"kerberos-support"},"Kerberos Support"),(0,r.kt)("p",null,"Ambari supports adding Kerberos security to an existing Ambari-installed cluster. First setup any one host as the KDC as follows:"),(0,r.kt)("p",null,"Install the Kerberos server on the chosen host. e.g. for Centos/RedHat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install krb5-server krb5-libs krb5-auth-dialog rng-tools -y\n")),(0,r.kt)("p",null,"Create the Kerberos database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rngd -r /dev/urandom -o /dev/random\n/usr/sbin/kdb5_util create -s\n")),(0,r.kt)("p",null,"Update ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," on the KDC host. e.g. if your realm is ",(0,r.kt)("inlineCode",{parentName:"p"},"EXAMPLE.COM")," and kdc host is ",(0,r.kt)("inlineCode",{parentName:"p"},"c6801.ambari.apache.org")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[realms]\n\u2002\u2002EXAMPLE.COM = {\n\u2002\u2002\u2002\u2002admin_server = c6801.ambari.apache.org\n\u2002\u2002\u2002\u2002kdc = c6801.ambari.apache.org\n\u2002\u2002}\n")),(0,r.kt)("p",null,"Restart Kerberos services. e.g. for Centos/RedHat"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/rc.d/init.d/krb5kdc restart\n/etc/rc.d/init.d/kadmin restart\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo kadmin.local\nkadmin.local:  add_principal admin/admin@EXAMPLE.COM\nWARNING: no policy specified for admin/admin@EXAMPLE.COM; defaulting to no policy\nEnter password for principal "admin/admin@EXAMPLE.COM":\nRe-enter password for principal "admin/admin@EXAMPLE.COM":\nPrincipal "admin/admin@EXAMPLE.COM" created.\n\n')),(0,r.kt)("p",null,"Remember the password for this principal. The Ambari Kerberos Wizard will request it later.Distribute the updated ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," file to remaining hosts in the cluster."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("em",{parentName:"p"},"Ambari Dashboard \u2014> Admin \u2014> Kerberos")," to launch the Kerberos Wizard and follow the wizard steps. If you run into errors, the Ambari server logs can be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/ambari-server/ambari-server.log"),"."),(0,r.kt)("h2",{id:"pre-configured-development-environment"},"Pre-Configured Development Environment"),(0,r.kt)("p",null,"Simply edit ",(0,r.kt)("strong",{parentName:"p"},"Vagrantfile")," to launch a VM with all the tools necessary to build Ambari from source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ambari-vagrant/centos6.8\nvi Vagrantfile  Frontend DevelopmentYou can use this set up to develop and test out Ambari Web frontend code against a real Ambari Server on a multi-node environment.You need to first fork the apache/ambari repository if you haven't already. Read the How to Contribute guide for instructions on how to fork.On the host machine:cd ambari-vagrant/centos6.8\n# Replace the [forked-repository-url] with your fork's clone url\ngit clone [forked-repository-url] ambari\ncd ambari/ambari-web\nnpm install\nbrunch wOn c6801 (where Ambari Server is installed):cd /usr/lib/ambari-server\nmv web web-orig\nln -s /vagrant/ambari/ambari-web/public web\nambari-server restartWith this setup, whenever you change the content of ambari-web files (under ambari-vagrant/ambari/) on the host machine, brunch will pick up changes in the background and update ambari-vagrant/ambari/ambari-web/public. Because of the symbolic link, the changes are automatically picked up by Ambari Server. All you have to do is hit refresh on the browser to see the frontend code changes reflected.Not seeing code changes as expected? If you have run the maven command to build Ambari previously, you will see files called app.js.gz and vendor.js.gz under the public folder. You need to delete these files for the frontend code changes to be effective, as the app.js.gz and vendor.js.gz files take precedence over app.js and vendor.js, respectively.\n\n")))}c.isMDXComponent=!0}}]);