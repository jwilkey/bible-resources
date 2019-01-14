<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:7-8</h3>
    <div class="verses" :class="{chords: showChords}">
      <p>The violence of the wicked will sweep them away,</p>
      <p>because they refuse to do what is just.</p>
      <br>

      <p>The way of the guilty is crooked,</p>
      <p>but the conduct of the pure is upright.</p>
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

      <h3>Adjectives</h3>
      <p><span v-for="(o, i) in adjectives" :key="i"> • {{o}}</span></p>

      <hr>

      <h3>Tone</h3>
      <p><span v-for="(o, i) in tone" :key="i"> • {{o}}</span></p>
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
      objects: ['violence', 'the wicked', 'what is just', 'the way of the guilty', 'conduct of the pure'],
      actions: [
        `violence sweeping away`,
        `refusing to do what is just`
      ],
      adjectives: [
        `away`,
        `just`,
        `crooked`,
        `upright`
      ],
      tone: ['warning', 'melancholy', 'stubborn', 'poignant', 'drifiting', 'revealing', 'hopeful']
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
