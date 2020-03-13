<template>
  <div >
    <van-swipe :autoplay="3000" class="img-swaper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swarp-imgs" />
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
      images: [
        "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg",
        "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg",
        "http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg"
      ]
    };
  }
};
</script>

<style scoped>
.img-swaper {
  width: 20rem;
  clear: both;
}
.swarp-imgs {
  height: 100%;
  width: 100%;
}
</style>