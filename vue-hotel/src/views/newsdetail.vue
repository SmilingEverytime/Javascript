<template>
  <div>
    <div id="section">首页>新闻动态
      <div id="article">
        <div id="title">{{result[0].newstitle}}
          <div id="date">{{result[0].date}}</div>
        </div>
        <div id="content">
          {{result[0].content}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      result: []
    }
  },
  /*  mounted: function() {

      var self = this
      bus.$once("sendNews", (id) => {
        console.log(bus)
        self.$data.id = 8
        console.log(self.$data.id)
        self.$http.post('/api/api/searchNews', { id: self.id }).then((res) => {
          console.log(self)
          self.$data.result = res.data
          console.log(self)
          console.log(res)
        })
      })

  */
  mounted: function() {
    debugger
    this.id = this.$route.query.id
    console.log(this.id)
    this.$http.post('/api/api/searchNews', { id: this.id }).then((res) => {
      this.result = res.data
    })
  },
}
/*  mounted: function(id) {
    console.log(id)
    this.$http.post('/api/api/searchNews', { id: this.id }, (res) => {
      console.log(res.data)
      this.result = res.data
    })
  }*/

</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

#header {
  background-image: ;
}

#nav a {
  display: inline-block;
  width: 120px;
  height: 40px;
}

a {
  text-decoration: none;
  color: white;
}

#nav a:hover {
  background-color: #F64242;
}

#header {
  height: 141px;
  /* background-image: url(image/l2.png);
*/
  background-repeat: no-repeat;
}

#nav ul li {
  float: left;
  font-size: 24px;
  font-family: 宋体;
  display: block;
}

#nav ul {
  margin-left: 70px;
}

#nav {
  line-height: 40px;
  width: 100%;
  background-color: #003a6c;
  text-align: center;
  height: 40px;
}

#section {
  width: 1100px;
  height: 800px;
  background-color: white;
  margin: 0 auto;
}

#section span {
  line-height: 30px;
  text-align: center;
}

#article {
  width: 1030px;
  height: 1400px;
  margin: 0px 35px 0px 35px;
  background-color: #D7D7CD;
}

#title {
  width: 800px;
  line-height: 80px;
  margin: 0 auto;
  text-align: center;
}

#content {
  width: 950px;
  height: 1100px;
  margin-left: auto;
  margin-right: auto;
  background-color: #D7E0CD;
}

#date {
  width: 800px;
  line-height: 35px;
  text-align: center;
}

#image {
  width: 100%;
  height: 350px;
  margin-top: 4px;
  float: left;
}

#image1 {
  width: 350px;
  height: 300px;
  widdisplay: inline-block;
  float: left;
}

</style>
