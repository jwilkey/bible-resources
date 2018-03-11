<template>
  <div class="home">
    <h1><router-link :to="{ name: 'InductiveActivities' }">Inductive Activities</router-link></h1>
    <h1>Book Studies</h1>
    <hr>
    <router-link :to="{ name: 'Romans' }">Romans</router-link>
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
