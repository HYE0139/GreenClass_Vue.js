// Router
// 클라이언트의 요청 경로에 따라 해당하는 컴포넌트를 불러와 페이지를 구성하는 곳.
// URL 변경 시 DOM을 새로 갱신하는 것이 아니라 미리 컴포넌트를 가지고 있다가
// 변경된 요소영역만 갱신한다.(SPA 언어의 큰 특징)

// view에서 만든 페이지들을 import 
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import BoxOffice from '../views/BoxOffice';

const routes = [
  {
    path: '/',
    name: 'name',
    component: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByDay',
    component: BoxOffice
  },
  {
    path: '/boxOfficeByWeek',
    name: 'boxOfficeByWeek',
    component: BoxOffice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router