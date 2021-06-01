(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[9],{664:function(e,n,t){"use strict";var r=t(0),i=t(174),c=/%(.*?)%/,o=function(e,n,t){var r=e.find((function(e){return e.data.stringId===n}));if(r){var i=r.data.text;return i.includes("%")?function(e,n){var t=c.exec(e)[0],r=n.split(" ")[0];return e.replace(t,r)}(i,t):i}return t};n.a=function(){var e=Object(r.useContext)(i.a).translations;return function(n,t){return"error"===e[0]?t:e.length>0?o(e,n,t):t}}},688:function(e,n,t){e.exports=t(331)},689:function(e,n,t){var r,i,c;i=[],void 0===(c="function"===typeof(r=function(){var e=function(){},n={},t={},r={};function i(e,n){e=e.push?e:[e];var i,c,o,u=[],a=e.length,s=a;for(i=function(e,t){t.length&&u.push(e),--s||n(u)};a--;)c=e[a],(o=t[c])?i(c,o):(r[c]=r[c]||[]).push(i)}function c(e,n){if(e){var i=r[e];if(t[e]=n,i)for(;i.length;)i[0](e,n),i.splice(0,1)}}function o(n,t){n.call&&(n={success:n}),t.length?(n.error||e)(t):(n.success||e)(n)}function u(n,t,r,i){var c,o,a=document,s=r.async,f=(r.numRetries||0)+1,l=r.before||e,d=n.replace(/[\?|#].*$/,""),p=n.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(d)?((o=a.createElement("link")).rel="stylesheet",o.href=p,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(o=a.createElement("img")).src=p:((o=a.createElement("script")).src=n,o.async=void 0===s||s),o.onload=o.onerror=o.onbeforeload=function(e){var a=e.type[0];if(c)try{o.sheet.cssText.length||(a="e")}catch(s){18!=s.code&&(a="e")}if("e"==a){if((i+=1)<f)return u(n,t,r,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(n,a,e.defaultPrevented)},!1!==l(n,o)&&a.head.appendChild(o)}function a(e,n,t){var r,i,c=(e=e.push?e:[e]).length,o=c,a=[];for(r=function(e,t,r){if("e"==t&&a.push(e),"b"==t){if(!r)return;a.push(e)}--c||n(a)},i=0;i<o;i++)u(e[i],r,t)}function s(e,t,r){var i,u;if(t&&t.trim&&(i=t),u=(i?r:t)||{},i){if(i in n)throw"LoadJS";n[i]=!0}function s(n,t){a(e,(function(e){o(u,e),n&&o({success:n,error:t},e),c(i,e)}),u)}if(u.returnPromise)return new Promise(s);s()}return s.ready=function(e,n){return i(e,(function(e){o(n,e)})),s},s.done=function(e){c(e,[])},s.reset=function(){n={},t={},r={}},s.isDefined=function(e){return e in n},s})?r.apply(n,i):r)||(e.exports=c)},769:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return G}));var r=t(16),i=t(61),c=t(0),o=t.n(c),u=t(4),a=t(51),s=t(664),f=t(179),l=t(668),d=t(672),p=function(e){var n=e.value,t=e.decimals,i=e.fontSize,o=void 0===i?"40px":i,u=e.prefix,s=Object(d.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),f=s.countUp,l=s.update,p=Object(c.useRef)(l);return Object(c.useEffect)((function(){p.current(n)}),[n,p]),Object(r.jsxs)(a.t,{bold:!0,fontSize:o,children:[u,f]})},j=t(87);function b(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return b=function(){return e},e}function h(){var e=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return h=function(){return e},e}var x=Object(u.e)(a.g)(h()),m=u.e.div(b()),v=function(){var e=Object(s.a)(),n=Object(j.h)(),t=Object(j.a)(),i=Object(j.g)().times(n);return t&&t[0]&&t[0].lifePerBlock&&new l.a(t[0].lifePerBlock).div(new l.a(10).pow(18)).toNumber(),Object(r.jsx)(x,{children:Object(r.jsxs)(a.h,{children:[Object(r.jsx)(a.j,{size:"xl",mb:"24px",children:e(534,"STOS Stats")}),Object(r.jsxs)(m,{children:[Object(r.jsx)(a.t,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(r.jsx)(p,{fontSize:"14px",value:i.toNumber(),decimals:0,prefix:"$"})]}),Object(r.jsxs)(m,{children:[Object(r.jsx)(a.t,{fontSize:"14px",children:e(536,"Total Minted")}),n&&Object(r.jsx)(p,{fontSize:"14px",value:0,decimals:0})]}),Object(r.jsxs)(m,{children:[Object(r.jsx)(a.t,{fontSize:"14px",children:e(538,"Total Burned")}),Object(r.jsx)(p,{fontSize:"14px",value:0,decimals:0})]}),Object(r.jsxs)(m,{children:[Object(r.jsx)(a.t,{fontSize:"14px",children:e(10004,"Circulating Supply")}),n&&Object(r.jsx)(p,{fontSize:"14px",value:n.toNumber(),decimals:0})]}),Object(r.jsx)(m,{})]})})},g=t(688),O=t.n(g),w=t(689),y=t.n(w);function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var k="twttr",z=k,E=!("undefined"===typeof window||!window.document||!window.document.createElement);function T(e,n){return e===n?0!==e||0!==n||1/e===1/n:e!==e&&n!==n}function P(e){var n=Object(c.useRef)();return function(e,n){if(T(e,n))return!0;if("object"!==typeof e||null===e||"object"!==typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(var i=0;i<t.length;i++)if(!Object.prototype.hasOwnProperty.call(n,t[i])||!T(e[t[i]],n[t[i]]))return!1;return!0}(e,n.current)||(n.current=e),n.current}function C(e){return"object"===typeof e?S({},e):e}function N(e,n,t,r,i,c,o){try{var u=e[c](o),a=u.value}catch(s){return void t(s)}u.done?n(a):Promise.resolve(a).then(r,i)}E&&y()("https://platform.twitter.com/widgets.js",z);var A="twdiv";function R(e,n,t,r){var i=Object(c.useState)(null),o=i[0],u=i[1],a=Object(c.useRef)(null);if(!E)return{ref:a,error:o};var s=[e,P(n),P(t)];return Object(c.useEffect)((function(){u(null);var i,c,o=!1;if(a.current){var s=function(){var i,c=(i=O.a.mark((function i(){var c,s;return O.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a&&a.current){i.next=2;break}return i.abrupt("return");case 2:return(c=document.createElement("div")).setAttribute(A,"yes"),a.current.appendChild(c),i.prev=5,i.next=8,new Promise((function(e,n){var t=function(){return n(new Error("Could not load remote twitter widgets js"))};y.a.ready(z,{success:function(){var n=window.twttr;n&&n.widgets||t(),e(n.widgets)},error:t})}));case 8:return s=i.sent,i.next=11,s[e](C(n),c,C(t));case 11:if(i.sent||o){i.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:i.next=21;break;case 16:return i.prev=16,i.t0=i.catch(5),console.error(i.t0),u(i.t0),i.abrupt("return");case 21:if(a&&a.current){i.next=23;break}return i.abrupt("return");case 23:if(!o){i.next=26;break}return c&&c.remove(),i.abrupt("return");case 26:r&&r();case 27:case"end":return i.stop()}}),i,null,[[5,16]])})),function(){var e=this,n=arguments;return new Promise((function(t,r){var c=i.apply(e,n);function o(e){N(c,t,r,o,u,"next",e)}function u(e){N(c,t,r,o,u,"throw",e)}o(void 0)}))});return function(){return c.apply(this,arguments)}}();i=a.current,c=A,i&&i.querySelectorAll("*").forEach((function(e){e.hasAttribute(c)&&e.remove()})),s()}return function(){o=!0}}),s),{ref:a,error:o}}var $=function(e){var n=e.dataSource,t=e.options,r=e.onLoad,i=e.renderError,c=R("createTimeline",n,t,r),u=c.ref,a=c.error;return o.a.createElement("div",{ref:u},a&&i&&i(a))};function B(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return B=function(){return e},e}function F(){var e=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return F=function(){return e},e}var I=Object(u.e)(a.g)(F()),J=(u.e.div(B()),function(){var e=Object(s.a)();return Object(r.jsx)(I,{children:Object(r.jsxs)(a.h,{children:[Object(r.jsx)(a.j,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(r.jsx)($,{dataSource:{sourceType:"profile",screenName:"safestos"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})});function L(){var e=Object(i.a)(["\n  color: white;\n  font-size: 30px;\n  text-shadow: 2px 2px 2px #000;\n"]);return L=function(){return e},e}function Q(){var e=Object(i.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return Q=function(){return e},e}function q(){var e=Object(i.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"]);return q=function(){return e},e}var M=u.e.div(q(),(function(e){return e.theme.mediaQueries.lg})),U=Object(u.e)(a.b)(Q(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),D=Object(u.e)(a.t)(L()),G=function(){var e=Object(s.a)();return Object(r.jsxs)(f.a,{children:[Object(r.jsxs)(M,{children:[Object(r.jsx)(a.j,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"STOS Entertainment")}),Object(r.jsx)(D,{fontSize:"24px",children:e(578,"A global NFT hospitality project, curating unique entertainment experiences for our NFT & Token holders.")})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(U,{children:[Object(r.jsx)(J,{}),Object(r.jsx)(v,{})]})})]})}}}]);
//# sourceMappingURL=9.621b334b.chunk.js.map