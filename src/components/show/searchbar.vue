<template>
  <div class="search-bar">
    <van-row class="test-row">
      <van-col span="3" class="location-icon">
        <img :src="locationIcon" width="70%" />
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input" />
      </van-col>
      <van-col span="5" class="search-button">
        <van-button type="default" size="mini">查找</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      locationIcon: require("../../assets/img/location1.png")
    };
  }
};
</script>

<style>
.search-bar {
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border: 0;
  border-bottom: 1px rgba(255, 255, 255, 0.5) solid;
  background-color: #e5017d;
  color: #fff;
}
.location-icon {
  padding-top: 0.3rem;
  padding-left: 0.3rem;
}
.search-button {
  padding-left: 0.5rem;
}
</style>