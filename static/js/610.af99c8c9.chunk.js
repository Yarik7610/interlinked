"use strict";(self.webpackChunkinterlinked=self.webpackChunkinterlinked||[]).push([[610],{8610:function(e,n,s){s.r(n),s.d(n,{default:function(){return F}});var r=s(1413),t=s(2791),u=s(3531),i="Users_users__jKg7G",o="Users_userHl__2PAhI",a="Users_userHlText__4qD8k",l="Paginator_pageNums__B+Cuy",c="Paginator_pageNumSelected__ieLd6",g=s(184),f=function(e){for(var n,s=Math.ceil(e.totalUsersCount/e.pageSize),r=[],t=1;t<=s;t++)r.push(t);var u=e.currentPage;return n=u-5<0?r.slice(0,7):r.slice(u-4,u+3),(0,g.jsx)("div",{className:l,children:n.map((function(n){return(0,g.jsx)("span",{onClick:function(){e.onPageChanged(n)},className:n===e.currentPage?c:"",children:n},n)}))})},d=s(7396),h="User_user__XS6mH",m="User_userImgBlock__HJ76M",P="User_userStatus__6EItb",_="User_followingBtn__lqwKT",j=s(4373),x=s(1087),p=function(e){var n=e.u,s=e.follow,r=e.unfollow,t=e.followingInProgress;return(0,g.jsxs)("li",{className:h,children:[(0,g.jsxs)("div",{className:m,children:[n.followed?(0,g.jsx)("button",{className:_,disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:(0,g.jsx)(j.abH,{size:"2em"})}):(0,g.jsx)("button",{className:_,disabled:t.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:(0,g.jsx)(j.zUF,{size:"2em"})}),(0,g.jsx)(x.OL,{to:"/profile/"+n.id,children:(0,g.jsx)("img",{src:n.photos.small?n.photos.small:d})}),(0,g.jsx)("div",{children:n.name})]}),(0,g.jsx)("div",{className:P,children:n.status?n.status:"no status yet"})]})},w=function(e){return(0,g.jsxs)("div",{className:i,children:[(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)("div",{className:a,children:"Users"}),(0,g.jsx)(f,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged})]}),e.users.map((function(n){return(0,g.jsx)(p,{u:n,follow:e.follow,unfollow:e.unfollow,followingInProgress:e.followingInProgress},n.id)}))]})},U=s(5773),C=(0,s(6916).P1)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),v=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.followingInProgress},b=s(5197),I=s(5927),F=(0,s(7781).qC)((0,u.$j)((function(e){return{users:C(e),pageSize:v(e),totalUsersCount:N(e),currentPage:k(e),isFetching:z(e),followingInProgress:S(e),term:e.usersPage.term}}),{follow:U.ZN,unfollow:U.fv,getUsers:U.Rf}),I.D)((function(e){(0,t.useEffect)((function(){e.getUsers(e.currentPage,e.pageSize,e.term)}),[]);return e.isFetching?(0,g.jsx)(b.Z,{}):(0,g.jsx)(w,(0,r.Z)((0,r.Z)({},e),{},{onPageChanged:function(n){e.getUsers(n,e.pageSize,e.term)}}))}))},5927:function(e,n,s){s.d(n,{D:function(){return a}});var r=s(1413),t=(s(2791),s(7689)),u=s(3531),i=s(184),o=function(e){return{isAuth:e.auth.isAuth}},a=function(e){return(0,u.$j)(o)((function(n){return n.isAuth?(0,i.jsx)(e,(0,r.Z)({},n)):(0,i.jsx)(t.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=610.af99c8c9.chunk.js.map