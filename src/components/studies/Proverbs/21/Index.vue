<template>
  <div class="theme-mid">
    <div class="flex-row align-center pad blue">
      <router-link class="contrast" to="/proverbs21/part/1">Part 1</router-link>
      <div class="small-pad">•</div>
      <router-link class="contrast" to="/proverbs21/part/2">Part 2</router-link>
      <div class="small-pad">•</div>
      <router-link class="contrast" to="/proverbs21/part/3">Part 3</router-link>
    </div>

    <div class="hi-top"></div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Proverbs21'
}
</script>
