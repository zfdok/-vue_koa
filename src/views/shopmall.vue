<template>
  <div>
    <SearchBar></SearchBar>
    <ImgSwarp></ImgSwarp>
  </div>
</template>

<script scoped>
import ImgSwarp from "../components/show/imgswarp";
import SearchBar from "../components/show/searchbar";
import { request } from "../network/request";
export default {
  name: "ShopMall",
  data() {
    return {
      msg: "haha",
      locationIcon: require("../assets/img/location1.png")
    };
  },
  components: {
    ImgSwarp,
    SearchBar
  },
  created() {
    request({
      url: "/shopmall"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>