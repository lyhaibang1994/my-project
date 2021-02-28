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
    <header id="ourBusiness">
      <div class="headerMask"></div>
      <div class="container containerHeader">
        <div class="row">
          <div class="col s12 l8 offset-l2 center-align">
            <div id="headerContent">
                <div id="logoContainer">
                  <img src="@/assets/img/logo.png" alt="Logo ELEMENT Group">
                  <h1>BUSINESS</h1>
                </div>
                <!-- <h2>International energy trading arm of the ELEMENT Group.<br>Actively trading liquid energy like crude oil, refined oil products, and LNG as well as dry-bulk energy commodities</h2> -->
                <h2>Create efficient solutions for your value chain</h2>
                <hr class="hrTitle">
                <p class="center-align center-block">We responsibly source, transform and deliver in the Specialty Ingredients by supplying innovative solutions that promote health, wellness, beauty, nutrition, hygiene and environmental protection. We have four pillars : Animal Feed, Bioenergy, Consumer Care, Food and Beverage.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="split firstSplit">
        <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
      </div>
    </header>
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">SALES & REPRESENTATION</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">You have the products; we have the contacts to commercialise them rapidly throughout the country. Let us show you how our sales team will allow you to shine on the Vietnamese market.Since our beginnings, we have established long-lasting relations with business partners and we are proud to let you benefit from those.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">SOURCING</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">Viet Haus have the contacts, systems, people and resources to source you the best deal in Vietnam. We can:
              <br>- Tender your product out
              <br>- Validate potential suppliers
              <br>- Provide you with samples
              <br>- Negotiate prices for you
              <br>- Perform stringent quality checks
              <br>- Arrange delivery or export to you.
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
            <hr class="hrTitle">
            <p class="center-align center-block">Our mission is to bring Asia identity to the World. We build trust and long term cooperation with our manufacturers and assure quality products delivered to you.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="salesrepresentation">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">PLANTATION MANAGEMENT</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">We organize plant area for raw materials and products by partnering with cooperatives to set up and manage plantation and processing products. We construct a material area to meet the client's standards and to fullfil the criteria of required certificatations.</p>
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
  name: 'ourbusiness'
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
