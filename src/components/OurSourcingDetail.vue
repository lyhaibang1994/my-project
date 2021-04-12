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
           <span style="text-align: justify; margin: 1rem 0;" v-html="item.content"></span>
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

    <section></section>

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
          "img2": "assets/img/Sourcing/NinhThuan/z2316891072475_374b4a14d64a8f6c4fa3989088138e4e.jpg",
          "img3": "assets/img/Sourcing/NinhThuan/z2405586023316_bb34353d02aaed1e14193a5d9d0807d8.jpg",
          "content": "Our local farm partner took years of trial for organic chili and successfully achieve organic standards of EU and USDA. We achieved 19ha currently and plan to scale up the plantation.<br>Located in the highland of Vietnam with proper weather for chili growth, Daknong still remains the wild environment with green environment, jungles and national parks around the area.",
          "headerItem": "ORGANIC NUTS",
          "USDA_organic": true,
          "green_leaf": true,
          "fairTrade": true,
        },
        {
          "id": "DakNong",
          "header_im_title": "OUR ORGANIC SOURCING PROJECTS",
          "img": "assets/img/Sourcing/Screen Shot 2021-04-08 at 10.39.19.png",
          "headerItem": "ORGANIC NUTS",
          "USDA_organic": true,
          "green_leaf": true,
          "fairTrade": true,
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