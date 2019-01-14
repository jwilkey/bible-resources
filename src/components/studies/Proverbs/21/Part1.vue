<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:1-3</h3>
    <div class="verses" :class="{chords: showChords}">
      <p><chd val="Em"/>The king's heart is a stream of water</p>
      <p><chd val="A"/>in the hand of the LORD;</p>
      <p><chd val="Em"/>he turns it wherever he <chd val="A"/>will.</p>
      <br>

      <p><chd val="Em"/>Every way <chd val="(G)"/>of a man is right</p>
      <p><chd val="(C)"/>in his own <chd val="A"/>eyes,</p>
      <p><chd val="Em"/>but the <chd val="(G)"/>LORD weighs the <chd val="(C)"/>heart.<chd val="A"/></p>
      <br>

      <p>To do righteousness and justice</p>
      <p>is more acceptable to the LORD than sacrifice.</p>
    </div>

    <div class="text-right m2-top">
      <a class="p1" :class="{tertiary: !showChords}" @click="toggleChords">chords</a>
    </div>

    <hr>

    <div>
      <h3>Objects</h3>
      <p><span v-for="(o, i) in objects" :key="i"> • {{o}}</span></p>

      <h3>Actions</h3>
      <p><span v-for="(o, i) in actions" :key="i"> • {{o}}</span></p>
    </div>
  </div>
</template>

<script>
import Chd from '@/components/studies/Chord'

export default {
  name: 'SongStudy',
  data () {
    return {
      showChords: false,
      objects: [`king's heart`, `stream of water`, `the hand of the LORD`, `way of a man`, `man's own eyes`, `man's heart`, `righteousness`, `justice`, `sacrifice`],
      actions: [
        'being in the hand of the LORD',
        `the LORD turning the king's heart`,
        `the LORD weighs the heart`,
        `to do righteousness`,
        `to sacrifice`
      ]
    }
  },
  components: { Chd },
  methods: {
    toggleChords () {
      this.showChords = !this.showChords
    }
  }
}
</script>

<style lang="scss" scoped>
.verses p {
  position: relative;
  line-height: 240%;
}
.verses:not(.chords) {
  .chord {
    display: none;
  }
  p {
    line-height: inherit;
  }
}
h3 {
  margin-bottom: 3px;
}
</style>
