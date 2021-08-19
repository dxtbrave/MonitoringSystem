<template>
  <div class="affect-health">
    <div class="echarts"
         ref="echarts"
         v-loading="loading"
         element-loading-background="rgba(0, 0, 0, 0)"
         element-loading-text="拼命加载中..."></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import {getAffectHealth} from "@/network/AffectHealth";

export default {
  name: "AffectHealth",
  data() {
    return {
      option: {},
      loading:true
    };
  },
  mounted() {
    const list = this._getAffectHealth()
    setTimeout(()=>{
      this.option = {
        grid: {
          left: -100,
          top: 50,
          bottom: 10,
          right: 10,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          show: false
        },
        polar: {},
        angleAxis: {
          interval: 1,
          type: 'category',
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B4A6B",
              width: 1,
              type: "solid"
            },
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
          },
        },
        radiusAxis: {
          min: 20,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B3E5E",
              width: 1,
              type: "solid"
            },
          },
          axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 14
          },
          splitLine: {
            lineStyle: {
              color: "#07385e",
              width: 2,
              type: "dashed"
            }
          }
        },
        calculable: true,
        series: [{
          stack: 'a',
          type: 'pie',
          radius: '80%',
          roseType: 'radius',
          zlevel: 10,
          startAngle: 100,
          label: {
            normal: {
              formatter: ['{b|{b}}', '{d|{d}%}'].join('\n'),
              rich: {
                b: {
                  color: '#3bd2fe',
                  fontSize: 14,
                  lineHeight: 20
                },
                d: {
                  color: '#3bd2fe',
                  fontSize: 14,
                  height: 20
                },
              },
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 10,
              length2: 10,
              lineStyle: {
                color: '#0096b1'
              }
            },
            emphasis: {
              show: false
            }
          },
          data: list
        },]
      }
      const chartDom = this.$refs.echarts;
      const myChart = echarts.init(chartDom);
      myChart.setOption(this.option);
      this.loading = false
    },500)

  },
  methods:{
    _getAffectHealth(){
      let shuzu = []
      getAffectHealth().then(res=>{
        for(let i = 0 ; i<6; i++){
          shuzu.push(res.list[i])
        }
      })
      return shuzu
    }
  }
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