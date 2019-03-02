<template>
  <div>
    <v-tabs :slider-color="themeColor|| '#c40030' ">
      <v-tab>Comment</v-tab>
      <v-tab-item class="tab-item">
        <v-textarea
          outline
          height="200px"
          no-resize
          v-model="newContent"
          label="Comment"
          class="textarea"
          :color="themeColor || '#c40030' "
        ></v-textarea>
      </v-tab-item>
      <v-tab>Preview</v-tab>
      <v-tab-item class="tab-item">
        <markdown class="preview textarea" :input="newContent"></markdown>
      </v-tab-item>
    </v-tabs>
    <div class="actions">
      <v-btn
        v-if="showCancelButton"
        flat
        :color="themeColor || '#c40030'"
        class="action"
        v-on:click="cancel()"
        style="margin-right: 16px"
      >Cancel</v-btn>
      <v-btn
        :color="themeColor || '#c40030'"
        class="action"
        v-on:click="updateComment()"
      >{{submitText || 'Submit'}}</v-btn>
    </div>
  </div>
</template>

<script>
import markdown from "~/components/markdown.vue";
export default {
  components: { markdown },
  props: ["submitText", "showCancelButton", "input"],
  data() {
    return {
      newContent: null
    };
  },
  mounted() {
    this.newContent = this.input;
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    themeColor() {
      return this.$store.state.themeColor;
    }
  },
  methods: {
    updateComment() {
      this.$emit("commentChange", this.newContent);
      this.newContent = "";
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.action {
  color: white !important;
  margin: 0;
}

.actions {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.tab-item {
  padding: 16px;
}
.textarea {
  height: 200px;
}
</style>
