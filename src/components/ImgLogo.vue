<template>
  <div id="logoContainer">
    <img src="@/assets/img/viethaus_transparent.png" :width="width" alt="Logo ELEMENT Group" />
    <!-- <img src="@/assets/img/pg-name.png" class="logo-name" alt="Logo ELEMENT" />
    <div class="slogan-header">Poin to the Quintessence</div> -->
  </div>
</template>
<script>
export default {
  props: {
    width: {
      default: 300
    }
  }
}
</script>
<style scoped>
.logo-name {
    margin-left: 15px !important;
    height: 85px;
}
.slogan-header {
  margin-top: -10px;
  color: black !important;
  font-size: 1.2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>