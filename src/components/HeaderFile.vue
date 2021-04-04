<template>
    <header>
        <slot></slot>
      <div class="container containerHeader">
        <div class="row">
          <div class="col s12 l8 center-align">
            <div id="headerContent">
                <slot name="headerContent"></slot>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: "@/assets/img/Our-company/our-com.jpg"
        }
    }
}
</script>
<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>