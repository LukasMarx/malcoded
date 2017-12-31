<template>
  <div class="h-social" v-if="post">
    <!--
      <a target="_blank" class="h-share-link" :href="'http://twitter.com/share?url=https://malcoded.com/posts/'+post.url+'&text='+post.title+'&via=malcoded&hashtags=angular,javascript'">
        <svg class="h-share-icon-big" aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="-2 -2 30 30">
          <title id="simpleicons-twitter-icon">Twitter icon</title>
          <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
          />
        </svg>
      </a>

      <a target="_blank" class="h-share-link" :href="'http://www.facebook.com/sharer/sharer.php?u=https://malcoded.com/posts/'+post.url">
        <svg class="h-share-icon-big" aria-labelledby="simpleicons-facebook-icon" role="img" viewBox="-2 -2 30 30">
          <title id="simpleicons-facebook-icon">Facebook icon</title>
          <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
          />
        </svg>
      </a>

      <a target="_blank" class="h-share-link" :href="'https://plus.google.com/share?url=https://malcoded.com/posts/'+post.url">
        <svg class="h-share-icon-big" aria-labelledby="simpleicons-googleplus-icon" role="img" viewBox="-2 -2 30 30">
          <title id="simpleicons-googleplus-icon">Google+ icon</title>
          <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.414 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.184v2.184h2.189V13.09H24Z"
          />
        </svg>
      </a>
       <a target="_blank" class="h-share-link" :href="'http://reddit.com/submit?url=https://malcoded.com/posts/'+post.url+'&title='+post.title">
        <svg class="h-share-icon-big" aria-labelledby="simpleicons-reddit-icon" role="img" viewBox="-2 -2 30 30">
          <title id="simpleicons-reddit-icon">Reddit icon</title>
          <path d="M2.204 14.049c-.06.276-.091.56-.091.847 0 3.443 4.402 6.249 9.814 6.249 5.41 0 9.812-2.804 9.812-6.249 0-.274-.029-.546-.082-.809l-.015-.032c-.021-.055-.029-.11-.029-.165-.302-1.175-1.117-2.241-2.296-3.103-.045-.016-.088-.039-.126-.07-.026-.02-.045-.042-.067-.064-1.792-1.234-4.356-2.008-7.196-2.008-2.815 0-5.354.759-7.146 1.971-.014.018-.029.033-.049.049-.039.033-.084.06-.13.075-1.206.862-2.042 1.937-2.354 3.123 0 .058-.014.114-.037.171l-.008.015zm9.773 5.441c-1.794 0-3.057-.389-3.863-1.197-.173-.174-.173-.457 0-.632.176-.165.46-.165.635 0 .63.629 1.685.943 3.228.943 1.542 0 2.591-.3 3.219-.929.165-.164.45-.164.629 0 .165.18.165.465 0 .645-.809.808-2.065 1.198-3.862 1.198l.014-.028zm-3.606-7.573c-.914 0-1.677.765-1.677 1.677 0 .91.763 1.65 1.677 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm7.233 0c-.914 0-1.678.765-1.678 1.677 0 .91.764 1.65 1.678 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm4.548-1.595c1.037.833 1.8 1.821 2.189 2.904.45-.336.719-.864.719-1.449 0-1.002-.815-1.816-1.818-1.816-.399 0-.778.129-1.09.363v-.002zM2.711 9.963c-1.003 0-1.817.816-1.817 1.818 0 .543.239 1.048.644 1.389.401-1.079 1.172-2.053 2.213-2.876-.302-.21-.663-.329-1.039-.329v-.002zm9.217 12.079c-5.906 0-10.709-3.205-10.709-7.142 0-.275.023-.544.068-.809C.494 13.598 0 12.729 0 11.777c0-1.496 1.227-2.713 2.725-2.713.674 0 1.303.246 1.797.682 1.856-1.191 4.357-1.941 7.112-1.992l1.812-5.524.404.095s.016 0 .016.002l4.223.993c.344-.798 1.138-1.36 2.065-1.36 1.229 0 2.231 1.004 2.231 2.234 0 1.232-1.003 2.234-2.231 2.234s-2.23-1.004-2.23-2.23l-3.851-.912-1.467 4.477c2.65.105 5.047.854 6.844 2.021.494-.464 1.144-.719 1.833-.719 1.498 0 2.718 1.213 2.718 2.711 0 .987-.54 1.886-1.378 2.365.029.255.059.494.059.749-.015 3.938-4.806 7.143-10.72 7.143l-.034.009zm8.179-19.187c-.74 0-1.34.599-1.34 1.338 0 .738.6 1.34 1.34 1.34.732 0 1.33-.6 1.33-1.334 0-.733-.598-1.332-1.347-1.332l.017-.012z"
          />
        </svg>
        </a>

      <a target="_blank" class="h-share-link" :href="'http://www.linkedin.com/shareArticle?url=https://malcoded.com/posts/'+post.url+'&title='+post.title+'&summary='+post.description+'&source=https://malcoded.com'">
        <svg class="h-share-icon-big" aria-labelledby="simpleicons-linkedin-icon" role="img" viewBox="-2 -2 30 30">
          <title id="simpleicons-linkedin-icon">LinkedIn icon</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a> -->

      <a icon target="_blank" rel="noopener" class="h-share-link" v-on:click="socialClick('twitter')" :href="'http://twitter.com/share?url=https://malcoded.com/posts/'+post.url+'&text='+post.title+'&via=malcoded&hashtags=angular,javascript'">
        <button aria-label="share on twitter" large icon class="icon-color icon-path">
          <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>
        </button>
      </a>
      <a target="_blank" rel="noopener" class="h-share-link" v-on:click="socialClick('facebook')" :href="'http://www.facebook.com/sharer/sharer.php?u=https://malcoded.com/posts/'+post.url">
        <button aria-label="share on facebook" large icon class="icon-color icon-path">
          <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/></svg>
        </button>
      </a>
      <a target="_blank" rel="noopener" class="h-share-link" v-on:click="socialClick('reddit')" :href="'http://reddit.com/submit?url=https://malcoded.com/posts/'+post.url+'&title='+post.title">
        <button aria-label="share on reddit" large icon class="icon-color icon-path">
          <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zm-307-181q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zm395 0q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zm251-120q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zm358 30q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"/></svg>
        </button>
      </a>      
       <a target="_blank" rel="noopener" class="h-share-link" v-on:click="socialClick('linkedin')" :href="'http://www.linkedin.com/shareArticle?url=https://malcoded.com/posts/'+post.url+'&title='+post.title+'&summary='+post.description+'&source=https://malcoded.com'">
        <button aria-label="share on linkedin" large icon class="icon-color icon-path">
          <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path  d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></svg>
        </button>
      </a>
      <a target="_blank" rel="noopener" class="h-share-link" v-on:click="socialClick('googleplus')" :href="'https://plus.google.com/share?url=https://malcoded.com/posts/'+post.url">
        <button aria-label="share on google-plus" large icon class="icon-color icon-path">
          <svg width="64" height="64" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1437 913q0 208-87 370.5t-248 254-369 91.5q-149 0-285-58t-234-156-156-234-58-285 58-285 156-234 234-156 285-58q286 0 491 192l-199 191q-117-113-292-113-123 0-227.5 62t-165.5 168.5-61 232.5 61 232.5 165.5 168.5 227.5 62q83 0 152.5-23t114.5-57.5 78.5-78.5 49-83 21.5-74h-416v-252h692q12 63 12 122zm867-122v210h-209v209h-210v-209h-209v-210h209v-209h210v209h209z"/></svg>
        </button>
      </a>
    </div>
</template>

<script>
export default {
  props: ['post', 'hoverColor'],
  methods: {
    socialClick(network) {
      this.$ga.event({
        eventCategory: 'social',
        eventAction: 'share',
        eventLabel: network
      });
    }
  }
};
</script>

<style>
.h-social {
  margin-top: 32px;
  display: inline-block;
}

.h-share-link {
  float: left;
  margin-right: 16px;
}

.icon-path {
  fill: #333;
}

.icon-path:hover {
  fill: #c40030;
}
</style>
