<template>
  <div class="slope-rate">
    <div class="first-col">
      <span class="span1">{{title}}</span>
      <span class="span2">{{title_en}}</span>
    </div>
    <div class="second-col">
      <slope-echarts/>
    </div>
  </div>
</template>

<script>
import {getSlopeRate} from "@/network/SlopeRate";
import SlopeEcharts from "@/components/content/sloperecharts/SlopeEcharts";

export default {
  name: "SlopeRate",
  components:{
    SlopeEcharts,
  },
  data(){
    return{
      title:'塔筒倾斜度',
      title_en:'Tower inclination',
    }
  },
}
</script>

<style scoped>
.slope-rate{
  width: 100%;
  height: 380px;
}
.slope-rate .first-col{
  margin-top: 20px;
  margin-bottom: 10px;
  height: 30px;
}
.slope-rate .first-col .span1{
  font-weight: 600;
  font-size: 21px;
  color: #5384b2;
}
.slope-rate .first-col .span2{
  font-size: 14px;
  color: #4a5b83;
  margin-left: 10px;
}
.slope-rate .second-col{
  width: 896px;
  height: 326px;
  border: 2px solid #172c67;
}
</style>