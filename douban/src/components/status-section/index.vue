<style lang="scss" scope rel="stylesheet/scss" type="text/css">
  .status-li {
    font-size: 17px;
    position: relative;
    padding-left: 50px;
    padding-top: 0.5rem;

  &:before {
    content: '';
    left: 0;
    position: absolute;
    width: 40px;
    height: 40px;
    background: url("./img/avatar.jpg") no-repeat;
    background-size: 40px 40px;
    box-sizing: border-box;
  }

  strong {
    font-weight: bold;
  }

  span {
    color: #aaa;
  }

  .status-time {
    color: #aaa;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 0.16rem;
  }

  .status-info {
    padding-bottom: 15px;
  }

  .status-img-box {
    max-height: 300px;
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  i {
    font-size: 14px;
    color: #ccc;
    display: inline-block;
    padding-left: 0.7rem;
    margin-right: 0.6rem;
    position: relative;

  &:before {
    content: '';
    width: 0.7rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: center center;
  }

  }
  .status-like {

  &:before {
    background-image: url("./img/ic_like_gray.svg");
  }

  }
  .status-comment {

  &:before {
    background-image: url("./img/ic_comment.svg");
  }

  }
  .status-transmit {

  &:before {
    background-image: url("./img/ic_retweet_gray.svg");
  }

  }
  }
  .status-state {
    border-bottom: 1px solid #E8E8E8;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-bottom: 0.3rem;
  }

  .more-btn {
    color: #42bd56;
    text-align: center;
    font-size: 0.44rem;
    line-height: 1rem;
    margin-top: 0.6rem;

  button {
    background: no-repeat;
    border: 0;
  }

  }
</style>
<template>
<section v-cloak>
  <ul class="status-list pd03">
    <li class="status-li" v-for="(item,index) in statusData" :key="index">
      <strong>豆瓣</strong>
      <span v-if="item.type==1">说</span>
      <span v-if="item.type==2">写了日记</span>
      <p class="status-time">{{item.time}}</p>
      <p class="status-info">
        {{item.info}}-><a :href="item.link">{{item.linkShow}}</a>
      </p>
      <div class="status-img-box">
        <img :src="item.img" alt=""/>
      </div>
      <p class="status-state">
        <i class="status-like">{{item.likeNum}}</i>
        <i class="status-comment">{{item.comment}}</i>
        <i class="status-transmit">{{item.transmit}}</i>
      </p>
    </li>
</ul>
  <p class="more-btn">
    <button
    @click="getStastusData()">显示更多广播
  </button>
</p>
</section>
  </template>
<script>
import sectionHeader from '@/components/section-header/index'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'statusSection',
  props: {
    statusUrl: {
      type: String,
      required: true
    }
  },
  components: {
    sectionHeader
  },
  mounted(){
    var vm = this;
    window.addEventListener('scroll', vm.scrollHander)
  },
  destroyed(){
    var vm = this;
    window.removeEventListener('scroll', vm.scrollHander)
  },
  methods: {
    scrollHander(){
      var vm = this;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('.more-btn').offsetTop - 5 / 4 * window.outerHeight

      if (vm.page < 4 && scrollTop > offsetTop) {
        vm.getStastusData();
      }
    },
    getStastusData (){
      var vm = this;
      var thisPage = vm.page++;
      var param = {
        pageSize: 10,
        page: thisPage
      }

      vm.$axios.get(vm.statusUrl, {params: param}).then((response) => {
        // success
        if(vm.statusData.length > 0 && response.data.data){
        vm.statusData = response.data.data.subjects.reduce(function (arr, item) {
          arr.push(item);
          return arr;
        }, vm.statusData)
        vm.statusData = vm.statusData.concat()
        return;
      }
      vm.statusData = response.data.data && response.data.data.subjects;
    }, (error) =>{
        // error
        console.log(error)
      });
    }
  },
  data () {
    return {
      statusData: [],
      page: 1
    }
  },
  created(){
    this.getStastusData(this.page)
  }
}
</script>
