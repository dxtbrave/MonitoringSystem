<template>
<div class="machinery-load">
  <div class="Best-box">
    <div class="first">
      <span>1号机负载</span>
      <div class="fuzai">
        <disc :FuZaiNum="FuZai.num1" />
      </div>
    </div>
    <div class="first">
      <span>2号机负载</span>
      <div class="fuzai">
        <disc :FuZaiNum="FuZai.num2" />
      </div>
    </div>
    <div class="first">
      <span>3号机负载</span>
      <div class="fuzai">
        <disc :FuZaiNum="FuZai.num3"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Disc from "@/components/common/disc/Disc";
import {getFuZai} from "@/components/common/powerheader/machineryload/data";

export default {
  name: "MachineryLoad",
  data(){
    return{
      FuZai:{}
    }
  },
  components:{
    Disc,
  },
  created() {
   this.FuZai = getFuZai()
  }
}
</script>

<style scoped>
.machinery-load{
  margin-top: 30px;
  margin-left: 50px;
  width: 360px;
  height: 140px;
}
.machinery-load .Best-box{
  display: flex;
  text-align: center;
}
.machinery-load .Best-box .first{
  flex: 1;
}
.machinery-load .Best-box .first span{
  color: #625582;
  font-size: 18px;
}
.machinery-load .Best-box .first .fuzai{
  /*margin-top: 20px;*/
  margin: 20px 15px 0px 15px;
  width: 90px;
  height: 90px;
}
</style>