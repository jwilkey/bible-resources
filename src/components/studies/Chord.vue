<template>
  <div class="chord">
    {{val}}
  </div>
</template>

<script>
export default {
  name: 'Chord',
  props: ['val']
}
</script>

<style>
.chord {
  display: inline-block;
  width: 0px;
  overflow: visible;
  position: relative;
  top: -17px;
  font-weight: bold;
}
</style>
