<template>
  <div id="top" class="starter_container">
    <div class="follow_container">
      <div class="col-md-6 col-md-offset-3">
        <h2 class="top-title">{{title}}</h2>
        <h2 class="white second-title">{{secondTitle}}</h2>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/base.css'
import bus from '@/assets/event.js'
export default {
  data() {
    return {
      msg: "ff"
    }
  },
  props: ['bg', 'title', 'secondTitle']

}

</script>
