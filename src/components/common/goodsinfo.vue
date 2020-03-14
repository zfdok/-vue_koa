<template>
  <div class="good_item">
    <img :src="good.image" alt width="100%" />
    <p class="goodname">{{good.name}}</p>
    <p class="goodprice">￥{{good.price.toFixed(2)}}</p>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: {
    good: Object
  }
};
</script>

<style scope>
.good_item {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.goodname {
  padding: 0.3rem;
  font-size: 0.7rem;
  color: deeppink;
  height: 2em;
}
.goodprice{
  text-align: center;
}
</style>