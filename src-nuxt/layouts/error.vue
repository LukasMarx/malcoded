<template>
  <div class="container">
    <div class="error-container" v-if="error.statusCode === 404">
        <span class="error-code">404</span>
        <p class="error-message">Sorry, it looks like this<br/> page does not exist!</p>
    </div>
     <div class="error-container" v-if="error.statusCode === 500">
        <span class="error-code">500</span>
        <p class="error-message">Something went terribly wrong!</p>
    </div>
    <nuxt-link :to="{ path: '/'}" title="Home">
        <v-btn round color="primary" aria-label="Home" large>
            HOME
        </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.error-code {
  font-size: 200px;
  color: #c40030;
  text-align: center;
}

.error-message {
  font-size: 32px;
}
</style>
