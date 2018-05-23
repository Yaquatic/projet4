import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Plat from '@/components/Plat'
import Poissons from '@/components/Poissons'
import Viande from '@/components/Viande'
import Salt from '@/components/Salt'
import Chocolat from '@/components/Chocolat'
import Gâteau from '@/components/Gâteau'
import Patisseries from '@/components/Patisseries'
import Sweet from '@/components/Sweet'
import Pâtes from '@/components/Pâtes'

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
    },
    {
      path: '/Salt',
      name: 'Salt',
      component: Salt
    },
    {
      path: '/Chocolat',
      name: 'Chocolat',
      component: Chocolat
    },
    {
      path: '/Gâteau',
      name: 'Gâteau',
      component: Gâteau
    },
    {
      path: '/Patisseries',
      name: 'Patisseries',
      component: Patisseries
    },
    {
      path: '/Sweet',
      name: 'Sweet',
      component: Sweet
    },
    {
      path: '/Pâtes',
      name: 'Pâtes',
      component: Pâtes
    }
  ]
})
