<template>
  <div class="textual">
    For there are many who are insubordinate,
    empty talkers and deceivers,
    especially those of the circumcision party.

    They must be silenced,
    since they are upsetting whole families
    by teaching for shameful gain
    what they ought not to teach.

    One of the Cretans,
    a prophet of their own,
    said,
    "Cretans are always liars,
    evil beasts,
    lazy gluttons."
    This testimony is true.

    Therefore rebuke them sharply,
    that they may be sound in the faith,
    not devoting themselves to Jewish myths
    and the commands of people who turn away
    from the truth.
    <div>
      <h1>Hello world!</h1>
      <button @click="toggleDetails">see more</button>
    </div>
    <div v-if="shouldShowDetails">
      Details about the world
    </div>
  </div>
</template>

<script>
export default {
  name: 'Titus11014',
  data () {
    return {
      shouldShowDetails: false
    }
  },
  methods: {
    toggleDetails () {
      this.shouldShowDetails = !this.shouldShowDetails
    }
  }
}
</script>

<style lang="less" scoped>
.textual {
}
</style>
