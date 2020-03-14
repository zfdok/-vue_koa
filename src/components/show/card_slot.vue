<template>
  <div class="card_body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style>
.card_body {
  background-color: white;
  margin: 0.2rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  overflow: hidden;
}
</style>