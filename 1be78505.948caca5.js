(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11,54],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(208),l=a(200),o=a(189),i=a(190);a(199);var s=function(e,t,a){var r=Object(n.useState)(void 0),c=r[0],l=r[1];Object(n.useEffect)((function(){var n=[],r=[];function o(){var o=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var r=n[e],c=r.getBoundingClientRect().top;c>=0&&c<=a&&(t=r),e+=1}return t}();if(o){var i=0,s=!1;for(r=document.getElementsByClassName(e);i<r.length&&!s;){var m=r[i],u=m.href,d=decodeURIComponent(u.substring(u.indexOf("#")+1));o.id===d&&(c&&c.classList.remove(t),m.classList.add(t),l(m),s=!0),i+=1}}}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}))},m=a(197),u=a.n(m),d=a(133),b=a.n(d);function f(e){var t=e.headings;return s("table-of-contents__link","table-of-contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:b.a.tableOfContents},r.a.createElement(h,{headings:t})))}function h(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(h,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,a=Object(o.a)().siteConfig,n=void 0===a?{}:a,s=n.url,m=n.title,d=e.content,h=d.metadata,v=h.description,g=h.title,E=h.permalink,p=(h.editUrl,h.lastUpdatedAt,h.lastUpdatedBy,h.version),k=d.frontMatter,j=k.image,O=k.keywords,_=k.hide_title,N=k.hide_table_of_contents,C=void 0===N||N,w=g?g+" | "+m:m,y=s+Object(i.a)(j);return Object(l.a)(j)||(y=j),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,w),r.a.createElement("meta",{property:"og:title",content:w}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:y}),j&&r.a.createElement("meta",{property:"twitter:image",content:y}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),E&&r.a.createElement("meta",{property:"og:url",content:s+E}),E&&r.a.createElement("link",{rel:"canonical",href:s+E})),r.a.createElement("div",{className:u()("container padding-vert--lg",b.a.docItemWrapper)},r.a.createElement("div",{className:"row row--docitem"},r.a.createElement("div",{className:u()("col",(t={},t[b.a.docItemCol]=!C,t))},r.a.createElement("div",{className:b.a.docItemContainer},r.a.createElement("article",null,p&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",p)),!_&&r.a.createElement("header",null,r.a.createElement("h1",{className:b.a.docTitle},g)),r.a.createElement("div",{className:"markdown"},r.a.createElement(d,null))))),!C&&d.rightToc&&r.a.createElement(f,{headings:d.rightToc}))))}},187:function(e,t,a){"use strict";a.r(t);a(29),a(20),a(21),a(57),a(231);var n=a(0),r=a.n(n),c=a(188),l=a(189),o=a(62),i=a(207),s=a(132),m=a(2),u=a(9),d=a(197),b=a.n(d),f=a(205),h=a(202),v=a(199),g=a(200),E=a(143),p=a.n(E);function k(e){var t=e.item,a=e.onItemClick,c=e.collapsible,l=e.activePath,o=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),i=t.items,s=t.href,d=t.label,f=t.type,h=Object(n.useState)(t.collapsed),E=h[0],p=h[1],j=Object(n.useState)(null),O=j[0],_=j[1];t.collapsed!==O&&(_(t.collapsed),p(t.collapsed));var N=Object(n.useCallback)((function(e){e.preventDefault(),e.target.blur(),p((function(e){return!e}))}));switch(f){case"category":return i.length>0&&r.a.createElement("li",{className:b()("menu__list-item",{"menu__list-item--collapsed":E}),key:d},r.a.createElement("a",Object(m.a)({className:b()("menu__link",{"menu__link--sublist":c,"menu__link--active":c&&!t.collapsed}),href:"#!",onClick:c?N:void 0},o),d),r.a.createElement("ul",{className:"menu__list"},i.map((function(e){return r.a.createElement(k,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:a,collapsible:c,activePath:l})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:d},r.a.createElement(v.a,Object(m.a)({className:b()("menu__link",{"menu__link--active":s===l}),to:s},Object(g.a)(s)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},o),d))}}var j=function(e){var t=Object(n.useState)(!1),a=t[0],c=t[1],o=Object(l.a)(),i=o.siteConfig,s=(i=void 0===i?{}:i).themeConfig.navbar,u=(s=void 0===s?{}:s).title,d=s.hideOnScroll,g=void 0!==d&&d,E=o.isClient,j=Object(h.a)(),O=j.logoLink,_=j.logoLinkProps,N=j.logoImageUrl,C=j.logoAlt,w=e.docsSidebars,y=e.path,S=e.sidebar,L=e.sidebarCollapsible;if(Object(f.a)(a),!S)return null;var T=w[S];if(!T)throw new Error('Cannot find the sidebar "'+S+'" in the sidebar config!');return L&&T.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var c=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!c,c;case"link":default:return r===a}}(e,y)})),r.a.createElement("div",{className:p.a.sidebar},g&&r.a.createElement(v.a,Object(m.a)({tabIndex:"-1",className:p.a.sidebarLogo,to:O},_),null!=N&&r.a.createElement("img",{key:E,src:N,alt:C}),null!=u&&r.a.createElement("strong",null,u)),r.a.createElement("div",{className:b()("menu","menu--responsive",p.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:b()("button button--secondary","button--sm","menu__button",{"shadow--tl":!a}),type:"button",onClick:function(){c(!a)}},a?r.a.createElement("span",{className:b()(p.a.sidebarMenuIcon,p.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:p.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:36,width:36,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},T.map((function(e){return r.a.createElement(k,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),c(!1)},collapsible:L,activePath:y})})))))},O=(a(235),a(236),a(79),a(237),a(238),a(209),a(242)),_=a(239),N=a.n(_),C=a(240),w=a.n(C),y=a(241),S=a(201),L=function(){var e=Object(l.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(S.a)().isDarkTheme,n=t.theme||y.a,r=t.darkTheme||n;return a?r:n},T=a(144),x=a.n(T),I=/{([\d,-]+)}/,B=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},M=/title=".*"/,D=function(e){var t=e.children,a=e.className,c=e.metastring,o=Object(l.a)().siteConfig.themeConfig.prism,i=void 0===o?{}:o,s=Object(n.useState)(!1),u=s[0],d=s[1],f=Object(n.useState)(!1),h=f[0],v=f[1];Object(n.useEffect)((function(){v(!0)}),[]);var g=Object(n.useRef)(null),E=Object(n.useRef)(null),p=[],k="",j=L();if(c&&I.test(c)){var _=c.match(I)[1];p=w.a.parse(_).filter((function(e){return e>0}))}c&&M.test(c)&&(k=c.match(M)[0].split("title=")[1].replace(/"+/g,"")),Object(n.useEffect)((function(){var e;return E.current&&(e=new N.a(E.current,{target:function(){return g.current}})),function(){e&&e.destroy()}}),[E.current,g.current]);var C=a&&a.replace(/language-/,"");!C&&i.defaultLanguage&&(C=i.defaultLanguage);var y=t.replace(/\n$/,"");if(0===p.length&&void 0!==C){for(var S,T="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return B(["js","jsBlock"]);case"jsx":case"tsx":return B(["js","jsBlock","jsx"]);case"html":return B(["js","jsBlock","html"]);case"python":case"py":return B(["python"]);default:return B()}}(C),P=t.replace(/\n$/,"").split("\n"),U=0;U<P.length;){var R=U+1,H=P[U].match(D);if(null!==H){switch(H.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=R+",";break;case"highlight-start":S=R;break;case"highlight-end":T+=S+"-"+(R-1)+","}P.splice(U,1)}else U+=1}p=w.a.parse(T),y=P.join("\n")}var G=function(){window.getSelection().empty(),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(O.a,Object(m.a)({},O.b,{key:h,theme:j,code:y,language:C}),(function(e){var t,a,n=e.className,c=e.style,l=e.tokens,o=e.getLineProps,i=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,k&&r.a.createElement("div",{style:c,className:x.a.codeBlockTitle},k),r.a.createElement("div",{className:x.a.codeBlockContent},r.a.createElement("button",{ref:E,type:"button","aria-label":"Copy code to clipboard",className:b()(x.a.copyButton,(t={},t[x.a.copyButtonWithTitle]=k,t)),onClick:G},u?"Copied":"Copy"),r.a.createElement("div",{tabIndex:"0",className:b()(n,x.a.codeBlock,(a={},a[x.a.codeBlockWithTitle]=k,a))},r.a.createElement("div",{ref:g,className:x.a.codeBlockLines,style:c},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=o({line:e,key:t});return p.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(m.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(m.a)({key:t},i({token:e,key:t})))})))}))))))}))},P=(a(145),a(146)),U=a.n(P),R=function(e){return function(t){var a,n=t.id,c=Object(u.a)(t,["id"]),o=Object(l.a)().siteConfig,i=(o=void 0===o?{}:o).themeConfig,s=(i=void 0===i?{}:i).navbar,m=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==m&&m;return n?r.a.createElement(e,c,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:b()("anchor",(a={},a[U.a.enhancedAnchor]=!d,a)),id:n}),c.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,c)}},H=a(147),G=a.n(H),A={code:function(e){var t=e.children;return"string"==typeof t?r.a.createElement(D,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(v.a,e)},pre:function(e){return r.a.createElement("div",Object(m.a)({className:G.a.mdxCodeBlock},e))},h1:R("h1"),h2:R("h2"),h3:R("h3"),h4:R("h4"),h5:R("h5"),h6:R("h6")},W=a(213),F=a(210),V=a(148),$=a.n(V);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,m=e.content,u=a.permalinkToSidebar,d=a.docsSidebars,b=a.version,f=a.isHomePage,h=a.homePagePath,v=f?{}:t.routes.find((function(e){return Object(F.a)(n.pathname,e)}))||{},g=f?m.metadata.sidebar:u[v.path],E=Object(l.a)(),p=E.siteConfig,k=(p=void 0===p?{}:p).themeConfig,O=(k=void 0===k?{}:k).sidebarCollapsible,_=void 0===O||O,N=E.isClient;return f||0!==Object.keys(v).length?r.a.createElement(i.a,{version:b,key:N},r.a.createElement("div",{className:$.a.docPage},g&&r.a.createElement("div",{className:$.a.docSidebarContainer},r.a.createElement(j,{docsSidebars:d,path:f?h:v.path,sidebar:g,sidebarCollapsible:_})),r.a.createElement("main",{className:$.a.docMainContainer},r.a.createElement(c.a,{components:A},f?r.a.createElement(s.default,{content:m}):Object(o.a)(t.routes))))):r.a.createElement(W.default,e)}},201:function(e,t,a){"use strict";var n=a(0),r=a(203);t.a=function(){return Object(n.useContext)(r.a)}},202:function(e,t,a){"use strict";var n=a(189),r=a(201),c=a(190),l=a(200);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,o=(a=void 0===a?{}:a).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,m=i.href||t,u={};i.target?u={target:i.target}:Object(l.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},205:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(208),l=a(200),o=a(189),i=a(190),s="",m="dark",u=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),l(s)}),[]),u=Object(n.useCallback)((function(){c(m),l(m)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?m:s)}))}),[]),{isDarkTheme:r===m,setLightTheme:i,setDarkTheme:u}},d=a(203);var b=function(e){var t=u(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(192),a(191),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),h=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var v=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(h.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(127),E=a.n(g);var p=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,l=a.content,i=a.backgroundColor,s=a.textColor,m=Object(n.useState)(!0),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!l||u?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(2),j=(a(209),a(9)),O=a(197),_=a.n(O),N=a(199),C=a(204),w=a(212),y=a.n(w),S=a(128),L=a.n(S),T=function(){return r.a.createElement("span",{className:_()(L.a.toggle,L.a.moon)})},x=function(){return r.a.createElement("span",{className:_()(L.a.toggle,L.a.sun)})},I=function(e){var t=Object(o.a)().isClient;return r.a.createElement(y.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(T,null),unchecked:r.a.createElement(x,null)}},e))},B=a(201),M=a(210);var D=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},P=a(52),U=function(){return{scrollX:P.a.canUseDOM?window.pageXOffset:0,scrollY:P.a.canUseDOM?window.pageYOffset:0}},R=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(U()),r=a[0],c=a[1],l=function(){var t=U();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r},H=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],m=i[1],u=Object(n.useState)(0),d=u[0],b=u[1],f=Object(n.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),h=Object(M.b)(),v=D(h.hash),g=v[0],E=v[1];return R((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<d))){if(l)return o(!1),r(!1),void m(a);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),m(a)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),E(h.hash))}),[h]),Object(n.useEffect)((function(){e&&g&&o(!0)}),[g]),{navbarRef:f,isNavbarVisible:a}},G=a(205),A=a(202),W=a(206),F=a(129),V=a.n(F);function $(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,l=e.label,o=e.activeClassName,s=void 0===o?"navbar__link--active":o,m=e.prependBaseUrlToHref,u=Object(j.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),d=Object(i.a)(n),b=Object(i.a)(t),f=Object(i.a)(c,!0);return r.a.createElement(N.a,Object(k.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?f:c}:Object.assign({isNavLink:!0,activeClassName:s,to:d},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),u),l)}function Y(e){var t=e.items,a=e.position,n=e.className,c=Object(j.a)(e,["items","position","className"]),l=function(e,t){return void 0===t&&(t=!1),_()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:_()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement($,Object(k.a)({className:l(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement($,Object(k.a)({activeClassName:"dropdown__link--active",className:l(a,!0)},n)))})))):r.a.createElement($,Object(k.a)({className:l(n)},c))}function z(e){var t=e.items,a=(e.position,e.className),n=Object(j.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),_()("menu__link","navbar__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement($,Object(k.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,l=Object(j.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement($,Object(k.a)({activeClassName:"menu__link--active",className:c(a)},l,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement($,Object(k.a)({className:c(a)},n)))}var J=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,l=c.navbar,i=(l=void 0===l?{}:l).title,s=l.links,m=void 0===s?[]:s,u=l.hideOnScroll,d=void 0!==u&&u,b=c.disableDarkMode,f=void 0!==b&&b,h=a.isClient,v=Object(n.useState)(!1),g=v[0],E=v[1],p=Object(n.useState)(!1),j=p[0],O=p[1],w=Object(B.a)(),y=w.isDarkTheme,S=w.setLightTheme,L=w.setDarkTheme,T=H(d),x=T.navbarRef,M=T.isNavbarVisible,D=Object(A.a)(),P=D.logoLink,U=D.logoLinkProps,R=D.logoImageUrl,F=D.logoAlt;Object(G.a)(g);var $=Object(n.useCallback)((function(){E(!0)}),[E]),J=Object(n.useCallback)((function(){E(!1)}),[E]),K=Object(n.useCallback)((function(e){return e.target.checked?L():S()}),[S,L]);return r.a.createElement("nav",{ref:x,className:_()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":g},e[V.a.navbarHideable]=d,e[V.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:$,onKeyDown:$},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(k.a)({className:"navbar__brand",to:P},U),null!=i&&r.a.createElement("strong",{className:_()("navbar__title",(t={},t[V.a.hideLogoText]=j,t))},i))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(Y,Object(k.a)({},e,{key:t}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(W.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),m.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(Y,Object(k.a)({},e,{key:t}))})),!f&&r.a.createElement(I,{className:V.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:K}),r.a.createElement(C.a,{handleSearchBarToggle:O,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(k.a)({className:"navbar__brand",onClick:J,to:P},U),null!=R&&r.a.createElement("img",{key:h,className:"navbar__logo",src:R,alt:F}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!f&&g&&r.a.createElement(I,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return r.a.createElement(z,Object(k.a)({},e,{onClick:J,key:t}))})))))))};a(130);var K=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(i.a)("/img/swmLogo.svg");return a?r.a.createElement("footer",{className:_()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(N.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(W.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null};a(131);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,m=a.themeConfig.image,u=a.url,d=e.children,f=e.title,h=e.noFooter,g=e.description,E=e.image,k=e.keywords,j=e.permalink,O=e.version,_=f?f+" | "+s:s,N=E||m,C=u+Object(i.a)(N);Object(l.a)(N)||(C=N);var w=Object(i.a)(n);return r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),N&&r.a.createElement("meta",{property:"og:image",content:C}),N&&r.a.createElement("meta",{property:"twitter:image",content:C}),N&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),j&&r.a.createElement("meta",{property:"og:url",content:u+j}),j&&r.a.createElement("link",{rel:"canonical",href:u+j}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(J,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(K,null)))}},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(207);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);