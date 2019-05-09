import { expect } from 'chai'
import { mutations } from './../src/store/mutations'
//1、解构出increment
const { increment } = mutations
//2、对increment进行测试
describe('mutations',()=>{
    it("INCREMENT",()=>{
        const state = { count:0 }
        increment(state)
        expect(state.count).to.equal(1)
    })
})