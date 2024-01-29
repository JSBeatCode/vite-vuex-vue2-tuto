import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store' // vuex의 store 가져와서 아래처럼 세팅함
import router from './router';

createApp(App)
.use(store)
.use(router)
.mount('#app')
