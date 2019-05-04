import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
//1、引入App.vue
import App from './components/App.vue';

//2、使用App.vue
const app = new Vue({
    el:'#app',
    store,
    render:h=>h(App),
})