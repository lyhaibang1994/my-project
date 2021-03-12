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
    <router-view></router-view>
    <footer id="contact" class="page-footer">
      <div class="container">
        <div class="row">        
          <div class="col">
            <h5>Address</h5>
            <address>
              <p>VIET HAUS LTD.<br>A5.08 Sky Center<br>10 Pho Quang, Ward 2<br>Tan Binh District, Ho Chi Minh City, Vietnam.</p>
              <p>(+84) 8627 39408<br>For inquiries, please contact:<br>
                        Ngan Nguyen (Ms.)
                        <a href="tel:+84 9 0307 1408">(+84) 9 0307 1408</a>
                        <br>
                    <a href="ngan@viet-haus.com">
                        ngan@viet-haus.com
                    </a></p>
            </address>
          </div>
          <div class="col">
            <h5>Links</h5>
            <ul>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'home'})">About Us</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'ourbusiness'})">Our Business</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'ourproduct'})">Our Product</a></li>
              <!-- <li><a class="page-scroll" @click.prevent="$router.push({ name: 'ourproductdetail'})">Our Product Detail</a></li> -->
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'newinsight'})">News & Insights</a></li>
              <li><a class="page-scroll" @click.prevent="$router.push({ name: 'contact'})">Contact Us</a></li>
            </ul>
          </div>
          <div class="col">
            <!-- <h5>Logo</h5> -->
            <ImgLogo width=200 style="margin-top: 20px"></ImgLogo>
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
    name: "root"
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
<style scoped>
.page-footer > .container > .row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.page-footer > .container > .row > .col {
  flex: 1 0 0% !important;
}
</style>