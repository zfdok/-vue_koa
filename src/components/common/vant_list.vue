<template>
  <van-list>
    <van-row>
      <van-col span="12" v-for="(item, index) in goods" :key="index">
        <GoodsInfo :good="item"></GoodsInfo>
      </van-col>
    </van-row>
  </van-list>
</template>

<script>
import GoodsInfo from './goodsinfo'
export default {
  name: "VantList",
  components:{
    GoodsInfo
  },
  props: {
    goods: Array
  }
};
</script>

<style>
</style>