(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{327:function(t,e,n){},373:function(t,e){t.exports=function(t,e,i){var l={container:global.document.body,offset:0,debounce:15,failsafe:150};void 0!==e&&"function"!=typeof e||(i=e,e={});var u=l.container=e.container||l.container,c=l.offset=e.offset||l.offset,s=l.debounce=e.debounce||l.debounce,f=l.failsafe=e.failsafe||l.failsafe;!0===f?f=150:!1===f&&(f=0);f>0&&f<s&&(f=s+50);for(var d=0;d<n.length;d++)if(n[d].container===u&&n[d]._debounce===s&&n[d]._failsafe===f)return n[d].isInViewport(t,c,i);return n[n.push(function(t,e,n){var i=function(){var t=[];function e(e){for(var n=t.length-1;n>=0;n--)if(t[n][0]===e)return n;return-1}function n(t){return-1!==e(t)}return{add:function(e,o,r){n(e)||t.push([e,o,r])},remove:function(n){var o=e(n);-1!==o&&t.splice(o,1)},isWatched:n,checkAll:function(e){return function(){for(var n=t.length-1;n>=0;n--)e.apply(this,t[n])}}}}(),l=t===global.document.body?global:t,u=(c=i.checkAll((function(t,e,n){p(t,e)&&(i.remove(t),n(t))})),s=e,function(){var t=this,e=arguments,n=f&&!d;function o(){d=null,f||c.apply(t,e)}clearTimeout(d),d=setTimeout(o,s),n&&c.apply(t,e)});var c,s,f,d;r(l,"scroll",u),l===global&&r(global,"resize",u);o&&function(t,e,n){var o=new MutationObserver((function(t){!0===t.some(i)&&setTimeout(n,0)})),r=Array.prototype.filter,a=Array.prototype.concat;function i(e){var n=a.call([],Array.prototype.slice.call(e.addedNodes),e.target);return r.call(n,t.isWatched).length>0}o.observe(e,{childList:!0,subtree:!0,attributes:!0})}(i,t,u);n>0&&setInterval(u,n);function p(e,n){if(!e)return!1;if(!a(global.document.documentElement)||!a(global.document.documentElement))return!1;if(!e.offsetWidth||!e.offsetHeight)return!1;var o=e.getBoundingClientRect(),r={};if(t===global.document.body)r={top:-n,left:-n,right:global.document.documentElement.clientWidth+n,bottom:global.document.documentElement.clientHeight+n};else{var i=t.getBoundingClientRect();r={top:i.top-n,left:i.left-n,right:i.right+n,bottom:i.bottom+n}}return o.right>=r.left&&o.left<=r.right&&o.bottom>=r.top&&o.top<=r.bottom}return{container:t,isInViewport:function(t,e,n){if(!n)return p(t,e);var o=function(t,e,n){return{watch:function(){i.add(t,e,n)},dispose:function(){i.remove(t)}}}(t,e,n);return o.watch(),o},_debounce:e,_failsafe:n}}(u,s,f))-1].isInViewport(t,c,i)};var n=[],o="function"==typeof global.MutationObserver;function r(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}var a=function(){return!global.document||(global.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:global.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1})}},374:function(t,e,n){"use strict";var o=n(327);n.n(o).a},417:function(t,e,n){"use strict";n.r(e);n(10),n(99),n(100),n(373);var o={name:"SGallerySlider",components:{SBgImage:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,552))}},props:{items:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{activeSlide:0}},methods:{updateCarousel:function(t){this.activeSlide=t}}},r=(n(374),n(44)),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery"},[n("carousel",{ref:"content",staticClass:"gallery-carousel carousel inner-controls",attrs:{perPage:1,paginationEnabled:!1,loop:!0,navigateTo:t.activeSlide,speed:600,navigationEnabled:!0,navigationPrevLabel:"",navigationNextLabel:""},on:{"page-change":t.updateCarousel}},t._l(t.items,(function(t,e){return n("slide",{key:e},[n("img",{attrs:{src:t.url,alt:t.title}})])})),1),t._v(" "),n("div",{staticClass:"gallery-nav"},[n("carousel",{ref:"content",staticClass:"gallery-nav-inner",attrs:{perPage:1,paginationEnabled:!1,navigateTo:t.activeSlide,speed:600,touchDrag:!1,mouseDrag:!1,loop:!0},on:{"page-change":t.updateCarousel}},t._l(t.items,(function(e,o){return n("slide",{key:o},[n("img",{attrs:{src:e.url,alt:e.title},on:{click:function(e){return t.updateCarousel(o)}}})])})),1)],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);