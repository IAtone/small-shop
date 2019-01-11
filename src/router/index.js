import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'
import Earth from '@/pages/details/earth'
import Loud from '@/pages/details/loud'
import Car from '@/pages/details/car'
import Hill from '@/pages/details/hill'


Vue.use(Router)

export default new Router({
  base: '/dist/',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: "/details",
      name: "details",
      component: Details,
      redirect: "/details/earth",
      children: [
        {
          path: 'earth',
          name: "earth",
          component: Earth
        },
        {
          path: 'loud',
          name: "loud",
          component: Loud
        },
        {
          path: 'car',
          name: "car",
          component: Car
        },
        {
          path: 'hill',
          name: "hill",
          component: Hill
        }
      ]
    }
  ],
  mode: 'history'
})

