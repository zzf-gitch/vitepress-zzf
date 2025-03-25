<template>
  <h1 class="img"><span class="clip">王者荣耀后台管理系统截图</span></h1>
  <div class="home-wrapper">
    <div class="home-item" v-for="item in Images">
      <img :src="item.url" style="height:200px" @click="details(item)"/>
    </div>
  </div>

  <div class="Rimg" v-if="RgShow">
    <div class="r-img">
      <img :src="FIMG" alt="">
    </div>
    <button @click="release" type="button" class="CLOSE">关闭</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zhuye1 from '/主页1.jpg'
import zhuye2 from '/主页2.jpg'
import zhuye3 from '/主页3.jpg'

const Images = ref([
  {
    url: zhuye1
  },
  {
    url: zhuye2
  },
  {
    url: zhuye3
  }
])

const FIMG = ref('')
const RgShow = ref(false)
const details = (item) => {
  FIMG.value = item.url
  RgShow.value = true
}
const release = () => {
  RgShow.value = false
}
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
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
.Rimg{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.r-img{
  width: 90%;
  height: 80%;
}

.r-img img{
  width: 100%;
  height: 100%;
}

.CLOSE{
  position: fixed;
  right: 30px;
  top: 30px;
  background: #f56c6c;
  color: white;
  border: none;
  padding: 4px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

.CLOSE:hover {
  background: #f89898;
}
</style>
