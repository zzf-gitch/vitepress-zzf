import DefaultTheme from 'vitepress/theme';
import './custom.css';
import VideoPlayer from './components/VideoPlayer.vue'
import ImageGallery from './components/ImageGallery.vue'
import ImageHz from './components/ImageHz.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent' /* ... */);
    app.component('VideoPlayer', VideoPlayer)
    app.component('ImageGallery', ImageGallery)
    app.component('ImageHz', ImageHz)
  }
};
