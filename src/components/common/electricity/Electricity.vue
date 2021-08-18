<template>
<div class="electricity">
  <div class="first-col">
    <span class="span1">{{title}}</span>
    <span class="span2">{{title_en}}</span>
  </div>
  <div class="second-col">
    <el-echarts/>
  </div>
</div>
</template>

<script>
import ElEcharts from "@/components/content/elecharts/ElEcharts";
export default {
  name: "Electricity",
  components:{
    ElEcharts,
  },
  data(){
    return{
      title:'风机发电量统计',
      title_en:'Train schedul'
    }
  }
}
</script>

<style scoped>
.electricity{
  width: 100%;
  height: 370px;
  margin-top: 20px;
}
.electricity .first-col{
  height: 30px;
  line-height: 30px;
}
.electricity .first-col .span1{
  font-weight: 600;
  font-size: 21px;
  color: #5384b2;
}
.electricity .first-col .span2{
  font-size: 14px;
  color: #4a5b83;
  margin-left: 10px;
}
.electricity .second-col{
  width: 896px;
  height: 321px;
  margin-top: 15px;
  border: 2px solid #172c67;
}
</style>