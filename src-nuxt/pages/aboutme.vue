<template>
<div>
   <div class="aboutme-content-container">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <h2 class="section-title no-padding-bot">Want to devlelop awesome Angular Apps?</h2>
        <h3 class="sub-section-title">You have come the right Place!</h3>
      </div>
      <div class="col-sm-4 hidden-sm">
        <img src="angular.png" style="width: 100%">
      </div>
    </div>
    <h4 class="sub-sub-section-title">With over <b>20</b> comprehensive guides and tutorials about angular, there is an article for every skill level</h4>
    <h4 class="sub-section-title" style="font-weight: 600">Take your angular programming skills to the next level!</h4>
  </div>
  <div class="aboutme-content-container">
    <div class="row">
       <div class="col-sm-4 hidden-sm">
        <svg fill="#000000" width="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="#dd0031"/>
        </svg>
      </div>
      <div class="col-xs-12 col-sm-8">
        <h2 class="section-title no-padding-bot">What malcoded is all About</h2>
        <h3 class="sub-section-title">Detailed Tutorials that contain everything you need to get started!</h3>
      </div>
    </div>
    <h4 class="sub-sub-section-title">My goal is to provide rich and detailed tutorials, that actually help you to succeed.</h4>
    <h4 class="sub-sub-section-title">That is why all of my articles provide complete examples, that result in an running application!</h4>
    <h4 class="sub-section-title" style="font-weight: 600">In this blog I share all the mistakes & discoveries I've made, so you can profit from my learnings, too!</h4>
  </div>
  <div class="aboutme-content-container">
    <div class="center-container">
      <img src="lukas-marx.jpg" class="portrait">
      <h2 class="section-title no-padding-bot">About Lukas Marx</h2>
      <h4 class="sub-sub-section-title">Yeah, that's me!</h4>
      <h4 class="sub-sub-section-title">I currently am a student of Computer Science (Masters) living in Germany. I've started writing this blog in 2016, to document my coding-journey for myself and others.</h4>
      <h4 class="sub-sub-section-title">Entering the world of frontend-development with vanilla JavaScript, I quickly fell in love with single-page-applciation-frameworks, like Angular.</h4>
      <h4 class="sub-sub-section-title">Since back then I am continously exploring the depths of angular, sharing my most exiting findings here with you!</h4>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.aboutme-content-container {
    width: 100%;
    padding: 32px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-top: 32px;
    margin-bottom: 32px;
    padding-bottom: 32px;
}
.center-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
    font-size: 40px;
    text-align: center;
}

.no-padding-bot {
    margin-bottom: 0;
}

.sub-section-title {
    font-size: 30px;
    font-weight: 100;
    text-align: center;
    width: 100%;
}

.sub-sub-section-title {
    font-size: 25px;
    font-weight: 100;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .hidden-sm {
        display: none;
    }
}
</style>
