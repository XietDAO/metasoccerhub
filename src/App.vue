<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
}
</style>
