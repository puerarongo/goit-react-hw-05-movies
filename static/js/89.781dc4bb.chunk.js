"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[89],{8733:function(e,n,t){t.d(n,{LZ:function(){return p},Vp:function(){return _},XO:function(){return d},l1:function(){return v},s7:function(){return f}});var c=t(5861),r=t(7757),a=t.n(r),u=t(4569),i=t.n(u),o="https://api.themoviedb.org/3/",s="067f291d21ed1c6d30bd9ade17d843cc",l=function(){var e=(0,c.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){return l("".concat(o,"trending/movie/day?api_key=").concat(s))},_=function(e){return l("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"\n    &page=1&include_adult=false"))},d=function(e){return l("".concat(o,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"))},v=function(e){return l("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"))},p=function(e){return l("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"))}},5089:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var c=t(885),r=t(2791),a=t(8733),u="Reviews_title__QuR56",i="Reviews_reviws__list__1149F",o="Reviews_review__LBsD3",s="Reviews_author__oBq9f",l="Reviews_text__pgmvH",f=t(184),_=function(e){var n=e.id,t=(0,r.useState)([]),_=(0,c.Z)(t,2),d=_[0],v=_[1];return(0,r.useEffect)((function(){n&&(0,a.LZ)(n).then((function(e){return v(e.data.results)})).catch((function(e){return console.log(e)}))}),[n]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:u,children:"Reviews"}),(0,f.jsx)("ul",{className:i,children:d.map((function(e){var n=e.id,t=e.author,c=e.content;return(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("h2",{className:s,children:t}),(0,f.jsx)("p",{className:l,children:c})]},n)}))})]})}}}]);
//# sourceMappingURL=89.781dc4bb.chunk.js.map