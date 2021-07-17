import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InductiveActivities from '@/components/InductiveActivities'
import FamilyWorship from '@/components/resources/FamilyWorship'
import SabbathDinner from '@/components/resources/SabbathDinner'
import SabbathDinner2 from '@/components/resources/SabbathDinner2'
import SabbathDinnerEvangelism from '@/components/resources/SabbathDinnerEvangelism'
import Proverbs21 from '@/components/studies/Proverbs/21/Index'
import proverbs21Router from '@/components/studies/Proverbs/21/router.js'
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
      path: '/resources/sabbath-dinner',
      name: 'SabbathDinner',
      component: SabbathDinner
    },
    {
      path: '/resources/sabbath-dinner2',
      name: 'SabbathDinner2',
      component: SabbathDinner2
    },
    {
      path: '/resources/sabbath-dinner-evangelism',
      name: 'SabbathDinnerEvangelism',
      component: SabbathDinnerEvangelism
    },
    {
      path: '/proverbs21',
      name: 'Proverbs',
      component: Proverbs21,
      children: proverbs21Router
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
