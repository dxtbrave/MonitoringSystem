<template>
  <div class="header">
    <div class="first">
      <div class="first-1"></div>
      <div class="first-2">
        <span>{{title}}</span>
      </div>
      <div class="first-3"></div>
    </div>
    <div class="second">
      <div class="first-1">
        <span class="span1">{{pr_generation_title}}</span>
        <span class="span2">{{pr_generation_title_en}}</span>
      </div>
      <div class="first-2">
        <i class="el-icon-time"/>
        <span>{{time}}</span>
      </div>
      <div class="first-3">
        <span class="span1">{{affect_health_title}}</span>
        <span class="span2">{{affect_health_title_en}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/common";
export default {
    name:'PowerHeader',
    data(){
      return{
        title:'W-301风机组监测状况',
        time:'',
        pr_generation_title:'风机发电量占比',
        pr_generation_title_en:'Proportion of wind power generation',
        affect_health_title:'影响健康指标分布',
        affect_health_title_en:'Distribution of indicators affecting health'
      }
    },
  created() {
    this.getDate()
  },
  mounted() {
    setInterval(this.getDate,1000)
  },
  methods:{
      getDate(){
        let myDate = new Date()
        this.time = formatDate(myDate)
      },
  }
}
</script>

<style scoped>
.header{
  height: 100%s;
}
.first , .second{
    height: 50px;
    display: flex;
}
.first-1,.first-3{
  width: 750px;
}
.first .first-2{
  width: 400px;
  line-height: 50px;
  color: #fff;
  font-size: 37px;
  font-weight: 700;
  text-align: center;
}

.second .first-1 .span1{
  color: #5384b2;
  font-size: 21px;
  font-weight: 600;
  margin-left: 30px;
  line-height: 50px;
}
.second .first-1 .span2{
  color: #4a5b83;
  font-size: 14px;
  margin-left: 10px;
  line-height: 50px;
}

.second .first-2{
  width: 400px;
  font-size: 19px;
  line-height: 35px;
  color: #fff;
  font-weight: 500;
  text-align: center;
}
.second .first-2 i{
  margin-right: 5px;
}

.second .first-3 .span1{
  color: #5384b2;
  font-size: 21px;
  margin-left: 290px;
  font-weight: 600;
  line-height: 50px;
}
.second .first-3 .span2{
  color: #4a5b83;
  font-size: 14px;
  margin-left: 10px;
  line-height: 50px;
}
</style>>
