<template>
  <div class="counter-component">
    <div class="counter-btn" @click="sub">-</div>
    <div class="counter-show">
      <input type="text" name id v-model="number" @keyup="inputHandler">
    </div>
    <div class="counter-btn" @click="add">+</div>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      number: 1
    };
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  },
  methods: {
    sub() {
      if (this.number <= this.min) {
        return;
      }
      this.number--;
      this.$emit("counter", this.number);
      this.$store.dispatch("updateOrder", ["counter", this.number]);
    },
    add() {
      if (this.number >= this.max) {
        return;
      }
      this.number++;
      this.$emit("counter", this.number);
      this.$store.dispatch("updateOrder", ["counter", this.number]);
    },
    inputHandler() {
      let fix;
      if (typeof this.number === "string") {
        fix = Number(this.number.replace(/\D/g, ""));
      } else {
        fix = this.number;
      }
      if (fix > this.max || fix < this.min) {
        fix = this.min;
      }
      this.number = fix;
      this.$emit("counter", this.number);
      this.$store.dispatch("updateOrder", ["counter", this.number]);
    }
  }
};
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-component div {
  -webkit-user-select: none; /*webkit浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
