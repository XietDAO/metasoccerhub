<template>
  <a-carousel effect="fade" autoplay dots-class="slick-dots slick-thumb">
    <div v-for="item in 4" :key="item">
      <img :src="baseUrl + 'abstract0' + item + '.jpg'" />
    </div>
  </a-carousel>
</template>
<script>
export default {
  data() {
    return {
      baseUrl:
        "https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/",
    };
  },
  methods: {},
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 350px; */
  /* line-height: 160px; */
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
  /* border: 5px solid #fff; */
  display: block;
  margin: auto;
  max-width: 80%;
}
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
