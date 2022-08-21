<template>
  <div>
    <div class="news-sort">
      <div
        v-bind:class="[this.newNum == 1 ? 'activeNew' : '']"
        @click="activeNew(1)"
      >
        News
      </div>
      <div
        v-bind:class="[this.newNum == 2 ? 'activeNew' : '']"
        @click="activeNew(2)"
      >
        Partnership
      </div>
      <div
        v-bind:class="[this.newNum == 3 ? 'activeNew' : '']"
        @click="activeNew(3)"
      >
        Financing
      </div>
    </div>
    <div class="news-board">
      <div>
        <div class="news-item">
          <div class="news-item-img-wrapper">
            <div class="news-item-img-container">
              <img class="news-item-img" src="../assets/sandbox.png" alt="" />
            </div>
          </div>
          <div class="news-item-content">
            <span>
              The Sandbox Partners with Multiple Hong Kong Investors to Create
              Mega City and Celebrates with Launch of Land Sale
            </span>
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="news-item-img-wrapper">
          <div class="news-item-img-container">
            <img class="news-item-img" src="../assets/starbot.png" alt="" />
          </div>
        </div>
        <div class="news-item-content">
          <span> Starbot Announces A Triple IDO on Impossible Finance </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newNum: 1,
    };
  },
  methods: {
    activeNew: function (val) {
      this.newNum = val;
    },
  },
};
</script>

<style>
.news-board {
  display: grid;
  grid-template-columns: 50% 50%;
}
.news-item {
  margin: 20px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.news-item-img-wrapper {
  /* border-radius: 20px; */
  /* overflow: hidden; */
}
.news-item-img {
  width: 100%;
}

.news-item-img-container {
  padding: 50% 0 0;
  position: relative;
}
.news-item-img-container > img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.news-item-content {
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  color: rgb(255, 255, 255);
  padding: 2% 10%;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
}

.news-sort {
  display: inline-flex;
  background: rgba(175, 175, 175, 0.233);
  border-radius: 10px;
  padding: 5px;
  margin: 20px 0;
}
.news-sort div {
  padding: 10px 30px;
  font-family: "qatarb";
  font-size: 20px;
  color: black;
  margin: 0 3px;
}
.news-sort div:hover {
  border-radius: 10px;
  color: #ff0049;
  background: rgba(255, 255, 255, 0.12);
  cursor: pointer;
}
.activeNew {
  /* background: #fff !important; */
  background: linear-gradient(#ff0049, #b51647) !important;
  border-radius: 10px !important;
  color: #ffffff !important;
}
</style>