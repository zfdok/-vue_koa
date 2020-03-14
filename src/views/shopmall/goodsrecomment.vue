<template >
  <Card class="goodsrec">
    <div class="goodsrectitle">商品推荐</div>
    <MySwarper :recommend="recommend"></MySwarper>
  </Card>
</template>

<script>
import Card from "../../components/show/card_slot";
import MySwarper from "./myswiper";
export default {
  name: "GoodsRecomment",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  props: {
    recommend: Array
  },
  components: {
    Card,
    MySwarper
  },
  methods: {
    callback() {}
  }
};
</script>

<style>
.goodsrec {
  font-size: 0.4rem;
  color: #e5017d;
}
.goodsrectitle {
  padding-bottom: 0.2rem;
  border-bottom: #e0e0e0 1px solid;
}
</style>