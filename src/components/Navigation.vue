<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav role="navigation">
      <div class="nav-wrapper container">
        <!-- <a class="page-scroll" >
          <img class="logoNav" src="@/assets/img/logo-element-alpha.svg" alt="Logo ELEMENT Americas">
        </a> -->
        <ul class="right hide-on-med-and-down">
          <li><a class="page-scroll active" href="index.html">Home</a></li>
          <li><a  href="javascript:;" class="page-scroll" @click.prevent="$router.push({ name: 'ourcompany'})">Our Company</a></li>
          <li><a class="page-scroll" href="ourbusiness.html">Our Business</a></li>
          <li><a class="page-scroll" href="newinsight.html">News & Insights</a></li>
          <li><a class="page-scroll" href="contact.html">Contact Us</a></li>
          <!-- <li><a class="page-scroll" href="news.html">News</a></li> -->
        </ul>
        <button id="btnNavMobile"><i class="fas fa-bars"></i></button>
        <div class="modalNav" style="display: none;"><div class="modalOverlay"></div><div class="navContent" style="margin-top: 234.25px;">
          <li><a class="page-scroll active" href="index.html">Home</a></li>
          <li><a class="page-scroll" href="ourcompany.html">Our Company</a></li>
          <li><a class="page-scroll" href="ourbusiness.html">Our Business</a></li>
          <li><a class="page-scroll" href="newinsight.html">News & Insights</a></li>
          <li><a class="page-scroll" href="contact.html">Contact Us</a></li>
          <!-- <li><a class="page-scroll" href="news.html">News</a></li> -->
        </div></div>
      </div>
    </nav>
</template>
<script>
export default {
  name: "Navigation"
}
</script>