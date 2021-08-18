<template>
  <div class="affect-health">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {dateNum} from "@/common/olorItem";

export default {
  name: "AffectHealth",
  data() {
    return {
      option: {},
    };
  },
  created() {
    this.option = {
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          // name: "影响健康指标分布",
          type: "pie",
          radius: "70%",
          roseType: "area",
          data: dateNum,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            fontSize: 20,
            color: "rgba(41,193,255,.9)",
          },
          labelLine: {
            length: 15,
            length2: 30,
            show: true,
            color: "#00ffff",
          },
        },
      ],
    };
  },
  mounted() {
    const chartDom = this.$refs.echarts;
    const myChart = echarts.init(chartDom);
    myChart.setOption(this.option);
  },
};
</script>

<style scoped>
.affect-health {
  width: 446px;
  height: 346px;
  border: 2px solid #172c67;
  position: absolute;
  right: 30px;
  top: 100px;
}
.echarts {
  width: 446px;
  height: 346px;
}
</style>>