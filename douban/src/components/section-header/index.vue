<style lang="scss" scope>
  .section-header{
    height:1rem;
    line-height:1rem;
  h2{
    font-size: 18px;
    font-weight: normal;
  }
  a{
    font-size: 16px;
    color: #42bd56;
  }
  }
</style>
<template>
<header class="section-header clearfix" v-cloak>
  <h2 class="fl">{{sectionHeaderName}}</h2>
  <a href="" class="fr">更多</a>
</header>
</template>
<script>
export default{
  name:'sectionHeader',
  props:{
    sectionHeaderName:{
      type:String,
      required:true,
      default:''
    }
  }
}
</script>
