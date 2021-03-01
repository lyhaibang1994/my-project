<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="bodyBg bgAbout"></div>
    <navigation></navigation>
    <div class="para3" id="para3">
      <ul id="scene3" class="scene" style="transform: translate3d(0px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden;">
        <li class="layer" data-depth="1.6" style="transform: translate3d(-216.172px, 126.651px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"> <svg width="1355px" height="1536px"> <polygon points="64,0 780,1291 369,0" style="stroke:none;fill:rgba(0,0,0,0.5)"></polygon> </svg> </li>
        <li class="layer" data-depth="1.6" style="transform: translate3d(-216.172px, 126.651px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"> <svg width="1355px" height="1536px"> <polygon points="397,14 867,1488 1355,637 1355,282 866,820 " style="stroke:none;fill:rgba(0,0,0,0.2)"></polygon> </svg> </li>
        <li class="layer" data-depth="1.6" style="transform: translate3d(-216.172px, 126.651px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"> <svg width="1355px" height="1536px"> <polygon points="479,0 780,542 607,0" style="stroke:none;fill:rgba(0,0,0,0.5)"></polygon> </svg> </li><li class="layer" data-depth="1.6" style="transform: translate3d(-216.172px, 126.651px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: absolute; display: block; left: 0px; top: 0px;"> <svg width="1355px" height="1536px"> <polygon points="631,0 867,740 1291,0 932,0 866,72 824,0" style="stroke:none;fill:rgba(0,0,0,0.5)"></polygon> </svg> </li>
      </ul>
    </div>
    <div id="alphaLeft" class="wow fadeInDown" data-wow-delay="1.4s">
      <ul id="scene5" class="scene5" style="transform: translate3d(0px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden;">
        <li class="layer" data-depth="0.4" style="transform: translate3d(-59.2852px, 25.786px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;">
          <svg width="1500px" height="1500px">
            <polygon points="0,0 662,1194 365,260" style="stroke:none;fill:rgba(0,0,0,.2)"></polygon>
            <polygon points="379,250 727,1340 1494,0 726,845" style="stroke:none;fill:rgba(0,0,0,.3)"></polygon>
            <polygon points="819,719 1406,72 1081,263" style="stroke:none;fill:rgba(0,0,0,.2)"></polygon>
          </svg>
        </li>
      </ul>
    </div>
    <header id="home">
      <div class="headerMask"></div>
      <div class="container containerHeader">
        <div class="row">
          <div class="col s12 l8 offset-l2 center-align">
            <div id="headerContent">
                <div id="logoContainer">
                  <img src="@/assets/img/logo.png" alt="Logo ELEMENT Group">
                  <h1>VIETHAUS</h1>
                </div>
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
            <a class="linkBtn page-scroll" @click.prevent="$router.push({ name: 'ourbusiness'})">OUR BUSINESS</a>
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
    <footer id="contact" class="page-footer">
      <div class="container">
        <div class="row">        
          <div class="col l3 offset-l2 s12">
            <h5>Address</h5>
            <address>
              <p>VIET HAUS LTD.<br>A5.08 Sky Center<br>10 Pho Quang, Ward 2<br>Tan Binh District, Ho Chi Minh City, Vietnam.</p>
              <p>(+84) 28 2243 6679<br><a href="info@viet-haus.com">info@viet-haus.com</a></p>
            </address>
          </div>
          <div class="col l2 s12">
            <h5>Links</h5>
            <ul>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'home'})">Home</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'ourbusiness'})">Our Business</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'ourproduct'})">Our Product</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'ourproductdetail'})">Our Product Detail</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'newinsight'})">News & Insights</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'contact'})">Contact Us</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
              <img class="logoFooter" src="@/assets/img/logo.png" alt="Logo ELEMENT Group">
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container center-align">
        © <span id="copyrightDate">2021</span> VIETHAUS
        </div>
      </div>
    </footer>
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
