<template>
  <div>
    <HeaderFile>
      <img src="@/assets/img/News/166342240_10219072225737383_2030449683320385649_n.jpeg" alt="img">
      <template #headerContent><h4 class="img-text-header">FOR SUSTAINABLE LIVING</h4></template>
    </HeaderFile>
    <section>
        <div class="row" style="justify-content: center;">
          <h4>VIET HAUS - YOUR ORGANIC HUB IN VIETNAM </h4>
        </div>
    </section>

    <Content header="INSTRUCTIONS FOR ETHNIC FARMERS OF ORGANIC CASHEW" time="19 Mar, 2021">
      <template #image><img src="@/assets/img/News/z2387897154528_f2a3bba0007e16f7a3da8173eec6d621.jpg" alt="img"></template>
      The training session was performed by our local partner at the commune center about the production procedure and requirements as per EU and USDA standards. Most of the attendants are ethnic community who grow up and live by farming on hills, mountains and fields.
    </Content>

    <Content header="VIET HAUS WAS SELECTED TO JOIN LIGHT HOUSE PROJECT" time="27 Nov, 2020">
      <template #image>
        <img src="@/assets/img/News/51bd31488d1b7c45250a.jpg" alt="ORGANIC HUB">
      </template>
      So grateful that Viet Haus was selected to join Light House Project, organized by The Friedrich Naumann Foundation for Freedom (FNF).
The workshop is on EVFTA with FNF Country Director and Eurocham Director and consulting on the approach to EU market.
    </Content>
  </div>
</template>
<script>
import Content from "../components/NewsContent"

export default {
  name: 'newinsight',
  components: {
    Content
  }
}
</script>

<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>