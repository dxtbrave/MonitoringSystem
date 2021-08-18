<template>
  <div class="status-echarts"
       ref="echarts"
       v-loading="loading"
       element-loading-background="rgba(0, 0, 0, 0)"
       element-loading-text="拼命加载中...">
  </div>


</template>

<script>
import {BarStyleArray} from "@/common/olorItem";
import {getEquipmentStatus} from "@/network/EquipmentStatus";

export default {
  name: "StatusEcharts",
  data() {
    return {
      Status: {},
      option: {},
      loading: true
    }
  },
  created() {
    getEquipmentStatus().then(res => {
      this.Status = res
    })
  },
  mounted() {
    setTimeout(() => {
      let ele = []
      let life = []
      for (let i = 0; i < this.Status.life.length; i++) {
        life.push(this.Status.life[i])
        ele.push(this.Status.ele[i])
      }
      this.option = {
        tooltip: {
          axisPointer: {
            type: 'shadow'
          },
          // formatter:'{c}%'
        },
        label: {
          show: true,
          color: '#828aae',
          position: 'right',
          fontSize: 12,
          formatter: '{c}%'
        },
        legend: {
          data: ['电量', '寿命'],
          textStyle: {
            color: '#828aae',
            fontSize: 12,
            padding: 3,
          },
          icon: "circle",   //  这个字段控制形状
          padding: 20,
          itemWidth: 12,  // 设置宽度
          itemHeight: 12, // 设置高度
          itemGap: 20 // 设置间距
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '15%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#828aae',  //更改坐标轴文字颜色
              fontSize: 14      //更改坐标轴文字大小
            }
          },
          splitLine: {
            lineStyle: {
              color: '#0b166d',
              type: 'dashed'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0b166d'
            }
          },
        },
        yAxis: {
          type: 'category',
          data: ['监控4组', '监控3组', '监控2组', '监控1组'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#828aae',  //更改坐标轴文字颜色
              fontSize: 14      //更改坐标轴文字大小
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '电量',
            type: 'bar',
            //  barGap默认为30% 柱子之间的距离
            barGap: '0%',
            data: ele,
            itemStyle: BarStyleArray[0]
          },
          {
            name: '寿命',
            type: 'bar',
            barGap: '0%',
            data: life,
            itemStyle: BarStyleArray[1]
          }
        ]
      };
      this.loading = false
      const chartDom = this.$refs.echarts
      const myCharts = this.$echarts.init(chartDom)
      myCharts.setOption(this.option)
    }, 500)
  },
}
</script>

<style scoped>
.status-echarts {
  /*width: 446px;*/
  /*height: 286px;*/
  width: 100%;
  height: 100%;
}
</style>