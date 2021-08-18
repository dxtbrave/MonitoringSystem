<template>
  <div class="slope-echarts"
       ref="echarts"
       v-loading="loading"
       element-loading-background="rgba(0, 0, 0, 0)"
       element-loading-text="拼命加载中..."></div>
</template>

<script>
import {getSlopeRate} from "@/network/SlopeRate";
import {SlopeColor} from "@/common/olorItem";

export default {
  name: "SlopeEcharts",
  data(){
    return{
      loading:true,
      option: {},
    }
  },
  mounted() {
    // 需要先请求数据，然后经过短暂的延时之后再进行
    let slope = this._getSlopeRate()
    setTimeout(()=>{
      console.log(slope)
      this.loading = false
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          show:false,
          data: ['倾斜角度']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        label:{
          show:true,
          color:'rgb(141,198,236)',
        },
        grid: {
          top:'9%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            splitLine:{
              show:true,
              lineStyle:{
                type:'dashed',
                color:'#0b166d'
              }
            },
            axisLabel:{
              color:'#828aae',
              fontSize:14
            },
            axisLine:{
              lineStyle:{
                color:'#1f3370'
              }
            },
            axisTick:{
              show:false,
            },
            data: [
              '00:00', '01:00', '02:00', '03:00', '04:00',
              '05:00', '06:00', '07:00', '08:00', '09:00',
              '10:00', '11:00', '12:00', '13:00', '14:00',
              '15:00', '16:00', '17:00', '18:00', '19:00',
              '20:00', '21:00', '22:00', '23:00', '24:00'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel:{
              formatter:'{value}°',
              color:'#828aae',
              fontSize:14
            },
            splitLine:{
              show:true,
              lineStyle:{
                type:'dashed',
                color:'#0b166d'
              }
            },
            axisLine:{
              show:true,
              lineStyle:{
                color:'#1f3370'
              }
            },
          }
        ],
        series: [
          {
            name: '倾斜角度',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data:slope,
            itemStyle:{
              normal: SlopeColor[0]
            },
          },
        ]
      };
      const chartDom = this.$refs.echarts
      const myCharts = this.$echarts.init(chartDom)
      myCharts.setOption(this.option)
    },500)
  },
  methods:{
    _getSlopeRate(){
      let s = []
      getSlopeRate().then(res=>{
        for(let item of res.slope){
          s.push(item)
        }
      })
      return s
    }
  }
}
</script>

<style scoped>
.slope-echarts{
  width: 100%;
  height: 100%;
}
</style>