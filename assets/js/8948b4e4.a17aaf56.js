"use strict";(self.webpackChunkkhanhhv_docs=self.webpackChunkkhanhhv_docs||[]).push([[665],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2,id:"authorization-code-flow",toc_max_heading_level:4,title:"Authorization Code Flow (3-legged OAuth)",sidebar_label:"Authorization Code Flow (3-legged OAuth)",slug:"/authentication/authorization-code-flow"},i=void 0,l={unversionedId:"Authentication/authorization-code-flow",id:"Authentication/authorization-code-flow",title:"Authorization Code Flow (3-legged OAuth)",description:"The Authorization Code Flow is used for applications to request permission from a Antsomi member to access their account data. The level of access or profile detail is explicitly requested using the scope parameter during the authorization process outlined below. This workflow will send a consent prompt to a selected member, and once approved your application may begin making API calls on behalf of that member.",source:"@site/docs/Authentication/3-legged.md",sourceDirName:"Authentication",slug:"/authentication/authorization-code-flow",permalink:"/docs/authentication/authorization-code-flow",draft:!1,tags:[],version:"current",lastUpdatedBy:"Truong vi",lastUpdatedAt:1678761616,formattedLastUpdatedAt:"Mar 14, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"authorization-code-flow",toc_max_heading_level:4,title:"Authorization Code Flow (3-legged OAuth)",sidebar_label:"Authorization Code Flow (3-legged OAuth)",slug:"/authentication/authorization-code-flow"}},s={},u=[{value:"Authorization Code Flow",id:"authorization-code-flow",level:2},{value:"Step 1: Configure your application",id:"step-1-configure-your-application",level:3},{value:"Step 2: Request an Authorization Code",id:"step-2-request-an-authorization-code",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Authorization Code Flow is used for applications to request permission from a Antsomi member to access their account data. The level of access or profile detail is explicitly requested using the scope parameter during the authorization process outlined below. This workflow will send a consent prompt to a selected member, and once approved your application may begin making API calls on behalf of that member."),(0,o.kt)("p",null,"This approval process ensures that Antsomi members are aware of what level of detail an application may access or action it may perform on their behalf."),(0,o.kt)("p",null,"If multiple scopes are requested, the user must be consent to all of them and may not select individual scopes. For the benefit of your Antsomi users, please ensure that your application requests the least number of scope permissions."),(0,o.kt)("h2",{id:"authorization-code-flow"},"Authorization Code Flow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure your application to obtain Client ID and Client Secret."),(0,o.kt)("li",{parentName:"ul"},"Your application directs the browser to Antsomi OAuth 2.0 authorization page where the user authenticates."),(0,o.kt)("li",{parentName:"ul"},"After authentication, Antsomi's authorization server passes an authorization code to your application."),(0,o.kt)("li",{parentName:"ul"},"Your application sends this code to Antsomi and Antsomi returns an access token."),(0,o.kt)("li",{parentName:"ul"},"Your application uses this token to make API calls on behalf of the user.")),(0,o.kt)("h3",{id:"step-1-configure-your-application"},"Step 1: Configure your application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contact to AM to create an application to obtain Client ID and Client Secret."),(0,o.kt)("li",{parentName:"ul"},"Provide the redirect (callback) URL to your server.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"URLs must be absolute:\n",(0,o.kt)("a",{parentName:"li",href:"https://dev.example.com/auth/callback"},"https://dev.example.com/auth/callback"),"\nnot /auth/callback"),(0,o.kt)("li",{parentName:"ul"},"parameters are ignored:\n",(0,o.kt)("a",{parentName:"li",href:"https://dev.example.com/auth/callback?id=1"},"https://dev.example.com/auth/callback?id=1"),"\nwill be ",(0,o.kt)("a",{parentName:"li",href:"https://dev.example.com/auth/callback"},"https://dev.example.com/auth/callback"))))),(0,o.kt)("p",null,"Each application is assigned a unique Client ID (Consumer key/API key) and Client Secret. Please make a note of these values as they will be integrated into your application. Your Client Secret protects your application's security so be sure to keep it secure!\n",(0,o.kt)("img",{alt:"Image Client Info",src:a(9542).Z,width:"1034",height:"152"})),(0,o.kt)("admonition",{title:"Warning",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Do not share your Client Secret value with anyone, and do not pass it in the URL when making API calls, or URI query-string parameters, or post in support forums, chat, etc.")),(0,o.kt)("h3",{id:"step-2-request-an-authorization-code"},"Step 2: Request an Authorization Code"),(0,o.kt)("p",null,"To request an authorization code, you must direct the user's browser to Antsomi's OAuth 2.0 authorization page, where the user either accepts or denies your application's permission request.\n",(0,o.kt)("img",{alt:"Image Login and accpet permission",src:a(8580).Z,width:"1026",height:"1156"})),(0,o.kt)("p",null,"When the member completes the authorization process, the browser is redirected to the URL provided in the redirect_uri query parameter."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GET ",(0,o.kt)("a",{parentName:"p",href:"https://iam.ants.tech/oauth/login"},"https://iam.ants.tech/oauth/login"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"response_type"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The value of this field should always be: ",(0,o.kt)("em",{parentName:"td"},"code"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"client_id"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required The ID of the client")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"redirect_uri"),(0,o.kt)("td",{parentName:"tr",align:null},"string (url)"),(0,o.kt)("td",{parentName:"tr",align:null},"The URI your users are sent back to after authorization. This value must match one of the Redirect URLs defined in your application configuration. For example, ",(0,o.kt)("a",{parentName:"td",href:"https://dev.example.com/auth/callback"},"https://dev.example.com/auth/callback"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"state"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A unique string value of your choice that is hard to guess. Used to prevent CSRF. For example, state=DCEeFWf45A53sdfKef424.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scope"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"URL-encoded, space-delimited list of user permissions your application is requesting on behalf of the user. These must be explicitly requested")))))}c.isMDXComponent=!0},9542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client-id-abdef01d67867002effc41914fc7aeaf.png"},8580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-1b10013bd85a1b328b5fba0b518e5d61.png"}}]);