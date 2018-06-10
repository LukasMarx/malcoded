<template>
    <v-dialog v-model="show" max-width="500px" persistent>
      <v-card style="display: flex; flex-direction: column; align-items: center">
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#c40030"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>

        <v-card-title class="headline">Never miss a post!</v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation action="https://malcoded.us15.list-manage.com/subscribe/post" method="POST">
            <v-card-text>Subscribe to our free email newsletter!       
                <v-text-field
                name="MERGE0"
                type="email"
                autocapitalize="off"
                id="MERGE0"
                label="Your Email Address"
                color="red accent-4"
                v-model="email"
                :rules="emailRules"
                ></v-text-field>
                <h3 style="font-weight:200">Marketing Permissions</h3>
                <p class="small-print">malcoded.com will use the information you provide on this form to be in touch with you and to provide updates and marketing. You agree that we track wich links you click in emails you recieve from us. Please let us know all the ways you would like to hear from us:</p>
                <v-checkbox
                    name="gdpr[6371]"
                    id="gdpr_6371"
                    :label="`Email`"
                    v-model="consent"
                    color="red accent-4"
                    value="Y"
                ></v-checkbox>
                <input v-if="consent" type="hidden" name="gdpr[6371]" id="gdpr[6371]" tabindex="-1" value="Y">
                <p style="color:red;"> If you don't check this box, you will get no emails at all!</p>

                <p></p>
                <p class="small-print">You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at malcoded.blog@gmail.com. For more information about our privacy practices please visit our website. By clicking below, you agree that we may process your information in accordance with these terms.</p>
                <p class="small-print">We use MailChimp as our marketing automation platform. By clicking below to submit this form, you acknowledge that the information you provide will be transferred to MailChimp for processing in accordance with their <a href="https://mailchimp.com/legal/privacy/">Privacy Policy</a> and <a href="https://mailchimp.com/legal/terms/"> Terms</a></p>

            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn  flat="flat" large @click.native="$emit('close')">No, thanks!</v-btn>
                <v-btn type="submit" :disabled="!valid"  color="red accent-4" flat="flat" large @click.native="$emit('close')">Subscribe</v-btn>
            </v-card-actions>
            <input type="hidden" name="u" value="0da2a10f3356ba09ffa2d94dd">
            <input type="hidden" name="id" value="f29acef0ef">
        </v-form>
      </v-card>
    </v-dialog>
</template>

<script>
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
    methods: {
        submit() {}
    }
};
</script>

<style scoped>
.headline {
    font-size: 32px !important;
}
</style>
