<template>
  <div class="container grey--text">
    <div
      class="element"
      v-on:click="onClick(headline.id)"
      v-for="headline in headlines"
      :key="headline.id"
    >{{headline.name}}</div>
  </div>
</template>

<script>
export default {
  props: ["headlines", "color"],
  methods: {
    onClick(id) {
      this.$emit("headline-click", id);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 0;
  font-size: 14px;
}

.element {
  cursor: pointer;
  margin: 8px;
}
</style>
