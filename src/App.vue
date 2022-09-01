<template>
  <div id="app">
    <threed/>
  </div>
</template>

<script>
import threed from './components/threed.vue'

export default {
  name: 'App',
  components: {
    threed
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
