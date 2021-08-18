<template>
  <div class="power-generation">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getPowerGeneration} from "@/network/PowerGeneration";

import {
  trafficWay,
  color,
  img,
} from "@/components/common/powergeneration/data";
export default {
  name: "PowerGeneration",
  data() {
    return {
      message: [],
      seriesOption: [],
      option: {},
    };
  },
  created() {

  },
  mounted() {
    const value = this._getPowerGeneration()
    setTimeout(()=>{
      console.log(value)
      // for (let i = 0; i < trafficWay.length; i++) {
      //   this.message.push(
      //       {
      //         value: trafficWay[i].value,
      //         name: trafficWay[i].name,
      //         itemStyle: {
      //           normal: {
      //             borderWidth: 6,
      //             shadowBlur: 20,
      //             borderColor: color[i],
      //             shadowColor: color[i],
      //           },
      //         },
      //       },
      //       {
      //         value: 2,
      //         name: "",
      //         itemStyle: {
      //           normal: {
      //             label: {
      //               show: false,
      //             },
      //             labelLine: {
      //               show: false,
      //             },
      //             color: "rgba(0, 0, 0, 0)",
      //             borderColor: "rgba(0, 0, 0, 0)",
      //             borderWidth: 0,
      //           },
      //         },
      //       }
      //   );
      // }
      for (let i = 0; i < value.length; i++) {
        this.message.push(
            {
              value: value[i].value,
              name: value[i].name,
              itemStyle: {
                normal: {
                  borderWidth: 6,
                  shadowBlur: 20,
                  borderColor: color[i],
                  shadowColor: color[i],
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
                  for (let i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
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
        color: color,
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                image: img,
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