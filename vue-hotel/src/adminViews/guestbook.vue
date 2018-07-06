<template>
  <main class="col-md-10">
    <div class="panel panel-default">
      <div class="panel-heading">
        搜索
      </div>
      <div class="panel-body">
        <form role="form" class="form-inline">
          <div class="form-group">
            <label for="name">名称</label>
            <input type="text" class="form-control" id="name" placeholder="请输入名称">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default">开始搜索</button>
          </div>
        </form>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped ">
        <thead>
          <tr>
            <th>编号</th>
            <th>主题</th>
            <th>作者</th>
            <th>联系方式</th>
            <th>留言内容</th>
            <!-- <th>状态</th>
 -->
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in result">
            <td>{{item.gbid}}</td>
            <td>
              {{item.gbsub}}
            </td>
            <td>{{item.gbname}}</td>
            <td>{{item.gbEmail}}</td>
            <td>{{item.gbcon}}</td>
            <td>
              <div class="btn-group">
                <!-- 
                <router-link class="btn btn-default" to="addNews">查看</router-link> -->
                <button class="btn btn-danger" @click="handleDelete(item.gbid)">删除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="pagination" style="float: right;">
      <li><a href="#">&laquo;</a>
      </li>
      <li class="active"><a href="#">1</a>
      </li>
      <li class="disabled"><a href="#">2</a>
      </li>
      <li><a href="#">3</a>
      </li>
      <li><a href="#">4</a>
      </li>
      <li><a href="#">5</a>
      </li>
      <li><a href="#">&raquo;</a>
      </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      result: [],
    }
  },
  created: function() {
    this.$http.get('/api/api/getMessage')
      .then((response) => {
        console.log(response.data);
        this.result = response.data;
      })
  },
  methods: {
    handleDelete(id) {
      this.$http.post('/api/api/deleteMessage', { id: id }, res => {
        console.log(id)
        let index = this.tableData.indexOf(id);
        this.tableData.splice(index, 1);
        alert("删除成功")
      })
    },
  }
}

</script>
