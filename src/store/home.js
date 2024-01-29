const state = {
    count: 0
}

const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
}

const actions = {
    incrementAsync({ commit }) {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    },
    decrementAsync({ commit }) {
        setTimeout(() => {
            commit('decrement')
        }, 1000)
    }
}

const getters = {
    doubleCount: state => state.count * 2,
    getCount: state => state.count
}

export default {
    state, 
    mutations,
    actions,
    getters
}