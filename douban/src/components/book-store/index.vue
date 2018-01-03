<style lang="scss" scope>
  section{
  .swiper-slide{
  img{
    width: 100px;
    height: 139px;
    display: inline-block;
  }
  .info-body{
    padding: 0 10px;
  }
  h6{
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .book-price{
    font-size: 14px;
    text-align: center;
    color: #aaa;
  }
  }
  }
  .detail-info{
    margin-bottom: 24px;
  img{
    width: 100px;
    height: 139px;
    display: inline-block;
  }
  dl{
    width: 100%;
    padding-left: 150px;
    box-sizing: border-box;
  }
  dt{
  line-height:30px;
    height: 30px;
    margin-bottom: 14px;
    em{
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 20px;
      width: 80%;
    }
    span{
      color: #E76648;
      font-size: 14px;
    }
  }
  dd{
    color: #9B9B9B;
    line-height: 1.5;
  }
  }
</style>
<template>
<section class="pd03" v-cloak>
  <sectionHeader :sectionHeaderName="bookStoreData.title"/>
  <div class="detail-info clearfix">
    <template v-for="(item, index) in bookStoreData.subjects">
     <template v-if="index==0">
       <img class="fl" :src="item.pic" alt=""/>
       <dl>
         <dt class="clearfix">
           <em class="fl">{{item.title}}</em>
           <span class="fr">¥{{item.price}}</span>
         </dt>
         <dd>{{item.info}}</dd>
       </dl>
     </template>
    </template>

  </div>
  <div  class="clearfix">
    <swiper :options="swiperOption">
      <template v-for="(slide, index) in bookStoreData.subjects">
        <swiper-slide v-if="index>0">
          <img :src="slide.pic" alt=""/>
          <div class="info-body clearfix">
            <h6>{{slide.title}}</h6>
            <p class="book-price">¥{{slide.price}}</p>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</section>
</template>
<script>
import sectionHeader from '@/components/section-header/index'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'bookStore',
  props:{
    booksUrl:{
      type: String,
      required: true
    }
  },
  components: {
    sectionHeader
  },
  data () {
    return {
      bookStoreData:[],
      swiperOption: {
        autoplay: 3000,
        width: 100,
        spaceBetween:10
      }
    }
  },
  created(){
    this.$axios.get(this.booksUrl).then((response) => {
      // success
      this.bookStoreData = response.data.data;
  }, (error) => {
      // error
      console.log(error)
    });
  }
}
</script>
