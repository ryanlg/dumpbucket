import vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import upload from './components/upload/upload.vue';

new vue({
    router,
    store,
    el: '#app',
    components: {
        App,
    },
    // render: h => h( App)
    template: '<App/>',
});
