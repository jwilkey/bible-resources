import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InductiveActivities from '@/components/InductiveActivities'
import Romans from '@/components/studies/Romans'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/inductive-activities',
      name: 'InductiveActivities',
      component: InductiveActivities
    },
    {
      path: '/romans',
      name: 'Romans',
      component: Romans
    }
  ]
})
