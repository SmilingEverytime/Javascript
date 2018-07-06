<template>
  <div>
    <top></top>
    <first :title="title" :secondTitle="secondTitle" style="background-image: url(./../../static/images/news.jpg)"></first>
    <div class="news">
      <div class="conmenu">
        <h3>海棠春酒店</h3>
        <p>酒店新闻———</p>
      </div>
      <main>
        <table>
          <tbody>
            <tr v-for="item in result">
              <router-link :to="{path:'newsdetail',query:{id:item.idnews}}" class="a">
                <td><img :src="item.pic"></td>
                <td>
                  <h3>{{item.newstitle}}</h3>
                  <h4>{{item.date}}</h4>
                  <h6>{{item.content}}</h6>
                </td>
              </router-link>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>
<script>
import bus from '@/assets/event'
import first from '@/components/first'
import top from '@/components/header'
export default {
  data() {
    return {
      title: "酒店动态",
      secondTitle: 'Hotel News',
      result: [],
    }
  },
  components: {
    top,
    first,
  },
  created: function() {
    this.$http.get('/api/api/getNews')
      .then((response) => {
        console.log(response.data);
        this.result = response.data;
      })

  },
  /*  methods: {
      detail: function(id) {
        console.log(id)

        bus.$emit("sendNews", id)
        console.log(bus)
      }
    }*/
}

</script>
<style scoped>
table {
  /* border-collapse: separate;
*/
  margin: 0 auto;
  border-spacing: 17px, 40px;
  padding: 25px;
}

td>img {
  height: 130px;
  width: 200px;
}

tr {
  border-top: 1px solid rgb(170, 170, 170);
  border-bottom: 1px solid rgb(170, 170, 170);
}

.a {
  color: black !important;
  text-decoration-style: none !important;
}

.a hover,
.a focus {
  text-decoration-style: none !important;
}

</style>
