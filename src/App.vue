<template>
  <div id="app">
    <Background />
  </div>
</template>

<script>
import Background from './components/Background'

export default {
  name: 'App',
  components: {
    Background
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  background-color: rgb(94, 92, 92);
  /* display: flex; */
}
</style>
