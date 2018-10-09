<template>
  <div class="flex-column">
    <div class="cloud-container flex-column flex-center">
      <img src="@/components/studies/Philippians/philippians.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'philippians-cloud',
  mounted () {
    const image = this.$el.querySelector('.cloud-container img')
    image.style.height = image.clientWidth + 'px'
  }
}
</script>

<style lang="less">
.cloud-container {
  padding: 30px;
  animation: random 5s infinite;
  img {
    background: linear-gradient(#b35, #802);
    box-shadow: inset 0px 1px 7px black;
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
  }
}
</style>
