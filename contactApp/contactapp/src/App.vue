<template>
  <div id="app">
    <appBar></appBar>
    <router-view/>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
export default {
  components: {
    AppBar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import'~bootstrap/dist/css/bootstrap.css'

</style>
