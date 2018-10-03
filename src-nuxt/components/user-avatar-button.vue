<template>
     <v-menu offset-y v-if="user">
        <v-btn slot="activator" flat >
        <v-avatar>
            <img :src="'data:image/jpg;base64,'+user.image">
        </v-avatar>
        </v-btn>
        <v-card class="user-info-card">
            <div class="user-info-wrapper">
                <v-avatar>
                    <img :src="'data:image/jpg;base64,'+user.image">
                </v-avatar>
                <span class="displayName">{{user.displayName}}</span>
            </div>
            <v-btn class="sign-out-button" :color="themeColor || '#c40030'" v-on:click="onSignOut()">
                Sign out
            </v-btn>
        </v-card>
    </v-menu>
</template>

<script>
export default {
  computed: {
    themeColor() {
      return this.$store.state.themeColor;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    onSignOut() {
      this.$store.commit('setUser', undefined);
      this.$store.commit('setToken', undefined);
      localStorage.removeItem('token');
    }
  }
};
</script>

<style scoped>
.user-info-card {
  padding: 16px;
}

.user-info-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.displayName {
  margin-left: 16px;
}
.sign-out-button {
  margin-top: 16px;
  color: white;
}
</style>
