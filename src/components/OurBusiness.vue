<template>
  <div>
    <HeaderFile>
      <img src="@/assets/img/Products/Screen Shot 2021-04-08 at 10.12.24.png" alt="img">
      <template #headerContent><h4 class="img-text-header">OUR PORTFOLIO</h4></template>
    </HeaderFile>
    <section>
    </section>
    <div class="row center"><h4>100% ORGANIC & ECOLOGICAL PRODUCTS</h4></div>
    <section>
      <div class="row">
        <div class="col" @click="$router.push({name: 'ourproductdetail', query: {id: 'Nuts'}})">
          <div class="image">
            <img src="@/assets/img/Products/in-article-cashew-future.jpeg" alt="nuts">
          </div>
          <div class="content">
            <p>NUTS</p>
          </div>
        </div>
        <div class="col" @click="$router.push({name: 'ourproductdetail', query: {id: 'SPICES'}})">
         <div class="image">
            <img src="@/assets/img/Products/824x465-155.png" alt="SPICES">
          </div>
          <div class="content">
            <p>SPICES</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col" @click="$router.push({name: 'ourproductdetail', query: {id: 'FRUITS'}})">
          <div class="image">
            <img src="@/assets/img/Products/Picture1.png" alt="nuts">
          </div>
          <div class="content">
            <p>FRUITS</p>
          </div>
        </div>
        <div class="col">
         <div class="image">
            <img src="@/assets/img/Products/tea-and-herbs-1.jpeg" alt="SPICES">
          </div>
          <div class="content">
            <p>HERBS & TEAS</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col" @click="$router.push({name: 'ourproductdetail', query: {id: 'FLOURS'}})">
          <div class="image">
            <img src="@/assets/img/Products/unnamed.jpeg" alt="nuts">
          </div>
          <div class="content">
            <p>FLOURS & STARCHES</p>
          </div>
        </div>
        <div class="col">
         <div class="image">
            <img src="@/assets/img/Products/Ue0f9975931fb4dcc810c048f4ffda0788.jpeg" alt="SPICES">
          </div>
          <div class="content">
            <p>COFFEE</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  name: "ourbusiness",
};
</script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
<style scoped>
.containerHeader .row > div {
  margin-left: 0px !important;
}
#headerContent {
  min-width: 720px !important;
}
@media(max-width:745px){
.containerHeader .row > div > #headerContent {
min-width: 0px !important;
}
}
.col {
  padding: 0 4rem !important;
  /* min-height: 300px; */
}
.col .image {
  margin: auto;
  display: block;
  width: 80%;
  height: 80%;
}
.col .content {
  margin: auto;
  font-weight: bold;
  width: 80%;
  height: 20%;
  cursor: pointer;
}
.col .content p {
  text-align: center !important;
  font-size: 1.5rem;
}
@media (max-width: 960px) {
  .row > .col {
      flex: 1 0 100% !important;
  }
}
</style>