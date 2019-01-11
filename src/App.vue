<template>
  <div id="app">
    <Headers />
    <router-view />
    <Footers />
  </div>
</template>

<script>
import Headers from './components/header'
import Footers from './components/footer'
export default {
  name: 'App',
  components: {
    Headers,
    Footers
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #eee;
}
ul {
  list-style: none;
}
a {
  color: #b2b2b2;
  text-decoration: none;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
