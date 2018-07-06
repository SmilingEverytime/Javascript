<template>
  <div>
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
                        海棠春
                    </a>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/manage/article" class="icon-bar" href="#">管理首页</router-link>
            </li>
            <li>
              <router-link to="/manage/article">新闻管理</router-link>
            </li>
            <li>
              <router-link to="#">管理员管理</router-link>
            </li>
            <li>
              <router-link to="/manage/guestbook">留言板管理</router-link>
            </li>
            <li><a href="#">图片管理</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a>欢迎您,{{username}}</a>
            </li>
            <li>
              <router-link to="adminLogin" @click="loginout">安全退出</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          <router-link to="/manage/article" class="list-group-item active">新闻管理</router-link>
          <router-link to="#" class="list-group-item">
            管理员管理</router-link>
          <router-link to="/manage/guestbook" class="list-group-item">
            留言板管理</router-link>
          <router-link to="#" class="list-group-item">
            图片管理</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import news from './article.vue'
import guest from './guestbook.vue'
export default {
  data() {
    return {
      username: '',
      result: [],
    }
  },
  methods: {
    loginout: function() {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
  },
  created: function() {
    this.$http.get('/api/api/getNews')
      .then((response) => {
        console.log(response.data);
        this.result = response.data;
      })
  },
  mounted: function() {
    this.username = document.cookie.split("=")[1]
  },
}

</script>
