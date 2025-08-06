import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    actions: {
        increment(value: number) {
            console.log('hehehe ---- ', value)
            this.count += value
        }
    },
    state() {
        return {
            count: 35,
            name:'Larry',
            age:40
        }
    },
    getters: {
        bigCount:state =>  state.count * 10 ,
        upperName(state) {
            return state.name.toUpperCase()
        }
    }
})