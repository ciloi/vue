<style lang="scss" scope>
  .found-ul {
    white-space: nowrap;
    overflow-x: auto;
    padding: 15px 15px 43px 0px;
    font-size: 0;
    margin-left: -8px;

  &::-webkit-scrollbar {
    display: none;
  }

  }
  .found-text {
    font-size: 18px;
    padding: 0.2rem 0.4rem;
    display: inline-block;
    border: 1px solid #000;
    margin: 0 6px 8px;
    border-radius: 4px;
  }

  .found-line {
    display: block;
    font-size: 0;
  }
</style>
<template>
<section class="pd03" v-cloak>
  <sectionHeader :sectionHeaderName="foundData.title"/>
    <ul class="found-ul">
      <template v-for="(slide, index) in foundData.subjects">
        <li v-if="index%4==0" class="found-line"></li>
        <li class="found-text"  :style="{color:slide.color,borderColor:slide.color}">{{slide.title}}</li>
      </template>
    </ul>
</section>
</template>
<script>
import sectionHeader from '@/components/section-header/index'
  export default {
    name : 'foundSection',
    props :{
      foundUrl:{
        type : String,
        required : true
      }
    },
    components : {
      sectionHeader
    },
    methods :{
      getRandomColor () {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      }
    },
    data () {
      return {
        foundData : []
      }
    },
    created () {
      var vm = this;
      vm.$axios.get(vm.foundUrl).then((response) => {
        // success
        vm.foundData = response.data.data;
        vm.foundData.subjects.forEach(function(item,index){
          item.color = vm.getRandomColor();
        })}, (error) => {
          // error
          console.log(error)
        });
    }
  }
</script>
