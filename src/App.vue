<template>
  <div id="app">
    <Search />
    <Results />
  </div>
</template>

<script>
import Search from './components/search.vue'
import Results from './components/results.vue'

export default {
  name: 'App',
  components: {
    Search,
    Results
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
