<style lang="scss" scope>
.group-list{
  dt{
    color: #111;
    font-size: 18px;
    margin-left:0.48rem;
    padding-right:0.48rem;
  }
  dd{
    margin-left:0.48rem;
    padding-right:0.48rem;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 14px;
  }
  .group-img{
    width: 40px;
    height: 40px;
    margin-top: 14px;
  }
  .group-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #111;
    font-weight: normal;
    font-size: 17px;
    padding: 0 10px;
  }
  .group-num{
    color: #ccc;
  }
  .group-info{
    color: #aaa;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .group-more{
    color: #42bd56;
    height:44px;
    line-height: 44px;
    text-align: center;
    padding-bottom: 0;
  }
}
</style>
<template>
<section>
  <dl class="group-list" v-for="(dlItem,dlIndex) in groupData" :key="dlIndex">
    <dt>{{dlItem.title}}</dt>
    <dd v-for="(ddItem,ddIndex) in dlItem.groupSection" :key="ddIndex">
     <div class="f-box" style="line-height: 70px">
       <img class="group-img" :src="ddItem.pic" alt=""/>
       <h2 class="group-title flex-item">{{ddItem.name}}</h2>
       <span class="group-num">{{ddItem.num}}人</span>
     </div>
      <p class="group-info">{{ddItem.info}}</p>
    </dd>
    <dd class="group-more">更多相关小组</dd>
  </dl>
</section>
</template>
<script>
export default{
  name: 'groupSection',
  data(){
    return {
      groupData:[]
    }
  },
  props: {
    groupUrl: {
      type: String,
      required: true
    }
  },
  created(){
    this.$axios.get(this.groupUrl).then((response)=>{
      this.groupData = response.data.data;
  },(error)=>{
      console.log(error)
    })
  }
}
</script>

