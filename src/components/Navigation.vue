<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav role="navigation" id="navigation" class="nav-header">
      <div class="nav-wrapper container">
        <router-link class="page-scroll" :to="{ name: 'home'}">
          <img class="logoNav" src="@/assets/img/viethaus_logo.png" alt="Logo ELEMENT Americas">
          <!-- <img class="logoNav" src="@/assets/img/pg-name.png" alt="Logo Name"> -->
          <!-- <div class="slogan-header">Poin to the Quintessence</div> -->
        </router-link>
        <ul class="right hide-on-med-and-down" style="z-index: 10">
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'home'}">Our Company</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourbusiness'}">Products</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproduct'}">SOURCING</router-link></li>
          <!-- <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproductdetail'}">SOURCING Detail</router-link></li> -->
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'newinsight'}">NEWS</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'contact'}">Contact Us</router-link></li>
          <!-- <li><router-link class="page-scroll" href="news.html">News</router-link></li> -->
        </ul>
        <button id="btnNavMobile" @click="openModal"><i class="fa fa-bars"></i></button>
        <div class="modalNav" id="modalNav" @click="hideModal">
          <div class="modalOverlay"></div><div class="navContent">
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'home'}">Our Company</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourbusiness'}">Products</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproduct'}">SOURCING</router-link></li>
          <!-- <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproductdetail'}">SOURCING Detail</router-link></li> -->
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'newinsight'}">NEWS</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'contact'}">Contact Us</router-link></li>
          <!-- <li><router-link class="page-scroll" href="news.html">News</router-link></li> -->
        </div></div>
      </div>
    </nav>
</template>
<script>
export default {
  name: "Navigation",
  methods: {
    openModal() {
      document.getElementById("modalNav").style.display = "block";
    },
    hideModal() {
      document.getElementById("modalNav").style.display = "none";
    }
  }
}
</script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
<style scoped>
.logoNav {
  float: left;
  height: 95%;
  margin-top: 0px;
}
.right {
  float: right;
}
.modalNav {
display: none;
}
.slogan-header {
  position: absolute;
  top: 20px;
  color: black !important;
  font-size: 12px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.nav-wrapper {
  margin: 0 40px 0 20px;
  width: 95%;
  max-width: initial;
}
</style>