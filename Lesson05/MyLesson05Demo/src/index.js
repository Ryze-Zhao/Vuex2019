import Vue from 'vue';
import Vuex from 'vuex';
import createStore from './store.js';
import Counter from './components/counter.js';//更改点
Vue.use(Vuex);

const store=createStore();

const app = new Vue({
    el: '#app',
    store,
    components: { Counter },
    template: `
                <div class="app">
                 <counter></counter>
                </div>`
})