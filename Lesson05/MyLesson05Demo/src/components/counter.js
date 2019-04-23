import Vuex from 'vuex';
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
// 暴露出去
export default Counter;