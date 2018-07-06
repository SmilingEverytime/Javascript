<template>
  <div>
    <top></top>
    <first :title="title" :secondTitle="secondTitle" style="background-image: url(./../../static/images/room1.jpg)"></first>
    <div class="news">
      <div class="conmenu">
        <p>海棠春酒店</p>
        <p>客房环境</p>
      </div>
      <div>
        <ul>
          <li v-for="item in result">
            <router-link to="{path:'roomPic',params:{src:item.desc}}"> <img :src="item.desc"></router-link>
          </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import first from '@/components/first'
import top from '@/components/header'
import middle from '@/components/middle'
import "@/assets/css/css-reset.css"
export default {
  data() {
    return {
      title: "酒店图片",
      secondTitle: 'Hotel Gallery',
      result: [],
    }
  },
  components: {
    top,
    first,
    middle,
  },
  /* methods: { seePic(path) { this.$route.push(path) } },
   */

  created: function() {
    this.$http.get('/api/api/hotelPic')
      .then((response) => {
        console.log(response.data);
        this.result = response.data;
      })
  }
}

</script>
<style scoped>
li img {
  height: 400px;
  margin-left: 5px;
}

li:nth-child(3n+3) {
  width: 583px;
  display: inline-block;
  margin-left: 10px;
}

li:nth-child(3n+1) {
  width: 287px;
  display: inline-block;
  margin-left: 10px;
}

li:nth-child(3n+2) {
  width: 287px;
  display: inline-block;
  margin-left: 10px;
}

</style>
