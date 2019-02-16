<template>
  <div class="bg-base">
    <div class="flex-row align-center blue">
      <a class="alt rounded blue p1 m2-left m2-right" @click="$router.push('/')"><i class="fas fa-home"></i></a>
      <router-link v-for="i in 7" :key="i" class="contrast hi-right p2" :to="`/proverbs21/part/${i}`">Part {{i}}</router-link>
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
