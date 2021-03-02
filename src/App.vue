<template>
  <router-view></router-view>
</template>
<script>
import Parallax from "parallax-js"
export default {
  mounted() {
    setTimeout(() => {
    var scene3 = document.getElementById('scene3');
    var parallax = new Parallax(scene3);
    var scene5 = document.getElementById('scene5');
    var parallax1 = new Parallax(scene5);
    console.log(parallax, parallax1);
    },1000)

  }
}
</script>