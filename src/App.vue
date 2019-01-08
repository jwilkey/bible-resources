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

<style lang="less">
@import '../static/less/common';

#app {
  .prewrap {
    white-space: pre-wrap;
  }
}
</style>
