<template>
  <div>
    <header id="ourBusiness">
      <div class="headerMask"></div>
      <div class="container containerHeader">
        <div class="row">
          <div class="col s12 l8 offset-l2 center-align">
            <div id="headerContent">
              <div id="logoContainer">
                <ImgLogo></ImgLogo>
              </div>
              <!-- <h2>International energy trading arm of the ELEMENT Group.<br>Actively trading liquid energy like crude oil, refined oil products, and LNG as well as dry-bulk energy commodities</h2> -->
              <h2>Create efficient solutions for your value chain</h2>
              <hr class="hrTitle" />
              <p class="center-align center-block">
                We responsibly source, transform and deliver in specialty
                ingredients, production materials, processed products by supplying
                by innovative solutions that promote your health, beauty, nutrition, hygiene 
                and environment protection.
              </p>
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
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">SALES & REPRESENTATION</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              You have the products; we have the contacts to commercialise them rapidly throughout the country.
               Let us show you how our sales team will allow you to develop on the Vietnamese market. Since our beginnings, 
               we have established long-lasting relations with business partners and we are proud to let you benefit from those.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">SOURCING</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              Viet Haus have the contacts, systems, people and resources to
              source you the best deal in Vietnam. We can: <br />- Tender your
              product out <br />- Validate potential suppliers <br />- Provide
              you with samples <br />- Negotiate prices for you <br />- Perform
              stringent quality checks <br />- Arrange delivery or export to
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">TRADING</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              Our mission is to bring Asia identity to the World. We build trust
              and long term cooperation with our manufacturers and assure
              quality products delivered to you.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">PLANTATION MANAGEMENT</h4>
            <hr class="hrTitle" />
            <p class="center-align center-block">
              We organize plant areas for raw materials and products by partnering with cooperatives to set up and manage plantation and processing products. We construct a material area to meet the client's standards and to fullfil the criteria of required certificatations. 
<br>
Some references:
<br>
- Set up and manage organic cashew farms
<br>
- Set up and manage short term fruits or veggies
<br>
- Set up and manage phamarceutical herbs for your production 
...
            </p>
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
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/materialize.min.js"></script>
<script type="text/javascript" src="assets/js/parallax.js"></script>
<script src="assets/js/init.js"></script>
<script type="text/javascript"></script>
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


</style>