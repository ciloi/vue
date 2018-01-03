<style>
  @import "./common/css/base.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 15px;
    max-width: 750px;
    margin: 0 auto;
    background: #fff;
  }

  [v-cloak] {
    display: none;
  }
</style>
<template>
<div id="app">
  <headerBar/>
  <router-view/>
</div>
</template>

<script>
import headerBar from '@/components/header/index'

export default {
  name: 'app',
  components: {
    headerBar
  }
}
</script>

