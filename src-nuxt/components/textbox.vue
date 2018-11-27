<template>
  <div class="textbox">
    <div class="line" v-bind:style="{ 'background-color': this.primaryColor || '#c40030'}"></div>
    <div>
      <span
        class="text title"
        v-if="title !== 'null'"
        v-bind:style="{ 'color': this.primaryColor || '#c40030'}"
      >{{title}}</span>
      <p class="text">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "primaryColor"]
};
</script>

<style scoped>
.title {
  font-size: 24px !important;
}

.text {
  font-size: 16px;
  margin-top: 8px;
}

.textbox {
  display: flex;
}

.line {
  width: 10px;
  margin-right: 32px;
}
</style>
