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
    <section id="values">
        <div class="container">
            <div class="row">
                <div class="col s12 l12 center-align">
                    <h4>Contact us</h4>
                    <hr class="hrTitle">
                </div>
            </div>
            <div class="row">
                <form class="contact-form col l4 offset-l2 s12" action="mailer.php" id="ajax-contact" method="post">
                    <div class="row rowForm">
                        <div class="input-field col s6">
                            <input id="name" name="contactName" type="text" class="validate">
                            <label for="name">Name</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                        <div class="input-field col s6">
                            <input id="email" name="contactEmail" type="email" class="validate">
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                    </div>
                    <div class="row rowForm">
                        <div class="input-field col s12">
                            <input id="subject" name="contactSubject" type="text" class="validate">
                            <label for="subject">Subject</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                    </div>
                    <div class="row rowForm">
                        <div class="input-field noPaddingRight col s12">
                            <textarea id="message" name="contactMessage" class="materialize-textarea validate" style="height: 45px;"></textarea>
                            <label for="message">Message</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col l12 s12">
                            <button class="btnSend">send</button>
                            <div class="row" id="form-messages" style="font-size: 18px; margin: 12px 2px"></div>
                            <div class="status-message status-success" style="display:none">Your message has been sent!</div>
                            <div class="status-message status-failure" style="display:none">Error: Your message has not been sent. Please try again or contact us at <a href="info@element-alpha.com">info@element-alpha.com</a>.</div>
                        </div>
                    </div>
                </form>
                <div class="col s12 l6">
                  <address>
                    <p>VIET HAUS LTD.<br>A5.08 Sky Center<br>10 Pho Quang, Ward 2<br>Tan Binh District, Ho Chi Minh City, Vietnam.</p>
                    <p>(+84) 28 2243 6679<br><a href="info@viet-haus.com">info@viet-haus.com</a></p>
                  </address>
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
  name: 'contact'
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
