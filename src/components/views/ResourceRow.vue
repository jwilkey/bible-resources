<template>
  <div class="theme-mid rounded pad shadow marginb flex-row align-center" @click="open">
    <div class="flex-one flex-row align-center">
      <img v-if="image" class="icon-image marginr rounded" :src="image">
      <i v-if="icon" class="icon-image fa marginr" :class="[icon]"></i>
      <div>
        <h1 class="font-large">{{ title }}</h1>
        <p class="muted">{{ description }}</p>
      </div>
    </div>
    <p class="pad nopad-right muted-more marginl"><i class="fas fa-chevron-right"></i></p>
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

<style lang="less" scoped>
.icon-image {
  height: 45px;
  width: 45px;
  &.hue-adjust {
    filter: hue-rotate(90deg);
  }
}
</style>
