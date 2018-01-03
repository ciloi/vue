<style lang="scss" scope>
  .download-section{
    padding: 0 0 0 10px;
    height: 2rem;
    font-size: 14px;
    line-height: 2rem;
    background: url("./img/promotion_bg.jpg") no-repeat;
    background-size: 100% auto;
    span{
      color: #2CA532;
    }
    button{
      font-size: 14px;
      padding: 0 4px;
      margin-right: 10px;
    }
    .download{
      border: 1px solid #42bd56;
      background: #42bd56;
      font-weight: bold;
      color: #fff;
    }
    .openapp{
      border: 1px solid #42bd56;
      color: #42bd56;
      background: transparent;
    }
  }
  .login-section{
    height: 60px;
    line-height: 60px;
    border-bottom:1px solid #E8E8E8;
    .user-icon{
      padding-left:46px;
      position:relative;
      margin-left: 10px;
      &:before{
        content: '';
        position: absolute;
         top:10px;
    left: 0;
        width:40px;
        height: 40px;
         border-radius:100%;
         background: url("./img/user_normal.jpg") no-repeat;
         background-size: 40px 40px;
         background-position: center center;
       }
    }
    i{
      background-size: 24px 24px;
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-right: 10px;
    }
    .camera-icon{
       background: url("./img/ic_status_camera.svg") no-repeat;
     }
    .edit-icon{
      background: url("./img/ic_status_pen.svg") no-repeat;
    }
  }
</style>
<template>
  <div class="container-body">
    <div class="download-section clearfix">
      <span class="fl">打开App,回复广播</span>
      <div class="fr">
        <button class="download">极速下载</button>
        <button class="openapp">打开</button>
      </div>
    </div>
    <div class="login-section pd03 clearfix">
      <div class="fl user-icon">登录发广播</div>
      <div class="fr" style="margin-top: 8px;">
        <i class="edit-icon"></i>
        <i class="camera-icon"></i>
      </div>
    </div>
    <statusSection :status-url="statusUrl"/>
    <footerBar :section-footer="sectionFooter"/>
  </div>
</template>
<script>
import statusSection from '@/components/status-section/index'
import footerBar from '@/components/footer/index'

export default {
  name: 'app',
  data () {
    return {
      statusUrl:'/api/books/status',
      sectionFooter:'在 App 中刷广播更愉快'
    }
  },
  components:{
    statusSection,
    footerBar
  }
}
</script>
