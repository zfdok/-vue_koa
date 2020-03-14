<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback" class="myswiper">
    <!-- slides -->

    <swiper-slide v-for="(item, index) in recommend" :key="index" class="rec_content">
      <img :src="item.image" alt srcset />
      <div>{{item.goodsName}}</div>
      <div style="word-break:break-all;">￥{{item.price | moneyformat}}(￥{{item.mallPrice| moneyformat}})</div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
export default {
  name: "MySwarper",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        slidesPerView: 3,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true
        }

        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  props: {
    recommend: Array
  },
  methods: {
    callback() {}
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  filters: {
    moneyformat(money) {
      return money.toFixed(2) ;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
.rec_content {
  width: 99%;
  border-right: cadetblue, 10px, solid;
  text-align: center;
  padding-bottom: 1rem;
}
.rec_content img {
  width: 90%;
}
.rec_content div {
  font-size: 0.7rem;
  overflow: hidden;
}
</style>