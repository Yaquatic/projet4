import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Plat from '@/components/Plat'
import Poissons from '@/components/Poissons'
import Viande from '@/components/Viande'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/plat',
      name: 'Plat',
      component: Plat
    },
    {
      path: '/Poissons',
      name: 'Poissons',
      component: Poissons
    },
    {
      path: '/Viande',
      name: 'Viande',
      component: Viande
    }
  ]
})
