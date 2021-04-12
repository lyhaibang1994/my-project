<template>
  <div v-if="item">
    <HeaderFile>
      <img :src="require(`@/${item.img}`)" alt="img" />
      <template #headerContent><h4 class="img-text-header">{{item.header_im_title}}</h4></template>
    </HeaderFile>

    <section></section>
    <div class="row container">
      <h4 style="color: #548235; text-transform: inherit;">{{ item.title }}</h4>
    </div>

    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <img :src="require(`@/${item.img1}`)" alt="img-1" style="width: 100%;"/>
           <span style="text-align: justify; margin-top: 2rem;" v-html="item.content"></span>
        </div>
      </div>
    </section>

    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <img :src="require(`@/${item.img2}`)" alt="img-1" style="width: 100%;margin: 1rem 0;"/>
        </div>
      </div>
    </section>

    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <img :src="require(`@/${item.img3}`)" alt="img-1" style="width: 100%;margin: 1rem 0;"/>
        </div>
      </div>
    </section>


    <section>
      <div class="container">
        <div class="row center">
          <div class="col" v-if="item.img4">
            <img  style="width: 80%" :src="require(`@/${item.img4}`)" alt="img3" />
          </div>
          <div class="col" v-if="item.img5">
            <img  style="width: 80%" :src="require(`@/${item.img5}`)" alt="img5" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container" id="certificate">
        <div class="row center">
          <div class="col" v-if="item.USDA_organic">
            <img src="@/assets/img/Products/Organic Cert 3.png" alt="USDA_organic" />
          </div>
          <div class="col" v-if="item.green_leaf">
            <img src="@/assets/img/Products/Organic-Cert 1.png" alt="Organic-Cert 1" />
          </div>
          <div class="col" v-if="item.fairTrade">
            <img src="@/assets/img/Products/download.jpeg" alt="download" />
          </div>
          <div class="col" v-if="item.Jas">
            <img src="@/assets/img/Products/Organic Cert 2.png" alt="Organic-Cert 1" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ourproductdetail',
  data() {
    return {
      item: null,
      items: [
        {
          "id": "NinhThuan",
          "header_im_title": "OUR ORGANIC SOURCING PROJECTS",
          "title": "Ninh Thuan - Organic Cashew Nuts",
          "img": "assets/img/Sourcing/Screen Shot 2021-04-08 at 10.39.19.png",
          "img1": "assets/img/Sourcing/z2399037076223_2cdb61083196cb2a7838786913bebc45.jpg",
          "img2": "assets/img/Sourcing/NinhThuan/161971315_1341545802911196_5152150461574766921_n.jpeg",
          "img3": "assets/img/Sourcing/NinhThuan/157260454_1333069187092191_6555713966580631824_n.jpeg",
          "content": "Viet Haus cooperates with an organic cashew cooperative in Ninh Thuan with ethnic farmers in the area. Cashew is planted along the hills, jungles and on the lands of local community which facilitates the organic conversion. We have to say it is beyond sustainable cashew because of its wild and natural planting process.<br>We sucessfully develop 2,153 ha of cashew certified EU, USDA and Fairtrade standards with the contribution of 1002 small holder farmers as the cooperative membership. In 2022, we can supply more than 1,000 mt cashew nuts with Fairtrade certification. We target to develop and reach 5000ha organic cashew in 2025.<br>More than that, the best harvest for us is when we look at the happy faces of the local community when their life can be improved and secured thanks the the project.",
          "headerItem": "ORGANIC NUTS",
          "USDA_organic": true,
          "green_leaf": true,
          "fairTrade": true,
        },
        {
          "id": "DakNong",
          "header_im_title": "OUR ORGANIC SOURCING PROJECTS",
          "title": "Daknong - Organic Chili",
          "img": "assets/img/Sourcing/Screen Shot 2021-04-08 at 10.39.19.png",
          "img1": "assets/img/Sourcing/z2405586354017_4015465fba65bd2ad9666d9dee1aebfe.jpg",
          "img2": "assets/img/Sourcing/DakNong/z2316891072475_374b4a14d64a8f6c4fa3989088138e4e.jpg",
          "img3": "assets/img/Sourcing/DakNong/z2405586023316_bb34353d02aaed1e14193a5d9d0807d8.jpg",
          "content": "Our local farm partner took years of trial for organic chili and successfully achieve organic standards of EU and USDA. We achieved 19ha currently and plan to scale up the plantation.<br>Located in the highland of Vietnam with proper weather for chili growth, Daknong still remains the wild environment with green environment, jungles and national parks around the area.",
          "img4": "assets/img/Sourcing/DakNong/Organic Fresh Chilli.jpg",
          "img5": "assets/img/Sourcing/DakNong/z2229317999301_cd3ace9bcd47f0180be0dc9cdedbac5a.jpg",
          "headerItem": "ORGANIC NUTS",
          "USDA_organic": true,
          "green_leaf": true,
          "Jas": true,
        }
      ]
    }
  },
  mounted() {
    const exist = this.items.find(x => x.id === this.$route.query.id);
    if (exist) {
      this.item = exist;
    }
  },
  methods: {
  }
}
</script>


<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>