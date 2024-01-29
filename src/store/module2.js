// src/store/module2.js
const module2 = {
  namespaced: true,
  state: {
    message: 'Hello from module2!',
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    asyncUpdateMessage({ commit }) {
      setTimeout(() => {
        commit('updateMessage', 'Async message update');
      }, 1500);
    },
  },
  getters: {
    getMessage: (state) => {
      console.log(state.message)
      return state.message
    },
  },
};

export default module2;
