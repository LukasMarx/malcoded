<template>
  
  <v-container grid-list-xl fluid style="flex: 1 1 auto !important;">
        <v-layout row wrap>
  <v-flex lg6 offset-lg3 md8 offset-md2 sm10 offset-sm1 xs12>
      <v-card class="legal-card">
        <h1 style="font-size:40px">About this Website</h1>
        <br>
        <h3>Contact</h3>
        <br>
        <p>Lukas Marx</p>
        <p>Adlerstrasse 30</p>
        <p>46459 Rees, Germany</p>
        <p>Phone: +49 174 3859441</p>
        <p>E-Mail: malcoded.blog@gmail.com</p>
        <h3>Responsible for content</h3>
        <br>
        <p>Lukas Marx</p>
        <br>
      </v-card>
  </v-flex>
        </v-layout>
  </v-container>

</template>

<script>
export default {
    methods: {
        optOut() {
            this.$ga.commands.optOut();
        }
    }
};
</script>

<style>
.ga-button {
    margin-top: 32px;
}

.legal-card {
    margin-top: 32px;
    margin-bottom: 32px;
    padding-bottom: 32px;
    word-break: break-word;
    text-align: left;
    padding: 32px;
}

/* .page-enter {
    transform: translateX(100%);
    opacity: 1;
}

.page-enter-active {
    transition: all 0.4s;
}

.page-enter-to {
    opacity: 1;
}

.page-leave-active {
    transition: all 0.2s;
    opacity: 0;
    transform: translateX(100%);
} */
</style>
