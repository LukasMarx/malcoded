<template>
<div class="wrapper">
  <div class="header">
    <v-layout row wrap style="height:100%">
      <v-flex lg8 offset-lg2 md8 offset-md2 sm10 offset-sm1 xs12 style="height:100%; display: flex">
        <h1 class="page-title">About this site</h1>
      </v-flex>
    </v-layout>
  </div>
  <div class="section">
    <v-layout row wrap>
      <v-flex lg8 offset-lg2 md8 offset-md2 sm10 offset-sm1 xs12>  
        <h1 class="hdl">Do you want to develop awesome web applications?</h1>
        <h4 class="sub">You have come the right place!</h4>
        <br/>
        <div>
          <p>With more than <b>40</b> comprehensive guides and tutorials about angular,
            react and vue there is an article for every skill level.
          </p>
          <p >Take your programming skills to the next level!</p>
        </div>
        
      </v-flex>
    </v-layout>
  </div>
  <div class="section contrast">
    <v-layout row wrap>
      <v-flex lg8 offset-lg2 md8 offset-md2 sm10 offset-sm1 xs12>
        <h1>What malcoded is all about</h1>
        <h4 class="sub-contrast">Detailed tutorials that contain everything you need to get started!</h4>
        <br/>
        <p>My goal is to provide rich and detailed tutorials, that actually help you to succeed.</p>
        <p>That is why all of my articles provide complete examples, that result in an running application!</p>
        <p>In this blog I share all the mistakes & discoveries I've made, so you can profit from my learnings, too!</p>
      </v-flex>
    </v-layout>
  </div>
  <div class="section">
    <v-layout row wrap>
      <v-flex lg8 offset-lg2 md8 offset-md2 sm10 offset-sm1 xs12>
          <h1>About Lukas Marx</h1>
           <h4 class="sub">Software Developer</h4>
           <br/>
          <p>I am a computer science (masters) student living in Germany. I've started writing this blog in 2016, to document my coding-journey for myself and others.</p><br>
          <p>Entering the world of frontend-development with vanilla JavaScript, I quickly fell in love with single-page-applciation-frameworks, like Angular.</p><br>
          <p>Since back then, I am continously exploring the depths of angular, sharing my most exiting findings here with you!</p><br> 
      </v-flex>
    </v-layout>
  </div>
</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('setThemeColor', '#c40030');
  }
};
</script>

<style scoped>
.header {
  height: 200px;
  width: 100%;
  color: white;
  background-image: linear-gradient(to right top, #2b3955, #2c3c5a, #2c405f, #2c4364, #2c4769);
}

.section {
  padding-top: 128px;
  padding-bottom: 128px;

  font-size: 23px;
}

.contrast {
  background-image: linear-gradient(to right top, #1a2335, #1f2c41, #24344e, #283e5b, #2c4769);
  color: white;
}
.hdl {
  font-weight: bold;
}

.sub {
  color: #c40030;
  font-style: italic;
}
.sub-contrast {
  color: #c40030;
  font-style: italic;
  /* color: #1f2e41; */
}
.page-title {
  justify-self: center;
  align-self: center;
  font-size: 48px;
}

.wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 64px;
}
</style>
