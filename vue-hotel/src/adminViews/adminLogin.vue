<template>
  <div class="container" id="form">
    <div class="form row">
      <form class="form-horizontal col-sm-offset-3 col-md-offset-3" id="login_form" action="http://127.0.0.1:3000/api/api/searchUser" method="post">
        <h3 class="form-title">管理员登陆</h3>
        <div class="col-sm-9 col-md-9">
          <div class="form-group">
            <i class="fa fa-user fa-lg"></i>
            <input class="form-control required" type="text" placeholder="Username" name="username" autofocus="autofocus" maxlength="20" v-model="user.userName" />
          </div>
          <div class="form-group">
            <i class="fa fa-lock fa-lg"></i>
            <input class="form-control required" type="password" placeholder="Password" name="password" maxlength="8" v-model="user.password" />
          </div>
          <div class="form-group">
            <label class="checkbox">
              <input type="checkbox" name="remember" value="1" /> 记住密码
            </label>
            <hr />
            <a href="javascript:;" id="register_btn" class="">注册</a>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-success pull-right" value="登陆 " @click="checkUser" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex' // import { setCookie } from '@/assets/setcookie.js'

export default {
  name: 'login',
  data() {
    return {
      user: {
        userName: "",
        password: '',
      }
    }
  },
 /* methods: { checkUser() { this.$http.post('/api/api/searchUser', this.user) console.log(this.user) .then(res => { console.log(res) if (err) { alert("用户名或者密码错误") this.user.password = "" return } else { alert("登陆成功") this.$router.push('/manage') } }) } }
*/

}

</script>
<style scoped>
#form {
  margin: 0 auto;
}

</style>
