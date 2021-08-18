<template>
  <div class="temperature-echarts"
       ref="echarts"
       v-loading="loading"
       element-loading-background="rgba(0, 0, 0, 0)"
       element-loading-text="拼命加载中..."></div>
</template>

<script>
import {getTmpHum} from "@/network/EquipmentStatus";
import {BarStyleArray} from "@/common/olorItem";
export default {
  name: "TemperatureEcharts",
  data() {
    return {
      loading: true,
      Status: {},
      option: {},
    }
  },
  created() {
    getTmpHum().then(res=>{
      this.Status = res
    })
  },
  mounted() {
    setTimeout(() => {
      let tmp = []
      let humidity = []
      for (let i = 0; i < this.Status.tmp.length; i++) {
        tmp.push(this.Status.tmp[i])
        humidity.push(this.Status.humidity[i])
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
          data: ['温度', '湿度'],
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
          top: '10%',
          left: '5%',
          right: '10%',
          bottom: '5%',
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
          data: ['扇叶5', '扇叶4', '扇叶3', '扇叶2', '扇叶1','混凝土5','混凝土4','混凝土3','混凝土2','混凝土1'],
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
            name: '温度',
            type: 'bar',
            //  barGap默认为30% 柱子之间的距离
            barGap: '0%',
            data: tmp,
            itemStyle: BarStyleArray[0]
          },
          {
            name: '湿度',
            type: 'bar',
            barGap: '0%',
            data: humidity,
            itemStyle: BarStyleArray[1]
          }
        ]
      };
      this.loading = false
      const chartDom = this.$refs.echarts
      const myCharts = this.$echarts.init(chartDom)
      myCharts.setOption(this.option)
    }, 500)
  }
}
</script>

<style scoped>
.temperature-echarts {
  width: 100%;
  height: 100%;
}
</style>