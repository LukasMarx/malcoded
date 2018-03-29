<template>
   <v-card height="100%" style="display: flex; flex-flow: column; padding: 4px">


        <div class="card-thumbnail-wrapper">
            <div class="animated-background card-thumbnail" style="height: 100%; position:absolute"></div>
            <!-- <progressiveimage class="card-thumbnail" :alt="post.title" :src="'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/'+post.thumbnail" /> -->
        </div>
 

        <div class="animated-background placeholder-element" style="width: 80%; height: 32px; margin-top: 24px"></div>
        <div class="animated-background placeholder-element" style="width: 60%; height: 32px;"></div>
 
        <v-flex>
        <div class="animated-background placeholder-element" style="width: 90%; margin-top: 16px"></div>
        <div class="animated-background placeholder-element" style="width: 90%"></div>
        <div class="animated-background placeholder-element" style="width: 90%"></div>
        <div class="animated-background placeholder-element" style="width: 90%"></div>
        </v-flex>


    <v-card-actions>

        <div class="animated-background placeholder-icon"></div>
        <div class="animated-background placeholder-icon"></div>
        <div class="animated-background placeholder-icon"></div>

        <v-spacer></v-spacer>
        <div class="animated-background placeholder-element" style="float:right; width: 109px; height: 32px; margin-right: 20px"></div>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.card-thumbnail-wrapper {
    padding-top: 56.25%;
    position: relative;
}

.card-thumbnail {
    width: 100%;
    margin-bottom: -5px;
    top: 0;
    left: 0;
    position: absolute;
}

.placeholder-element {
    height: 19px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
}
.placeholder-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 8px;
}

.animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    position: relative;
    background-size: 250%;
}

@keyframes placeHolderShimmer {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
}
</style>
