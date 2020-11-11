import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "../views/layout"
Vue.use(VueRouter)

const routes = [{
  path: "/",
  name: "layout",
  component: layout,
  redirect: "/myTeams",
  children: [{
      path: "/myTeams",
      name: "myTeams",
      component: () => import("../views/myTeams")
    },
    {
      path: "/teamInformation",
      name: "teamInformation",
      component: () => import("../views/myTeams/teamInformation")
    },
    {
      path: "/candidates",
      name: "candidates",
      component: () => import("../views/myTeams/candidates")
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router