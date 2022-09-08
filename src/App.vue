<template>
  <div id="app">
    <h1>Wexterås</h1>
    <Canvas ref="canvas"/>
    <Pump  ref="pump"/>
    <Fan ref="fan"/>
    <button @click="scrollToElement('canvas');" />
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue'
import Fan from './components/Fan.vue'
import Pump from './components/Pump.vue'
import {db, ref, onValue} from './firebase/main.js'

export default {
  name: 'App',
  components: {
    Canvas,
    Pump,
    Fan
  },
  methods: {
    scrollToElement(ref) {
      console.log(this.$refs);
      var element = this.$refs[ref].$el;
      element.scrollIntoView({behavior: 'smooth'});
    }
  },
  data: () => {
    return {
      db_data: {
        pump: false,
        fan: false,
        hatch: 10,
        humidity: 0,
        temperature: 0
      }
    }
  },
  mounted()  {
    const dbRef = ref(db, 'values');
    onValue(dbRef, (data) => {
      this.db_data = data.val();
    })
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
