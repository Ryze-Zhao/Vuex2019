import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:1,
    }
});

const app = new Vue({
    el:'#app',
    store,
    template:`
        <div>
            Hello Vue {{ $store.state.count }}
        </div>
    `
})