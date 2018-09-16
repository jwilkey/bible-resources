<template>
  <div class="home pad theme-back">
    <div class="theme-mid rounded pad shadow">
      <div class="marginb">
        <h1>Inductive Activities</h1>
        <router-link :to="{ name: 'InductiveActivities' }">Click here to view a list of study activities</router-link>
      </div>

      <div class="marginb">
        <h1 class="hi-bottom">Book Studies</h1>
        <router-link :to="{ name: 'Romans' }">Romans</router-link>
      </div>

      <div class="marginb">
        <h1 class="hi-bottom">The Greetings of Paul</h1>
        <router-link :to="{ name: 'Greetings' }">Greetings</router-link>
      </div>
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
