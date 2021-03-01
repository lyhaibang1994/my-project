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
    <div class="split">
      <div class="mask"></div>
      <img src="@/assets/img/split-top.png" alt="deco banner" class="splitTop">
      <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
    </div>
    <section id="ourValues">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">OUR VALUE</h4>
            <p class="center-align center-block">Our values are at the heart of everything we do, expressing our shared beliefs, behaviors and aspirations as a company</p>
            <hr class="hrTitle">
            <div class="card-deck row">
              <div class="col l4 s12">
                  <div data-react-class="OpportunitiesCard" data-react-props="{&quot;name&quot;:&quot;teams&quot;,&quot;link&quot;:&quot;/search-teamcategory&quot;,&quot;image&quot;:&quot;https://static.amazon.jobs/global_images/36/images/Teams_3_copy.jpg?1540850190&quot;,&quot;image_square&quot;:&quot;https://static.amazon.jobs/global_images/37/images/Team-square.jpg?1540850211&quot;}">
                    <a data-reactroot="" class="card rounded d-sm-block" id="teams" data-track="explore opportunities teams card" data-category="Homepage opportunities card" data-action="Teams">
                        <img class="card-img-top rounded-top top-image d-sm-none d-lg-block" src="@/assets/img/shutterstock.jpg" role="presentation" aria-hidden="true" alt="">
                        <div class="card-body d-sm-inline-block">
                          <h3 class="card-title">We are committed</h3>
                          <p class="card-text">We are committed to our customers, placing them at the center of everything we do.
                          </p>
                          <p class="card-text">We are committed to our people, investing in them as our most important asset.
                          </p>
                          <p class="card-text">We are committed to our partners, working alongside them to reap the collective rewards of responsible business.
                          </p>
                          <span style="cursor: pointer;" class="fake-link card-body-fake-link d-none d-sm-block d-lg-none">Read more</span>
                        </div>
                    </a>
                  </div>
              </div>
              <div class="col l4 s12">
                  <div data-react-class="OpportunitiesCard" data-react-props="{&quot;name&quot;:&quot;business_categories&quot;,&quot;link&quot;:&quot;/search-jobcategory&quot;,&quot;image&quot;:&quot;https://static.amazon.jobs/global_images/34/images/Job_Categories-s.jpg?1540850104&quot;,&quot;image_square&quot;:&quot;https://static.amazon.jobs/global_images/35/images/Job_Categories-square.jpg?1540850129&quot;}">
                    <a data-reactroot="" class="card rounded d-sm-block" id="business_categories" data-track="explore opportunities business_categories card" data-category="Homepage opportunities card" data-action="Job Categories">
                        <img class="card-img-top rounded-top top-image d-sm-none d-lg-block" src="@/assets/img/family.jpg" role="presentation" aria-hidden="true" alt="">
                        <div class="card-body d-sm-inline-block">
                          <h3 class="card-title">We are family</h3>
                          <p class="card-text">Trust and integrity are the cores of our long-lasting relationships and is essential in fostering loyalty and teamwork.						
                          </p>
                          <p class="card-text">We care about our people, our customers, suppliers and communities and about creating a sustainable future together.						
                          </p>
                          <span style="cursor: pointer;" class="fake-link card-body-fake-link d-none d-sm-block d-lg-none">Read more</span>
                        </div>
                    </a>
                  </div>
              </div>
              <div class="col l4 s12">
                  <div data-react-class="OpportunitiesCard" data-react-props="{&quot;name&quot;:&quot;locations&quot;,&quot;link&quot;:&quot;/locations&quot;,&quot;image&quot;:&quot;https://static.amazon.jobs/global_images/32/images/Location_copy.jpg?1540849565&quot;,&quot;image_square&quot;:&quot;https://static.amazon.jobs/global_images/33/images/Location-square.jpg?1540849601&quot;}">
                    <a data-reactroot="" class="card rounded d-sm-block" id="locations" data-track="explore opportunities locations card" data-category="Homepage opportunities card" data-action="Locations">
                        <img class="card-img-top rounded-top top-image d-sm-none d-lg-block" src="@/assets/img/getty.jpg" role="presentation" aria-hidden="true" alt="">
                        <div class="card-body d-sm-inline-block">
                          <h3 class="card-title">We are entrepreneurs</h3>
                          <p class="card-text">Our growth and success are driven by our entrepreneurial spirit.
                          </p>
                          <p class="card-text">We empower our people to create and innovate as we build toward the future, balancing individual initiative with informed, measured judgement and controlled decision-making.
                          </p>
                          <span style="cursor: pointer;" class="fake-link card-body-fake-link d-none d-sm-block d-lg-none">Read more</span>
                        </div>
                    </a>
                  </div>
              </div>
            </div>
            <!-- <div class="row">
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
            </div>						 -->
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
