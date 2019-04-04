<template>
  <div id="app">
      <ul class="footer-bar">
        <li class="footer-bar-item">首页</li>
        <li class="footer-bar-item">分类</li>
        <li class="footer-bar-item">购物车</li>
        <li class="footer-bar-item">我的</li>
      </ul>
  </div>
</template>

<style lang="scss">
.footer-bar{
  display:flex;
  background-color: #eeeeee;
  position:fixed;
  bottom: 0;
  width: 100%;
  &-item{
    flex-grow:1;
    text-align:center;
  }
}
</style>
