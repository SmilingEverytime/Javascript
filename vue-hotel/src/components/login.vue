<!-- <template>
  <div>
    <span class="col-sm-offset-5">个人用户</span>
    <span class="col-sm-offset-1">企业用户</span>
    <div class="container">
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label col-sm-offset-2">用户名</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" name="username" placeholder="请输入用户名" v-model="username">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label col-sm-offset-2">密码</label>
          <div class="col-sm-4">
            <input type="password" class="form-control" name="password" placeholder="请输入密码" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-2 col-sm-offset-2">
          </div>
          <div class="col-sm-4">
            <button class="btn btn-success">
              <router-link :to="register">快速注册注册</router-link>
            </button>
            <button class="btn btn-primary" @click="goLogin">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'


export default {
  data() {
    return {
      register: "register"
      username: "",
      password: "",
    }
  },
  methods: {
    goLogin() {
      if (this.username === "") {
        alert('请输入用户名')
      } else if (this.password == "") {
        alert("请输入密码")
      } else {
        this.$http.post('/login', {

        })
      }
    }
  }
}

</script>
 -->