import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/configs/firebase'

const requireAuth = (to, from, next) => {
  const user = auth.currentUser
  if(!user) next({name: "Login", params: {}})
  else next()
}

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      text: "Hey, Kenkid",
      isShowFooter: true
    },
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () => import("@/pages/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () => import("@/pages/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true
    },
    component: () => import("@/pages/profile.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/pages/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true
    },
    component: () => import("@/pages/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true
    },
    component: () => import("@/pages/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "New Transaction",
    meta: {
      text: "New Transaction",
      leading: false,
      isShowFooter: false
    },
    component: () => import("@/pages/new-transaction.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
