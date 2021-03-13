<template>
  <div>
    <header id="home">
      <div class="headerMask"></div>
      <div class="container containerHeader">
        <div class="row">
          <div class="col s12 l8 offset-l2 center-align">
            <div id="headerContent">
              <div id="logoContainer">
                <ImgLogo></ImgLogo>
              </div>
              <!-- <h2>International energy trading arm of the ELEMENT Group.<br>Actively trading liquid energy like crude oil, refined oil products, and LNG as well as dry-bulk energy commodities</h2> -->
              <h2>
                We organised and simplified our businesses into 4
                operating groups, each with a clear focus and benefits for our customers, communities and our business.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="split firstSplit">
        <img
          src="@/assets/img/split-bottom.png"
          alt="deco banner"
          class="splitBottom"
        />
      </div>
    </header>
    <section id="animalfeed">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">ANIMAL FEED</h4>
            <hr class="hrTitle" />
            <div class="center-align center-block row-wrap">
              <div class="col">
                <p class="col-title">Animal Protein</p>
                <p class="col-content">Meat bone Meal
                  <br>
                  Blood Meal
                  <br>
                  Poultry Meal
                  <br>
                  Feather Meal
                  <br>
                  Fish Meal
                  <br>
                  Hemoglobin
                  <br>
                  Plasma
                </p>
                </div>
              <div class="col">
                <p class="col-title">Plant Protein</p>
                <p class="col-content">
                  DDSG<br>
                  Cotton Seed<br>
                  Sun Flower Meal<br>
                  Fermented Soybean Meal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="bioenergy">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">BIOENERGY</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              We believe that waste is never useless, then we contribute in the
              process to make it turn back to serve and be a part of our
              sustainable development by joining in the business of the products
              related to clean and sustainable energy sources, especially on
              bio-based materials, animal fats and plant oils which are precious
              materials for bio diesel production. Our role is to be your local
              sourcing agent or collector, to secure offers with genuine oils
              and fats quality.
            </p>
             <div class="center-align center-block row-wrap">
              <div class="col"><p class="col-title">. Used Cooking Oil</p></div>
              <div class="col"><p class="col-title">. Cashew Nut Shell Liquid</p></div>
              <div class="col"><p class="col-title">. Animal Fat</p></div>
             </div>
          </div>
        </div>
      </div>
    </section>
    <section id="foodbeverages">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">FOOD & BEVERAGES</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              We provide food and beverage ingredients and processed products to
              manufacturers and importers in the food and beverage industry.
            </p>
             <div class="center-align center-block row-wrap">
              <div class="col"><p class="col-title">. Organic ingredients</p></div>
              <div class="col"><p class="col-title">. Eco-friendly straws</p></div>
             </div>
             <div class="center-align center-block row-wrap">
              <div class="col"><p class="col-title">. Natural Fruits & Veggies</p></div>
              <div class="col"><p class="col-title">. Edible Oils</p></div>
             </div>
          </div>
        </div>
      </div>
    </section>
    <section id="consumercare">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">CONSUMER CARE</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              We trade several important chemical ingredient categories and materials that provide health, 
              wellness, beauty and protection claims for our fast-moving consumer goods customers.
              These materials include cosmetic ingredients, Omega 3-6-9 oils and materials for disinfectional production.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="split">
      <div class="mask"></div>
      <img
        src="@/assets/img/split-top.png"
        alt="deco banner"
        class="splitTop"
      />
      <img
        src="@/assets/img/split-bottom.png"
        alt="deco banner"
        class="splitBottom"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ourproduct",
};
</script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/materialize.min.js"></script>
<script type="text/javascript" src="assets/js/parallax.js"></script>
<script src="assets/js/init.js"></script>
<script type="text/javascript"></script>

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
</style>
