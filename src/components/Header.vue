<template>
  <header>
    <div class="header-wrap">
      <div class="head">
        <div class="head-left">
          <a href="">
            <span>Logo</span>
          </a>
        </div>
        <div class="head-middle">
          <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="mail"> Navigation One </a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper"
                >Navigation Three - Submenu</span
              >
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
              <a-menu-item key="setting:3"> Option 3 </a-menu-item>
              <a-menu-item key="setting:4"> Option 4 </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
        <div class="head-right">
          <div>搜索</div>
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
.head-middle li {
  display: inline-block;
}

.head {
  display: flex;
  justify-content: space-between;
  max-width: 1380px;
  margin: 0 auto;
  height: 60px;
}

.header-wrap {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
}
</style>
