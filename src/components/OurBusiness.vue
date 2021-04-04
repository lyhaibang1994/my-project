<template>
  <div>
    <HeaderFile>
      <img src="@/assets/img/Products/_116597695_gettyimages-943001868.jpeg" alt="img">
      <template #headerContent><h4 class="img-text-header">OUR PORFOLIO</h4></template>
    </HeaderFile>
    
    <section>
      <div class="row">
        <div class="col">
          <div class="image">
            <img src="@/assets/img/Products/depositphotos_233860678-stock-photo-flat-lay-composition-organic-nuts.jpeg" alt="nuts">
          </div>
          <div class="content">
            <p>NUTS</p>
          </div>
        </div>
        <div class="col">
         <div class="image">
            <img src="@/assets/img/Products/824x465-155.png" alt="SPICES">
          </div>
          <div class="content">
            <p>SPICES</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="image">
            <img src="@/assets/img/Products/hvir9d3axgdsx5ircsdo.jpeg" alt="nuts">
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
        <div class="col">
          <div class="image">
            <img src="@/assets/img/Products/unnamed.jpeg" alt="nuts">
          </div>
          <div class="content">
            <p>TAPIOCA</p>
          </div>
        </div>
        <div class="col">
         <div class="image">
            <img src="@/assets/img/Products/147912919-coffee-background-organic-coffee-beans.jpeg" alt="SPICES">
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
  width: 80%;
  height: 20%;
}
@media (max-width: 960px) {
  .row > .col {
      flex: 1 0 100% !important;
  }
}
</style>