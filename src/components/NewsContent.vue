<template>
    <section id="ourPurpose">
      <div class="container">
        <div class="row">
          <div class="col">
            <slot name="image"></slot>
          </div>
          <div class="col" style="text-align: left;">
            <p class="home-title" style="color: #000">{{header}}</p>
            <small>{{ time }}</small>
            <p v-if="content" class="content-news">{{ content }}</p>
            <p class="content-news"><slot></slot></p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    props: ['header', 'time', 'content', 'src']
}
</script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
<style lang="css">
.content-news {
    text-align: justify;
}
</style>