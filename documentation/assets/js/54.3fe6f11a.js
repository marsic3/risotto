(window.webpackJsonp=window.webpackJsonp||[]).push([[54,53],{329:function(t,s,e){},383:function(t,s,e){"use strict";var n=e(329);e.n(n).a},384:function(t,s){},530:function(t,s,e){"use strict";e.r(s);e(10);var n=e(314),i=e(312),a={name:"SMenuListItem",components:{SButton:function(){return e.e(3).then(e.bind(null,419))}},props:{item:{type:Object}},methods:Object(n.a)({},Object(i.a)("cart",["showModal"]))},o=(e(383),e(44)),c=e(384),m=e.n(c),r=Object(o.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu-item menu-list-item"},[e("b-row",{staticClass:"align-items-center"},[e("b-col",{staticClass:"mb-2 mb-sm-0",attrs:{sm:"6"}},[e("h6",{staticClass:"mb-0"},[t._v(t._s(t.item.name))]),t._v(" "),e("span",{staticClass:"text-muted text-sm"},[t._v(t._s(t.item.description))])]),t._v(" "),e("b-col",{staticClass:"text-sm-right",attrs:{sm:"6"}},[e("span",{staticClass:"text-md mr-4"},[t.item.options&&t.item.options.length>0||t.item.additions&&t.item.additions.length>0?e("span",{staticClass:"text-muted"},[t._v("from")]):t._e(),t._v("\n        "+t._s(t.getCurrency(t.item.price))+"\n      ")]),t._v(" "),e("s-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:function(s){return t.showModal({item:t.item,mode:"ADD"})}}},[t._v("Add to cart")])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof m.a&&m()(r);s.default=r.exports}}]);