import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

console.log("NODE_ENV:",process.env.NODE_ENV);
export default function createStore() {
    return new Vuex.Store({
        //非生产环境使用严格模式
        strict: process.env.NODE_ENV !== 'production',
        state: {
            count: 1,
        },
        mutations: {
            increment(state) {
                state.count++
            }
        }, plugins: [createLogger()]
    })
}