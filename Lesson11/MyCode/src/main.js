import Vue from 'vue';
import Vuex from 'vuex';
//1、引入index.js
import createStore from './store';

//2、使用vuex需要
Vue.use(Vuex)

//3、引入index.js的方法
const store = createStore();

//4、使用store
const app = new Vue({
    el:'#app',
    store,
    template:`
        <div>
            Hello Vue {{ $store.state.count }}
        </div>
    `
})