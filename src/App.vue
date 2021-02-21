<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="bodyBg bgAbout"></div>
    <nav role="navigation">
      <div class="nav-wrapper container">
        <a class="page-scroll" href="index">
          <img class="logoNav" src="@/assets/img/logo-element-alpha.svg" alt="Logo ELEMENT Americas">
        </a>
        <ul class="right hide-on-med-and-down">
          <li><a class="page-scroll active" href="index.html">Home</a></li>
          <li><a class="page-scroll" href="aboutus.html">About Us</a></li>
          <li><a class="page-scroll" href="ourbusiness.html">Our Business</a></li>
          <li><a class="page-scroll" href="career.html">Career</a></li>
          <li><a class="page-scroll" href="community.html">Community</a></li>
          <li><a class="page-scroll" href="contact.html">Contact</a></li>
          <!-- <li><a class="page-scroll" href="news.html">News</a></li> -->
        </ul>
        <button id="btnNavMobile"><i class="fas fa-bars"></i></button>
        <div class="modalNav" style="display: none;"><div class="modalOverlay"></div><div class="navContent" style="margin-top: 234.25px;">
          <li><a class="page-scroll active" href="index.html">Home</a></li>
          <li><a class="page-scroll" href="aboutus.html">About Us</a></li>
          <li><a class="page-scroll" href="ourbusiness.html">Our Business</a></li>
          <li><a class="page-scroll" href="career.html">Career</a></li>
          <li><a class="page-scroll" href="community.html">Community</a></li>
          <li><a class="page-scroll" href="contact.html">Contact</a></li>
          <!-- <li><a class="page-scroll" href="news.html">News</a></li> -->
        </div></div>
      </div>
    </nav>
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
                  <h1>ELEMENT</h1>
                  <img src="@/assets/img/symbole-element-group.svg" alt="Logo ELEMENT Group">
                </div>
                <!-- <h2>International energy trading arm of the ELEMENT Group.<br>Actively trading liquid energy like crude oil, refined oil products, and LNG as well as dry-bulk energy commodities</h2> -->
                <h2>ELEMENT Group’s international energy trading arm actively trades crude oil, refined products, LNG and dry-bulk energy commodities</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="split firstSplit">
        <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
      </div>
    </header>
    <section id="about">
    <div class="container">
      <div class="row">
        <div class="col s12 l12">
          <h4 class="center-align">ELEMENT ALPHA</h4>
          <hr class="hrTitle">
          <p class="center-align center-block">We provide the full suite of competitive logistics, financing and risk management services while sharing upside with our clients.</p>
          <p class="center-align center-block">ELEMENT Alpha, a 100% subsidiary of ELEMENT Group SA, was established in 2015 and is headquartered in Geneva, Switzerland - the center of the international energy commodity trading community. ELEMENT aspires to become one of the world’s most competitive, reliable and admired providers of energy, logistics, financing and risk management services.</p>
        </div>
      </div>
      <div class="row">
        <div class="col s12 l12">
          <a class="linkBtn" href="aboutus">About us</a>
        </div>
      </div>
      </div>
    </section>
    <div class="split">
      <div class="mask"></div>
      <img src="@/assets/img/split-top.png" alt="deco banner" class="splitTop">
      <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
    </div>
    <section id="ourBusiness">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">Our Business</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">ELEMENT Alpha trades all parts of the barrel from crude oil to light-ends, middle distillates and heavy ends as well as LNG and dry-bulk energy commodities. We have a deep understanding of the molecules we trade and excel at logistics and blending.  Our multitude of skills in trade finance and risk management help create value for our suppliers and clients.</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 l12">
            <a class="linkBtn" href="ourbusiness">Read more</a>
          </div>
        </div>
      </div>
    </section>
    <div class="split">
      <div class="mask"></div>
      <img src="@/assets/img/split-top.png" alt="deco banner" class="splitTop">
      <img src="@/assets/img/split-bottom.png" alt="deco banner" class="splitBottom">
    </div>
    <section id="ourpeople">
      <div class="container">
        <div class="row">
          <div class="col s12 l12">
            <h4 class="center-align">Our People</h4>
            <hr class="hrTitle">
            <p class="center-align center-block">If you like hierarchies, wearing ties, and are scared of meritocracy, ELEMENT is not the right place for you! We understand that our people and their ideas are the key success factors of the firm. We respect their diverse skillsets and their individual needs and reward them in the most competitive way.</p>
          </div>
        </div>
        <div class="row">
          <div class="col s12 l12">
            <a class="linkBtn" href="career">Career</a>
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
              <p>ELEMENT Alpha S.A.<br>3 Rue du Commerce<br>1204 Geneva<br>SWITZERLAND</p>
              <p>Tel: +41 22 552 24 60<br>Fax: +41 22 552 24 66 <br><a href="mailto:info@element-alpha.com">info@element-alpha.com</a></p>
            </address>
          </div>
          <div class="col l2 s12">
            <h5>Links</h5>
            <ul>
              <li><a href="index.html" class="page-scroll">Home</a></li>
              <li><a href="aboutus.html" class="page-scroll">About us</a></li>
              <li><a href="ourbusiness.html" class="page-scroll">Our business</a></li>
              <li><a href="career.html" class="page-scroll">Career</a></li>
              <li><a href="community.html" class="page-scroll">Community</a></li>
              <li><a href="contact.html" class="page-scroll">Contact</a></li>
              <!-- <li><a href="news.html" class="page-scroll">news</a></li> -->
              <li><a href="legal.html" class="page-scroll">Legal Disclamer</a></li>
              <li><a href="legal#privacy.html" class="page-scroll">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col l3 s12">
              <img class="logoFooter" src="@/assets/img/logo-element-group.svg" alt="Logo ELEMENT Group">
            <a href="http://www.element-americas.com/" target="_blank">
              <img class="logoFooter" src="@/assets/img/logo-element-americas.svg" alt="Logo ELEMENT Alpha">
            </a>
            <a href="http://element-maritime.com/" target="_blank">
              <img class="logoFooter" src="@/assets/img/logo-element-maritime.svg" alt="Logo ELEMENT Maritime">
            </a>
          </div>
          
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container center-align">
        © <span id="copyrightDate">2021</span> ELEMENT ALPHA
        </div>
      </div>
    </footer>
    <div id="popupLegal" style="display: block;">
      <div class="popupContent">
        <p>This site uses cookies. By pursuing your navigation on element-alpha.com, you accept the use of cookies</p>
        <button id="closePopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
}
</script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/materialize.min.js"></script>
<script type="text/javascript" src="assets/js/parallax.js"></script>
<script src="assets/js/init.js"></script>
<script type="text/javascript"></script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
