<template>
  <div class="container-body">
    <groupSection :group-url="groupUrl"/>
    <footerBar :section-footer="sectionFooter"/>
  </div>
</template>
<script>
import footerBar from '@/components/footer/index'
import groupSection from '@/components/group-section/index'

export default {
  name: 'app',
  data () {
    return {
      sectionFooter:'我们的精神角落',
      groupUrl:'/api/books/group'
    }
  },
  components: {
    groupSection,
    footerBar
  }
}
</script>
