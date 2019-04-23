import Vue from 'vue';
import Vuex from 'vuex';
import createStore from './store.js';//更改点

Vue.use(Vuex);
const Counter = {
    template: `<div>{{count}} {{totalCount}} {{message}} {{messageChange}} {{sayHi}} </div>`,
    data(){
        return{
            localCount:5,
        }
    },
    computed:{
        sayHi(){ return "Hi!" },
        ...Vuex.mapState({
            count:"count",
            message: "message",
            messageChange: "message",
            totalCount:function (state) {
                return this.localCount+state.count;
            }
        })
    }
}
const app = new Vue({
    el: '#app',
    //更改点
    createStore,
    components: { Counter },
    template: `
                <div class="app">
                 <counter></counter>
                </div>`
})