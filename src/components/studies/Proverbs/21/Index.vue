<template>
  <div class="bg-base">
    <div class="flex-row align-center blue">
      <a class="alt rounded blue p1 m2-left m2-right" @click="$router.push('/')"><i class="fas fa-home"></i></a>
      <router-link class="contrast hi-right p2" to="/proverbs21/part/1">Part 1</router-link>
      <router-link class="contrast hi-right p2" to="/proverbs21/part/2">Part 2</router-link>
      <router-link class="contrast hi-right p2" to="/proverbs21/part/3">Part 3</router-link>
      <router-link class="contrast hi-right p2" to="/proverbs21/part/4">Part 4</router-link>
    </div>

    <div class="hi-top"></div>

    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Proverbs21'
}
</script>
