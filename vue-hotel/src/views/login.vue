<template>
  <div class="container">
    <div class="form row">
      <form class="form-horizontal col-sm-offset-3 col-md
-offset-3" id="login_form">
        <h3 class="form-title">Login to your account</h3>
        <div class="col-sm-9 col-md-9">
          <div class="form-group">
            <i class="fa fa-user fa-lg"></i>
            <input class="form-control required" type="text" placeholder="Username" name="username" autofocus="autofocus" maxlength="20" />
          </div>
          <div class="form-group">
            <i class="fa fa-lock fa-lg"></i>
            <input class="form-control required" type="password" placeholder="Password" name="password" maxlength="8" />
          </div>
          <div class="form-group">
            <label class="checkbox">
              <input type="checkbox" name="remember" value="1" /> Remember me
            </label>
            <hr />
            <a href="javascript:;" id="register_btn" class="">Create an account</a>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-success pull-right" value="Login " />
          </div>
        </div>
      </form>
    </div>
    <div class="form row">
      <form class="form-horizontal col-sm-offset-3 col-md-offset-3" id="register_form">
        <h3 class="form-title">Login to your account</h3>
        <div class="col-sm-9 col-md-9">
          <div class="form-group">
            <i class="fa fa-user fa-lg"></i>
            <input class="form-control required" type="text" placeholder="Username" name="username" autofocus="autofocus" />
          </div>
          <div class="form-group">
            <i class="fa fa-lock fa-lg"></i>
            <input class="form-control required" type="password" placeholder="Password" id="register_password" name="password" />
          </div>
          <div class="form-group">
            <i class="fa fa-check fa-lg"></i>
            <input class="form-control required" type="password" placeholder="Re-type Your Password" name="rpassword" />
          </div>
          <div class="form-group">
            <i class="fa fa-envelope fa-lg"></i>
            <input class="form-control eamil" type="text" placeholder="Email" name="email" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-success pull-right" value="Sign Up " />
            <input type="submit" class="btn btn-info pull-left" id="back_btn" value="Back" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import boostrap from "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import "@/assets/css/css-reset.css"
import "@/assets/css/base.css"


export default {
  name: "login",
  data() {
    return {
      msg: 'hello'
    }
  }
}

</script>
<style></style>
