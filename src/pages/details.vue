<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="getUrl" alt>
        <ul>
          <router-link
            tag="li"
            v-for="(nav, index) in detailsNav"
            :key="index"
            :to="'/details/' + nav.tag"
            active-class="active"
          >{{ nav.title }}</router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      detailsNav: [
        {
          title: "开放产品",
          tag: "earth"
        },
        {
          title: "品牌营销",
          tag: "loud"
        },
        {
          title: "使命必达",
          tag: "car"
        },
        {
          title: "勇攀高峰",
          tag: "hill"
        }
      ],
      imgUrl: {
        "/details/earth": require("../assets/1.png"),
        "/details/loud": require("../assets/2.png"),
        "/details/car": require("../assets/3.png"),
        "/details/hill": require("../assets/4.png")
      }
    };
  },
  created() {
    console.log(this.$route.path);
  },
  computed: {
    getUrl() {
        return this.imgUrl[this.$route.path];
    }
  }
};
</script>
<style>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: right;
  width: 980px;
}
.product-board {
  background-color: #fff;
  padding-bottom: 30px;
}
.product-board img {
  margin: 20px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #abcdef;
}
.product-board ul li {
  padding: 10px 20px;
  text-align: left;
  cursor: pointer;
}
.product-board ul li.active {
  background-color: #41b883;
  color: #fff;
}
.product-board ul li:hover {
  background-color: #41b883;
  color: #fff;
}
</style>
