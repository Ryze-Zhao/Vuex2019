import Vuex from 'vuex';


function createStore(){
  return  new Vuex.Store({
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
}
// 暴露出去
export default createStore;