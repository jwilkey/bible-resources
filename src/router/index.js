import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InductiveActivities from '@/components/InductiveActivities'
import FamilyWorship from '@/components/resources/FamilyWorship'
import Romans from '@/components/studies/Romans'
import Philippians from '@/components/studies/Philippians/study/Index.vue'
import philippiansRouter from '@/components/studies/Philippians/router.js'
import Greetings from '@/components/studies/Greetings'

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
      path: '/resources/family-worship',
      name: 'FamilyWorship',
      component: FamilyWorship
    },
    {
      path: '/romans',
      name: 'Romans',
      component: Romans
    },
    {
      path: '/philippians',
      name: 'Philippians',
      component: Philippians,
      children: philippiansRouter
    },
    {
      path: '/greetings',
      name: 'Greetings',
      component: Greetings
    }
  ]
})
