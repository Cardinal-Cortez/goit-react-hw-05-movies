"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[334],{334:function(e,i,n){n.r(i);var r=n(439),t=n(791),c=n(689),s=n(87),o=n(184);i.default=function(){var e,i,n=(0,c.UO)().movieId,l=(0,t.useState)(null),a=(0,r.Z)(l,2),h=a[0],d=a[1],j=(0,c.TH)(),u=(0,t.useRef)(null!==(e=null===(i=j.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/");return(0,t.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("619e0771d50f6f0cacad940951db2b61","&language=en-US");fetch(e,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTllMDc3MWQ1MGY2ZjBjYWNhZDk0MDk1MWRiMmI2MSIsInN1YiI6IjY0N2MzODg3ZTMyM2YzMDBjNDJhNWE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuF0iMImgdLcfO_LlB_t43NuUW1bjDcFVJ1WoXKXVQ4"}}).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){d(e)})).catch((function(e){console.error(e)}))}),[n]),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.rU,{to:u.current,children:" Go back "}),h&&(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(h.poster_path),alt:h.title}),(0,o.jsxs)("h2",{children:[h.title," (",h.release_date.slice(0,4),")"]}),(0,o.jsxs)("p",{children:["User Score: ",Math.round(100*h.vote_average)/10,"%"]}),(0,o.jsx)("h3",{children:"Overview:"}),(0,o.jsx)("p",{children:h.overview}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("ul",{children:h.genres.map((function(e){return(0,o.jsx)("li",{children:e.name},e.id)}))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"cast",state:{from:u},children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"reviews",state:{from:u},children:"Reviews"})})]})]}),(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=334.248e00a1.chunk.js.map