<template>
<v-scale-transition>
  <div>
     <v-card class="card" v-if="comment && !comment.deleted">
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
        <div class="actions">
          <v-tooltip bottom>
            <v-btn slot="activator" flat icon v-if="!edit && user" class="delete" v-on:click="answerComment()">
              <v-icon>chat</v-icon>
            </v-btn>
            <span>Answer</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn slot="activator" v-if="!edit && user && user.id === comment.author.id" flat icon   class="delete" v-on:click="editContent()">
                <v-icon>edit</v-icon>
            </v-btn>
            <span>Edit</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn slot="activator" v-if="!edit && user && user.id === comment.author.id"  flat icon  class="delete" v-on:click="startDeleteComment()">
                <v-icon>delete</v-icon>
            </v-btn>
            <span>Delete</span>
          </v-tooltip>
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
    <v-card class="card" v-if="comment && comment.deleted &&comment.answers && comment.answers.edges.length > 0">
        Deleted
      </v-card>
    <div class="answers">
      <v-card v-if="editAnswer" class="edit-answer">
        <div class="header">
          <v-avatar :size="50" class="avatar">
              <img   :src="'data:image/jpg;base64,'+user.image">
          </v-avatar>
          <span  class="displayName title">Answer {{comment.deleted ? 'delted' : comment.author.displayName}}</span>
          </div>
          <div class="edit-container">
            <commentEditor showCancelButton="true" v-on:commentChange="submitAnswer($event)" v-on:cancel="editAnswer=false"></commentEditor>
          </div>
      </v-card>
      <answer v-for="{node} in comment.answers.edges" :key="node.id" :comment="node" v-on:update="updateAnswer($event)" v-on:delete="deleteAnswer($event)"></answer>
      </div>
      </div>
    </v-scale-transition>
</template>

<script>
import commentEditor from '~/components/comments/comment-editor.vue';
import answer from '~/components/comments/answer.vue';
import markdown from '~/components/markdown.vue';
export default {
  components: {
    commentEditor,
    markdown,
    answer
  },
  props: ['comment', 'post', 'user'],
  data() {
    return {
      dialog: false,
      edit: false,
      newContent: null,
      editAnswer: false
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
    answerComment() {
      this.editAnswer = true;
    },
    updateComment(newContent) {
      const comment = Object.assign({ ...this.comment }, { content: newContent });
      this.$emit('update', comment);
      this.edit = false;
    },
    submitAnswer(content) {
      this.$emit('answer', { commentId: this.comment.id, content });
      this.editAnswer = false;
    },
    editContent() {
      if (!this.verifyToken()) {
        this.$emit('tokenInvalid');
        return;
      }
      this.newContent = this.comment.content;
      this.edit = true;
    },
    updateAnswer(answer) {
      this.$emit('update', answer);
    },
    deleteAnswer(commentId) {
      this.$emit('deleteAnswer', { commentId: this.comment.id, answerId: commentId });
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

.answers {
  padding-left: 64px;
}

.edit-answer {
  padding: 16px;
  margin-bottom: 32px;
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

.theme--light .delete {
  color: #5b5b5b;
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

.theme--light .v-icon {
  color: #5b5b5b;
}
</style>
