<template>
  <v-btn v-on:click="singInWihtGoogle" xlarge class="google-button" color="#fff" >
    <img src="google-logo.png" style="height: 18px; margin-right: 24px"> 
    <span class="google-span">Sign in With Google</span>
  </v-btn>
</template>

<script>
export default {
  methods: {
    singInWihtGoogle() {
      this.$emit('click');
      const windowRef = window.open(`${this.$env.BASE_URL || 'http://localhost:3000'}/v1/api/auth/google`, 'Sign in', 'width=600,height=600');
      window.addEventListener('message', this.onTokenReceived);
    },
    onTokenReceived({ data, origin }) {
      console.log(data);
      if (origin !== (this.$env.BASE_URL || 'http://localhost:3000') || !data) return;
      if (!data.sender || data.sender !== 'malcoded') return;
      this.$emit('token', data.token);
      window.removeEventListener('message', this.onTokenReceived);
    }
  }
};
</script>

<style scoped>
.google-span {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}

.google-button {
  background-color: white;
  height: 40px;
  margin: 0;
}
</style>
