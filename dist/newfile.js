(()=>{"use strict";var e,r={44:(e,r,n)=>{n(543),console.log("test rename file after build into main.js, and vendor not rename file name because it cache third party in node modules"),document.body.appendChild(function(){const e=document.createElement("div");return e.innerHTML="Hello World!",e}())},553:(e,r,n)=>{n(543),document.body.appendChild(function(){const e=document.createElement("p");return e.innerHTML="This content called from my-test.js!",e}())}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=r,e=[],t.O=(r,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],l=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(t.O).every((e=>t.O[e](n[d])))?n.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(r=c)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={141:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,i,[a,l,d]=n,c=0;if(a.some((r=>0!==e[r]))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(d)var u=d(t)}for(r&&r(n);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},n=self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),t.O(void 0,[96],(()=>t(44)));var o=t.O(void 0,[96],(()=>t(553)));o=t.O(o)})();