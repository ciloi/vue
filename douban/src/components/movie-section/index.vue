<style lang="scss" scope>
  section {

  .swiper-slide {

  img {
    width: 100px;
    height: 139px;
    display: inline-block;
  }

  .info-body {
    padding: 0 10px;
  }

  h6 {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
  }

  .stars {

  li {
    width: 10px;
    height: 10px;
    background-size: 100% 100%;
    float: left;
    position: relative;
    top: 3px;
  }

  }
  .gray-star {
    background-image: url("./img/gray-star.png");
  }

  .yellow-star {
    background-image: url("./img/yellow-star.png");
  }

  .score {
    font-size: 0.1rem;
  }

  }
  }
</style>
<template>
<section class="pd03" v-cloak>
  <sectionHeader :sectionHeaderName="movieData.title"/>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in movieData.subjects" :key="index">
      <img :src="slide.pic" alt=""/>
      <div class="info-body clearfix">
        <h6>{{slide.title}}</h6>
        <ul class="stars fl">
          <li :class="['gray-star',slide.rating>0?'yellow-star':'']"></li>
          <li :class="['gray-star',slide.rating>1?'yellow-star':'']"></li>
          <li :class="['gray-star',slide.rating>2?'yellow-star':'']"></li>
          <li :class="['gray-star',slide.rating>3?'yellow-star':'']"></li>
          <li :class="['gray-star',slide.rating>4?'yellow-star':'']"></li>
        </ul>
        <span class="score fr">{{slide.rating}}</span>
      </div>
    </swiper-slide>
  </swiper>
</section>
</template>
<script>
import sectionHeader from '@/components/section-header/index'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'movieSection',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  components: {
    sectionHeader
  },
  data () {
    return {
      movieData: [],
      swiperOption: {
        autoplay: 3000,
        width: 100,
        spaceBetween: 10
      }
    }
  },
  created(){
    this.$axios.get(this.apiUrl).then((response) => {
      // success
      this.movieData = response.data.data;
  }, (error) =>{
      // error
      console.log(error)
    });
  }
}
</script>
