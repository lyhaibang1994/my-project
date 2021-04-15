<template>
<div>
  <HeaderFile>
    <img src="@/assets/img/Our-company/sapa.webp" alt="img"> 
  </HeaderFile>
    <section id="ourBusiness">
      <div class="container">
        <div>
          <div class="activity-text">Viet Haus is the hub in Vietnam for bio, organic and ecological products. We offer a full service portfolio based on our efficient sourcing, sustainability approach and processing & distribution capabilities.</div>
        </div>
        <!-- <div class="row">
          <div class="col s12 l12">
            <router-link class="linkBtn" :to="{path: 'our-business'}">Products</router-link>
          </div>
        </div> -->
      </div>
    </section>
    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="@/assets/img/Our-company/Screen Shot 2021-04-08 at 09.24.21.png" alt="ORGANIC HUB">
          </div>
          <div class="col col-text">
            <span class="home-title">VIET HAUS - ORGANIC HUB</span>
          </div>
        </div>
      </div>
    </section>
    
    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="@/assets/img/Our-company/166760709_794649987832236_981638523498455910_n.jpeg" alt="STORY">
          </div>
          <div class="col col-text">
            <span class="home-title">OUR STORY</span>
            <p>We understand the difficulty of clients to source organic products in Vietnam in large scale and insecurity of farmers in Vietnam for a sustainable agriculture and better life. Viet Haus was born to play a role as a hub in Vietnam stand for organic & sustainable. We offer a full service porfolio based on our efficient sourcing, sustainability approach, processing & distribution capabilities.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="@/assets/img/Our-company/z2387897128529_3b8d9634fcf405de97d0c2bd4239f10c.jpg" alt="STORY">
          </div>
          <div class="col col-text">
            <span class="home-title">OUR NETWORK</span>
            <p>Our deep network of suppliers, processors and partners makes us a good choice partner for you in the organic food. We link organic farmers in Vietnam to the world, become a  trusted partner and enable them to improve their quality of life.</p>
          </div>
        </div>
      </div>
    </section>
        
    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="@/assets/img/Our-company/SONZ7122.jpg" alt="STORY">
          </div>
          <div class="col col-text">
            <span class="home-title">OUR SPECIALITIES</span>
            <p>Viet Haus sources premium, certified organic food ingredients for the international food industry made in Vietnam. As an international player with local presence, we are able to guide our clients through the organic journey and offer tailor-made solutions to suit individual requirements.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
<style scoped>
.container {
  width: 80% !important;
}
.col-text {
    padding: 0 0 0 3rem !important;
}
</style>