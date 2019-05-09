import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
//1、导入
import { mutations } from './mutations';

export default function createStore(){
   return new Vuex.Store({
        state:{count:1},
        //2、引入
        mutations,
        plugins: [createLogger()]
    }) 
}