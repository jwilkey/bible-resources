<template>
  <div class="home theme-back flex-column">
    <div class="theme-mid pad">
      <h2>Resources</h2>
    </div>

    <div class="flex-one pad">
      <div class="content">
        <div class="theme-mid rounded pad shadow marginb flex-row" @click="openLink('https://truewordsapp.com')">
          <div class="flex-one flex-row align-center">
            <img class="icon-image marginr rounded" src="https://truewordsapp.com/static/favicon.png">
            <div>
              <h1>True Words</h1>
              <p class="muted">An interactive Bible study application.</p>
            </div>
          </div>
          <button class="muted alt marginl">&gt;</button>
        </div>

        <div class="theme-mid rounded pad shadow marginb flex-row" @click="openLink('https://spotlight.truewordsapp.com')">
          <div class="flex-one flex-row align-center">
            <img class="icon-image marginr rounded" src="/static/images/spotlight.png">
            <div>
              <h1>True Words Spotlight</h1>
              <p class="muted">An interactive Bible reader. Tap words to find uses, search, find references to God, and more.</p>
            </div>
          </div>
          <button class="muted alt marginl">&gt;</button>
        </div>

        <div class="theme-mid rounded pad shadow marginb flex-row" @click="openLink('https://search.truewordsapp.com')">
          <div class="flex-one flex-row align-center">
            <img class="icon-image marginr rounded hue-adjust" src="/static/images/spotlight.png">
            <div>
              <h1>True Words Search</h1>
              <p class="muted">A Bible search tool. Will find all references of the searched text as well as synonyms.</p>
            </div>
          </div>
          <button class="muted alt marginl">&gt;</button>
        </div>

        <div class="theme-mid rounded pad shadow marginb flex-row" @click="goTo('inductive-activities')">
          <div class="flex-one">
            <h1>Inductive Activities</h1>
            <p class="muted">A list of Bible study activities to help you have a meaningful time in God's word.</p>
          </div>
          <button class="muted alt marginl">&gt;</button>
        </div>

        <div class="theme-mid rounded pad shadow marginb flex-row" @click="goTo('greetings')">
          <div class="flex-one">
            <h1 class="flex-one">Greetings of the New Testament</h1>
            <p class="muted">Compare the greetings of New Testament letters.</p>
          </div>
          <button class="muted alt marginl">&gt;</button>
        </div>

        <div class="theme-mid rounded pad shadow marginb flex-row" @click="goTo('romans')">
          <h1 class="flex-one">Romans: a few short studies</h1>
          <button class="muted alt marginl">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    goTo (page) {
      this.$router.push(page)
    },
    openLink (link) {
      var win = window.open(link, '_blank')
      win.focus()
    }
  }
}
</script>

<style lang="less" scoped>
.icon-image {
  height: 45px;
  width: 45px;
  &.hue-adjust {
    filter: hue-rotate(90deg);
  }
}

</style>
