<template>
  <div>
    <div class="top-sort">
      <div
        v-bind:class="[this.topNum == 1 ? 'activeTop' : '']"
        @click="activeTop(1)"
      >
        Ranking
      </div>
      <div
        v-bind:class="[this.topNum == 2 ? 'activeTop' : '']"
        @click="activeTop(2)"
      >
        Tops Today
      </div>
      <div
        v-bind:class="[this.topNum == 3 ? 'activeTop' : '']"
        @click="activeTop(3)"
      >
        All Coins
      </div>
      <div
        v-bind:class="[this.topNum == 4 ? 'activeTop' : '']"
        @click="activeTop(4)"
      >
        Presale
      </div>
    </div>
    <div class="top-board">
      <a-table :columns="columns" :data-source="data"> </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  components: {},
  data() {
    return {
      topNum: 1,
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "Marketcap",
          dataIndex: "Marketcap",
          key: "Marketcap",
        },
        {
          title: "24h Change",
          dataIndex: "change",
          key: "change",
        },
        {
          title: "Holders",
          dataIndex: "holders",
          key: "holders",
        },
        {
          title: "Listing Date",
          dataIndex: "l-date",
          key: "l-date",
        },
        {
          title: "Socials",
          dataIndex: "socials",
          key: "socials",
        },
        {
          title: "Vote",
          dataIndex: "vote",
          key: "vote",
        },
      ],
      data: [
        {
          key: "1",
          name: "Token A",
          vote: 35000,
        },
        {
          key: "2",
          name: "Token B",
          vote: 30000,
        },
        {
          key: "3",
          name: "Token C",
          vote: 25000,
        },
        {
          key: "4",
          name: "Token D",
        },
        {
          key: "5",
          name: "Token E",
        },
        {
          key: "6",
          name: "Token F",
        },
        {
          key: "7",
          name: "Token G",
        },
      ],
    };
  },
  methods: {
    activeTop: function (val) {
      this.topNum = val;
      console.log(this.topNum);
    },
  },
};
</script>

<style >
.top-sort {
  display: inline-flex;
  background: rgba(175, 175, 175, 0.233);
  border-radius: 10px;
  padding: 5px;
  margin: 20px 0;
}
.top-sort div {
  padding: 10px 30px;
  font-family: "qatarb";
  font-size: 16px;
  color: black;
  margin: 0 3px;
}
.top-sort div:hover {
  border-radius: 10px;
  color: #ff0049;
  background: rgba(255, 255, 255, 0.12);
  cursor: pointer;
}
.activeTop {
  background: #ff0049 !important;
  border-radius: 10px !important;
  color: #fff !important;
}
</style>