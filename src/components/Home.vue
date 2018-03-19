<template>
  <div class="home pad">
    <div class="theme-mid rounded pad shadow">
      <h1 class="marginb"><router-link :to="{ name: 'InductiveActivities' }">Inductive Activities</router-link></h1>
      <h1 class="hi-bottom">Book Studies</h1>
      <router-link :to="{ name: 'Romans' }">Romans</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
