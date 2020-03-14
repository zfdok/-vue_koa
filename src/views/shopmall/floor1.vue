<template>
  <card>
    <div class="floortitle">{{title}}</div>
    <div class="floor">
      <div class="floor_one">
        <img :src="goods.length>0 ? goods[0].image :null" alt srcset width="100%" height="100%" />
      </div>
      <div class="floor_two">
        <img :src="goods.length>0 ? goods[1].image :null" alt srcset width="100%" />
        <img :src="goods.length>0 ? goods[2].image :null" alt srcset width="100%" />
      </div>
    </div>
    <div class="floor_three">
      <div class="floor_three_item" v-for="(item, index) in goods.slice(3)" :key="index">
        <img :src="item.image" alt srcset width="100%" />
      </div>
    </div>
  </card>
</template>
floor_three
<script>
import Card from "../../components/show/card_slot";
export default {
  name: "Floor1",
  props: {
    goods: Array,
    title:String
  },
  components: {
    Card
  }
};
</script>

<style>
.floortitle{
  font-size: 0.8rem;
  color: deeppink;
  border-bottom: 1px #eee solid;
  padding-bottom: 0.2rem;
}
.floor {
  display: flex;
}
.floor div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor_one {
  flex: 1;
  border-right: solid 1px #eee;
  border-bottom: solid 1px #eee;
}
.floor_two {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.floor_two img {
  flex: 1;
  border-bottom: solid 1px #eee;
}
.floor_three {
  display: flex;
  flex-wrap: wrap;
}
.floor_three div {
  flex: 1;
  border-bottom: solid 1px #eee;
}
.floor_three div:nth-child(odd) {
  border-right: solid 1px #eee;
}
</style>