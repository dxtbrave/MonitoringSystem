<template>
  <div id="app">
    <home-page/>
  </div>
</template>

<script>

import HomePage from "@/views/homepage/HomePage";

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{

}
#app{
  width: 1920px;
  height: 1080px;
  background: url("assets/img/study/background.png") no-repeat;
  background-size: 100% 100%;
}
</style>
