<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product, index) in productList" :key="index" class="pro">
          <h3>{{ product.category }}</h3>
          <ul>
            <li v-for="(item, index) in product.list" :key="index">
              <a :href="item.url">{{ item.name }}</a>
              <span class="hot-tag" v-if="item.hot">HOT</span>
            </li>
          </ul>
          <div v-if="index % 2 == 0" class="hr"></div>
        </div>
      </div>
      <div class="index-left-block">
        <h2>最新消息</h2>
        <div>
          <ul>
            <li v-for="item in news" :key="item.id">
              <a target="_blank" :href="item.url">{{ item.login }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="index-right">
      <swiper :options="swiperOption">
        <swiper-slide>
          <a href>
            <img src="../assets/1.png" class="slideImg">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href>
            <img src="../assets/2.png" class="slideImg">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href>
            <img src="../assets/3.png" class="slideImg">
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href>
            <img src="../assets/4.png" class="slideImg">
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(board,index) in boardList" :key="index">
          <div :class="['index-board-item-img', board.tag]">
            <img src alt>
          </div>
          <div class="index-board-item-inner">
            <h2>{{ board.title }}</h2>
            <p>{{ board.desc }}</p>
            <div class="index-board-button">
              <router-link :to="'/details/' + board.tag">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true
      },
      productList: [
        {
          category: "手机应用类",
          list: [
            {
              name: "91助手",
              url: "http://www.atone.shop/wordpress",
              hot: false
            },
            {
              name: "豌豆荚",
              url: "http://www.atone.shop/wordpress",
              hot: true
            },
            {
              name: "金山毒霸",
              url: "http://www.atone.shop/wordpress",
              hot: false
            }
          ]
        },
        {
          category: "PC产品",
          list: [
            {
              name: "WebStorm",
              url: "http://www.atone.shop/wordpress",
              hot: false
            },
            {
              name: "HBuilder",
              url: "http://www.atone.shop/wordpress",
              hot: true
            },
            {
              name: "Sublime Text 3",
              url: "http://www.atone.shop/wordpress",
              hot: false
            },
            {
              name: "Atom",
              url: "http://www.atone.shop/wordpress",
              hot: true
            }
          ]
        }
      ],
      news: [],
      boardList: [
        {
          title: "开放产品",
          desc: "开放产品是一款开放产品",
          tag: "earth"
        },
        {
          title: "品牌营销",
          desc: "品牌营销帮助你的产品更好地找到定位",
          tag: "loud"
        },
        {
          title: "使命必达",
          desc: "使命必达快速迭代永远保持最前端的速度",
          tag: "car"
        },
        {
          title: "勇攀高峰",
          desc: "帮你勇闯高峰，到达事业的顶峰",
          tag: "hill"
        }
      ]
    };
  },
  created() {
    this.$axios
      .get("https://api.github.com/users")
      .then(res => {
        // console.log(res.data);
        this.news = res.data.slice(1, 11);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
ul li a:hover {
  opacity: 0.7;
}
.index-wrap {
  width: 1150px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.index-left {
  margin-right: 20px;
}
.index-right {
  margin-top: 20px;
  width: 780px;
}
.index-left-block {
  padding-top: 20px;
  width: 350px;
}
.index-left h2 {
  color: #fff;
  font-size: 16px;
  padding: 15px 20px;
  background-color: #41b883;
}
.index-left-block > div {
  background-color: #fff;
  padding: 15px 20px 0;
}
.index-left-block ul li {
  margin: 5px 0;
}
.index-left-block ul {
  padding-bottom: 15px;
}
.index-left-block h3 {
  padding-bottom: 15px;
}
.hr {
  height: 1px;
  width: 100%;
  background-color: #ddd;
}
.index-left-block > div a {
  color: #666;
}
.hot-tag {
  background-color: red;
  color: #fff;
}
.index-right .slideImg {
  width: 100%;
}
.index-board-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.index-board-item {
  width: 380px;
  height: 150px;
  margin: 10px 0;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.index-board-item-img {
  height: 100px;
  width: 100px;
}
.index-board-item .earth {
  background: url(../assets/1.png) center center no-repeat;
  background-size: cover;
}
.index-board-item .loud {
  background: url(../assets/2.png) center center no-repeat;
  background-size: cover;
}
.index-board-item .car {
  background: url(../assets/3.png) center center no-repeat;
  background-size: cover;
}
.index-board-item .hill {
  background: url(../assets/4.png) center center no-repeat;
  background-size: cover;
}
.index-board-item-inner {
  width: 220px;
}
.index-board-item-inner h2 {
  font-size: 18px;
}
.index-board-item-inner p {
  margin: 10px 0;
  font-size: 14px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.index-board-button {
  height: 20px;
  width: 100px;
  padding: 5px 0;
  line-height: 20px;
  text-align: center;
  background-color: #41b883;
}
.index-board-button a {
  color: #fff;
}

</style>

 