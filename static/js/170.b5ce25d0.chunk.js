"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{516:function(e,n,t){t.d(n,{Hx:function(){return v},Mc:function(){return d},wr:function(){return o},xc:function(){return x},yc:function(){return p}});var r=t(861),a=t(757),s=t.n(a),i=t(340),c="ca36f092d65c5702293abafc88e9f6b7";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=".concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("\n    https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1&api_key=").concat(c,"\n  "));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("\n    https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=").concat(c,"\n  "));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("\n    https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US&api_key=").concat(c,"\n  "));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("\n    https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&api_key=").concat(c,"\n  "));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},170:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,a,s,i=t(861),c=t(439),o=t(757),u=t.n(o),p=t(791),l=t(689),d=t(516),h=t(478),x=t(766),f=t(87),v=t(867),m=(0,v.ZP)(f.rU)(r||(r=(0,x.Z)(["\n  display: block;\n  font-size: 24px;\n  font-weight: 500;\n  width: 130px;\n  border-radius: 5px;\n  border: solid 1px #8854ad;\n  padding: 10px;\n  text-decoration: none;\n  color: #000000;\n  text-align: center;\n  margin: 20px 0px 20px 30px;\n\n  &:hover {\n    color: #8854ad;\n  }\n"]))),g=v.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  gap: 24px;\n  padding: 20px 0px 20px 30px;\n\n  .movie-title {\n    font-size: 40px;\n    padding-bottom: 14px;\n  }\n  .title-desc {\n    font-size: 22px;\n    padding-bottom: 8px;\n  }\n  .desc-list {\n    padding-left: 18px;\n    list-style: square;\n  }\n  .desc {\n    font-size: 18px;\n    padding-bottom: 14px;\n  }\n"]))),j=v.ZP.div(s||(s=(0,x.Z)(["\n  .title-info {\n    padding-left: 30px;\n  }\n"]))),w=t(184),b=(0,p.lazy)((function(){return t.e(736).then(t.bind(t,736))})),y=(0,p.lazy)((function(){return t.e(387).then(t.bind(t,387))})),k=function(){var e,n,t=(0,l.UO)().movieId,r=(0,p.useState)(null),a=(0,c.Z)(r,2),s=a[0],o=a[1],x=(0,p.useState)(null),f=(0,c.Z)(x,2),v=f[0],k=f[1],Z=(0,p.useState)(null),_=(0,c.Z)(Z,2),S=_[0],U=_[1],N=(0,l.TH)();console.log("location: ",N);var z=(0,p.useRef)(null!==(e=null===(n=N.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,d.Mc)(t);case 4:n=e.sent,r=n.data,o(r),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),o(null),U(e.t0.message);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,w.jsxs)("div",{children:[(0,w.jsx)(m,{to:z.current,children:"Go back"}),null!==S&&(0,w.jsx)("p",{children:S}),v&&(0,w.jsx)(h.a,{}),null!==s&&(0,w.jsxs)("div",{children:[(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/w500".concat(s.poster_path):"https://dummyimage.com/360x500",alt:s.title,width:"360",height:"500"}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("h2",{className:"movie-title",children:[s.title," (",s.release_date.split("-")[0],")"]}),(0,w.jsxs)("p",{className:"desc",children:["User Score: ",s.vote_average.toFixed(2)]}),(0,w.jsx)("h3",{className:"title-desc",children:"Overview"}),(0,w.jsx)("p",{className:"desc",children:s.overview}),(0,w.jsx)("h3",{className:"title-desc",children:"Genres"}),(0,w.jsx)("ul",{className:"desc-list",children:s.genres.map((function(e){var n=e.name,t=e.id;return(0,w.jsx)("li",{children:n},t)}))})]})]}),(0,w.jsxs)(j,{children:[(0,w.jsx)("h3",{className:"title-info",children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)(m,{to:"reviews",children:"Reviews"}),(0,w.jsx)(m,{to:"cast",children:"Cast"})]})]}),(0,w.jsx)(p.Suspense,{fallback:(0,w.jsx)(h.a,{}),children:(0,w.jsxs)(l.Z5,{children:[(0,w.jsx)(l.AW,{path:"reviews",element:(0,w.jsx)(y,{})}),(0,w.jsx)(l.AW,{path:"cast",element:(0,w.jsx)(b,{})})]})})]})]})}}}]);
//# sourceMappingURL=170.b5ce25d0.chunk.js.map