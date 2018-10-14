<template>
    <v-dialog v-model="show" max-width="75%">
      <v-card class="card">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" :fill="color || '#c40030'"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg> -->

        <v-card-title class="display-1 popup-title">Join the Newsletter</v-card-title>
        <v-layout row wrap>
          <v-flex lg6 md6 xs12 style="padding-right: 64px">
            <div class="point">
              <v-avatar color="#eee" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#c40030"  width="24" height="24" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              </v-avatar>
              <span class="title">Never miss a post</span>
              <p class="description-text">Receive updates when a new post is published.</p>
            </div>
            <div class="point">
              <v-avatar color="#eee" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#42b883" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </v-avatar>
              <span class="title">Stay in touch</span>
              <p class="description-text">Stay up to date about what is going on in the web-dev community and on this site.</p>
            </div>
            <div class="point">
              <v-avatar color="#eee" class="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00d8ff" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
              </v-avatar>
              <span class="title">Special offers</span>
              <p class="description-text">Get notified about special offers of our own, or our partners' products. Don't worry, we won't spam your inbox!</p>
            </div>
          </v-flex>
          <v-flex lg6 md6 xs12 style="display:flex">
            <v-form ref="form" v-model="valid" class="form" lazy-validation>
              <div>
                <v-text-field
                autocapitalize="off"
                required
                outline
                label="Your Email Address"
                :color="color || '#c40030'"
                v-model="email"
                :rules="emailRules"
                ></v-text-field>
              </div>
                  
              <p>Yes, I want to subscribe to the email newsletter about new articles, products and special offers.</p>

              <p></p>
              <p class="small-print">You can change your mind at any time by clicking the unsubscribe link in the footer of any email you
                  receive from us. For more information about our privacy practices, email performance mesurements, logging of the registration
                    process and your rights, please take a look at our 
                    <a href="/privacy" v-bind:style="{'color': color || '#c40030'}"> Privacy Policy</a> 
              </p>
            
              <v-card-actions class="actions">
                <v-btn class="button"  flat  @click.native="$emit('close')">No, thanks!</v-btn>
                <v-btn class="button"  :disabled="!valid"  large :color="color || '#c40030'" style="color:white"  v-on:click="onSubmit()">Subscribe</v-btn>
              </v-card-actions>
              <input type="hidden" name="u" value="0da2a10f3356ba09ffa2d94dd">
              <input type="hidden" name="id" value="f29acef0ef">
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
</template>

<script>
import subscribeToNewsletter from "~/apollo/mutations/subscribeToNewsletter";
export default {
  props: ["show"],
  data() {
    return {
      email: null,
      consent: false,
      close: false,
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  apollo: {
    $client: "post"
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.$apollo.mutate({
          mutation: subscribeToNewsletter,
          variables: {
            subscribeToNewsletterInput: { email: this.email }
          }
        });
        this.$emit("close");
      }
    }
  },

  computed: {
    color() {
      return this.$store.state.themeColor;
    }
  }
};
</script>

<style scoped>
.headline {
  font-size: 32px !important;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
}

.form {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.icon {
  margin-right: 32px;
}

.description-text {
  margin-left: 80px;
}

.point {
  margin-bottom: 64px;
}

.popup-title {
  margin-bottom: 64px;
}

.actions {
  display: flex;
  justify-self: flex-end;
  justify-content: flex-end;
  flex: 1;
  justify-items: flex-end;
  flex-direction: column;
}

.button {
  margin: 0 !important;
  padding: 0;
  width: 100%;
  height: 64px;
}
</style>
