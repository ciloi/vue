<style lang="scss" scope>
  .footer-section {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }

  .footer-info {
    display: inline-block;
    box-sizing: border-box;
    padding-left: 50px;
    background: url("./img/douban-footer-logo.png") no-repeat left center;
    background-size: 40px 40px;
    margin: 0 auto 20px;

  dt {
    font-size: 18px;
    text-align: left;
  }

  dd {
    font-size: 14px;
  }

  }
.downolad{
  color: #42bd56;
  text-align: center;
}
</style>
<template>
<footer class="pd03 footer-section">
  <dl class="footer-info">
    <dt>豆瓣</dt>
    <dd>{{sectionFooter}}</dd>
  </dl>
  <p class="downolad">去 App Store 免费下载 iOS 客户端</p>
</footer>
</template>
<script>
export default{
  name : 'footerSection',
  props : {
    sectionFooter:{
      type : String,
      required : true
    }
  }
}
</script>

