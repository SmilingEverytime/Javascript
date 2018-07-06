<template>
  <div>
    <top></top>
    <first :title="title" :secondTitle="secondTitle" style="background-image: url(./../../static/images/serve.jpg)"></first>
    <div class="news">
      <div class="conmenu">
        <p>海棠春酒店</p>
        <p>客户服务</p>
      </div>
      <main>
        <table class="col-md-10 col-offset-1">
          <tbody>
            <tr>
              <td>
                <span> 希望您在汉中旅途愉快！ 我们的团队的全体工作人员从周一到周日每天24小时为您服务。
                </span>
                <button>住店旅客专享</button>
              </td>
              <td><span>
住店客户专享

我们的电子商务设施使您能够在最佳条件下工作（ADSL；安全的Wifi连接 ...）。</span></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>
<script>
import first from '@/components/first'
import top from '@/components/header'
import middle from '@/components/middle'
export default {
  data() {
    return {
      title: "客户服务",
      secondTitle: 'Customer Service'
    }
  },
  components: {
    top,
    first,
    middle,
  },
}

</script>
</template>
