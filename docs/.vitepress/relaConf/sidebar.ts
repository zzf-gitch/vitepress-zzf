import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/column/Algorithm/': [
    {
      text: 'vue转electron桌面端应用',
      items: [
        {
          text: '开发中',
          link: '/column/Algorithm/001_Stack'
        },
        {
          text: '开发中',
          link: '/column/Algorithm/002_Queue'
        }
      ]
    },
    {
      text: '开发中2',
      items: [
        {
          text: '开发中',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '开发中',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ]
};
