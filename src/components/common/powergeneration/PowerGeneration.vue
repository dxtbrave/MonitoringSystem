<template>
  <div class="power-generation">
    <div class="echarts" ref="echarts"
         v-loading="loading"
         element-loading-background="rgba(0, 0, 0, 0)"
         element-loading-text="拼命加载中..."></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getPowerGeneration} from "@/network/PowerGeneration";

import {PowerGenerationColor, PowerGenerationImg, PowerGenerationimg} from "@/common/common";
export default {
  name: "PowerGeneration",
  data() {
    return {
      message: [],
      loading:true,
      seriesOption: [],
      option: {},
    };
  },
  created() {

  },
  mounted() {
    const value = this._getPowerGeneration()
    setTimeout(()=>{
      for (let i = 0; i < value.length; i++) {
        this.message.push(
            {
              value: value[i].value,
              name: value[i].name,
              itemStyle: {
                normal: {
                  borderWidth: 6,
                  shadowBlur: 20,
                  borderColor: PowerGenerationColor[i],
                  shadowColor: PowerGenerationColor[i],
                },
              },
            },
            {
              value: 2,
              name: "",
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  color: "rgba(0, 0, 0, 0)",
                  borderColor: "rgba(0, 0, 0, 0)",
                  borderWidth: 0,
                },
              },
            }
        );
      }
      this.seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: ["72%", "69%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                fontSize:16,
                position: "outside",
                color: "#8dc6ec",
                formatter: function (params) {
                  let percent = 0;
                  let total = 0;
                  for (let i = 0; i < value.length; i++) {
                    total += value[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.name + "\n" + +percent + "%";
                  } else {
                    return "";
                  }
                },
              },
              labelLine: {
                length: 50,
                length2: 15,
                show: true,
                color: "#8dc6ec",
              },
            },
          },
          data: this.message,
        },
      ];
      this.option = {
        color: PowerGenerationColor,
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                image: PowerGenerationImg,
                width: 178,
                height: 178,
              },
              left: "center",
              top: "center",
              position: [100, 100],
            },
          ],
        },
        tooltip: {
          // show: true,
          trigger: "item",
        },
        toolbox: {
          show: false,
        },
        series: this.seriesOption,
      };
      const chartDom = this.$refs.echarts;
      const myChart = echarts.init(chartDom);
      myChart.setOption(this.option);
      this.loading = false
    },500)





  //  测试
    this._getPowerGeneration()
  },
  methods:{
    _getPowerGeneration(){
      let result = []
      getPowerGeneration().then(res=>{
        for (let item of res){
          result.push(item)
        }
      })
      return result
    }
  }
};
</script>

<style scoped>
.power-generation {
  display: inline-block;
  width: 446px;
  height: 286px;
  border: 2px solid #172c67;
  margin-left: 30px;
}
.echarts {
  width: 446px;
  height: 286px;
}
</style>