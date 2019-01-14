<template>
  <div
    id="app"
    class="flex-column">
    <router-view class="flex-one"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/sass/app";

#app {
  .prewrap {
    white-space: pre-wrap;
  }
}
</style>
