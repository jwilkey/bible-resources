<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:13</h3>
    <div class="verses" :class="{chords: showChords}">
      <p>Whoever closes his ear to the cry of the poor</p>
      <p>will himself call out and not be answered.</p>
    </div>

    <div class="text-right m2-top">
      <a class="p1" :class="{tertiary: !showChords}" @click="toggleChords">chords</a>
    </div>

    <hr>

    <study-notes :notes="notes" />
  </div>
</template>

<script>
import Chd from '@/components/studies/Chord'
import StudyNotes from '@/components/studies/Proverbs/21/StudyNotes'

export default {
  name: 'SongStudy',
  data () {
    return {
      showChords: false,
      notes: {
        people: [],
        objects: [],
        actions: [],
        adjectives: [],
        tone: [],
        'prayer of worship': ''
      }
    }
  },
  components: { Chd, StudyNotes },
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
