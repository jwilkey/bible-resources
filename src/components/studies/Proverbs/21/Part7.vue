<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:14-18</h3>
    <div class="verses" :class="{ chords: showChords }">
      <p>A gift in secret averts anger,</p>
      <p>and a concealed bribe, strong wrath.</p>
      <p>When justice is done, it is a joy to the righteous</p>
      <p>but terror to evildoers.</p>
      <p>One who wanders from the way of good sense</p>
      <p>will rest in the assembly of the dead.</p>
      <p>Whoever loves pleasure will be a poor man;</p>
      <p>he who loves wine and oil will not be rich.</p>
      <p>The wicked is a ransom for the righteous,</p>
      <p>and the traitor for the upright.</p>
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
        people: [
          'the righteous',
          'evildoers',
          'one who wanders',
          'the dead',
          'one who loves pleasure',
          'he who loves wine and oil',
          'the wicked',
          'the traitor',
          'the upright'
        ],
        objects: ['a gift', 'concealed bribe', 'wine and oil'],
        actions: [
          'averts',
          'justice done',
          'to be joy',
          'to be terror',
          'wander',
          'rest with the dead',
          'love pleasure',
          'love wine and oil'
        ],
        adjectives: ['secret', 'concealed', 'strong', 'poor'],
        tone: ['warning', 'grave', 'dark', 'perilous'],
        'prayer of worship':
          'Lord, guard me from the alure of pleasure and riches. Do not let my eyes be blinded by bribery and flattery, but help me to see clearly, as You see clearly. Show me the true and right way, and compel me to walk in it. Further, for Your glory and honor, make me to be a victor over the wicked and traitor, to rightly show them the shame of their folly and the sweetness of Your goodness. In the midst of the chaos and turmoil of this fallend world, give me the faith to hope in the certain joy of Your final triumph.'
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
