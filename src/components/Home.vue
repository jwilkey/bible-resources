<template>
  <div class="home theme-back flex-column vfull">
    <div class="theme-mid pad shadow z1">
      <h2>Resources</h2>
    </div>

    <div class="flex-one scrolly pad">
      <div class="content">
        <resource-row title="True Words" description="An interactive Bible study application." link="https://truewordsapp.com" image="https://truewordsapp.com/static/favicon.png"></resource-row>

        <resource-row title="True Words Spotlight" description="An interactive Bible reader. Tap words to find uses, search, find references to God, and more." link="https://spotlight.truewordsapp.com" image="/static/images/spotlight.png">
        </resource-row>

        <resource-row title="True Words Search" description="A Bible search tool. Will find all references of the searched text as well as synonyms." link="https://search.truewordsapp.com" image="/static/images/spotlight.png">
        </resource-row>

        <resource-row title="Bible Study Activities" description="A list of Bible study activities to help you have a meaningful time in God's word." link="inductive-activities" icon="fa-book-reader">
        </resource-row>

        <resource-row title="Greetings of the New Testament" description="Compare the greetings of New Testament letters." link="greetings" icon="fa-envelope">
        </resource-row>

        <hr class="muted-border">
        <h2 class="font-large marginb">Various studies</h2>

        <resource-row link="romans" title="Romans: a few short studies"></resource-row>
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

<style lang="less" scoped>
.icon-image {
  height: 45px;
  width: 45px;
  &.hue-adjust {
    filter: hue-rotate(90deg);
  }
}
</style>
