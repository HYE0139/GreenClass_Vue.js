import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroduceView from '../views/IntroduceView.vue'
import DataBindingList from '../views/DataBindingList'
import RenderingView from '../views/RenderingView'
import EventClickView from '../views/EventClickView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/intro',
    name: 'introduce',
    component: IntroduceView
  },
  {
    path: '/dataBindingList',
    name: 'dataBindingList',
    component: DataBindingList
  },
  {
    path: '/rendering',
    name: 'rendering',
    component: RenderingView
  },
  {
    path: '/eventClick',
    name: 'eventClick',
    component: EventClickView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
