<template>
  <div>
    <span class="col-sm-offset-5">用户登陆</span>
    <div class="container">
      <div class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label col-sm-offset-2">用户名</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" name="" placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label col-sm-offset-2">密码</label>
          <div class="col-sm-4">
            <input type="password" class="form-control" name="" placeholder="请输入密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-2 col-sm-offset-2">
          </div>
          <div class="col-sm-4">
            <button class="btn btn-success">注册
            </button>
            <!-- <button class="btn btn-primary">登录</button>
 -->
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
      msg: "hello"
    }
  }
}

</script>
