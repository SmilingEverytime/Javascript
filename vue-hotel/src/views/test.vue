<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-bind:src="'result.desc'" style="width:100px,height:200px">
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      result: [],
    }
  },
  created: function() {
    this.$http.get('/api/api/test')
      .then((response) => {
        console.log(this.$http)

        console.log(response.data);
        this.result = response.data
        console.log(this.result)
      })
  },
  methods: {
    picture() {
      this.$http.get('/api/api/test').then(result => {
        console.log(this.$http)
        var res = result.data;
        console.log(res)
        this.result = res.result
      })
    }
  }
}

</script>
