<template>
  <div class="home">
    <h1></h1>
    <Banner></Banner>
    <hr />
    <Leaderboard></Leaderboard>
    <hr />
    <News></News>
  </div>
</template>



<script>
import Banner from "@/components/Banner.vue";
import Leaderboard from "@/components/Leaderboard.vue";
import News from "@/components/News.vue";

export default {
  name: "Home",
  components: { Banner, Leaderboard, News },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>