<template>
  <v-flex xl3 lg4 hidden-md-and-down class="s-container">
    <div class="sticky">
      <slot></slot>
    </div>
  </v-flex>
</template>

<script>
export default {};
</script>

<style scoped>
.s-container {
  font-size: smaller;
  margin: 0;
  padding-left: 128px;
}

.s-container * {
  margin-bottom: 32px;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  margin-top: 410px;
}
</style>
