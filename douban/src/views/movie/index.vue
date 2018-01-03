<template>
  <div class="container-body">
    <movieSection v-for="(item,index) in apiUrlArr" :key="index" :api-url="item"/>
    <foundSection :found-url="foundUrl"/>
    <classifySection :classify-url="classifyUrl"/>
    <footerBar :section-footer="sectionFooter"/>
  </div>
</template>
<script>
import movieSection from '@/components/movie-section/index'
import foundSection from '@/components/movie-found/index'
import classifySection from '@/components/movie-classify/index'
import footerBar from '@/components/footer/index'

export default {
  name: 'app',
  data () {
    return {
      apiUrlArr:['/api/movie/hotMovie','/api/movie/freeMovie','/api/movie/newMovie'],
      foundUrl:'/api/movie/foundMovie',
      classifyUrl:'/api/movie/classifyMovie',
      sectionFooter:'我们的精神角落'
    }
  },
  components: {
    movieSection,
    foundSection,
    classifySection,
    footerBar
  }
}
</script>
