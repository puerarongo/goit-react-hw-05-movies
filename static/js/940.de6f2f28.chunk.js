"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[940,943],{2781:function(e,t){t.Z="https://upload.wikimedia.org/wikipedia/commons/4/44/Question_mark_%28black_on_white%29.png"},8733:function(e,t,n){n.d(t,{LZ:function(){return p},Vp:function(){return f},XO:function(){return _},l1:function(){return m},s7:function(){return d}});var r=n(5861),o=n(7757),i=n.n(o),a=n(4569),c=n.n(a),s="https://api.themoviedb.org/3/",u="067f291d21ed1c6d30bd9ade17d843cc",l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){return l("".concat(s,"trending/movie/day?api_key=").concat(u))},f=function(e){return l("".concat(s,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"\n    &page=1&include_adult=false"))},_=function(e){return l("".concat(s,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"))},m=function(e){return l("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"))},p=function(e){return l("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"))}},4940:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(885),o=n(2791),i=n(6871),a="MovieDetailsPage_container__mXYXW",c="MovieDetailsPage_container__description__GWknl",s="MovieDetailsPage_image__W32Mr",u="MovieDetailsPage_container__links__milLD",l="Button_container__button__ZOivn",d="Button_button__c5p4z",f=n(184),_=function(e){var t=e.handler;return(0,f.jsx)("div",{className:l,children:(0,f.jsx)("button",{className:d,type:"button",onClick:t,children:"Go back"})})},m="Description_description__cIOTH",p="Description_title__db5ZB",h="Description_subtitle__Hqvwh",v="Description_text__-FPmb",y=function(e){var t=e.title,n=e.score,r=e.overview,o=e.genres;return(0,f.jsxs)("div",{className:m,children:[(0,f.jsx)("h1",{className:p,children:t}),(0,f.jsxs)("p",{className:v,children:["User score: ",n]}),(0,f.jsx)("h2",{className:h,children:"Overview"}),(0,f.jsx)("p",{className:v,children:r}),(0,f.jsx)("h2",{className:h,children:"Genres"}),(0,f.jsx)("p",{className:v,children:o&&o.map((function(e){return e.name+" "}))})]})},g=n(3504),b="AdditionalLinks_title__raaf3",j=n(6664),w=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:b,children:"Additional information:"}),(0,f.jsxs)("ul",{className:j.Z.trends,children:[(0,f.jsx)("li",{className:j.Z.movie__item,children:(0,f.jsx)(g.OL,{className:j.Z.movie__link,to:"cast",children:"Cast"})}),(0,f.jsx)("li",{className:j.Z.movie__item,children:(0,f.jsx)(g.OL,{className:j.Z.movie__link,to:"reviews",children:"Review"})})]})]})},x=n(5943),k=n(2781);function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function D(e,t){if(t&&("object"===Z(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return D(this,n)}}var E=n(4164),M={overlay:"Modal_overlay__baCSF",modal:"Modal_modal__EqaZW",img:"Modal_img__US4DJ"},H=document.querySelector("#modal__root"),T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(i,e);var t,n,r,o=C(i);function i(){var e;N(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))).handleKeyboard=function(t){"Escape"===t.code&&e.props.switch()},e.handleClick=function(t){t.currentTarget===t.target&&e.props.switch()},e}return t=i,(n=[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyboard)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyboard)}},{key:"render",value:function(){var e=this.props.image;return(0,E.createPortal)((0,f.jsx)("div",{className:M.overlay,onClick:this.handleClick,children:(0,f.jsx)("div",{className:M.modal,children:(0,f.jsx)("img",{className:M.image,src:"https://image.tmdb.org/t/p/w500".concat(e),alt:"poster"})})}),H)}}])&&O(t.prototype,n),r&&O(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.Component),U=T,L=n(8733),R=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],l=t[1],d=(0,o.useState)(""),m=(0,r.Z)(d,2),p=m[0],h=m[1],v=(0,o.useState)(!1),g=(0,r.Z)(v,2),b=g[0],j=g[1],N=(0,o.useState)(""),O=(0,r.Z)(N,2),P=O[0],S=O[1],Z=(0,i.s0)(),D=(0,i.UO)().movieId;(0,o.useEffect)((function(){(0,L.XO)(D).then((function(e){if(404===e.status)throw new Error("This movie is not in the database");l(e.data)})).catch((function(e){return h(e)}))}),[D]);var C=function(){console.log("!"),j(!b)};return(0,f.jsxs)(f.Fragment,{children:[b&&(0,f.jsx)(U,{image:P,switch:C}),p?(0,f.jsx)(x.default,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)(_,{handler:function(){Z(-1)}}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):k.Z,alt:n.title,className:s,onClick:function(){return e=n.poster_path,S(e),void C();var e}}),(0,f.jsx)(y,{title:n.title,score:n.vote_average,overview:n.overview,genres:n.genres})]}),(0,f.jsx)(w,{})]}),(0,f.jsx)("div",{className:u,children:(0,f.jsx)(i.j3,{})})]})]})}},5943:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});n(2791);var r="NotFound_container__n0Bo4",o="NotFound_text__0o+xS",i=n(184),a=function(){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)("h1",{className:o,children:"Error 404. Page not found :("})})}},6664:function(e,t){t.Z={container:"HomePage_container__nIT7o",header:"HomePage_header__7-joW",trends:"HomePage_trends__zT+2h",movie__item:"HomePage_movie__item__y9780",movie__link:"HomePage_movie__link__iHNNA"}}}]);
//# sourceMappingURL=940.de6f2f28.chunk.js.map