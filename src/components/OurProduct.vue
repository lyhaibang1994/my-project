<template>
  <div>
    <HeaderFile>
      <img src="@/assets/img/Sourcing/20ac438580fa72a42beb-removebg-preview.png" alt="img">
      <template #headerContent><h4 class="img-text-header">OUR ORGANIC SOURCING PROJECTS</h4></template>
    </HeaderFile>
    <section>
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <p class="activity-text" style="text-align: left;">Viet Haus cooperates with an extensive team of experts and agronomists who work directly with farmers and processors to initiate and support conversion projects, provide from seedlings to technical instructions and continuously ensure the quality and organic integrity of our products. This local presence has enabled us to build sourcing projects that provide us with a steady and secure supply of a wide range of organic ingredients. To find out more, please read about some of these projects below:</p>
          </div>
        </div>
        <div class="row">
          <img src="@/assets/img/Sourcing/voaa-eng-3-2048x1448.jpeg" alt="atlat" style="width: 100%; height: 100%;">
        </div>
        <div class="row" style="justify-content: center;">
          <h4>SOURCING PROJECTS</h4>
        </div>

        <div class="row">
          <div class="col">
            <div class="image">
              <img src="@/assets/img/Sourcing/z2399037076223_2cdb61083196cb2a7838786913bebc45.jpg" alt="nuts">
            </div>
            <div class="content">
              <p class="home-title">Ninh Thuan - Organic Cashew Nuts</p>
              <p>Viet Haus cooperates with an organic cashew cooperative in Ninh Thuan with ethnic farmers in the area. Cashew is planted along the...</p>
              <a href="#" style="color: #548235; text-decoration: underline;">Read more</a>
            </div>
          </div>
          <div class="col">
          <div class="image">
              <img src="@/assets/img/Sourcing/z2405586354017_4015465fba65bd2ad9666d9dee1aebfe.jpg" alt="SPICES">
            </div>
            <div class="content">
             <p class="home-title">Daknong - Organic Chili</p>
              <p>Our local farm partner took years of trial for organic chili and successfully achieve organic standards of EU and USDA, plan...</p>
              <a href="#" style="color: #548235; text-decoration: underline;">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  name: "ourproduct",
};
</script>


<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
<style scoped>
header h2 {
  max-width: initial !important;
}
.row-wrap {
  display: flex;
  flex-wrap: wrap;
}
.row-wrap .col {
  flex: 1 0 0%;
}
 .col .col-title {
  position: relative;
  padding: 5px;
  border: 1px solid black;
  color: black;
  font-weight: bold;
  font-size: 1.25rem;
}
#animalfeed .col .col-title,
#foodbeverages .col .col-title {
  margin-left: 20%;
  margin-right: 20%;

}
.col-content {
  border: 1px solid black;
  background: white;
  padding: 5px;
  margin-left: 20%;
  margin-right: 20%;
  height: 80%;
  text-align: left;
}
.col {
  padding: 0 4rem !important;
  /* min-height: 300px; */
}
.col .image {
  margin: auto;
  display: block;
  width: 80%;
  height: 70%;
}
.col .content {
  text-align: left;
  margin: auto;
  width: 80%;
  height: 30%;
}
@media (max-width: 960px) {
  .row > .col {
      flex: 1 0 100% !important;
  }
}
</style>
