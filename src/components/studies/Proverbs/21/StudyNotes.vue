<template>
  <div>
    <div v-for="(value, key) in notes" :key="key" class="m2-bottom">
      <h3 class="uppercase">{{key}}</h3>
      <p v-if="arrNotEmpty(value)"><span v-for="(o, i) in value" :key="i"> • {{o}}</span></p>
      <p v-if="!Array.isArray(value)">{{value}}</p>
    </div>

<!-- NON-NOTES METHOD -->

    <div v-if="arrNotEmpty(objects)">
      <h3>Objects</h3>
      <p><span v-for="(o, i) in objects" :key="i"> • {{o}}</span></p>
    </div>

    <div v-if="arrNotEmpty(actions)">
      <h3>Actions</h3>
      <p><span v-for="(o, i) in actions" :key="i"> • {{o}}</span></p>
    </div>

    <div v-if="arrNotEmpty(adjectives)">
      <h3>Adjectives</h3>
      <p><span v-for="(o, i) in adjectives" :key="i"> • {{o}}</span></p>
    </div>

    <hr>

    <div v-if="arrNotEmpty(tone)">
      <h3>Tone</h3>
      <p><span v-for="(o, i) in tone" :key="i"> • {{o}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudyNotes',
  props: ['notes', 'objects', 'actions', 'adjectives', 'tone']
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 3px;
}
</style>
