import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import ImageInsert from '../views/ImageInsert.vue'
import SalesList from '../views/SalesList.vue'
import store from '@/store'
import Swal from 'sweetalert2'

//네비게이션 가드
const requireAuth = () => (to, from, next) => {
  if(store.state.user.iuser === undefined) {
    Swal.fire('로그인이 필요합니다.', '', 'warning');
    return;
  }
  return next();
}

const routes = [
 
  {
    path: '/Home',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/Create',
    name: 'ProductCreate',
    component: ProductCreate,
    beforeEnter: requireAuth()
  },
  {
    path: '/Detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/Update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert,
    beforeEnter: requireAuth()
  },
  {
    path: '/Sales',
    name: 'SalesList',
    component: SalesList
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
