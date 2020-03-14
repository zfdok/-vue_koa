<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide class="text">
      <slot name="put_text_here"></slot>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: "SwiperText",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: auto,
        freeMode: true,
        mousewheel: true
      }
    };
  }
};
</script>

<style scoped>
</style>