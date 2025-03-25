---
# 提供三种布局，doc、page和home https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# https://vitepress.dev/reference/default-theme-home-page
title: 阿飞的博客
titleTemplate: Welcome
editLink: true
lastUpdated: true

hero:
    name: 阿飞同学
    text: If you like to be free, you have to taste loneliness.
    tagline: 前端工程师/后端开发/运维工程师
    image:
        src: /avatar.png
        alt: avatar
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 前端开发
      link: /column/Algorithm/
features:
  - icon: 🤹‍♀️
    title: Web前端
    details: 前端程序员，国内某互联网搬砖。
    link: /column/views/guide
  - icon: 👩‍🎨‍
    title: 喜欢旅游
    details: 想要走遍祖国的大江南北。
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---


<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<!-- <home /> -->