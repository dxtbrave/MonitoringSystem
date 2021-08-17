<template>
  <div class="equipment-status">
  <!-- 第一行：标题 -->
    <div class="first-col">
      <span class="span1">{{title}}</span>
      <span class="span2">{{title_en}}</span>
    </div>
  <!-- 第二行：监测设备状态图 -->
    <div class="second-col">
      <status-echarts/>
    </div>
  </div>
</template>

<script>
import StatusEcharts from "@/components/content/statusecharts/StatusEcharts";
export default {
  name: "EquipmentStatus",
  components:{
    StatusEcharts,
  },
  data(){
    return{
      title:'监测设备状态',
      title_en:'Monitoring equipment status',
    }
  },
}
</script>

<style scoped>
.equipment-status{
  width: 450px;
  height: 335px;
  margin: 30px 0px 0px 30px;
}
.equipment-status .first-col{
  height: 30px;
  line-height: 30px;
}
.equipment-status .first-col .span1{
  font-weight: 600;
  font-size: 21px;
  color: #5384b2;
}
.equipment-status .first-col .span2{
  font-size: 14px;
  color: #4a5b83;
  margin-left: 10px;
}

.equipment-status .second-col{
  width: 446px;
  height: 286px;
  margin-top: 15px;
  border: 2px solid #172c67;
}
</style>