<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="exampleInputName2" class="col-sm-1 control-label">新闻标题</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="exampleInputName2" placeholder="标题" ref="title">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-offset-2 col-sm-1 control-label">发布日期</label>
        <div class="col-sm-8">
          <input type="date" class="form-control" id="inputPassword3" placeholder="日期" ref="date">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-offset-2 col-sm-1 control-label">新闻内容</label>
        <div class="col-sm-8">
          <textarea id="editor" class="ckeditor form-control" rows="3" col="50" ref="content">Sample Text</textarea>
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-offset-2 col-sm-1 control-label">新闻作者</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="inputPassword3" placeholder="作者" ref="author">
        </div>
      </div>
      <div class="form-group">
        <div class=" col-sm-offset-3 col-sm-8">
          <button type="submit" class="btn btn-default" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script type="text/javascript">
import CKEDITOR from 'CKEDITOR';
export default {
  data() {
    return {
      message: [],
    }
  },
  mounted() {
    CKEDITOR.replace('editor', { toolbar: 'toolbar_Full' });
    this.editor = CKEDITOR.instances.editor;
  },
  methods: {
    add: function() {
      this.$http({
        method: "post",
        url: "/api/api/addNews",
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
