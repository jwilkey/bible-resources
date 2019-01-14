<template>
  <div class="bg-base rounded p2 shadow m2-bottom flex-row align-center" @click="open">
    <div class="flex-one flex-row align-center">
      <div v-if="image" class="icon-image m2-right rounded" :style="{'background-image': `url(${image})`}"></div>
      <i v-if="icon" class="icon-image primary fa m2-right" :class="[icon]"></i>
      <div class="flex-one">
        <h1 class="font4">{{ title }}</h1>
        <p class="tertiary">{{ description }}</p>
      </div>
    </div>
    <p class="p2 p0-right tertiary2 m2-left"><i class="fas fa-chevron-right"></i></p>
  </div>
</template>

<script>
export default {
  name: 'ResourceRow',
  props: ['title', 'description', 'link', 'image', 'icon'],
  data () {
    return {}
  },
  methods: {
    open () {
      if (this.link.startsWith('http')) {
        this.openLink(this.link)
      } else {
        this.goTo(this.link)
      }
    },
    goTo (page) {
      this.$router.push(page)
    },
    openLink (link) {
      var win = window.open(link, '_blank')
      win.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-image {
  height: 45px;
  width: 45px;
  &.hue-adjust {
    filter: hue-rotate(90deg);
  }
  background-size: cover;
  background-position: center;
}
</style>
