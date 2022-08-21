<template>
  <footer>
    <div class="footer-wrap">
      <div class="foot">
        <div class="footer-info">
          <div class="footer-info-left">
            <div>
              <div class="footer-logo">MetaSocHub</div>
            </div>
            <div>
              <span>icon</span>
              <span>icon</span>
              <span>icon</span>
            </div>
          </div>
          <div class="footer-info-right">
            <div class="footer-info-item-1">
              <div>
                <span>Company</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
            </div>
            <div class="footer-info-item-2">
              <div>
                <span>Features</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
              <div>
                <span>XXXX</span>
              </div>
            </div>
          </div>
        </div>
        <div class="allrights">
          <span> © 2022 MetaSoccerHub - All Rights Reserved. </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-image: linear-gradient(-225deg, #fdd830, #ff0049);
  /* height: 10vh; */
}
.footer-wrap {
}
.foot {
  max-width: 1380px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  font-size: 30px;
}
.footer-logo {
  font-family: "Rye";
  font-size: 40px;
}
.footer-info {
  display: flex;
  justify-content: space-between;
}
.footer-info-right {
  display: flex;
}
.footer-info-left,
.footer-info-right {
  margin: 30px;
}
.footer-info-item-1,
.footer-info-item-2 {
  margin: 0 20px;
}

.allrights {
  color: hsla(0, 0%, 100%, 0.5);
}
</style>