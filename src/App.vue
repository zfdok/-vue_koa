<template>
  <div id="app">
    <ShopMall></ShopMall>
  </div>
</template>

<script>
import ShopMall from "./views/shopmall";
export default {
  name: "App",
  components: {
    ShopMall
  }
};
</script>


<style scoped>
#app{
  background-color: #f0f0f0;
}
</style>
