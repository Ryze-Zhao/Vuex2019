import Vue from 'vue';
import Vuex from 'vuex';

// 工程项目下需要在js引入vue，即这句话,不然报错
Vue.use(Vuex);

//这个是Store
const store = new Vuex.Store({
    state: {
        count: 0,
        message: "Hello Vuex",
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
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
            //这种是换个名字
            messageChange: "message",
            //为了能够使用 `this` 获取局部状态，必须使用常规函数,省略:function也可以
            totalCount:function (state) {
                return this.localCount+state.count;
            }
        })
    }
}
const app = new Vue({
    el: '#app',
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    store,
    components: { Counter },
    template: `
                <div class="app">
                 <counter></counter>
                </div>`
})