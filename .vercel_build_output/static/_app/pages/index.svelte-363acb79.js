import{S as b,i as v,s as E,e as c,c as u,I as d,b as l,g as h,d as r,k as I,P as S,m as L,a as p,H as k,E as _,J as q}from"../chunks/index-eeba9379.js";import{a as y}from"../chunks/authStore-cff437c4.js";import"../chunks/index-6ffe4708.js";function g(i){let s,a;return{c(){s=c("img"),this.h()},l(t){s=u(t,"IMG",{src:!0,alt:!0}),this.h()},h(){d(s.src,a=i[0].user.photoURL)||l(s,"src",a),l(s,"alt","user")},m(t,e){h(t,s,e)},p(t,e){e&1&&!d(s.src,a=t[0].user.photoURL)&&l(s,"src",a)},d(t){t&&r(s)}}}function H(i){let s,a,t,e=i[0].isLoggedIn&&g(i);return{c(){s=I(),a=c("section"),t=c("h2"),e&&e.c(),this.h()},l(o){S('[data-svelte="svelte-1anpopb"]',document.head).forEach(r),s=L(o),a=u(o,"SECTION",{});var f=p(a);t=u(f,"H2",{});var m=p(t);e&&e.l(m),m.forEach(r),f.forEach(r),this.h()},h(){document.title="Home"},m(o,n){h(o,s,n),h(o,a,n),k(a,t),e&&e.m(t,null)},p(o,[n]){o[0].isLoggedIn?e?e.p(o,n):(e=g(o),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:_,o:_,d(o){o&&r(s),o&&r(a),e&&e.d()}}}function R(i,s,a){let t;return q(i,y,e=>a(0,t=e)),[t]}class G extends b{constructor(s){super();v(this,s,R,H,E,{})}}export{G as default};