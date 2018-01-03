<style lang="scss" scope>
  .header {
    border-bottom: 1px solid #f3f3f3;
    padding: 0.3rem 0.48rem;
    position:fixed;
    width: 100%;
    max-width: 750px;
    box-sizing: border-box;
    background-color:#fff;
    z-index:2;
    top:0;
  h1 {
    background-image: url("./img/db-logo.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 22px;
    width: 46px;
    font-size: 0;
  }

  .header-list {
  li{
    float: left;
    margin-left:0.2rem;
  a{
    text-decoration: none;
  }
  }
  .header-search{
    background-image: url("./img/search-icon.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24.57143px;
    height: 18.28571px;
    margin-top: 4px;
  }
  .movie a{
    color: rgb(35, 132, 232);
  }

  .books a{
    color: rgb(159, 120, 96);
  }

  .status a{
    color: rgb(228, 168, 19);
  }

  .group a{
    color: rgb(42, 184, 204);
  }

  }
  }
</style>
<template>
  <header class="clearfix header pd03">
    <a href="/" class="fl">
      <h1>豆瓣</h1>
    </a>
    <ul class="header-list fr">
      <li class="movie">
        <a href="/#/movie">电影</a>
      </li>
      <li class="books">
        <a href="/#/books">图书</a>
      </li>
      <li class="status">
        <a href="/#/status">广播</a>
      </li>
      <li class="group">
        <a href="/#/group">小组</a>
      </li>
      <li class="header-search"></li>
    </ul>
  </header>
</template>

