"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{197:function(A,t,n){n.d(t,{Df:function(){return o},TP:function(){return g},V0:function(){return s},tx:function(){return k},zv:function(){return f}});var e=n(5861),r=n(4687),a=n.n(r),c=n(1243),u="https://api.themoviedb.org/3/",i="e8d94f3e976148bda0a5c640d4df112b";function o(){return p.apply(this,arguments)}function p(){return p=(0,e.Z)(a().mark((function A(){var t,n,e=arguments;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:1,A.next=3,c.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i,"&page=").concat(t,"&media_type=movie"));case 3:return n=A.sent,A.abrupt("return",n.data);case 5:case"end":return A.stop()}}),A)}))),p.apply(this,arguments)}function s(A,t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function A(t,n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(u,"search/movie?api_key=").concat(i,"&page=").concat(n,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(A){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function A(t){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function f(A){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(a().mark((function A(t){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function k(A){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function A(t){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},1247:function(A,t,n){n.r(t);var e=n(5861),r=n(9439),a=n(4687),c=n.n(a),u=n(7689),i=n(2791),o=n(197),p=n(953),s=n(184);t.default=function(){var A=(0,i.useState)([]),t=(0,r.Z)(A,2),n=t[0],a=t[1],d=(0,u.UO)().movieId;return(0,i.useEffect)((function(){function A(){return(A=(0,e.Z)(c().mark((function A(){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,(0,o.zv)(d);case 2:t=A.sent,a(t.cast);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[d]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:n.map((function(A){return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:A.profile_path?"https://image.tmdb.org/t/p/w200/".concat(A.profile_path):p,alt:A.name}),(0,s.jsx)("p",{children:A.name}),(0,s.jsxs)("p",{children:["Character: ",A.character," "]})]},A.cast_id)}))})})}},953:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=247.6ef3c697.chunk.js.map