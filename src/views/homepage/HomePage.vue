<template>
  <div class="fengji">
    <!-- 头部header -->
    <power-header class="header"/>
    <!-- 左边图表 -->
    <!-- 风机发电量占比 -->
    <power-generation/>
    <!-- 监测设备状态 -->
    <equipment-status/>
    <!--  旋转地球   -->
    <div class="earth-quake">
      <earth-quake/>
    </div>
    <!--  center-body：中间内容部分  -->
    <div class="center-body">
      <div class="first">
        <!-- 当日发电量及完成率 -->
        <today-generation/>
        <!-- 负载展示 -->
        <machinery-load/>
      </div>
        <!--  塔筒倾斜度 -->
      <slope-rate/>
        <!-- 风机发电量统计     -->
      <electricity/>
    </div>
    <!-- 右边图表 -->
    <!-- 影响健康指标分布 -->
    <affect-health/>
    <tmp-detection/>
  </div>
</template>

<script>
import PowerHeader from "@/components/common/powerheader/PowerHeader.vue";
import PowerGeneration from "@/components/common/powergeneration/PowerGeneration";
import TodayGeneration from "@/components/common/powerheader/todaygeneration/TodayGeneration";
import MachineryLoad from "@/components/common/powerheader/machineryload/MachineryLoad";
import AffectHealth from "@/components/common/affecthealth/AffectHealth";
import EquipmentStatus from "@/components/common/equipmentstatus/EquipmentStatus";
import EarthQuake from "@/components/common/earthquake/EarthQuake";
import TmpDetection from "@/components/common/tmpdetection/TmpDetection";
import SlopeRate from "@/components/common/sloperate/SlopeRate";
import Electricity from "@/components/common/electricity/Electricity";


export default {
  name: "HomePage",
  components: {
    PowerHeader,
    PowerGeneration,
    TodayGeneration,
    MachineryLoad,
    AffectHealth,
    EquipmentStatus,
    EarthQuake,
    TmpDetection,
    SlopeRate,
    Electricity,
  },
};
</script>

<style scoped>
.fengji {
  position: relative;
  height: 100%;
  width: 100%;
}

.header {
  height: 100px;
  background: url("~assets/img/study/header-bar.png") no-repeat;
  background-size: 100% 100%;
}

.center-body {
  width: 900px;
  position: absolute;
  top: 100px;
  left: 505px;
  right: 505px;
  bottom: 0;
}

.center-body .first {
  display: flex;
}
.earth-quake{
  width: 450px;
  height: 320px;
  margin: 0px 0px 0px 30px;
}
</style>