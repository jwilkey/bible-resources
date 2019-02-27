<template>
  <div class="flex-column">
    <div class="flex-row bg-base align-center m2-bottom primary shadow">
      <a class="alt rounded tertiary p1 m2-left" @click="$router.push('/')"><i class="fas fa-home"></i></a>
      <h1 class="font4 p2">Philippians</h1>
    </div>

    <div class="content flex-one scrolly bg-base p2 p5-bottom">
      <ul class="study-list flex-row flex-wrap">
        <li>
          <router-link to="/philippians/studies/1" class="primary">Study 1</router-link>
        </li>
        <li>
          <router-link to="/philippians/studies/2" class="primary">Study 2</router-link>
        </li>
        <li>
          <router-link to="/philippians/studies/3" class="primary">Study 3</router-link>
        </li>
        <li>
          <router-link to="/philippians/studies/8" class="primary">Study 8</router-link>
        </li>
        <li>
          <router-link to="/philippians/studies/9" class="primary">Study 9</router-link>
        </li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
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
