<template>
  <div class="theme-mid">
    <div class="flex-row align-center callout shadow">
      <a class="alt rounded blue small-pad marginl" @click="$router.push('/')"><i class="fas fa-home"></i></a>
      <h1 class="font-large pad">Philippians</h1>
    </div>
    <div class="pad bottompad">
      <router-link to="/philippians/studies/1" class="callout alt">Study 1</router-link>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>
