import { defineConfig } from 'vitepress';
import { sidebar, nav } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
});
