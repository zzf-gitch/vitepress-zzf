---
# 提供三种布局，doc、page和home https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# https://vitepress.dev/reference/default-theme-home-page
title: 博客主页
titleTemplate: Welcome
editLink: true
lastUpdated: true

hero:
    name: 世界上最亮的光芒，一个是太阳，一个是你努力时的模样。
    tagline: 王者荣耀后台管理系统仅限学习，不供商用
    image:
        src: /avatar.png
        alt: avatar
    actions:
    - theme: brand
      text: 王者荣耀后台管理系统
      link: https://zzf-gitch.github.io/wzry/
    - theme: alt
      text: 前端卡片特效
      link: https://zzf-gitch.github.io/Front-end-effects/
    - theme: alt
      text: 鹏语言
      link: https://www.blik.wang/
---

<!-- 自定义组件 -->
<script setup>
import home from '../../components/home.vue';
</script>

<home />