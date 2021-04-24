<template>
  <div id="app">
    <navigation></navigation>

    <router-view></router-view>
    <div class="back-to-top" id="back" @click="goTop()">
      <span class="icon"></span>
    </div>
    <footer id="contact" class="page-footer">
      <div class="container">
        <div class="row">        
          <div class="col">
            <h5>Contact Us</h5>
            <hr class="hr-contact">
            <address>
              <p>Viet Haus Ltd.<br>219 Hong Ha, Ward 9<br>Phu Nhuan District, Ho Chi Minh City<br>   Vietnam.</p>
              <a href="tel:+84 28 6273 9408">(+84) 28 6273 9408</a>
              <br>
              <a href="mailto:vh@viet-haus.com">
                  vh@viet-haus.com
              </a>
            </address>
          </div>
          
          <div class="col col-image">
            <!-- <h5>Logo</h5> -->
            <ImgLogo width=200 style="margin-top: 20px; width: 200px;"></ImgLogo>
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
    name: "root",
    mounted() {
      window.addEventListener("scroll", this.scroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.scroll);
    },
    methods: {
      scroll() {
        const scrollToTopButton = document.getElementById('back');
        const navigation = document.getElementById('navigation');

        let y = window.scrollY;
        if (y > 100) {
          scrollToTopButton.style.opacity = '1'
          navigation.style.opacity = '0'
        } else {
          scrollToTopButton.style.opacity = '0'
          navigation.style.opacity = '1'
        }
      },
      goTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
}
</script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
<style scoped>
.back-to-top {
  background: rgba(0, 0, 0, .8);
  position: fixed;
  left: 1rem;
  bottom: 2rem;
  padding-top: .55rem;
  opacity: 0;
  width: 40px;
  height: 40px;
  white-space: nowrap;
  z-index: 1040;
  text-align: center;
  transition: opacity 0.5s ease-out;
}
.icon {
  margin-top: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
}
.page-footer {
  background: url("../assets/img/Our-company/Geometric_abstract_grey_background_for_bussines_templates_website_wallpapers.webp");
  margin-top: 1rem;
}
.page-footer .col-image {
  margin: auto;
    display: block;
    text-align: -webkit-center;
}
.hr-contact {
  margin: auto;
  display: block;
  width: 60%;
}
address {
  text-align: left;
  margin: auto;
  display: block;
  width: 60%;
}
.page-footer h5 {
  text-align: left;
  margin: auto;
  display: block;
  width: 60%;
  margin-bottom: 7px;
}
address {
  font-weight: 800;
}
</style>