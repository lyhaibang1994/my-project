import Vue from "vue";
import VueRouter from "vue-router";

// import $CatalogMall from "./requests/CatalogMall";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  hash: false,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '*', 
      redirect: '/' 
    }, // catch all use case
    {
      path: "/",
      redirect: { name: "home" }
    },
    {
      path: "/",
      component: () => import("./components/Root.vue"),
      name: "root",
      children: [
        {
          path: "/home",
          component: () => import("./Home.vue"),
          name: "home",
          meta: {
            imgPath: "@/assets/img/Our-company/our-com.jpg"
          }
        },
        {
          path: "/product",
          component: () => import("./components/OurBusiness.vue"),
          name: "ourbusiness"
        },
        {
          path: "/sourcing",
          component: () => import("./components/OurProduct.vue"),
          name: "ourproduct"
        },
        {
          path: "/our-product-detail",
          component: () => import("./components/OurProductDetail.vue"),
          name: "ourproductdetail"
        },
        {
          path: "/our-sourcing-detail",
          component: () => import("./components/OurSourcingDetail.vue"),
          name: "oursourcingdetail"
        },
        {
          path: "/news",
          component: () => import("./components/NewInsight.vue"),
          name: "newinsight"
        },
        {
          path: "/contact",
          component: () => import("./components/Contact.vue"),
          name: "contact"
        }
      ]
    }
  ]
});
export default router;
