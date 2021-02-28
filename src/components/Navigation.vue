<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav role="navigation" class="nav-header">
      <div class="nav-wrapper container">
        <a class="page-scroll">
          <img class="logoNav" src="@/assets/img/logo.png" alt="Logo ELEMENT Americas">
        </a>
        <ul class="right hide-on-med-and-down">
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'home'}">Home</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourbusiness'}">Our Business</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproduct'}">Our Product</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproductdetail'}">Our Product Detail</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'newinsight'}">News & Insights</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'contact'}">Contact Us</router-link></li>
          <!-- <li><router-link class="page-scroll" href="news.html">News</router-link></li> -->
        </ul>
        <button id="btnNavMobile" @click="openModal"><i class="fa fa-bars"></i></button>
        <div class="modalNav" id="modalNav" @click="hideModal"><div class="modalOverlay"></div><div class="navContent">
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'home'}">Home</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourbusiness'}">Our Business</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproduct'}">Our Product</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'ourproductdetail'}">Our Product Detail</router-link></li>
          <li><router-link class="page-scroll" active-class="active" :to="{ name: 'newinsight'}">News & Insights</router-link></li>
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
  height: 47px;
  margin-top: 8px;
}
.right {
  float: right;
}
.modalNav {
display: none;
}
</style>