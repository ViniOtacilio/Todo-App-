<template>
  <main id="app">
    <router-view></router-view>
  </main>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import "style/global.less";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
