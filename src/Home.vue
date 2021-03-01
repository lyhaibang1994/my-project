<template>
<div>
    <header id="home">
      <div class="headerMask"></div>
      <div class="container containerHeader">
        <div class="row">
          <div class="col s12 l8 offset-l2 center-align">
            <div id="headerContent">
                <ImgLogo></ImgLogo>
                <!-- <h2>International energy trading arm of the ELEMENT Group.<br>Actively trading liquid energy like crude oil, refined oil products, and LNG as well as dry-bulk energy commodities</h2> -->
                <h2>We connect our suppliers and customers in value-adding partnerships for higher qualitya and greener products</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="split firstSplit">
        <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
      </div>
    </header>
    <section id="ourBusiness">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">ABOUT US</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">Viet Haus uses our broad business networks to conduct importing and exporting, as well as sourcing and scaling, encompassing a diverse range of business activities acrross fields including animal feed, food & beverage and bioenergy.</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 l12">
            <router-link class="linkBtn" :to="{path: 'our-business'}">OUR BUSINESS</router-link>
          </div>
        </div>
      </div>
    </section>
    <div class="split">
      <div class="mask"></div>
      <img src="@/assets/img/split-top.png" alt="deco banner" class="splitTop">
      <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
    </div>
    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">OUR PURPOSE</h4>
            <p class="center-align center-block">A quintessential trading house for sustainable living</p>
            <hr class="hrTitle">
            <p class="center-align center-block">We are putting purpose at the core of what we do at Viet Haus to create positive impacts on a sustainable future. We provide efficiency on the value chain for our customers and for the world, break down the limits and barriers between sectors, borders, ourselves,  building on our business fundamentals and ensuring our activities on track of a sustainable living journey.
						</p>
          </div>
        </div>
      </div>
    </section>
    <section id="ourValues">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">OUR VALUE</h4>
            <p class="center-align center-block">Our values are at the heart of everything we do, expressing our shared beliefs, behaviors and aspirations as a company</p>
            <hr class="hrTitle">
            <div class="row">
              <div class="col l3 offset-l2 s12">
                <p>We are committed</p>
              </div>
              <div class="col l4 s12">
                <p class="center-align center-block">We are committed to our customers, placing them at the center of everything we do.</p>
                <p class="center-align center-block">We are committed to our people, investing in them as our most important asset.</p>
                <p class="center-align center-block">We are committed to our partners, working alongside them to reap the collective rewards of responsible business.</p>
              </div>
              <div class="col l3 offset-l2 s12">
                <p>We are family</p>
              </div>
              <div class="col l4 s12">
                <p class="center-align center-block">Trust and integrity are the cores of our long-lasting relationships and is essential in fostering loyalty and teamwork.</p>
                <p class="center-align center-block">We care about our people, our customers, suppliers and communities and about creating a sustainable future together.</p>
              </div>
              <div class="col l3 offset-l2 s12">
                <p>We are entrepreneurs</p>
              </div>
              <div class="col l4 s12">
                <p class="center-align center-block">Our growth and success are driven by our entrepreneurial spirit. We empower our people to create and innovate as we build toward the future, balancing individual initiative with informed, measured judgement and controlled decision-making.</p>
              </div>
            </div>						
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
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/materialize.min.js"></script>
<script type="text/javascript" src="assets/js/parallax.js"></script>
<script src="assets/js/init.js"></script>
<script type="text/javascript"></script>
<style scoped>
</style>
<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
