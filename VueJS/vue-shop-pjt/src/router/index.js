import { createRouter, createWebHistory } from 'vue-router'
import kakaoLogin from '../views/KakaoLogin.vue'

const routes = [
  {
    path: '/kakaoLogin',
    name: 'kakaoLogin',
    component: kakaoLogin
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
