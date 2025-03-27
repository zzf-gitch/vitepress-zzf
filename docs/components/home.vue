<template>
  <h1 class="img"><span class="clip">王者荣耀后台管理系统截图</span></h1>
  <div class="home-wrapper">
    <div class="home-item" v-for="(item, index) in processedImages" :key="index">
      <img :src="item.src" :alt="item.title" @click="showImg(index)"/>
    </div>
  </div>

  <vue-easy-lightbox
      :visible="visible"
      :imgs="processedImages"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
</template>

<script lang="ts" setup>
import { ref , computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { withBase } from 'vitepress'

const visible = ref(false)
const index = ref(0)
const Images = ref([
  {
    src: '/主页1.jpg',
    title: '王者荣耀登录页'
  },
  {
    src: '/主页2.jpg',
    title: '王者荣耀英雄页'
  },
  {
    src: '/主页3.jpg',
    title: '王者荣耀后台英雄详情页'
  }
])

const showImg = (i) => {
  index.value = i
  visible.value = true
}

const handleHide = () => {
  visible.value = false
}

// 处理图片路径 解决打包后404问题
const processedImages = computed(() => {
  return Images.value.map(img => ({
      ...img,
      src: withBase(img.src)
  }))
})
</script>

<style scoped>
.img{
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
  display:flex;
  justify-content: center;
}

.clip{
  background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.home-wrapper {
  display: flex;
  justify-content: center;
}
.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  line-height: 13px;
  font-size: 13px;
  transition: transform 0.3s;
}

.home-item:hover {
  transform: scale(1.2);
}

.home-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
