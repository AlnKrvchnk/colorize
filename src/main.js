// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import vButton from '@/components/v-button.vue';
import vInput from '@/components/v-input.vue';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import ApiPlugin from './plugins/api'
// import api from './api/index'




//createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);

app.component('v-button',vButton)
app.component('v-input',vInput)
app.use(store)
app.use(router)

// app.config.globalProperties.$api = api;
let port=process.env.PORT || 8080
app.listen(port)
//app.use(ApiPlugin);
app.mount("#app");


