<template>
  <div class="home">
    <h1>World Cup Qatar 2022™ Countdown Clock</h1>
    <flip-countdown deadline="2022-11-20 00:00:00"></flip-countdown>
    <Banner></Banner>
    <leaderboard></leaderboard>
  </div>
</template>



<script>
import Banner from "../components/Banner.vue";
import FlipCountdown from "vue2-flip-countdown";

import leaderboard from "../components/home/leaderboard";

export default {
  name: "Home",
  components: { Banner, FlipCountdown, leaderboard },
};
</script>

<style>
h1 {
  text-align: center;
}
.flip-card__top {
  color: #ccc !important;
  background: #222 !important;
}
.flip-card__bottom {
  color: #fff !important;
  background: #393939 !important;
}
.flip-card__back-bottom {
  color: #fff !important;
  background: #393939 !important;
}
.flip-card__back::before {
  color: #ccc !important;
  background: #222 !important;
}
.flip-card__back::after {
}
</style>