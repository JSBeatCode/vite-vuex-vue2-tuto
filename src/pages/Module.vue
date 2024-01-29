<!-- src/App.vue -->
<template>
    <div>
      <h1>Vue App with Vuex Modules</h1>
  
      <div>
        <h2>Module 1</h2>
        <p>Count: {{ module1Count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="asyncIncrement">Async Increment</button>
      </div>
  
      <div>
        <h2>Module 2</h2>
        <p>Message: {{ module2Message }}</p>
        <button @click="updateMessage($event)">Update Message</button>
        <button @click="asyncUpdateMessage">Async Update Message</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters({
        module1Count: 'module1/getCount',
        module2Message: 'module2/getMessage',
      }),
      // Alternatively, you can use mapState:
      // ...mapState({
      //   module1Count: (state) => state.module1.count,
      //   module2Message: (state) => state.module2.message,
      // }),
    },
    methods: {
      ...mapMutations('module1', ['increment', 'decrement']),
      ...mapActions('module1', ['asyncIncrement']),
    //   ...mapMutations('module2', ['updateMessage']),
      ...mapActions('module2', ['asyncUpdateMessage']),
      updateMessage(event) {
        this.$store.commit('module2/updateMessage', 'New Message');
    },
    },
  };
  </script>
  
  <style>
    /* Your styles here */
  </style>
  