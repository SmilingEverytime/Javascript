<template>
  <header>
    <nav class="navbar navbar-default
navbar-fixed-top nav-user" role="navigation">
      <div class="container">
        <div class="row">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">海棠春</a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav main-nav  clear navbar-right ">
              <!--               <li><a class="color_animation navactive" href="#first">首页</a></li>
              <li><a class="color_animation" href="#introduce">酒店简介</a></li>
              <li><a class="color_animation" href="#pricing">客房服务</a></li>
              <li><a class="color_animation" href="#beer">酒店动态</a></li>
              <li><a class="color_animation" href="#bread">特色饮食</a></li>
              <li><a class="color_animation" href="#featured">客户服务</a></li>
 -->
              <!-- <li><a class="color_animation" href="#reservation">RESERVATION</a></li>
 -->
              <!-- <li><a class="color_animation" href="#contact">联系我们</a></li> -->
              <li v-for="(value,key) in items">
                <router-link :to="value" class="color_animation">{{key}}</router-link>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
  </header>
</template>
<script>
import "@/assets/css/css-reset.css"
import "@/assets/css/base.css"
export default {
  data() {
    return {
      items: {
        首页: 'introduce',
        客房环境: 'room',
        客房预订: 'reservation',
        客户服务: 'food',
        酒店动态: 'news',
        客户服务: 'serve',
        城市指南: 'map',
        联系我们: 'connect'
      }
    }
  },


}

</script>
