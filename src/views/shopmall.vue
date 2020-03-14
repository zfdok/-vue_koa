<template>
  <div>
    <SearchBar></SearchBar>
    <ImgSwarp :images="swapimages"></ImgSwarp>
    <Category :categroy="category" />
    <AdBanner :adimgsrc="adimgsrc"></AdBanner>
    <GoodsRecomment :recommend="recommend"></GoodsRecomment>
    <Floor1 :goods='floor1'></Floor1>
    <div>haha</div>
  </div>
</template>

<script scoped>
import ImgSwarp from "../components/show/imgswarp";
import SearchBar from "../components/show/searchbar";
import Category from "./shopmall/categroy";
import { request } from "../network/request";
import AdBanner from "../components/show/adbanner";
import GoodsRecomment from "./shopmall/goodsrecomment";
import Floor1 from "./shopmall/floor1"

export default {
  name: "ShopMall",
  data() {
    return {
      msg: "haha",
      locationIcon: require("../assets/img/location1.png"),
      category: [],
      adimgsrc: null,
      swapimages: [],
      recommend: [],
      floor1:[]
    };
  },
  components: {
    ImgSwarp,
    SearchBar,
    Category,
    AdBanner,
    GoodsRecomment,
    Floor1
  },
  created() {
    request({
      url: "/shopmall"
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.data);
          this.category = res.data.data.category;
          this.adimgsrc = res.data.data.advertesPicture.PICTURE_ADDRESS;
          this.swapimages = res.data.data.slides;
          this.recommend = res.data.data.recommend;
          this.floor1=res.data.data.floor1;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>