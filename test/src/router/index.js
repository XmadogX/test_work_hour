import Vue from 'vue'
import VueRouter from 'vue-router'
import SettingsRoutes from '@/modules/settings/router'
Vue.use(VueRouter)

const routes = [].concat(SettingsRoutes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
