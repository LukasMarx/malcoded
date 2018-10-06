<template>
<div ref="comment">
    <v-card class="card">
      <span class="headline">Leave a comment</span>
      <div v-if="!user" class="sign-in-wrapper">
        <google-sing-in-button v-on:token="onToken($event)" v-on:click="error = null"></google-sing-in-button>
        <p class="caption disclaimer">We save your email address, your name and your profile picture on our servers when you sing in. Read more in our <a  v-bind:style="{'color': post.primaryColor || '#c40030'}" href="/privacy">Privacy Policy</a>.</p>
        <p class="error-message">{{error}}</p>
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
        v-on:tokenInvalid="onTokenInvalid()"
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
    return { comment: null, errors: {}, error: null };
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
      if (!this.verifyToken()) {
        this.onTokenInvalid();
      }
      this.$apollo
        .mutate({
          mutation: submitComment,
          variables: {
            postId: this.post.id,
            createCommentInput: { content: this.comment }
          },
          update: (store, { data: { createCommentForPost } }) => {
            this.comment = '';
            this.$apollo.queries.comments.refetch();
          }
        })
        .catch(error => {
          this.handleErrors(error);
        });
    },
    onDeleteComment(commentId) {
      this.$apollo
        .mutate({
          mutation: deleteComment,
          variables: {
            commentId
          },
          update: (store, { data: { deleteComment } }) => {
            this.$apollo.queries.comments.refetch();
          }
        })
        .catch(error => {
          this.handleErrors(error);
        });
    },
    onUpdateComment(comment) {
      if (!this.verifyToken()) {
        this.onTokenInvalid();
      }
      this.$apollo
        .mutate({
          mutation: updateComment,
          variables: {
            commentId: comment.id,
            updateCommentInput: { content: comment.content }
          },
          update: (store, { data: { updateComment } }) => {
            this.$apollo.queries.comments.refetch();
          }
        })
        .catch(error => {
          this.handleErrors(error);
        });
    },
    handleErrors(error) {
      if (error.graphQLErrors) {
        error.graphQLErrors.forEach(err => {
          if (err.message && err.message.statusCode == 403) {
            this.onTokenInvalid();
          }
        });
      }
    },
    onToken(token) {
      this.$store.commit('setToken', token.access_token);
      this.$store.commit('setUser', token.user);
      localStorage.setItem('token', JSON.stringify(token));
    },
    onTokenInvalid() {
      this.error = 'Your Session expired, please re-authenticate!';
      this.$store.dispatch('signOut');
      this.$refs.comment.scrollIntoView();
    },
    verifyToken() {
      try {
        const token = this.$store.state.token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        console.log(base64);
        const tokenObject = JSON.parse(atob(base64));
        console.log(tokenObject);

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

.error-message {
  font-style: oblique;
  color: #c40030;
}
</style>
