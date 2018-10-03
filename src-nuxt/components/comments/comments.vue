<template>
<div>
    <v-card class="card">
      <span class="headline">Leave a comment</span>
      <div v-if="!user" class="sign-in-wrapper">
        <google-sing-in-button v-on:token="onToken($event)"></google-sing-in-button>

        <p class="caption disclaimer">We save your email address, your name and your profile picture on our servers when you sing in. Read more in our <a  v-bind:style="{'color': color || '#c40030'}" href="/privacy">Privacy Policy</a>.</p>
      </div>
        <div v-if="user">
          <v-avatar :size="50" class="avatar">
              <img  v-if="user" :src="'data:image/jpg;base64,'+user.image">
          </v-avatar>
          <div class="edit-container">
          <v-tabs :slider-color="post.primaryColor || '#c40030' ">
              <v-tab >
                  Comment
              </v-tab>
              <v-tab-item class="tab-item">
                  <v-textarea
                      outline
                      height="200px"
                      no-resize
                      v-model="comment"
                      label="Comment"
                      class="textarea"
                      :color="post.primaryColor || '#c40030' ">
                  </v-textarea>
              </v-tab-item>
              <v-tab>
                  Preview
              </v-tab>
              <v-tab-item class="tab-item">
                  <markdown class="preview" :input="comment"></markdown>
              </v-tab-item>
          </v-tabs>
          </div>
           <div class="actions">
            <v-btn :color="post.primaryColor || '#c40030'" class="submit" v-on:click="submitComment()">Submit</v-btn>
          </div>
         </div>
    </v-card>
    <comment v-for="comment in comments" :key="comment.id" 
        :comment="comment" 
        :user="user" 
        :post="post" 
        v-on:delete="onDeleteComment($event)" 
        v-on:update="onUpdateComment($event)">
    </comment>

</div>
</template>

<script>
import markdown from '~/components/markdown.vue';
import comment from '~/components/comments/comment.vue';
import googleSingInButton from '~/components/sign-in-buttons/google-sign-in.vue';
import submitComment from '~/apollo/mutations/submitComment';
import deleteComment from '~/apollo/mutations/deleteComment';
import updateComment from '~/apollo/mutations/updateComment';
import comments from '~/apollo/queries/comments';
export default {
  components: {
    markdown,
    comment,
    googleSingInButton
  },
  props: ['post'],
  data() {
    return { comment: null };
  },
  apollo: {
    $client: 'post',
    comments: {
      query: comments,
      prefetch: true,
      variables() {
        return {
          postId: this.post.id
        };
      },
      update: ({ getCommentsForPost }) => {
        if (getCommentsForPost) {
          return getCommentsForPost.edges.map(edge => edge.node);
        }
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    submitComment() {
      this.$apollo.mutate({
        mutation: submitComment,
        variables: {
          postId: this.post.id,
          createCommentInput: { content: this.comment }
        },
        update: (store, { data: { createCommentForPost } }) => {
          this.comment = '';
          this.$apollo.queries.comments.refetch();
        }
      });
    },
    onDeleteComment(commentId) {
      this.$apollo.mutate({
        mutation: deleteComment,
        variables: {
          commentId
        },
        update: (store, { data: { deleteComment } }) => {
          this.$apollo.queries.comments.refetch();
        }
      });
    },
    onUpdateComment(comment) {
      this.$apollo.mutate({
        mutation: updateComment,
        variables: {
          commentId: comment.id,
          updateCommentInput: { content: comment.content }
        },
        update: (store, { data: { updateComment } }) => {
          this.$apollo.queries.comments.refetch();
        }
      });
    },
    onToken(token) {
      this.$store.commit('setToken', token.access_token);
      this.$store.commit('setUser', token.user);
      localStorage.setItem('token', JSON.stringify(token));
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
.headline {
  margin-left: 32px;
}
.card {
  padding: 16px;
  padding-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
}

.tab-item {
  padding: 16px;
}
.textarea {
  height: 200px;
}

.preview {
  height: 200px;
  overflow-y: auto;
}

.preview > pre {
  width: 100%;
}

code {
  width: 100%;
  flex: 1;
}

.submit {
  align-self: flex-end;
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

.sign-in-wrapper {
  margin-top: 32px;
  margin-left: 32px;
}

.disclaimer {
  margin-top: 16px;
}
</style>
