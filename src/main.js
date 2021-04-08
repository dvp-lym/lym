import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
//element样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 字体图标
import './assets/demo-files/demo.css';
import './assets/style.css';

// 视频处理
import EleForm from 'vue-ele-form'
import EleFormVideoUploader from 'vue-ele-form-video-uploader'
// 图片
import EleFormImageUploader from 'vue-ele-form-image-uploader'
// 注册 ele-form
Vue.use(EleForm, {
  // 对所有具有上传属性的组件适用
  upload: {
    fileSize: 10
  },
  // 可以在这里设置全局的 video-uploader 属性
  'video-uploader': {
    action: 'https://jsonplaceholder.typicode.com/posts' // 上传地址
  },
  // 可以在这里设置全局的 image-uploader 属性
  'image-uploader': {
    action: 'https://jsonplaceholder.typicode.com/posts' // 上传地址
  }
})

// 注册 video-uploader 组件
Vue.component('video-uploader', EleFormVideoUploader)



new Vue({
  router,
  data() {
    return {
    };
  },
  render: h => h(App)
}).$mount('#app');