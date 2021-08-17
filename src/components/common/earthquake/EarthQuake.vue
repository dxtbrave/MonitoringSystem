<template>
  <div class="map">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
  </div>
</template>

<script>
export default {
  name: "EarthQuake"
}
</script>

<style scoped>
.map{
  /*width: 500px;*/
  height: 320px;
  /*margin: 40px auto;*/
  position: relative;
}
.map .map1{
  width: 205px;
  height: 205px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-image: url("../../../assets/img/study/map.png");
  background-size: 100% 100%;
  opacity: .5;
}
.map .map2{
  width: 225px;
  height: 225px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-image: url("../../../assets/img/study/lbx.png");
  background-size: 100% 100%;
  opacity: .7;
  animation: rotate1 15s linear infinite;
}
.map .map3{
  width: 220px;
  height: 220px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-image: url("../../../assets/img/study/jt.png");
  background-size: 100% 100%;
  animation: rotate2 15s linear infinite;
}
@keyframes rotate1 {
  from{
    transform: translate(-50%,-50%)
    rotate(0deg);
  }
  to{
    transform: translate(-50%,-50%)
    rotate(360deg);
  }
}

@keyframes rotate2 {
  from{
    transform: translate(-50%,-50%)
    rotate(0deg);
  }
  to{
    transform: translate(-50%,-50%)
    rotate(-360deg);
  }
}
</style>