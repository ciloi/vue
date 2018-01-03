<style lang="scss" scope>
  .index-nav {
    margin: 0.7rem 0;

  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 50%;
    box-sizing: border-box;
    float: left;

    &:nth-child(2n){
      padding: 0.1rem 0 0.1rem 0.1rem;
     }
    &:nth-child(2n+1){
       padding:  0.1rem 0.1rem 0.1rem 0;
     }

  a {
    width: 100%;
    background-color: #f6f6f6;
    color: #494949;
    border-radius: 2px;
    display: block;
    padding: 0.4rem 0;
    text-align: center;
  }

  }

  }
  .index-recommend{
    li{
      padding: 0.4rem 0;
      position:relative;
    &:first-child{
    padding-top: 0;
      &:before{
         left: 0;
         top: 0;
         width: 100%;
         height: 0px;
         background: #e3e3e3;
         -webkit-transform: scaleY(0.5);
         content: '';
         position: absolute;
         -webkit-transform-origin: 0 bottom;
       }
     }
    &:before{
       left: 0;
       top: 0;
       width: 100%;
       height: 1px;
       background: #e3e3e3;
       -webkit-transform: scaleY(0.5);
       content: '';
       position: absolute;
       -webkit-transform-origin: 0 bottom;
     }
      }
    .img-box{
      width: 2.8rem;
      height: 2.8rem;
      margin-left: 0.4rem;
      overflow: hidden;
      background: #ccc;
    }
    img{
     width: 100%;
    }
    .recommend-text{
      padding:0 0 0.1rem;
      min-height:2.8rem;
      box-sizing:border-box;
      h3{
        text-align: justify;
        font-size: 17px;
        font-weight: 500;
        line-height: 1.4;
        color: #494949;
        margin-bottom: 0.2rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      p{
        text-align: justify;
        color: #aaa;
        font-size: 12px;
        line-height: 1.4;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  .info-source{
    font-size: 12px;
    color: #ccc;
    padding-top: 0.2rem;
  }
  }
</style>
<template>
<div class="container-body">
  <ul class="pd03 index-nav clearfix">
    <li><a href="/">影院热映</a></li>
    <li><a href="/">影院热映</a></li>
    <li><a href="/">影院热映</a></li>
    <li><a href="/">影院热映</a></li>
  </ul>
  <ul class="pd03 index-recommend">
    <li v-for="(item,index) in recommendList">
     <div class="clearfix">
       <div class="img-box fr" v-if="item.target && item.target.cover_url">
         <img :src="item.target && item.target.cover_url"/>
       </div>
       <div class="recommend-text">
         <h3>{{item.title}}</h3>
         <p>{{item.target.desc}}</p>
       </div>
     </div>
      <div class="info-source clearfix" v-if="item.target && item.target.author && item.target.author.name">
        by&nbsp;<span class="J-auth-name">{{item.target.author.name}}</span>
        <span class="fr">
        <span class="J-source_cn">{{item.source_cn}}</span>
        </span>
      </div>
    </li>
  </ul>
  <p class="more-btn"></p>
</div>

</template>
<script>
export default {
  components: {},
  data () {
    return {
      recommendList:[],
      page:1
    }
  },
  mounted(){
    var vm = this;
    window.addEventListener('scroll', vm.scrollHander)
  },
  destroyed(){
    var vm = this;
    window.removeEventListener('scroll', vm.scrollHander)
  },
  methods:{
    scrollHander(){
      var vm = this;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('.more-btn').offsetTop - 5 / 4 * window.outerHeight

      if (scrollTop > offsetTop) {
        vm.getRecommendData();
      }
    },
    getRecommendData(){
      var vm = this;
      var thisPage = vm.page++;
      var param = {
        pageSize: 10,
        page: thisPage
      }
      vm.$axios.get('/api/index/recommendList', {params: param}).then((response) => {
        // success
        if(vm.recommendList.length==0){
          vm.recommendList = response.data.data.recommend_feeds;
        }else{
          vm.recommendList =response.data.data.recommend_feeds.reduce((arr, item)=>{
              arr.push(item)
              return arr
            }, vm.recommendList)
        }

      }, (error) => {
          // error
          console.log(error)
        });
    }
  },
  created(){
    this.getRecommendData(this.page)
  }
}
</script>
