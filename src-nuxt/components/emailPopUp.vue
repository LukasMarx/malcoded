<template>
    <v-dialog v-model="show" max-width="500px" persistent>
      <v-card style="display: flex; flex-direction: column; align-items: center">
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" :fill="color || '#c40030'"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>

        <v-card-title class="headline">Subscribe to the newsletter!</v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>     
                <v-text-field
                autocapitalize="off"
                required
                label="Your Email Address"
                :color="color || '#c40030'"
                v-model="email"
                :rules="emailRules"
                ></v-text-field>
                <h3 style="font-weight:200">Yes, I want to subscribe to the email newsletter about new articles, products and special offers.</h3>


                <p></p>
                <p class="small-print">You can change your mind at any time by clicking the unsubscribe link in the footer of any email you
                     receive from us. For more information about our privacy practices, email performance mesurements, logging of the registration
                      process and your rights, please take a look at our 
                      <a href="/privacy" v-bind:style="{'color': color || '#c40030'}"> Privacy Policy</a> 
                </p>
            

            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn  flat="flat" large @click.native="$emit('close')">No, thanks!</v-btn>
                <v-btn :disabled="!valid"  :color="color || '#c40030'" style="color:white" large v-on:click="onSubmit()">Subscribe</v-btn>
            </v-card-actions>
            <input type="hidden" name="u" value="0da2a10f3356ba09ffa2d94dd">
            <input type="hidden" name="id" value="f29acef0ef">
        </v-form>
      </v-card>
    </v-dialog>
</template>

<script>
import subscribeToNewsletter from '~/apollo/mutations/subscribeToNewsletter';
export default {
  props: ['show'],
  data() {
    return {
      email: null,
      consent: false,
      close: false,
      valid: false,
      emailRules: [v => !!v || 'E-mail is required', v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']
    };
  },
  apollo: {
    $client: 'post'
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
        this.$emit('close');
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
</style>
