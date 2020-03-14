<template>
  <div class="floor">
    <div class="floor_one">
      <img :src="goods.length>0 ? goods[0].image :null" alt srcset width="100%" />
    </div>
    <div class="floor_two">
      <img :src="goods.length>0 ? goods[1].image :null" alt srcset width="100%" />
      <img :src="goods.length>0 ? goods[2].image :null" alt srcset width="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Floor1",
  props: {
    goods: Array
  }
};
</script>

<style>
.floor{
    display: flex;
}
.floor div{
    width: 10rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.floor_one{
    flex: 1;
    border: solid 1px black;
}
.floor_two{
    flex: 1;
    display: flex;
    flex-direction:column;
    border: solid 1px black;
}
.floor_two img{
    flex: 1;
}
</style>