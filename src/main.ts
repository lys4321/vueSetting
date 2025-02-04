import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'vuetify/styles';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
//app.defaults.baseURL = 'api서버주소'

loadFonts();

app.use(router).use(vuetify).mount('#app');
