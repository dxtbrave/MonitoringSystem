<template>
  <div class="disc" ref="disc"></div>
</template>

<script>

import * as echarts from 'echarts'

export default {
  name: "Disc",
  props:{
    FuZaiNum:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  data() {
    return {
      // date: 68,
      option:{}
    }
  },
  created() {
    this.option = {
      series: [
        {
          type: 'pie',
          radius: ['70%', '90%'],
          label: {
            normal: {
              show: false
            }
          },
          data: [{
            name: '',
            value: 100,
            itemStyle: {
              normal: {
                color: 'rgb(80,69,118)',
                shadowColor: 'rgb(80,69,118)'
              }
            }
          }],
          zlevel: 1
        },
        {
          name: 'main',
          type: 'pie',
          radius: ['70%', '90%'],
          data: [
            {
              name: '完成率',
              value: this.FuZaiNum,
              label: {
                show: true,
                position: 'center',
                color:'#fff',
                fontSize: 20,
                formatter: '{d}%'
              },
              labelLine: {show: false},
              itemStyle: {
                normal: {
                  color: '#29c1ff',
                  shadowColor: '#29c1ff'
                }
              }
            },
            {
              value: 100 - this.FuZaiNum,
              itemStyle: {
                normal: {
                  color: 'transparent'
                }
              }
            }
          ],
          zlevel: 2
        }
      ]
    };
  },
  mounted() {
    const chartDom = this.$refs.disc
    const myChart = echarts.init(chartDom)
    myChart.setOption(this.option)
  },
}
</script>

<style scoped>
.disc {
  width: 100%;
  height: 100%;
}
</style>