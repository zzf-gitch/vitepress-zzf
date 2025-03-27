<template>
    <div class="image-gallery">
        <div class="gallery-grid">
            <div v-for="(image, index) in processedImages" :key="index" class="gallery-item" @click="showImg(index)">
                <img :src="image.src" :alt="image.title">
            </div>
        </div>
        <vue-easy-lightbox :visible="visible" :imgs="processedImages" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </div>
</template>

<script setup>
import { ref , computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { withBase } from 'vitepress'

const visible = ref(false)
const index = ref(0)
const images = ref([
    {
        src: '/images/ly1.jpg',
        title: '青海'
    },
    {
        src: '/images/ly2.jpg',
        title: '卡若拉冰川'
    },
    {
        src: '/images/ly3.jpg',
        title: '布达拉宫'
    },
    {
        src: '/images/ly4.jpg',
        title: '布达拉宫'
    },
    {
        src: '/images/ly5.jpg',
        title: '卡若拉冰川'
    },
    {
        src: '/images/ly6.jpg',
        title: '羊湖'
    },
    {
        src: '/images/ly7.jpg',
        title: '牢兄牢弟'
    },
    {
        src: '/images/ly8.jpg',
        title: '牢豆'
    },
    {
        src: '/images/ly9.jpg',
        title: '黑哥'
    },
    {
        src: '/images/ly10.jpg',
        title: '合照'
    },
    {
        src: '/images/ly11.jpg',
        title: '家人合照'
    },
    {
        src: '/images/ly12.jpg',
        title: '安米'
    },
])

const showImg = (i) => {
    index.value = i
    visible.value = true
}

const handleHide = () => {
    visible.value = false
}

// 处理图片路径
const processedImages = computed(() => {
    return images.value.map(img => ({
        ...img,
        src: withBase(img.src)
    }))
})
</script>

<style scoped>
.image-gallery {
    margin: 2rem 0;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}

.gallery-item {
    cursor: pointer;
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}
</style>