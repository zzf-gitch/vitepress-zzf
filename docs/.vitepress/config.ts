import { defineConfig } from 'vitepress';
import { sidebar, nav } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 网站部署的基础路径 部署在cloudflare上的时候是base:'/',如果部署在github上，就是base:'/vitepress-zzf/'
  base: '/',
  title: 'Flyingzzf',
  description: 'A VitePress Site',
  vite: {
    optimizeDeps: {
      include: [
        'video.js/core',
        'video.js/tech/html5',
        'video.js/dist/video-js.css',
        'vue-easy-lightbox'  // 添加这一行
      ]
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'avatar.ico'
      }
    ]
  ],

  // 配置markdown写作风格
  // markdown: {
  //   toc: {
  //     level: [1, 2, 3, 4]
  //   },
  //   headers: {
  //     level: [1, 2, 3, 4]
  //   },
  //   // https://github.com/valeriangalliat/markdown-it-anchor#usage
  //   anchor: {
  //     // permalink: anchor.permalink.headerLink()
  //   },
  //   lineNumbers: true // 让代码块中实现行号

  //   // config: (md) => {
  //   //   md.use(demoBlockPlugin, {
  //   //     cssPreprocessor: 'less'
  //   //   });
  //   // }
  // },

  themeConfig: {
    logo: '/avatar.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    // search: {
    //   provider: 'local'
    // },

    outline: {
      level: [2, 6],
      label: '目录'
    },

    i18nRouting: true,

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzf-gitch/vitepress-zzf/tree/master' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M530.1 484.4C518.6 485.8 485.2 431.7 485.2 431.7C485.2 463 469.1 503.9 434.2 533.5C451 538.7 489 552.7 480 567.9C472.7 580.2 354.5 575.8 320.4 571.9C286.3 575.7 168.1 580.2 160.8 567.9C151.8 552.7 189.7 538.7 206.6 533.5C171.7 504 155.5 463.1 155.5 431.7C155.5 431.7 122.2 485.8 110.6 484.4C105.2 483.8 98.2 454.8 119.9 384.7C130.2 351.7 141.9 324.2 160 278.9C156.9 162 205.2 63.9 320.3 63.9C434 63.9 483.5 160 480.6 278.9C498.7 324.1 510.5 351.8 520.7 384.7C542.5 454.8 535.4 483.8 530 484.4z"/></svg>'
        }, link: 'tencent://message/?uin=2452884452&Site=&Menu=yes'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>'
        }, link: 'mailto:2452884452@qq.com'
      },
      {
        icon: {
          svg: '<svg t="1755769593473" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1626" width="200" height="200"><path d="M669.03 317.396c10.18 0 20.235 0.748 30.237 1.865C672.1 192.728 536.831 98.731 382.415 98.731 209.797 98.73 68.38 216.39 68.38 365.797c0 86.242 47.044 157.061 125.674 211.988l-31.406 94.468L272.403 617.2c39.303 7.781 70.81 15.765 110.01 15.765 9.85 0 19.626-0.482 29.324-1.243-6.144-20.996-9.698-42.983-9.698-65.793 0.002-137.196 117.806-248.533 266.99-248.533z m-168.862-85.14c23.639 0 39.302 15.55 39.302 39.186 0 23.536-15.664 39.3-39.302 39.3-23.536 0-47.147-15.765-47.147-39.3 0-23.635 23.612-39.185 47.147-39.185z m-219.765 78.487c-23.538 0-47.3-15.765-47.3-39.3 0-23.635 23.764-39.185 47.3-39.185 23.534 0 39.2 15.55 39.2 39.185 0 23.535-15.666 39.3-39.2 39.3z" p-id="1627"></path><path d="M955.618 562.147c0-125.543-125.622-227.882-266.734-227.882-149.413 0-267.09 102.339-267.09 227.882 0 125.77 117.677 227.88 267.09 227.88 31.279 0 62.838-7.898 94.243-15.766l86.12 47.17-23.612-78.473c63.04-47.286 109.983-109.993 109.983-180.81z m-353.311-39.289c-15.639 0-31.431-15.549-31.431-31.416 0-15.652 15.792-31.405 31.43-31.405 23.74 0 39.304 15.754 39.304 31.405 0 15.867-15.563 31.416-39.303 31.416z m172.72 0c-15.538 0-31.201-15.549-31.201-31.416 0-15.652 15.664-31.405 31.202-31.405 23.536 0 39.3 15.754 39.3 31.405 0.001 15.867-15.764 31.416-39.3 31.416z" p-id="1628"></path></svg>'
        }, link: 'weixin://contacts/profile/zzf-15903509849'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>'
        }, link: 'tel:15903509849'
      }
    ]
  }
});
