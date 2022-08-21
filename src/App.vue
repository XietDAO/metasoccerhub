<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1380px;
  margin: 0 auto;
  background: #fff;
  background: rgba(0, 0, 0, 0);
}
#app {
  /* background: rgba(155, 154, 154, 0.438); */
  background-image: linear-gradient(-225deg, #ffffff, #ff51824f);
}
</style>
