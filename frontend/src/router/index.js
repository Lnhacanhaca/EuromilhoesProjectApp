import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Chave from '../pages/Chave.vue'
import Historico from '../pages/Historico.vue'
import Login from '../pages/core/Login.vue'
import Error from '../pages/core/Error.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'dashboard' }
        ]
      }
    },
    {
      path: '/chave',
      name: 'Chave',
      component: Chave,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'chave' }
        ]
      }
    },
    {
      path: '/historico',
      name: 'Historico',
      component: Historico,
      meta: {
        breadcrumb: [
          { name: 'dashboard', href: 'Dashboard' },
          { name: 'historico' }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
})
