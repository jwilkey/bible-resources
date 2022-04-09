<template>
  <div class="p2">
    <h3 class="m2-bottom">Proverbs 21:4-6</h3>
    <div class="verses" :class="{chords: showChords}">
      <p><chd val="Dm"/>Haughty eyes and a <chd val="Fm"/>proud heart,</p>
      <p>the lamp of the wicked, are sin.</p>
      <br>

      <p>The plans of the diligent lead surely to abundance,</p>
      <p>but everyone who is hasty comes only to poverty.</p>
      <br>

      <p>The getting of treasures by a lying tongue</p>
      <p>is a fleeting vapor and a snare of death.</p>
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
      objects: ['haughty eyes', 'proud heart', 'lamp', 'the wicked', 'sin', 'plans of the diligent', 'abundance', 'poverty', 'treasures', 'lying tongue', 'fleeting vapor', 'snare of death'],
      actions: [
        'leading to abundance',
        'being hasty',
        'coming to poverty',
        'getting treasure by lying'
      ],
      tone: ['warning', 'grave', 'stern']
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
