"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{223:function(e,t,i){i.r(t);var c=i(439),s=i(791),n=i(243),r=i(689),a=i(87),o=i(257),l=i(184);t.default=function(){var e,t,i=(0,s.useState)([]),h=(0,c.Z)(i,2),u=h[0],d=h[1],m=(0,r.UO)().movieId,v=(0,r.TH)(),f=(0,s.useRef)(null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies/".concat(m));return(0,s.useEffect)((function(){var e={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(m,"/reviews"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto"}};n.Z.request(e).then((function(e){d(e.data.results),console.log(e.data.results)})).catch((function(e){console.error(e)}))}),[m]),(0,l.jsxs)("div",{children:[(0,l.jsx)(a.rU,{to:f.current,children:"Go back"}),(0,l.jsx)("h2",{children:"Movie Reviews"}),(0,l.jsx)("div",{className:o.Z.reviews,children:u.map((function(e){return(0,l.jsxs)("li",{className:o.Z.itemReviews,children:[(0,l.jsx)("h3",{children:e.author}),(0,l.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=223.8f7323e8.chunk.js.map