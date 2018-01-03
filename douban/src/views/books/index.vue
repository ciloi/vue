<template>
  <div class="container-body">
    <movieSection v-for="(item,index) in apiUrlArr" :key="index" :api-url="item"/>
    <bookStore :books-url="booksUrl"/>
    <foundSection :found-url="foundUrl"/>
    <classifySection :classify-url="classifyUrl"/>
    <footerBar :section-footer="sectionFooter"/>
  </div>
</template>
<script>
import movieSection from '@/components/movie-section/index'
import bookStore from '@/components/book-store/index'
import foundSection from '@/components/movie-found/index'
import classifySection from '@/components/movie-classify/index'
import footerBar from '@/components/footer/index'

export default {
  name: 'app',
  data () {
    return {
      apiUrlArr:['/api/books/hotBooks','/api/books/freeBooks','/api/books/newBooks'],
      foundUrl:'/api/books/foundBooks',
      classifyUrl:'/api/books/classifyBooks',
      booksUrl:'/api/books/bookStore',
      sectionFooter:'我们的精神角落'
    }
  },
  components: {
    movieSection,
    bookStore,
    foundSection,
    classifySection,
    footerBar
  }
}
</script>
