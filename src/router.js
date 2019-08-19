import Vue from "vue";
import Router from "vue-router";
import Timeline from "./views/Timeline.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/timeline",
      name: "timeline",
      component: Timeline
    },
    {
      path: "/toolbox",
      name: "toolbox",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Toolbox.vue")
    },
    {
      path: "/guides",
      name: "guides",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Guides.vue")
    }
  ]
});
