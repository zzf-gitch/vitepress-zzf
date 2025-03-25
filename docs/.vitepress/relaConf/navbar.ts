import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '个人专栏',
    items: [
      {
        text: '后端开发',
        link: '/column/Travel/'
      },
      {
        text: '运维笔记',
        link: '/column/Travel/'
      },
      {
        text: '个人成长',
        link: '/column/Growing/'
      }
    ]
  },
  {
    text: '前端开发',
    items: [
      {
        text: '前端笔记及总结',
        link: '/column/Algorithm/'
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/zzf-gitch' },
    ]
  }
];
