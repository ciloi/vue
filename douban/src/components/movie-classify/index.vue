<style lang="scss" scope>
.classifylist{
  .classifyli{
    width: 50%;
    box-sizing:border-box;
    border-bottom:1px solid #eee;
    height:50px;
    line-height:50px;
    &:nth-child(1){
       border-top:1px solid #eee;
     }
    &:nth-child(2){
       border-top:1px solid #eee;
     }
    padding-right: 14px;
    &:nth-child(even){
      padding-left: 10px;
     }
    &:nth-child(odd){
       border-right: 1px solid #eee;
     }
     span{
       color: #ccc;
       float: right;
       font-weight: bold;
       display: inline-block;
       border-right: solid 1px #ccc;
       border-bottom: solid 1px #ccc;
       width: 12px;
       height: 12px;
       transform: rotate(-45deg);
       margin-top: 20px;
     }
  }
}
</style>
<template>
<section class="pd03" v-cloak>
 <sectionHeader :sectionHeaderName="classifyData.title"/>
  <ul class="classifylist clearfix">
    <li class="fl classifyli" v-for="(item,index) in classifyData.subjects">{{item.title}}<span></span></li>
  </ul>
</section>
</template>
<script>
import sectionHeader from '@/components/section-header/index'
  export default {
    name : 'classifySection',
    props :{
      classifyUrl:{
        type : String,
        required : true
      }
    },
    components : {
      sectionHeader
    },
    data () {
      return {
        classifyData : []
      }
    },
    created () {

      this.$axios.get(this.classifyUrl).then((response) => {
        // success
      this.classifyData = response.data.data;
    }, (error) => {
        // error
        console.log(error)
      });
    }
  }
</script>
