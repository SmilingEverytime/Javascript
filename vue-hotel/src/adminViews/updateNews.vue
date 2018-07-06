<template>
  <div>
    <form class="form-horizontal" method="post" action="http://127.0.0.1:3000/api/api/updateNews">
      <div class="form-group">
        <label for="exampleInputName2" class="col-sm-1 control-label">新闻标题</label>
        <div class=" col-sm-8">
          <input type="text" class="form-control" id="exampleInputName2" placeholder="标题" ref="title" v-model="result[0].newstitle">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-3 control-label">发布日期</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="inputPassword3" placeholder="日期" ref="date" v-model="result[0].date">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-3 control-label">新闻内容</label>
        <div class="col-sm-9">
          <textarea id="editor" class="ckeditor form-control" rows="3" col="50" ref="content" v-model="result[0].content"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-3 control-label">新闻作者</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="inputPassword3" placeholder="作者" ref="author" v-model="result[0].author">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="submit" class="btn btn-default">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import CKEDITOR from 'CKEDITOR';

export default {
  data() {
    return {
      id: "",
      result: [],
    }
  },
  beforeMount: function() {
    this.id = this.$route.query.id
    console.log(this.id)
    this.$http.post('api/api/searchNews', { id: this.id }).then((res) => {
      this.result = res.data
      console.log(this.result)
    })

  },
  methods: {
    update: function() {
      this.$http.post({
        method: "post",
        url: "/api/api/UpdateNews",
        data: {
          title: this.$refs.title.value,
          date: this.$refs.date.value,
          content: this.$refs.content.value,
          author: this.$refs.author.value,

        }
      }).then((res) => {
        console.log(res.data);
      })
    }
  }


}

</script>
