<template>
  <div class="theme-mid">
    <div class="flex-row align-center callout shadow">
      <a class="alt rounded blue small-pad marginl" @click="$router.push('/')"><i class="fas fa-home"></i></a>
      <h1 class="font-large pad">Philippians</h1>
    </div>
    <div class="pad bottompad">
      <ul class="study-list flex-row flex-wrap">
        <li>
          <router-link to="/philippians/studies/1" class="callout alt">Study 1</router-link>
        </li>
        <li>
          <router-link to="/philippians/studies/2" class="callout alt">Study 2</router-link>
        </li>
        <li>
          <router-link to="/philippians/studies/3" class="callout alt">Study 3</router-link>
        </li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
.study-list {
  li {
    &:not(:first-child):before {
      content: " ";
      opacity: 0.3;
      margin: 0 7px;
      border: solid 1px #999;
    }
  }
}
</style>
