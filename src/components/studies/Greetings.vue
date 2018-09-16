<template>
  <div class="greetings vfull flex-column">
    <div class="flex-row align-center">
      <a
        class="alt rounded blue small-pad marginl"
        @click="$router.push('/')"><i class="fas fa-home"></i></a>
      <h1 class="font-large pad">New Testament Greetings</h1>
    </div>
    <div class="flex-one flex-row flex-wrap flex-center scrolly">
      <div
        v-for="(greeting, i) in greetings"
        :key="i"
        :style="{backgroundColor: color(i)}"
        class="greeting flex-column">
        <div class="flex-one flex-column pad">
          <h2>{{ greeting.book }}</h2>
          <div class="flex-one scrolly">{{ greeting.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import greetings from '@/assets/resources/greetings'

export default {
  name: 'Greetings',
  data () {
    return {
      colors: ['#2D3042', '#425056', '#C48F87', '#99a', '#CE6742', '#793E2F', '#C49837']
    }
  },
  computed: {
    greetings () {
      return greetings
    }
  },
  methods: {
    color (index) {
      return this.colors[index % (this.colors.length)]
    }
  }
}
</script>

<style lang="less" scoped>
.greetings {
    color: #C48F87;
    background: linear-gradient(45deg, #111, #223);
}
.greeting {
    width: 30%;
    max-width: 300px;
    min-width: 280px;
    max-height: 200px;
    color: white;
    border: solid 1px transparent;
    @media only screen and (max-width: 500px) {
        width: 100%;
        max-width: 100%;
    }
    &:hover {
        z-index: 100;
        border: solid 1px black;
        box-shadow: 1px 1px 20px black;
    }
    h2 {
        opacity: 0.6;
        text-shadow: 1px 0px 0px #001;
    }
}
</style>
