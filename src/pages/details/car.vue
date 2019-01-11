<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况系对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">购买数量：</div>
        <div class="sales-board-line-right">
          <keep-alive>
            <Counter
              :max="Counter.max"
              :min="Counter.min"
              @counter="getGoodInfo('counter', $event)"
            />
          </keep-alive>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">产品类型：</div>
        <div class="sales-board-line-right">
          <keep-alive>
            <DownMenu :downData="DownMenu" @downmenu="getGoodInfo('downmenu', $event)"/>
          </keep-alive>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">有效时间：</div>
        <div class="sales-board-line-right">
          <keep-alive>
            <RadioMenu :radios="RadioMenu" @radios="getGoodInfo('radios', $event)"/>
          </keep-alive>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">总价：</div>
        <div class="sales-board-line-right">{{ getTotalPrice }}元</div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left"></div>
        <div class="sales-board-line-right">
          <div class="car-button">
            <a href>加入购物车</a>
          </div>
          <div class="car-button">
            <a href>立即购买</a>
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据来源于网站流量统计信息，但其中价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值。正如专业的财务分析报告对企业经营策略的价值</p>
      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留多长时间、访问了哪些页面等。主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>
      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布情况等</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Counter from "./components/counter";
import DownMenu from "./components/downMenu";
import RadioMenu from "./components/radioMenu";
export default {
  name: "car",
  data() {
    return {
      totalPrice: 0,
      counter: 1,
      downmenu: 1,
      radios: 1,
      Counter: {
        max: 10,
        min: 1
      },
      DownMenu: [
        {
          name: "初级版",
          value: 1
        },
        {
          name: "中级版",
          value: 2
        },
        {
          name: "高级版",
          value: 3
        }
      ],
      RadioMenu: [
        {
          title: "1个月",
          value: 1
        },
        {
          title: "3个月",
          value: 3
        },
        {
          title: "半个月",
          value: 6
        },
        {
          title: "年费",
          value: 12
        }
      ]
    };
  },
  methods: {
    //   getCounterNum(data) {
    //       console.log(data);
    //   },
    //   getDownMenu(data) {
    //       console.log(data);
    //   },
    //   getRadios(data) {
    //       console.log(data);
    //   }
    getGoodInfo(key, value) {
      // console.log(key, value);
      // console.log(this);
      this[key] = value;
      //   var readyData = {
      //     counter: this.counter,// 5元
      //     downmenu: this.downmenu,//2元
      //     radios: this.radios//10元
      //   };
      //   console.log(readyData);
    }
  },
  computed: {
    getTotalPrice() {
      this.$store.dispatch(
        "updatePrice",
        this.counter * 5 + this.downmenu * 2 + this.radios * 10
      );
      return this.$store.getters.getTotalPrice;
    },
    getOrder() {
      return this.$store.getters.getOrder;
    }
  },
  components: {
    Counter,
    DownMenu,
    RadioMenu
  }
};
</script>
<style scoped>
.sales-board-intro,
.sales-board-des,
.sales-board-form {
  background-color: #fff;
  padding: 20px;
}
.sales-board-des {
  margin-top: 20px;
}
.sales-board-intro h2 {
  margin-bottom: 10px;
}
.sales-board-des h2,
.sales-board-des h3 {
  margin: 20px 0 10px;
}
.sales-board-line {
  margin: 20px 0;
}
.sales-board-line div {
  display: inline-block;
}
.sales-board-line-left {
  width: 100px;
}
.car-button {
  display: inline-block;
  height: 20px;
  width: 100px;
  padding: 5px 0;
  line-height: 20px;
  text-align: center;
  background-color: #41b883;
}
.car-button a {
  color: #fff;
}
</style>
