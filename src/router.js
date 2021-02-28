import Vue from "vue";
import VueRouter from "vue-router";

// import $CatalogMall from "./requests/CatalogMall";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "home" }
    },
    {
      path: "/home",
      component: () => import("./Home.vue"),
      name: "home"
    },
    {
      path: "/our-business",
      component: () => import("./components/OurBusiness.vue"),
      name: "ourbusiness"
    },
    {
      path: "/our-product",
      component: () => import("./components/OurProduct.vue"),
      name: "ourproduct"
    },
    {
      path: "/our-product-detail",
      component: () => import("./components/OurProductDetail.vue"),
      name: "ourproductdetail"
    },
    {
      path: "/new-insight",
      component: () => import("./components/NewInsight.vue"),
      name: "newinsight"
    },
    {
      path: "/contact",
      component: () => import("./components/Contact.vue"),
      name: "contact"
    }
  ]
});
export default router;
