<template>
  <div>
    <SearchBar></SearchBar>
    <ImgSwarp :images="swapimages"></ImgSwarp>
    <Category :categroy="category" />
    <AdBanner :adimgsrc="adimgsrc"></AdBanner>
    <GoodsRecomment :recommend="recommend"></GoodsRecomment>
    <Floor :goods="floor1" :title="floors.floor1"></Floor>
    <Floor :goods="floor2" :title="floors.floor2"></Floor>
    <Floor :goods="floor3" :title="floors.floor3"></Floor>
    <Card>
      <div class="cardtitle">商品推荐</div>
      <VantList :goods="hotgoods"></VantList>
    </Card>

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
import Floor from "./shopmall/floor1";
import VantList from "../components/common/vant_list";
import Card from "../components/show/card_slot";

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
      floors: {},
      floor1: [],
      floor2: [],
      floor3: [],
      hotgoods:[]
    };
  },
  components: {
    ImgSwarp,
    SearchBar,
    Category,
    AdBanner,
    GoodsRecomment,
    Floor,
    VantList,
    Card
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
          this.floors = res.data.data.floorName;
          this.floor1 = res.data.data.floor1;
          this.floor2 = res.data.data.floor2;
          this.floor3 = res.data.data.floor3;
          this.hotgoods = res.data.data.hotGoods;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.cardtitle{
  font-size: 0.8rem;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.2rem;
}
</style>