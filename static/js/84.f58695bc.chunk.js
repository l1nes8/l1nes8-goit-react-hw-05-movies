"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[84],{84:function(e,i,s){s.r(i);var t=s(439),a=s(791),c=s(243),n=s(87),r=s(689),l=s(257),o=s(184);i.default=function(){var e=(0,a.useState)(null),i=(0,t.Z)(e,2),s=i[0],h=i[1],d=(0,a.useState)(null),m=(0,t.Z)(d,2),u=m[0],j=m[1],p=(0,r.UO)().movieId;return(0,a.useEffect)((function(){var e={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(p),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDRmZTdlM2QwYTY5MzA2MzQ4ZTUxN2YyMWM3MGE3OSIsInN1YiI6IjY1Mjk3NjQzMGNiMzM1MTZmNWM4YjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whmYYKhT_uILl9fMGb9Rclq5CcbbJVNJVKSFUVsEDto"}};c.Z.request(e).then((function(e){h(e.data),console.log(e.data)})).catch((function(e){j(e.message),console.error(e)}))}),[p]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"More information about the movie"}),s&&(0,o.jsxs)("div",{className:l.Z.description,children:[(0,o.jsx)("img",{className:l.Z.imgMovies,src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(s.poster_path),alt:s.title}),(0,o.jsxs)("div",{className:l.Z.descriptionText,children:[(0,o.jsx)("h3",{children:s.title}),(0,o.jsx)("p",{className:l.Z.textMovies,children:s.overview}),(0,o.jsxs)("h5",{children:["Popularity: ",(0,o.jsx)("span",{children:s.popularity})]}),(0,o.jsx)("h4",{children:"Genres"}),(0,o.jsx)("ul",{children:s.genres.map((function(e){return(0,o.jsx)("li",{className:l.Z.itemMovieDetails,children:e.name},e.id)}))}),(0,o.jsx)("h3",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:l.Z.itemMovieDetails,children:(0,o.jsx)(n.rU,{to:"/movies/".concat(s.id,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{className:l.Z.itemMovieDetails,children:(0,o.jsx)(n.rU,{to:"/movies/".concat(s.id,"/reviews"),children:"Reviews"})}),(0,o.jsx)(r.j3,{})]})]})]}),u&&(0,o.jsx)("p",{className:l.Z.error,children:"\u0412\u0438\u043d\u0438\u043a\u0430\u043b\u0430 \u044f\u043a\u0430\u0441\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0437 \u0432\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c"})]})}}}]);
//# sourceMappingURL=84.f58695bc.chunk.js.map