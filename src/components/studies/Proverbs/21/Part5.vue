<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:10-12</h3>
    <div class="verses" :class="{ chords: showChords }">
      <p>The soul of the wicked desires evil;</p>
      <p>his neighbor finds no mercy in his eyes.</p>
      <p>When a scoffer is punished, the simple becomes wise;</p>
      <p>when a wise man is instructed, he gains knowledge.</p>
      <p>The Righteous One observes the house of the wicked;</p>
      <p>he throws the wicked down to ruin.</p>
    </div>

    <div class="text-right m2-top">
      <a class="p1" :class="{ tertiary: !showChords }" @click="toggleChords"
        >chords</a
      >
    </div>

    <hr />

    <study-notes :notes="notes" />
  </div>
</template>

<script>
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
  components: { StudyNotes },
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
