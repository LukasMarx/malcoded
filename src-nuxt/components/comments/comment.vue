<template>
<v-scale-transition>
     <v-card class="card" v-if="comment">
        <div class="header">
        <v-avatar :size="50" class="avatar">
            <img   :src="'data:image/jpg;base64,'+comment.author.image">
        </v-avatar>
        <span  class="displayName title">{{comment.author.displayName}}</span>
        <span  class="displayName caption">{{timeSince + ' ago'}}</span>
        </div>
        <div v-if="edit" class="edit-container">
            <v-tabs  :slider-color="post.primaryColor || '#c40030' ">
                <v-tab >
                    Comment
                </v-tab>
                <v-tab-item class="tab-item">
                    <v-textarea
                        outline
                        height="200px"
                        no-resize
                        v-model="newContent"
                        label="Comment"
                        class="textarea"
                        :color="post.primaryColor || '#c40030' ">
                    </v-textarea>
                </v-tab-item>
                <v-tab>
                    Preview
                </v-tab>
                <v-tab-item class="tab-item">
                    <markdown class="preview" :input="newContent"></markdown>
                </v-tab-item>
            </v-tabs>
        </div>
        <markdown v-if="!edit" class="comment" :input="comment.content"></markdown>
        <div class="actions" v-if="user && user.id === comment.author.id"> 
            <v-btn v-if="!edit" flat icon :color="post.primaryColor || '#c40030'" class="delete" v-on:click="editContent()">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn v-if="!edit"  flat icon :color="post.primaryColor || '#c40030'" class="delete" v-on:click="dialog = true">
                <v-icon>delete</v-icon>
            </v-btn>
            <v-btn v-if="edit"  flat :color="post.primaryColor || '#c40030'" class="delete" v-on:click="edit = false">
                Cancel
            </v-btn>
            <v-btn v-if="edit" :color="post.primaryColor || '#c40030'" class="delete" v-on:click="updateComment()">
                Update
            </v-btn>
        </div>
        <v-dialog v-model="dialog" max-width="290">
                <v-card>
                    <v-card-title class="headline">Delete Comment</v-card-title>
                    <v-card-text>
                        Do you really want to delete this comment?
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :color="post.primaryColor || '#c40030'" flat @click.native="dialog = false">Cancel</v-btn>
                    <v-btn :color="post.primaryColor || '#c40030'" v-on:click="deleteComment()" style="color:white">Delete</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
    </v-card>
    </v-scale-transition>
</template>

<script>
import markdown from '~/components/markdown.vue';
export default {
  components: {
    markdown
  },
  props: ['comment', 'post', 'user'],
  data() {
    return {
      dialog: false,
      edit: false,
      newContent: null
    };
  },
  computed: {
    timeSince() {
      const date = new Date(this.comment.creationDate);
      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + ' years';
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
        return interval + ' months';
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
        return interval + ' days';
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
        return interval + ' hours';
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
        return interval + ' minutes';
      }
      return Math.floor(seconds) + ' seconds';
    }
  },
  methods: {
    deleteComment() {
      this.$emit('delete', this.comment.id);
    },
    updateComment() {
      this.$emit('update', Object.assign({ ...this.comment }, { content: this.newContent }));
      this.edit = false;
    },
    editContent() {
      this.newContent = this.comment.content;
      this.edit = true;
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  margin-left: -42px;
  border-radius: 50%;
}

.card {
  padding: 16px;
  padding-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}

.preview {
  height: 200px;
}

.comment {
  overflow-y: auto;
  margin-left: 32px;
  margin-right: 16px;
}

.displayName {
  margin-left: 24px;
}

.delete {
  color: white;
  margin: 0;
  margin-right: 16px;
}

.edit-container {
  margin-left: 32px;
  margin-right: 16px;
}

.actions {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
}

.tab-item {
  padding: 16px;
  height: 232px;
}
</style>
