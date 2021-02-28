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
                  <h1>PRODUCTS</h1>
                </div>
                <!-- <h2>International energy trading arm of the ELEMENT Group.<br>Actively trading liquid energy like crude oil, refined oil products, and LNG as well as dry-bulk energy commodities</h2> -->
                <h2>We focus on speciality ingredients and processed products and organised and simplified our businesses into 4 operating groups, each with a clear focus and benefits for our customers, communities and our business.</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="split firstSplit">
        <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
      </div>
    </header>
    <section id="animalfeed">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">ANIMAL FEED</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">Sales Representation and export are two of our key activities  in animal feed industry.</p>
            <p class="center-align center-block">Our long experience permits VIET HAUS to be as close to the supply chain, markets, trends and regulations as possible. We are not only service provider but also solution provider for you.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="bioenergy">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">BIOENERGY</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">We believe that waste is never useless, then we contribute in the process to make it turn back to serve and be a part of our sustainable development by joining in the business of the products related to clean and sustainable energy sources, especially on bio-based materials,  animal fats and plant oils which are precious materials for bio diesel production.  Our role is to be your local sourcing agent or collector, to secure offers with genuine oils and fats quality.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="consumercare">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">CONSUMER CARE</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">Our business is a global trader in several important chemical ingredient categories and materials that provide health, wellness, beauty and protection claims for our fast-moving consumer goods customers. These ubiquitous materials include cosmetic ingredients, Omega 3-6-9 oils  and microbial-control solutions, such as disinfectants and sanitizers that help protect us from dangerous and unwanted microbes.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="foodbeverages">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">FOOD & BEVERAGES	</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">We provide food and beverage ingredients and processed products to manufacturers and importers in the food and beverage industry.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="split">
      <div class="mask"></div>
      <img src="@/assets/img/split-top.png" alt="deco banner" class="splitTop">
      <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
    </div>
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
            <h5>Logo</h5>
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
  name: 'ourproduct'
}
</script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/materialize.min.js"></script>
<script type="text/javascript" src="assets/js/parallax.js"></script>
<script src="assets/js/init.js"></script>
<script type="text/javascript"></script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
