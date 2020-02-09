<template>
  <div class="home flex-column v-fill">
    <div class="content h-fill p2 border-bottom-tertiary m2-bottom">
      <h2 class="base">Tentkeep Bible</h2>
    </div>

    <div class="flex-one scrolly p2 p5-bottom">
      <div class="content">
        <resource-row title="Bible Study Activities" description="A list of Bible study activities to help you have a meaningful time in God's word." link="inductive-activities" icon="fa-book-reader">
        </resource-row>

        <div class="m4-top">
          <h2 class="secondary m2-bottom">Apps</h2>

          <div class="grid grid2">
            <resource-row title="True Words" description="An interactive Bible study application." link="https://truewordsapp.com" image="https://truewordsapp.com/static/favicon.png"></resource-row>

            <resource-row title="True Words Spotlight" description="An interactive Bible reader. Tap words to find uses, search, find references to God, and more." link="https://spotlight.truewordsapp.com" image="/images/spotlight.png">
            </resource-row>

            <resource-row title="True Words Search" description="A Bible search tool. Will find all references of the searched text as well as synonyms." link="https://search.truewordsapp.com" image="/images/search.png">
            </resource-row>

            <resource-row title="True Songs" description="A music streaming app for Scripture songs" link="https://songs.truewordsapp.com" image="/images/true-songs.png">
            </resource-row>
          </div>
        </div>

        <div class="m4-top">
          <h2 class="secondary m2-bottom">Bible studies</h2>

          <div class="grid grid3">
            <resource-row link="proverbs21" title="Proverbs 21" description="A study for songs"></resource-row>

            <resource-row link="romans" title="Romans" description="a few short studies"></resource-row>

            <resource-row link="philippians/cloud" title="Philippians" description="A group Bible study"></resource-row>

            <resource-row link="https://jwilkey.github.io/philemon" title="Philemon" description="A Study"></resource-row>
          </div>
        </div>

        <div class="m4-top">
          <h2 class="secondary m2-bottom">Resources</h2>

          <div class="grid grid2">
            <resource-row title="Family Worship" description="A short guide" link="resources/family-worship" icon="fa-users" />

            <resource-row title="Sabbath Dinner" description="An order of worship" link="resources/sabbath-dinner" icon="fa-church" />

            <resource-row title="Greetings of the New Testament" description="Compare the greetings of New Testament letters." link="greetings" icon="fa-envelope" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceRow from '@/components/views/ResourceRow'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: { ResourceRow },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/app";

.icon-image {
  height: 45px;
  width: 45px;
  &.hue-adjust {
    filter: hue-rotate(90deg);
  }
}
.grid {
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}
@media (min-width: 600px) {
  .grid2 {
    grid-template-columns: auto auto;
  }
  .grid3 {
    grid-template-columns: auto auto auto;
  }
}
</style>
