// src/store/module1.js
const module1 = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
};

export default module1;
