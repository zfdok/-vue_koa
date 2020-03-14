<template>
  <div >
    <van-swipe :autoplay="3000" class="img-swaper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.image" class="swarp-imgs" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
export default {
  name: "ImgSwarp",
  data() {
    return {
      
    };
  },
  props:{
    images:Array
  }
};
</script>

<style scoped>
.img-swaper {
  width: 20rem;
  height: 8.875rem;
  clear: both;
}
.swarp-imgs {
  height: 100%;
  width: 100%;
}
</style>