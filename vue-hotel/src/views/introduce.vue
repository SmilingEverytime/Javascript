<template>
  <div>
    <top></top>
    <first :title="title" :secondTitle="secondTitle" style="background-image: url(./../../static/images/steak.jpg)"></first>
    <div class="news">
      <div class="conmenu">
        <p>海棠春酒店</p>
        <p>欢迎光临海棠春酒店 ——</p>
      </div>
      <table>
        <tbody>
          <tr>
            <td><img src="./../../static/images/haitangchun.png"></td>
            <td>
              <span>汉中海棠春餐饮有限公司衍生于城固海棠春酒店，是一家按照四星级标准投资建设的集客房、餐饮、商务、休闲为一体的综合性高端精品酒店，毗邻风光旎丽的汉水江畔，地理位置优越，交通环境便利。距离汉中城固机场仅20分钟车程，西汉高速10分钟车程。酒店总建筑面积1万余平，配套设施齐全，服务设施完善，引进多种现代星级酒店新元素，时尚典雅，奢华尊贵，独具匠心的设计风格处处彰显非凡魅力与豪华品质。</span>
              <br/>
              <span>海棠春餐饮秉持“以人为本、宾客至上”的经营理念，“尊享精致、高雅温馨、不失简约内敛”的设计风格，将雅美汉中与现代商务融为一体，倾情呈现人文与自然的完美融合。酒店配套有高级特色餐厅，可同时容纳600人用餐的大、中、小宴会厅及精致西餐厅，汲取中式精华元素及古典雅致的传统家具，融合现代明朗简洁的设计和布局，富丽典雅、私密轻奢的VIspan包间,处处彰显尊贵品质及中国饮食的文化魅力。 </span>
              <br/>
              <span>海棠春餐饮在继承和发扬传统特色菜品的基础上，集百家之所长，不断开拓创新，形成了现今在川陕之地自成一派海棠春特色菜品。 “海棠家宴、海棠卤肉、海棠一品烩、秦巴凉粉肘”等系列菜品深受消费者青睐，其中“海棠卤肉”最富盛名，“秦巴凉粉肘”也已被中国饭店协会评为“中国名菜”，并在首届陕菜品牌创新大赛中，荣获团体“汉中风味宴席奖”。 酒店先后多次被授予“绿色饭店”、“陕西餐饮名店”等多项荣誉称号。</span>
              <br/>
              <span>精心打造的格调高雅、舒适温馨、优雅唯美的商务、会议、江景等84间各种规格的经典房型，满足客户多元化需求，同时提供尊贵贴心且性价比高的管家式服务。</span>
              <br/>
              <span>“热情好客、亲如一家”是我们的服务理念，“创新思维、开放心态”是我们的经营宗旨，“团队价值”是我们的管理理念，汉中海棠春将秉承现代东方的待客之道，用心致力于为每位旅客提供热情、周到、宾至如归的服务。</span>
              <br/>
              <span>海棠春以“崇尚服务，以人为本”赢得顾客忠实感作为发展的驱动力，始终如一地为宾客提供优质、专业的服务，创造难以忘怀的美好经历，是商务、旅游人士理想的下榻之所。
              </span>
              <br/>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="background-image: url(./../../static/images/foot.png)" class="footer">
      </div>
    </div>
  </div>
</template>
<script>
import first from '@/components/first'
import top from '@/components/header'
import footter from '@/components/footer'

export default {
  data() {
    return {
      bg: {
        backgroundImage: 'url(' + require('./../../static/images/steak.jpg') + ')',
      },
      title: "海棠春",
      secondTitle: 'Best in the City'
    }
  },
  components: {
    top,
    first,
    footter,
  },
}

</script>
<style scoped>
span {
  padding-left: 2em;
}

.footer {
  width: 100%;
  height: 290px;
}

</style>
