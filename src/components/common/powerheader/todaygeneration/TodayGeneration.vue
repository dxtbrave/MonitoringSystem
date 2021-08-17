<template>
  <div class="today-generation">
    <div class="first-col">
      <span>{{ title }}</span>
    </div>
    <div class="second-col">
      <div class="generation">
        <div class="generation-1 jianxi">
          <span>{{countNum.shiwan}}</span>
        </div>
        <div class="generation-1 jianxi">
          <span>{{countNum.wan}}</span>
        </div>
        <div class="generation-1 jianxi">
          <span>{{countNum.qian}}</span>
        </div>
        <div class="generation-1 jianxi">
          <span>{{countNum.bai}}</span>
        </div>
        <div class="generation-1 jianxi">
          <span>{{countNum.shi}}</span>
        </div>
        <div class="generation-1">
          <span>{{countNum.ge}}</span>
        </div>
      </div>
      <div class="output">
        <span class="span1">计划产量</span>
        <span class="span2">{{PlanCount}}</span>
      </div>
      <div class="complete-rate">
        <span class="span1">完成率</span>
        <span class="span2">{{CompleteRate}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import {getTodayGeneration} from "@/components/common/powerheader/todaygeneration/data";

export default {
  name: "TodayGeneration",
  data() {
    return {
      title: '当日发电量',
      count:62425,
      PlanCount:106320,
      countNum:{
        "ge":0,
        "shi":0,
        "bai":0,
        "qian":0,
        "wan":0,
        "shiwan":0
      }
    }
  },
  computed:{
    CompleteRate(){
      let rate =  ((this.count /this.PlanCount) * 100).toFixed(1)
      return rate + '%'
    }
  },
  mounted() {
    this.getcountNum()
  },
  methods:{
    getcountNum(){
      this.count = getTodayGeneration()
      let num = this.count
      this.countNum.ge = parseInt(num % 10)
      this.countNum.shi = parseInt(num / 10 % 10)
      this.countNum.bai = parseInt(num / 100 % 10)
      this.countNum.qian = parseInt(num / 1000 % 10)
      this.countNum.wan = parseInt(num / 10000 % 10)
      this.countNum.shiwan = parseInt(num / 100000)
    }
  }
}
</script>

<style scoped>
.today-generation {
  width: 490px;
  height: 170px;
}

.today-generation .first-col {
  margin-top: 30px;
}

.today-generation .first-col span {
  height: 75px;
  color: #598ec0;
  font-size: 25px;
}
.today-generation .second-col{
  display: flex;
}
.today-generation .second-col .generation {
  width: 255px;
  height: 70px;
  display: flex;
  margin: 25px 0px;
}
.today-generation .second-col .generation .generation-1 {
  width: 30px;
  line-height: 70px;
  text-align: center;
  background-color: rgb(49,53,95);
}
.today-generation .second-col .generation .generation-1 span{
  color: #fff;
  font-size: 51px;
}


.today-generation .second-col .output {
  width: 120px;
  margin: 25px 0px 25px 15px;
}
.today-generation .second-col .output span {
  display: block;
}

.today-generation .second-col .output .span1 {
  color: #625582;
  font-size: 18px;
  letter-spacing: 2px;
}

.today-generation .second-col .output .span2 {
  color: #8dc6ec;
  font-size: 30px;
  margin-top: 10px;
  letter-spacing: 1px;
}

.today-generation .second-col .complete-rate{
  width: 90px;
  margin: 25px 0px 25px 10px;
}

.today-generation .second-col .complete-rate span{
  display: block;
}

.today-generation .second-col .complete-rate .span1{
  color: #625582;
  font-size: 18px;
  letter-spacing: 2px;
}
.today-generation .second-col .complete-rate .span2{
  color: #eb3c44;
  font-size: 30px;
  margin-top: 10px;
  letter-spacing: 1px;
}

.jianxi{
  margin-right: 15px;
}
</style>