<template>
  <div>
    <picture v-if="show">
      <source media="(max-width: 600px)" :srcset="src+'.webp/500'" type="image/webp">
      <source media="(max-width: 960px)" :srcset="src+'.webp/860'" type="image/webp">
      <source media="(max-width: 1264px)" :srcset="src+'.webp/1200'" type="image/webp">
      <source media="(min-width: 1265px)" :srcset="src+'.webp'" type="image/webp">
      <source media="(max-width: 600px)" :srcset="src+'.png/500'" type="image/png">
      <source media="(max-width: 960px)" :srcset="src+'.png/860'" type="image/png">
      <source media="(max-width: 1264px)" :srcset="src+'.png/1200'" type="image/png">
      <source media="(min-width: 1265px)" :srcset="src+'.png'" type="image/png">
      <img style="width:100%" :alt="alt" :src="src+ '.jpg'">
    </picture>
    <noscript v-html="getNoScript()"></noscript>
  </div>
</template>

<script>
const inBrowser = typeof window !== "undefined";

export default {
  data() {
    return {
      rect: null,
      show: false
    };
  },
  props: ["src", "alt"],
  methods: {
    getRect() {
      this.rect = this.$el.getBoundingClientRect();
    },
    handleScroll() {
      if (!this.show) this.show = this.checkInView();
    },
    checkInView() {
      this.getRect();
      return (
        inBrowser &&
        (this.rect.top < window.innerHeight * 1.5 && this.rect.bottom > 0 - 500)
      );
    },
    getNoScript() {
      return `<picture>
       <source media="(max-width: 600px)" srcset="${
         this.src
       }.webp/500" type="image/webp">
        <source media="(max-width: 960px)" srcset="${
          this.src
        }.webp/860" type="image/webp">
        <source media="(max-width: 1264px)" srcset="${
          this.src
        }.webp/1200" type="image/webp">
        <source media="(min-width: 1265px)" srcset="${
          this.src
        }.webp" type="image/webp">
        <source media="(max-width: 600px)" srcset="${
          this.src
        }.png/500" type="image/png">
        <source media="(max-width: 960px)" srcset="${
          this.src
        }.png/860" type="image/png">
        <source media="(max-width: 1264px)" srcset="${
          this.src
        }.png/1200" type="image/png">
        <source media="(min-width: 1265px)" srcset="${
          this.src
        }.png" type="image/png">
        <img style="width:100%" alt="${this.alt}" src="${this.src}.jpg">
    </picture>`;
    }
  },
  mounted() {
    this.handleScroll();
  },
  beforeMount() {
    if (typeof window !== "undefined") {
      var supportsPassive = false;
      document.createElement("div").addEventListener("test", _ => {}, {
        get passive() {
          supportsPassive = true;
        }
      });

      window.addEventListener(
        "scroll",
        this.handleScroll,
        supportsPassive ? { passive: true } : false
      );
      window.addEventListener(
        "wheel",
        this.handleScroll,
        supportsPassive ? { passive: true } : false
      );
      window.addEventListener(
        "mousewheel",
        this.handleScroll,
        supportsPassive ? { passive: true } : false
      );
      window.addEventListener(
        "resize",
        this.handleScroll,
        supportsPassive ? { passive: true } : false
      );
      window.addEventListener(
        "touchmove",
        this.handleScroll,
        supportsPassive ? { passive: true } : false
      );
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("wheel", this.handleScroll);
    window.removeEventListener("mousewheel", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
    window.removeEventListener("touchmove", this.handleScroll);
  }
};
</script>

<style>
</style>
