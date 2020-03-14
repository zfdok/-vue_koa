<template>
  <div>
    <Card class="cate_card">
      <div v-for="(item, index) in categroy" :key="index" class="cate_card_item">
        <img v-lazy="item.image" alt srcset width="50rem" />
        <p>{{item.mallCategoryName}}</p>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "../../components/show/card_slot";

export default {
  name: "Category",
  props: {
    categroy: Array
  },
  components: {
    Card
  }
};
</script>

<style>
.cate_card {
  display: flex;
  flex-direction: row;
  font-size: 0.7rem;
  flex-wrap: nowrap;
}
.cate_card_item {
  flex: 1;
  text-align: center;
}
.cate_card_item p {
  margin: 0;
}
</style>