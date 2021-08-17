<template>
  <div class="tmp-detection">
    <!-- 第一行：标题 -->
    <div class="first-col">
      <span class="span1">{{title}}</span>
      <span class="span2">{{title_en}}</span>
    </div>
    <div class="second-col">
      <temperature-echarts/>
    </div>
  </div>
</template>

<script>
import TemperatureEcharts from "@/components/content/temperatureecharts/TemperatureEcharts";
export default {
  name: "TmpDetection",
  components:{
    TemperatureEcharts,
  },
  data(){
    return{
      title:'温度/湿度监测',
      title_en:'Temperature and humidity monitoring'
    }
  }
}
</script>

<style scoped>
.tmp-detection{
  width: 450px;
  height: 550px;
  position: absolute;
  right: 30px;
  top: 480px;
}
.tmp-detection .first-col{
  height: 30px;
  line-height: 30px;
}
.tmp-detection .first-col .span1{
  font-weight: 600;
  font-size: 21px;
  color: #5384b2;
}
.tmp-detection .first-col .span2{
  font-size: 14px;
  color: #4a5b83;
  margin-left: 10px;
}
.tmp-detection .second-col{
  width: 446px;
  height: 511px;
  margin-top: 15px;
  border: 2px solid #172c67;
}
</style>