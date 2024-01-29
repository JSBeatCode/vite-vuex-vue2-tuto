<template>
    <div>
      <h1>Vuex Example App</h1>
      <!-- store에 저장된 값이다. -->
      <!-- <p>state: {{ count }}</p> -->
      <p>Count: {{ getCount }}</p>
      <!-- doubleCount는 store에 저장된 것이 아닌 state를 변형한 값을 get해온 것이다. -->
      <p>Double Count: {{ doubleCount }}</p> 
      <button @click="increment">Increment</button>
      <button @click="decrement">decrement</button>
      <button @click="incrementAsync">Increment Async</button>
      <button @click="decrementAsync">Decrement Async</button>
      <!--
      <p>Global Count: {{ globalCount }}</p>
      <p>Module 1 Count: {{ module1Count }}</p>
      <p>Module 2 Count: {{ module2Count }}</p>
      <button @click="incrementGlobal1">Increment Global Count</button>
      <button @click="incrementModule1">Increment Module 1 Count</button>
      <button @click="incrementModule2">Increment Module 2 Count</button>
      -->
    </div>
  </template>
  
  <script>
  import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
  
  export default {
    computed: {
      // mapState를 통해 상태를 컴포넌트에 매핑합니다.
      // ...mapState(['count']),
      // mapGetters를 통해 게터를 컴포넌트에 매핑합니다.
      ...mapGetters(['doubleCount', 'getCount'])
      // ...mapState({
      //   globalCount: (state) => state.count,
      //   module1Count: (state) => state.module1.count,
      //   module2Count: (state) => state.module2.count,
      // }),
    },
    methods: {
      // mapMutations를 통해 뮤테이션 컴포넌트에 매핑합니다.
      ...mapMutations(['increment', 'decrement']),
      // napActions를 통해 액션을 컴포넌트에 매핑합니다.
      ...mapActions(['incrementAsync', 'decrementAsync'])
  
    }
  }
  </script>
  
  <style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  