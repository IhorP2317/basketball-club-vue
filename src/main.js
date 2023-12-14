import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/router'
import store from './Services/store'; // Adjust the path accordingly

const app = createApp(App);

app.use(router);
app.use(store); // Use the store as a plugin

app.mount('#app');
