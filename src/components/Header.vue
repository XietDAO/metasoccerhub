<template>
  <header>
    <div class="header-wrap">
      <div class="head">
        <div class="head-left">
          <div class="head-left-wrapper">
            <div class="trending-tokens">
              <div class="tt-title">Trending Tokens</div>
              <div class="tt-content">
                <div>
                  <span>Token A</span>
                </div>
                <div>
                  <span>Token B</span>
                </div>
                <div>
                  <span>Token C</span>
                </div>
                <div>
                  <span>Token D</span>
                </div>
                <div>
                  <span>Token E</span>
                </div>
              </div>
            </div>
            <div class="nav">
              <div class="logo">
                <a href="">
                  <span>MetaSocHub</span>
                </a>
              </div>
              <div class="nav-content">
                <div>
                  <span>
                    <router-link to="/Charts">BSC Charts</router-link>
                  </span>
                </div>
                <div>
                  <span>
                    <router-link to="/BestCoinsToday"
                      >Best Coins Today</router-link
                    ></span
                  >
                </div>
                <div>
                  <span>
                    <router-link to="/NewListings"
                      >New Listings</router-link
                    ></span
                  >
                </div>
                <div>
                  <span>
                    <router-link to="/Airdrops">Airdrops</router-link></span
                  >
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div class="head-right">
          <div class="countdown">
            <span>Fifa World Cup</span>
            <div class="days">
              <span class="days-num">73</span><span> days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      current: ["mail"],
    };
  },
};
</script>

<style >
.header-wrap {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  font-family: "qatarb";
}

.trending-tokens,
.tt-content,
.nav,
.nav-content {
  display: flex;
}
.tt-content,
.nav-content {
  width: 100%;
  justify-content: space-evenly;
}

.tt-title {
  white-space: nowrap;
  /* padding: 10px; */
  font-size: 20px;
  color: #6e6d7a;
  border-radius: 10px;
  margin: 10px;
}
.tt-content > div,
.nav-content > div {
  display: flex;
  align-items: center; /*垂直居中*/
}
.tt-content span {
  /* background: #fdeb0c; */
  border-radius: 10px;
  padding: 10px 20px;
  color: #ff0049;
}
.nav-content span {
  /* background: #545454; */
  color: #fdeb0c;
  color: #6e6d7a;
  border-radius: 10px;
  padding: 5px 15px;
}
.nav-content span:hover {
  color: #ff0049;
  cursor: pointer;
}
.nav-content a {
  font-size: 20px !important;
}
.nav-content a:hover {
  color: #ff0049 !important;
}

.head {
  display: grid;
  grid-template-columns: 80% 20%;
  max-width: 1380px;
  margin: 0 auto;
}

.head-left {
}

.head-left a {
  color: black;
  font-size: 30px;

  /* line-height: 60px; */
}
.logo a:hover {
  color: #ff0049;
  /* #ff0049 */
  /* #9b072f */
}

.logo {
  font-family: "rye";
  display: flex;
  align-items: center;
}
/* .head-middle li {
  display: inline-block;
} */

.head-right {
  display: flex;
  align-items: center;
}

.countdown {
  margin: 0 40px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  /* background: #545454; */
  color: #ff0049;
}

.days-num {
  font-size: 30px;
}
</style>
