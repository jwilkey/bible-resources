<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:7-8</h3>
    <div class="verses" :class="{chords: showChords}">
      <p>It is better</p>
      <p>to live in a corner</p>
      <p>of the housetop</p>
      <p>than in a house</p>
      <p>shared with a quarrelsome wife.</p>
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
        people: ['quarrelsome wife'],
        objects: ['corner of the housetop', 'house'],
        actions: ['live', 'share'],
        adjectives: ['quarrelsome'],
        tone: ['warning', 'whimsical'],
        'prayer of worship': 'God, thank you for my wife! She is a blessing to me, and guides me in Your ways. I desire and enjoy living in closeness with her. Her companionship helps me to understand the love and safety that I have with you. Help us to be an encouragement to other marriages. Help us to rightly challenge others into a marriage that honors You.'
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
