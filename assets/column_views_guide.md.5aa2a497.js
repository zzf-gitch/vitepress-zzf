import{N as v}from"./chunks/vue-easy-lightbox.esm.min.967caa31.js";import{d as f,f as i,e as k,o as a,c as l,x as s,F as u,K as w,D as p,b as x,p as b,_ as z}from"./chunks/framework.b0b939e6.js";import"./chunks/home.vue_vue_type_style_index_0_scoped_ae78ff40_lang.4ed993c7.js";const j={class:"home-wrapper"},B=["src","alt","onClick"],I=f({__name:"home",setup(d){const t=i(!1),n=i(0),_=i([{src:"/主页1.jpg",title:"王者荣耀登录页"},{src:"/主页2.jpg",title:"王者荣耀英雄页"},{src:"/主页3.jpg",title:"王者荣耀后台英雄详情页"}]),h=e=>{n.value=e,t.value=!0},g=()=>{t.value=!1},r=k(()=>_.value.map(e=>({...e,src:b(e.src)})));return(e,o)=>(a(),l(u,null,[o[0]||(o[0]=s("h1",{class:"img"},[s("span",{class:"clip"},"王者荣耀后台管理系统截图")],-1)),s("div",j,[(a(!0),l(u,null,w(r.value,(c,m)=>(a(),l("div",{class:"home-item",key:m},[s("img",{src:c.src,alt:c.title,onClick:C=>h(m)},null,8,B)]))),128))]),p(x(v),{visible:t.value,imgs:r.value,index:n.value,onHide:g},null,8,["visible","imgs","index"])],64))}}),N=z(I,[["__scopeId","data-v-ae78ff40"]]),L=JSON.parse('{"title":"博客主页","titleTemplate":"Welcome","description":"","frontmatter":{"layout":"home","home":true,"title":"博客主页","titleTemplate":"Welcome","editLink":true,"lastUpdated":true,"hero":{"name":"世界上最亮的光芒，一个是太阳，一个是你努力时的模样。","tagline":"王者荣耀后台管理系统仅限学习，不供商用","image":{"src":"/avatar.png","alt":"avatar"},"actions":[{"theme":"brand","text":"王者荣耀后台管理系统","link":"https://zzf-gitch.github.io/wzry/"},{"theme":"alt","text":"前端卡片特效","link":"https://zzf-gitch.github.io/Front-end-effects/"},{"theme":"alt","text":"鹏语言","link":"https://www.blik.wang/"}]}},"headers":[],"relativePath":"column/views/guide.md"}'),y={name:"column/views/guide.md"},O=Object.assign(y,{setup(d){return(t,n)=>(a(),l("div",null,[p(N)]))}});export{L as __pageData,O as default};
