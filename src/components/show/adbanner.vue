<template>
  <div>
    <img v-lazy="adimgsrc" alt srcset width="100%" />
  </div>
</template>

<script>
export default {
  name: "AdBanner",
  props: {
    adimgsrc: String
  }
};
</script>

<style>
</style>