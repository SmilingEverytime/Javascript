<template>
  <div>
    <top></top>
    <first :title="title" :secondTitle="secondTitle" style="background-image: url(./../../static/images/map.jpg)"></first>
    <main>
      <div class="pic">
        <img src="/static/images/guide1.jpg">
        <img src="/static/images/guide2.jpg">
        <img src="/static/images/guide3.jpg">
        <img src="/static/images/guide4.jpg">
      </div>
    </main>
    <mapDrag class="map"></mapDrag>
  </div>
</template>
<script>
import first from '@/components/first'
import top from '@/components/header'
import mapDrag from '@/components/mapDrag'

export default {
  data() {
    return {
      title: "城市指南 ",
      secondTitle: 'City Guide'
    }
  },
  components: {
    top,
    first,
    mapDrag,
  },
}

</script>
<style scoped>
main {
  background-color: rgb(238, 241, 243);
}

.pic {
  display: inline-block;
  height: 400px;
  width: 100%;
  margin-top: 10px;
}

img {
  width: 298px;
  height: 390px;
  margin-bottom: 5px;
  margin-right: 5px;
}

</style>
