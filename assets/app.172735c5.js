import{I as s,a1 as p,a2 as i,a3 as u,a4 as c,a5 as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,$ as g,d as P,u as v,h as y,l as C,ab as w,ac as b,ad as R,ae as _}from"./chunks/framework.1c9e4921.js";import{t as E}from"./chunks/theme.9e7633c0.js";const D={...E,enhanceApp({app:e}){e.component("MyGlobalComponent")}};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(D),T=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),w(),b(),R(),n.setup&&n.setup(),()=>_(n.Layout)}});async function O(){const e=$(),a=S();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function S(){return m(T)}function $(){let e=s,a;return h(t=>{let o=A(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{O as createApp};
