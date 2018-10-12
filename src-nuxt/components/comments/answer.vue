<template>
<v-scale-transition>
  <div>
     <v-card class="card" v-if="comment">
        <div class="header">
        <v-avatar :size="50" class="avatar">
            <img   :src="'data:image/jpg;base64,'+comment.author.image">
        </v-avatar>
        <span  class="displayName title">{{comment.author.displayName}}</span>
        <span  class="displayName caption">{{timeSince + ' ago'}}</span>
        </div>
        <div v-if="edit" class="edit-container">
            <commentEditor showCancelButton="true" :input="comment.content" v-on:commentChange="updateComment($event)" v-on:cancel="edit=false"></commentEditor>
        </div>
        <markdown v-if="!edit" class="comment" :input="comment.content"></markdown>
        <div class="actions" v-if="user && user.id === comment.author.id">
            <v-btn v-if="!edit" flat icon :color="color || '#c40030'" class="delete" v-on:click="editContent()">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn v-if="!edit"  flat icon :color=" color|| '#c40030'" class="delete" v-on:click="startDeleteComment()">
                <v-icon>delete</v-icon>
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
                <v-btn :color="color|| '#c40030'" flat @click.native="dialog = false">Cancel</v-btn>
                <v-btn :color="color|| '#c40030'" v-on:click="deleteComment()" style="color:white">Delete</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
    </v-card>
      </div>
    </v-scale-transition>
</template>

<script>
import commentEditor from '~/components/comments/comment-editor.vue';
import markdown from '~/components/markdown.vue';
export default {
  components: {
    commentEditor,
    markdown
  },
  props: ['comment', 'post'],
  data() {
    return {
      dialog: false,
      edit: false,
      newContent: null,
      editAnswer: true
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
    },
    color() {
      return this.$store.state.themeColor;
    },
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.newContent = this.comment.content;
  },
  methods: {
    deleteComment() {
      this.$emit('delete', this.comment.id);
    },
    startDeleteComment() {
      if (!this.verifyToken()) {
        this.$emit('tokenInvalid');
        return;
      }
      this.dialog = true;
    },

    updateComment(newContent) {
      const comment = Object.assign({ ...this.comment }, { content: newContent });
      this.$emit('update', comment);
      this.edit = false;
    },
    editContent() {
      if (!this.verifyToken()) {
        this.$emit('tokenInvalid');
        return;
      }
      this.newContent = this.comment.content;
      this.edit = true;
    },
    verifyToken() {
      try {
        const token = this.$store.state.token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const tokenObject = JSON.parse(atob(base64));

        if (tokenObject.exp <= Date.now() / 1000) {
          return false;
        }
      } catch (error) {
        return false;
      }
      return true;
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
