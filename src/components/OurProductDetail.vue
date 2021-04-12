<template>
  <div v-if="item">
    <HeaderFile>
      <img :src="require(`@/${item.img}`)" alt="img" />
    </HeaderFile>

    <section></section>
    <div class="row center">
      <h4>{{ item.headerItem }}</h4>
    </div>

    <section id="ourPurpose">
      <div v-for="(detail,index) in item.items" :key="detail.id">
        <div class="container" v-if="index % 2 == 0">
          <div class="row">
            <div class="col">
              <img :src="require(`@/${detail.img}`)" alt="STORY" />
            </div>
            <div class="col col-text">
              <span class="home-title">{{ detail.header }}</span>
              <p v-html="detail.content"></p>
            </div>
          </div>
        </div>
        <div class="container" v-else>
          <div class="row">
            <div class="col col-text">
              <span class="home-title">{{ detail.header }}</span>
              <p v-html="detail.content "></p>
            </div>
            <div class="col">
              <img :src="require(`@/${detail.img}`)" alt="STORY" />
            </div>
          </div>
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
import DetailList from "../assets/js/Product-Items.js"
export default {
  name: 'ourproductdetail',
  data() {
    return {
      item: null
    }
  },
  mounted() {
    const exist = DetailList.find(x => x.id === this.$route.query.id);
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