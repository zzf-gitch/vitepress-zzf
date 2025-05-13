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
        src: '/images/hz1.jpg',
        title: '合照'
    },
    {
        src: '/images/hz2.jpg',
        title: '合照'
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
}
</style>