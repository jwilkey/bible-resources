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
        class="greeting flex-column pointer"
        @click="focusGreeting(greeting)">
        <div class="flex-one flex-column pad">
          <h2>{{ greeting.book }}</h2>
          <div class="flex-one scrolly">{{ greeting.text }}</div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="focusedGreeting" class="modal-overlay cover z3 flex-column flex-center align-center">
        <div class="modal rounded font-large shadow-long flex-column">
          <p class="muted marginb">{{ focusedGreeting.book }}</p>
          <p class="flex-one scrolly">{{ focusedGreeting.text }}</p>
          <div class="margint text-right">
            <button class="alt margint" @click="focusedGreeting = undefined">close</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import greetings from '@/assets/resources/greetings'

export default {
  name: 'Greetings',
  data () {
    return {
      focusedGreeting: undefined,
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
    },
    focusGreeting (greeting) {
      this.focusedGreeting = greeting
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
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.7);
}
.modal {
  width: 70%;
  max-width: 430px;
  max-height: 80%;
  padding: 20px;
  color: white;
  background: linear-gradient(45deg, #111, #223);
  box-shadow: 1px 1px 20px black;
}
</style>
