<template>
  <!-- <a-carousel effect="fade" autoplay dots-class="slick-dots slick-thumb">
    <div v-for="item in 4" :key="item">
      <img :src="baseUrl + 'abstract0' + item + '.jpg'" />
    </div>
  </a-carousel> -->

  <div class="banner-container">
    <div class="banner-item">
      <div class="banner-item-img-wrapper">
        <div>
          <img class="banner-item-img" src="../assets/babydoge.png" alt="" />
        </div>
      </div>
      <div class="banner-item-info">
        <span>Token A | Telegram | Pancake</span>
      </div>
    </div>
    <div class="banner-item">
      <div class="banner-item-img-wrapper">
        <div class="banner-item-img-container">
          <img class="banner-item-img" src="../assets/nanodoge.png" alt="" />
        </div>
      </div>
      <div class="banner-item-info">
        <span>Token B | Telegram | Pancake</span>
      </div>
    </div>
    <div class="banner-item">
      <div class="banner-item-img-wrapper">
        <div class="banner-item-img-container">
          <img class="banner-item-img" src="../assets/tdoge.png" alt="" />
        </div>
      </div>
      <div class="banner-item-info">
        <span>Token C | Telegram | Pancake</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // baseUrl:
      //   "https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/",
    };
  },
  methods: {},
};
</script>
<style scoped>
.banner-container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  text-align: center;
}
.banner-item {
  margin: 20px;
}
.banner-item-img-wrapper {
  background: #ffffff;
  border-radius: 50px;
  overflow: hidden;
  border: 5px solid #fff;
  /* background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, rgb(255, 0, 0), rgb(255, 0, 0)),
    linear-gradient(90deg, #f30000, #ff0000); */
}
.banner-item-img {
  width: 100%;
}
.banner-item-info {
  font-size: 20px;
  color: black;
}
/* For demo */
/* .ant-carousel >>> .slick-slide {
  text-align: center;
  font-size: 0;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  display: block;
  margin: auto;
  max-width: 80%;
} */
/* .ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
} */
</style>
