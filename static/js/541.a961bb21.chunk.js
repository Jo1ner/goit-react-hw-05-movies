"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{516:function(n,t,e){e.d(t,{Hx:function(){return g},Mc:function(){return d},wr:function(){return s},xc:function(){return h},yc:function(){return u}});var r=e(861),i=e(757),a=e.n(i),o=e(591),c="ca36f092d65c5702293abafc88e9f6b7";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=".concat(c));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("\n    https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(c,"\n  "));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("\n    https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US&api_key=").concat(c,"\n  "));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("\n    https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US&api_key=").concat(c,"\n  "));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("\n    https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&api_key=").concat(c,"\n  "));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},368:function(n,t,e){var r=e(184),i=e(398),a=i.StyledListItem,o=i.StyledMoviesList,c=e(87).Link;t.Z=function(n){var t=n.movies,e=n.location;return(0,r.jsx)(o,{children:t.map((function(n){return(0,r.jsx)(a,{children:(0,r.jsxs)(c,{state:{from:e},to:"/movies/".concat(n.id),className:"link",children:[(0,r.jsx)("img",{className:"img",src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://dummyimage.com/300x450",alt:n.title,width:"300",height:"450"}),(0,r.jsx)("h2",{className:"movies-title",children:n.title})]})},n.id)}))})}},398:function(n,t,e){e.r(t),e.d(t,{StyledListItem:function(){return p},StyledMoviesList:function(){return s},StyledTitle:function(){return u}});var r,i,a,o=e(766),c=e(867),s=c.ZP.ul(r||(r=(0,o.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  list-style: none;\n  .link {\n    text-decoration: none;\n  }\n  .img {\n    object-fit: cover;\n  }\n  .movies-title {\n    max-width: 100%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    text-align: center;\n    color: #000000;\n  }\n  .movies-title:hover {\n    color: #8854ad;\n  }\n"]))),p=c.ZP.li(i||(i=(0,o.Z)(["\n  width: 300px;\n  border: 1px solid #363333;\n  border-radius: 4px;\n  overflow: hidden;\n"]))),u=c.ZP.h1(a||(a=(0,o.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n"])))},541:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,i,a,o=e(861),c=e(439),s=e(757),p=e.n(s),u=e(791),l=e(766),d=e(87),f=e(867),h=f.zo.div(r||(r=(0,l.Z)(["\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  box-shadow: 0px 2px 4px -1px rgba(135, 83, 172, 0.2),\n    0px 4px 5px 0px rgba(135, 83, 172, 0.14),\n    0px 1px 10px 0px rgba(135, 83, 172, 0.12);\n\n  .form {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 1px solid #8854ad;\n  }\n\n  .button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://svgsilh.com/svg/305547.svg');\n    background-size: 70%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: transparent;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .button:hover {\n    opacity: 1;\n  }\n\n  .button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),x=f.zo.ul(i||(i=(0,l.Z)(["\n  list-style: square;\n  padding-left: 40px;\n\n  .list-item {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n\n  .list-item:hover {\n    color: #8854ad;\n  }\n"]))),g=((0,f.zo)(d.Link)(a||(a=(0,l.Z)(["\n  font-size: 32px;\n  text-decoration: none;\n  color: #000000;\n  .item-title {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n"]))),e(689)),m=e(516),b=e(478),v=e(368),y=e(184),w=function(){var n=(0,d.useSearchParams)(),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,u.useState)(null),a=(0,c.Z)(i,2),s=a[0],l=a[1],f=(0,u.useState)(!1),w=(0,c.Z)(f,2),k=w[0],Z=w[1],j=(0,u.useState)(null),S=(0,c.Z)(j,2),_=S[0],z=S[1],N=(0,g.TH)(),q=e.get("query");console.log("queryValue",q);return(0,u.useEffect)((function(){if(q){var n=function(){var n=(0,o.Z)(p().mark((function n(){var t,e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),z(null),n.next=5,(0,m.yc)(q);case 5:t=n.sent,0===(e=t.data).results.length&&alert("Nothing was found for your request"),l(e.results),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),l(null),z(n.t0.message);case 15:return n.prev=15,Z(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[q]),(0,y.jsxs)("div",{children:[(0,y.jsx)(h,{children:(0,y.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.searchKey.value;r({query:t}),n.currentTarget.reset()},className:"form",children:[(0,y.jsx)("input",{name:"searchKey",required:!0,className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,y.jsx)("button",{type:"submit",className:"button",children:(0,y.jsx)("span",{className:"button-label",children:"Search"})})]})}),(0,y.jsxs)(x,{children:[null!==_&&(0,y.jsx)("p",{children:_}),k&&(0,y.jsx)(b.a,{}),null!==s&&(0,y.jsx)(v.Z,{movies:s,location:N})]})]})}}}]);
//# sourceMappingURL=541.a961bb21.chunk.js.map