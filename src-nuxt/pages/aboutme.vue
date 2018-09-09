<template>
<v-container grid-list-xl fluid style="font-size: 23px; flex: 1 1 auto !important;">
  <v-layout row wrap>
  <v-flex lg8 offset-lg2 md8 offset-md2 sm10 offset-sm1 xs12>
   <v-card class="about-card">
    <v-layout>
      <v-flex xs12 sm8 class="text">
        <h2 style="width:100%">Want to devlelop awesome web applications?</h2>
        <h4>You have come the right place!</h4>
        <br/>
         <p>With over <b>25</b> comprehensive guides and tutorials about angular, react and vue there is an article for every skill level.</p>
        <p >Take your programming skills to the next level!</p>
      </v-flex>
      <v-flex sm4>
        <img src="malcoded-desktop.svg" width="100%"/>
      </v-flex>
      
    </v-layout>
   
  </v-card>
  <v-card class="about-card">
    <v-layout>
       <v-flex sm4>
        <img src="malcoded-hat.svg" width="100%"/>
       </v-flex>
      <v-flex xs12 sm8 class="text">
        <h2 style="width:100%">What malcoded is all About</h2>
        <h4>Detailed tutorials that contain everything you need to get started!</h4>
        <br/>
        <p>My goal is to provide rich and detailed tutorials, that actually help you to succeed.</p>
        <p>That is why all of my articles provide complete examples, that result in an running application!</p>
      </v-flex>
    </v-layout>
    <p>In this blog I share all the mistakes & discoveries I've made, so you can profit from my learnings, too!</p>
  </v-card>
  <v-card class="about-card">
    <div class="center-container text">
      <img src="lukas-marx.jpg" class="portrait">
      <h2 class="section-title no-padding-bot">About Lukas Marx</h2><br>
      <p class="sub-sub-section-title">I am a computer science (masters) student living in Germany. I've started writing this blog in 2016, to document my coding-journey for myself and others.</p><br>
      <p class="sub-sub-section-title">Entering the world of frontend-development with vanilla JavaScript, I quickly fell in love with single-page-applciation-frameworks, like Angular.</p><br>
      <p class="sub-sub-section-title">Since back then, I am continously exploring the depths of angular, sharing my most exiting findings here with you!</p><br>
    </div>
  </v-card></v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {};
</script>

<style>
.about-card {
  padding: 16px;
  margin-bottom: 32px;
  text-align: left;
}

.center-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: normal;
  word-break: normal;
}

.no-padding-bot {
  margin-bottom: 0;
}

.sub-sub-section-title {
  width: 100%;
}

.sub-section-title {
  margin-top: 48px;
}

@media screen and (max-width: 768px) {
  .hidden-sm {
    display: none;
  }
}

.portrait {
  border-radius: 50%;
}

.text {
  white-space: normal;
  word-wrap: break-word;
  font-size: 23px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  font-weight: 200;
}
</style>
