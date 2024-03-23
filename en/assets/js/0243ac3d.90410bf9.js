"use strict";(self.webpackChunkwiki_template=self.webpackChunkwiki_template||[]).push([[545],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var r=t(7294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},p="mdxType",f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,i=n.originalType,l=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),p=c(t),m=s,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return t?r.createElement(d,a(a({ref:e},u),{},{components:t})):r.createElement(d,a({ref:e},u))}));function d(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var i=t.length,a=new Array(i);a[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o[p]="string"==typeof n?n:s,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6844:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),s=(t(7294),t(3905));const i={sidebar_position:2},a=void 0,o={unversionedId:"\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config\u6807\u8bb0",id:"\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config\u6807\u8bb0",title:"config\u6807\u8bb0",description:"",source:"@site/docs/\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config\u6807\u8bb0.md",sourceDirName:"\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX",slug:"/\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config\u6807\u8bb0",permalink:"/Dumb_Service_Guide/en/\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config\u6807\u8bb0",draft:!1,editUrl:"https://github.com/postyizhan/Dumb_Service_Guide/blob/main/docs/\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config\u6807\u8bb0.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/Dumb_Service_Guide/en/\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/\u6982\u89c8"},next:{title:"config.yml",permalink:"/Dumb_Service_Guide/en/\u63d2\u4ef6/\u57fa\u7840\u63d2\u4ef6/EssentialsX/config.yml"}},l={},c=[],u={toc:c},p="wrapper";function f(n){let{components:e,...t}=n;return(0,s.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Essentials (Global)\n\u884c\u6570 21\n\n\u91cd\u8981\u4f4d\u7f6e\n\n# \u4f20\u9001\u529f\u80fd\u7684\u51b7\u5374\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d),\u5982/home, /tp, etc \u7b49\u547d\u4ee4\nteleport-cooldown: 0\n\u884c\u6570 93\n\n# \u4f20\u9001\u5ef6\u8fdf\u65f6\u95f4(\u4ee5\u79d2\u4e3a\u5355\u4f4d),\u5728\u73a9\u5bb6\u88ab\u786e\u5b9e\u4f20\u9001\u4e4b\u524d\u7684\u65f6\u95f4.\u5982\u679c\u73a9\u5bb6\u5728\u8be5\u65f6\u95f4\u5185\u79fb\u52a8\u4e86\u6216\u8005\u53d7\u5230\u653b\u51fb,\u4f20\u9001\u5c06\u53d6\u6d88.\nteleport-delay: 0\n\u884c\u6570 96\n\n# \u5f53\u8be5\u9009\u9879\u5f00\u542f\u540e (\u4f8b\u5982. delay < 0) \u5219\u73a9\u5bb6\u4f7f\u7528\u8fc7\u4e00\u6b21\u8be5\u9879\u5de5\u5177\u5305\u4ee5\u540e\n# \u5c06\u4ece\u73a9\u5bb6\u7684kit\u5217\u8868\u4e2d\u5220\u53bb\u8be5\u9879\u53ef\u7528\u5de5\u5177\u5305\nskip-used-one-time-kits-from-kit-list: false\n\u884c\u6570 331\n\n# \u542f\u7528\u540e\uff0c\u53ea\u8981\u73a9\u5bb6\u7684\u76d4\u7532\u69fd\u662f\u7a7a\u7684\uff0c\u5c31\u4f1a\u81ea\u52a8\u88c5\u5907\u9886\u53d6\u7684kit\u5305\u4e2d\u7684\u76d4\u7532\u3002\nkit-auto-equip: false\n\u884c\u6570 335\n\n# \u9ed8\u8ba4\u4e3afalse\u3002 \u5e94\u8be5\u662f\u8bf4\uff0c\u5f00\u542f\u540ekit\u53ef\u4ee5\u5b58nbt\u7684\u4e1c\u897f\u4e86\nuse-nbt-serialization-in-createkit: false\n\u884c\u6570 350\n\n# \u81ea\u52a8AFK   \u9a7f\u7ad9:\u4f7f\u7528\u547d\u4ee4/afk \u6682\u65f6\u79bb\u5f00\n# \u5728\u6b64\u8d85\u65f6\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u540e\uff0c\u7528\u6237\u5c06\u88ab\u8bbe\u7f6e\u4e3a AFK\u3002\n# \u6b64\u529f\u80fd\u9700\u8981\u73a9\u5bb6\u62e5\u6709essentials.afk.auto \u8282\u70b9\u3002\n# \u8bbe\u7f6e\u4e3a -1 \u8868\u793a\u6ca1\u6709\u8d85\u65f6\u3002\nauto-afk: 300\n\u884c\u6570 451\n\n# \u6302\u673a\u592a\u4e45\u5c31\u7ed9\u8001\u5b50\u8e22\u5566\uff01\n# \u5728\u6b64\u8d85\u65f6\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u540e\uff0c\u7528\u6237\u5c06\u88ab\u8e22\u51fa\u670d\u52a1\u5668\u3002\n#essentials.afk.kickexempt \u8282\u70b9\u8986\u76d6\u6b64\u529f\u80fd\u3002\n# \u8bbe\u7f6e\u4e3a -1 \u8868\u793a\u6ca1\u6709\u8d85\u65f6\u3002\nauto-afk-kick: -1\n\u884c\u6570 457\n\n# \u8bbe\u7f6e\u73a9\u5bb6AFK\u65f6\u7684\u5217\u8868\u540d\u79f0\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3a none\uff0c\u5b83\u6307\u5b9a Essentials\n# \u4e0d\u5e94\u5e72\u6270 AFK \u73a9\u5bb6\u7684\u5217\u8868\u540d\u79f0\u3002 none\u6211\u6539\u6210\u4e86 \u6302\u673a\u4e2d\n# \u60a8\u53ef\u4ee5\u4f7f\u7528\u989c\u8272\u4ee3\u7801\uff0c\u4f7f\u7528 {USERNAME} \u73a9\u5bb6\u7684\u540d\u79f0\u6216 {PLAYER} \u4f5c\u4e3a\u73a9\u5bb6\u7684\u663e\u793a\u540d\u79f0\u3002\nafk-list-name: \"\u6302\u673a\u4e2d\"\n\u884c\u6570 495\n\n# \u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u7981\u7528 Minecraft \u7684\u6b7b\u4ea1\u6d88\u606f\u3002\ndeath-messages: true\n\u884c\u6570 505\n\n# \u60a8\u53ef\u4ee5\u5728\u6b64\u5904\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u52a0\u5165\u548c\u9000\u51fa\u6d88\u606f\u3002 \u5c06\u6b64\u8bbe\u7f6e\u4e3a\u201cnone\u201d\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684 Minecraft \u6d88\u606f\uff0c\ncustom-join-message: \"&e[&a+&e]&6\u6bd4\u9a7f\u7ad9\u4e11\u7684 {USERNAME} \u52a0\u5165\u4e86\u6e38\u620f\"\ncustom-quit-message: \"&e[&c-&e]&6\u6bd4\u9a7f\u7ad9\u4e11\u7684 {USERNAME} \u9000\u51fa\u4e86\u6e38\u620f\"\n\u884c\u6570 528\n\ncustom-new-username-message: \"&e[&a+&e]&6\u6bd4\u9a7f\u7ad9\u4e11\u7684\u65b0\u73a9\u5bb6 {USERNAME} \u52a0\u5165\u4e86\u6e38\u620f\"\n\u884c\u6570 556\n\n# \u8bbe\u7f6e\u4e3atrue,\u542f\u7528\u6bcf\u4e2a\u4e16\u754c\u4f20\u9001\u5355\u72ec\u7684\u6743\u9650.\n# \u7ed9\u4e88\u73a9\u5bb6\u67d0\u4e2a\u4e16\u754c\u7684\u4f20\u9001\u6743\u9650 essentials.world.<worldname>\nworld-teleport-permissions: false\n\u884c\u6570 571\n\n\n\nHomes\n\n\u91cd\u8981\u4f4d\u7f6e\n\n# \u8bbe\u7f6e\u4e3a true \u5c06\u7ed9\u4e88\u73a9\u5bb6\u8de8\u8d8a\u4e16\u754c\u4f20\u9001\u56de\u5bb6\u7684\u6743\u9650\n# \u8fd9\u4e2a\u8bbe\u7f6e\u53ea\u9002\u7528\u4e8e'/home'\u547d\u4ee4.\n# \u5bf9\u4e8e\u5176\u4ed6\u4f20\u9001\u547d\u4ee4,\u7ed9\u4e88\u73a9\u5bb6\u591a\u4e16\u754c\u95f4\u4f20\u9001\u7684\u6743\u9650 essentials.world.<\u4e16\u754c\u540d\u79f0> \u53ef\u4ee5\u5141\u8bb8\u73a9\u5bb6\u8de8\u4e16\u754c\u4f20\u9001\nworld-home-permissions: false\n\u884c\u6570 748\n\n# \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u5bb6\uff0c\u4f60\u60f3\u8ba9\u73a9\u5bb6\u53bb\u51fa\u751f\u70b9\u5417\uff1f\n# \u5982\u679c\u8bbe\u7f6e\u4e3afalse\uff0c\u73a9\u5bb6\u5728\u6ca1\u6709\u8bbe\u7f6e\u5bb6\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c/home\u65f6\u4e0d\u4f1a\u88ab\u4f20\u9001\u3002\nspawn-if-no-home: true\n\u884c\u6570 775\n\n\n\nEconomy\n\n\u91cd\u8981\u4f4d\u7f6e\n\n# \u5b9a\u4e49\u65b0\u73a9\u5bb6\u5f00\u59cb\u7684\u5e73\u8861(\u5e94\u8be5\u662f\u8bf4\u9ed8\u8ba4\u7684\u94b1)\u3002 \u9ed8\u8ba4\u4e3a 0\u3002\nstarting-balance: 0\n\u884c\u6570 792\n\n\n\nhelp\n\n\u91cd\u8981\u4f4d\u7f6e\n\n\u554a\u5e94\u8be5\u662f\u6728\u6709\uff01\n\n\n\nEssentialsX Chat\n\u6ce8\u610f:\u4f60\u9700\u8981\u5b89\u88c5 EssentialsX Chat \u624d\u53ef\u4ee5\u4f7f\u7528 \u4e0d\u8fc7\u63a8\u8350\u7528\u522b\u7684\u804a\u5929\u63d2\u4ef6\n\n\u91cd\u8981\u4f4d\u7f6e\n\nformat: '<{DISPLAYNAME}> {MESSAGE}'\n\u884c\u6570 903\n\n\n\nEssentialsX Protect\n\u6ce8\u610f:\u4f60\u9700\u8981\u5b89\u88c5 EssentialsX Protect \u624d\u53ef\u4ee5\u4f7f\u7528\n\n\u91cd\u8981\u4f4d\u7f6e\n\n  # \u603b\u4f53\u7684\u7269\u7406\u73b0\u8c61\u6216\u884c\u4e3a\u7684\u8bbe\u7f6e\n  prevent:  # \u963b\u6b62\u4ee5\u4e0b\u73b0\u8c61(\u8bd1\u6ce8:true\u5c31\u662f\u963b\u6b62,false\u662f\u5141\u8bb8,\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u4e00\u4e0b)\n\u884c\u6570 943\n\u4e00\u76f4\u5230 1048 \u884c\uff0c\u53ef\u8c03\u7684\u4e1c\u897f\u633a\u591a\uff0c\u4fdd\u62a4\u63d2\u4ef6\u53ef\u4ee5\u8003\u8651\u8fd9\u4e2a\n\n\n\nEssentialsX AntiBuild\n\u6ce8\u610f:\u4f60\u9700\u8981\u5b89\u88c5 EssentialsX AntiBuild \u624d\u53ef\u4ee5\u4f7f\u7528\n\n\u91cd\u8981\u4f4d\u7f6e\n\n    # \u73a9\u5bb6\u662f\u5426\u53ef\u4ee5\u5efa\u9020:\n        build: true\n\u884c\u6570 1089\n\n    # \u73a9\u5bb6\u662f\u5426\u53ef\u4ee5\u4f7f\u7528\u7269\u54c1(\u5f53\u73a9\u5bb6\u6ca1\u6709build\u6743\u9650\u7684\u65f6\u5019):\n    use: true\n\u884c\u6570 1097\n\n    # \u73a9\u5bb6\u65e0\u6cd5\u5efa\u9020\u65f6\u662f\u5426\u63d0\u793a\u73a9\u5bb6\n    warn-on-build-disallow: true\n\u884c\u6570 1099\n\n    # \u963b\u6b62\u73a9\u5bb6\u653e\u7f6e\u4ee5\u4e0b\u65b9\u5757   \u770b\u8fd9\u91cc\uff01\uff01\uff01\n    placement: LAVA,TNT,LAVA_BUCKET\n\n    # \u963b\u6b62\u73a9\u5bb6\u4f7f\u7528\u4ee5\u4e0b\u7269\u54c1   \u770b\u8fd9\u91cc\uff01\uff01\uff01\n    usage: LAVA_BUCKET\n\u884c\u6570 1111\n\n\n\nEssentialsX Spawn + New Players\n\u6ce8\u610f:\u4f60\u9700\u8981\u5b89\u88c5 EssentialsX Spawn \u624d\u53ef\u4ee5\u4f7f\u7528\n\n\u91cd\u8981\u4f4d\u7f6e\n\nannounce-format: '&7[&b\u9a7f\u7ad9&7]&a\u6b22\u8fce\u5927\u50bb\u86cb\u6765\u670d\u52a1\u5668\uff01'\n\u884c\u6570 1140\n\n  # \u662f\u5426\u60f3\u8981\u73a9\u5bb6\u7b2c\u4e00\u6b21\u8fdb\u5165\u670d\u52a1\u5668\u65f6\u8d60\u9001\u65b0\u624b\u793c\u7269? \u8bbe\u7f6e\u4e3a ''\u7981\u7528\u6b64\u529f\u80fd.\n  # \u8fd9\u4e2a\u8d60\u9001\u4e0d\u4f1a\u82b1\u8d39\u91d1\u94b1,\u4e5f\u53ef\u4ee5\u7ed9\u4e88\u6743\u9650.\n  #kit: ''\n  kit: tools\n\u884c\u6570 1146\n\n-\u9a7f\u7ad9\u5fc6\u884c(185839426)\n")))}f.isMDXComponent=!0}}]);