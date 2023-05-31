(()=>{var e={2560:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var o=r(9439),n=r(2853),i=r(3110),s=r(5626),a=r(3107),l="#000000",c="#222831",d="#393E46",u="#6495ED",f="#87CEFA",h="#E0FFFF",p="#DA8F81",g="#9d847e",b="#dff5fb",y={width:a.default.get("window").width,height:a.default.get("window").height},O={size:36,family:"OverPass-Regular"},j={size:32,family:"OverPass-Regular"},w={size:28,family:"OverPass-Regular"},m={size:24,family:"OverPass-Regular"},v={size:20,family:"OverPass-Regular"},x={size:18,family:"OverPass-Regular"},P={size:14,family:"OverPass-Regular"},C={size:12,family:"OverPass-Regular"},S=r(6645),k=r(4942),z=r(2045),R=r(1785);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,k.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const D=function(e){var t={},r="#FFF";return e.h1?t=O:e.h2?t=j:e.h3?t=w:e.h4?t=m:e.p1?t=v:e.p2?t=x:e.p3?t=P:e.p4&&(t=C),e.black?r=l:e.night?r=c:e.dusk?r=d:e.aegean?r=u:e.led?r=f:e.white?r=h:e.clay?r=p:e.dryBlood?r=g:e.powder&&(r=b),(0,R.jsx)(z.default.Text,{numberOfLines:e.numberOfLines,ellipsizeMode:e.ellipsizeMode,onPress:e.onPress,textBreakStrategy:e.textBreakStrategy,style:_({color:r,fontSize:t.size,fontFamily:t.family},e.style),adjustsFontSizeToFit:e.adjustsFontSizeToFit,children:e.u&&"object"!==typeof e.children?e.children.toString().toUpperCase():e.children})};var E=r(5659);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,k.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=n.forwardRef((function(e,t){var r=void 0;return e.small?r=.4*y.width:e.medium?r=.6*y.width:e.large&&(r=.8*y.width),(0,R.jsx)(E.default,{disabled:e.disabled,onPress:e.onPress,onPressIn:e.onPressIn,onPressOut:e.onPressOut,ref:t,style:T({width:r,backgroundColor:e.enabled&&e.enabled.state?d:u,alignItems:"center",justifyContent:"center",position:"relative",paddingHorizontal:10,paddingVertical:7.5,borderRadius:18,borderWidth:2,borderColor:d},e.style),children:(0,R.jsx)(D,{p1:!0,white:!0,u:!0,black:e.enabled&&e.enabled.state,style:{position:"absolute"},children:e.enabled&&e.enabled.state?e.enabled.text:e.children?e.children:""})})})),W=r(9502),B=r(4186),A=function(e){var t=e.title,r=e.imageSource,o=e.textContent;return(0,R.jsxs)(B.Card,{containerStyle:L.border,children:[(0,R.jsx)(B.Card.Title,{children:(0,R.jsx)(D,{h4:!0,u:!0,dusk:!0,children:t})}),(0,R.jsx)(B.Card.Divider,{color:f}),r&&(0,R.jsx)(B.Card.Image,{source:r}),(0,R.jsx)(D,{p1:!0,dusk:!0,style:{marginBottom:10,textAlign:"center"},children:o})]})},L=W.default.create({border:{backgroundColor:f,borderRadius:10,borderWidth:2,borderColor:c,alignItems:"center",opacity:.8,width:"90%",marginVertical:"10%"}}),U=function(e){e.navigation;var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){console.log("\n bottom of the page pos: "),t.current.measureInWindow((function(e,t,r,o){console.log(" info at : ",t)})),console.log(" \n scroll anim pos: "),console.log("size of total page: ",y.height)})),(0,R.jsx)(i.default,{style:{backgroundColor:b,width:"100%",overflow:"hidden",alignItems:"center",height:2e3},children:(0,R.jsxs)(i.default,{style:{alignItems:"center",width:"40%",flexDirection:"column"},children:[(0,R.jsxs)(i.default,{style:{flexDirection:"row",alignItems:"center",height:"20%",width:"60%",justifyContent:"space-evenly"},children:[(0,R.jsx)(s.default,{source:r(3002),resizeMethod:"scale",style:{height:100,width:100,opacity:.9,borderRadius:25}}),(0,R.jsx)(D,{style:{position:"relative",fontSize:50,fontWeight:"600",textAlignVertical:"center"},aegean:!0,children:"Socrio"})]}),(0,R.jsxs)(i.default,{style:{width:"50%",height:"20%",alignItems:"center",justifyContent:"center"},children:[(0,R.jsx)(M,{small:!0,style:{marginVertical:50,height:50,width:150,shadowColor:h,shadowOffset:{width:0,height:7},shadowOpacity:.1},onPress:function(){S.openURL("https://docs.google.com/forms/d/e/1FAIpQLSe4Szo17_R3TWXCnpAtdYN2cnGpE_t4gCjgpWluKWBbX1UeMw/viewform?usp=sf_link")},children:(0,R.jsx)(D,{powder:!0,h4:!0,style:{position:"relative"},children:"join"})}),(0,R.jsx)(M,{small:!0,style:{backgroundColor:f,marginVertical:50,height:50,width:300,shadowColor:h,shadowOffset:{width:0,height:7},shadowOpacity:.1},onPress:function(){S.openURL("https://testflight.apple.com/join/Cp3QDns3")},children:(0,R.jsx)(D,{dusk:!0,p1:!0,style:{position:"relative"},children:"Beta Test for iOS"})})]}),(0,R.jsx)(s.default,{source:r(7670),resizeMethod:"auto",style:{height:55,width:180,opacity:.8,borderRadius:10,borderWidth:1,marginTop:"30%",marginBottom:"15%",borderColor:b,shadowColor:h,shadowOffset:{width:0,height:10},shadowOpacity:.2}}),(0,R.jsxs)(i.default,{style:{alignItems:"center"},children:[(0,R.jsx)(A,{title:" \nDiscover",textContent:"\n Use your voice to express ideas ! \n \n"}),(0,R.jsx)(A,{title:" \n Start Now! ",textContent:"\n Become a voice in your community! \n \n"})]}),(0,R.jsx)(i.default,{ref:t,style:{alignSelf:"center",marginTop:y.height<y.width?"20%":"100%",borderColor:d,borderWidth:1,backgroundColor:f,borderRadius:10,height:50,width:160,justifyContent:"center"},children:(0,R.jsx)(D,{p2:!0,dusk:!0,style:{textAlign:"center"},children:"info@socrio.net"})})]})})},V=r(5581);function N(){var e=(0,V.useFonts)({"OverPass-Regular":r(200)});(0,o.default)(e,1)[0];return(0,R.jsx)(U,{})}},200:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/Overpass-Regular.6bc712f590eef4f9937f.ttf"},7670:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/app_store_apple.bdcacf6a71b1caecdcc3.jpg"},3002:(e,t,r)=>{"use strict";e.exports=r.p+"static/media/icon_socrio.02224af0e153c06bd904.png"},4654:()=>{}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,n,i]=e[d],a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,r.d(i,s),i}})(),r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[s,a,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var d=l(r)}for(t&&t(o);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[206],(()=>r(6099)));o=r.O(o)})();
//# sourceMappingURL=main.2c4ec276.js.map