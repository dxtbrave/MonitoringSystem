<template>
  <div class="ele-echarts"
       ref="echarts"
       v-loading="loading"
       element-loading-background="rgba(0, 0, 0, 0)"
       element-loading-text="拼命加载中..."></div>
</template>

<script>
import {getElectricity} from "@/network/Electricity";
import {EleColor} from "@/common/olorItem";

export default {
  name: "ElEcharts",
  data(){
    return{
      loading:true,
      option:{}
    }
  },
  mounted() {
    let ele = this._getElectricity()
    setTimeout(()=>{
      this.option ={
        tooltip:{
          show:true
        },
        grid:{
          top:'10%',
          left:'10%',
          bottom:'10%',
          right:'5%'
        },
        xAxis: {
          type: 'category',
          axisLabel:{
            color:'#828aae',
            fontSize:14
          },
          splitLine:{
            show:true,
            lineStyle:{
              type:'dashed',
              color:'#0b166d'
            },
          },
          axisLine:{
            lineStyle:{
              color:'#1f3370'
            }
          },
          axisTick:{
            show:false,
          },
          data: ['AK', 'WE', 'RT', 'YU', 'IO', 'OP', 'SD','FG','HJ','KL']
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            formatter:'{value}KW',
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
        },
        series: [{
          data: ele,
          type: 'bar',
          barWidth:35,
          itemStyle:EleColor[0],
          label:{
            show:true,
            color:'#828aae',
            position:'top',
          }
        }]
      };
      const chartDom = this.$refs.echarts
      const myCharts = this.$echarts.init(chartDom)
      myCharts.setOption(this.option)
      this.loading = false
    },500)
  },
  methods:{
    _getElectricity(){
      let value = []
      getElectricity().then(res=>{
        for(let item of res.electricity){
          value.push(item)
        }
      })
      return value
    }
  }
}
</script>

<style scoped>
.ele-echarts{
  width: 100%;
  height: 100%;
}
</style>