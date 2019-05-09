import Vuex from 'vuex';
//1、引入Logger
import createLogger from 'vuex/dist/logger';
//2、引入插件
export default function createStore(){
   return new Vuex.Store({
        state:{
            count:1,
        },
        mutations: {
            increment (state) {
                state.count++
            }
        },  plugins: [createLogger()]
    }) 
}