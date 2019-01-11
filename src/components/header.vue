<template>
  <div class="app-head">
    <div class="app-head-inner">
      <div class="head-left">
        <router-link to="/">
          <img src="../assets/logo.png" alt>
        </router-link>
        <span>尚学堂旗下品牌: 云数学院|速学堂|百战程序员|优效学院上线培训-优效聚名师，学习更优效</span>
      </div>
      <div class="head-right">
        <ul class="nav-list">
          <li><a href="">登录</a></li>
          <li><a href="">注册</a></li>
          <li><a href="">关于</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headers",
  data() {
    return {};
  }
};
</script>

<style scoped>
.app-head {
  background-color: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.head-left {
    float: left;
}
.head-right {
    float: right;
}
.app-head-inner {
  padding: 0 100px;
}
.app-head-inner img {
  height: 50px;
  vertical-align: middle;
}
.app-head-inner span {
  margin-left: 50px;
}
.nav-list {
    display: flex;
    justify-content: center;
}
.nav-list li {
    margin: 0 5px;
}
.nav-list li::after {
    content: '|';
    margin-left: 8px;
}
.nav-list li:nth-child(3)::after {
    content: '';
}

</style>

 