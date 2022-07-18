import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import ImageInsert from '../views/ImageInsert.vue'
import SalesList from '../views/SalesList.vue'


const routes = [
 
  {
    path: '/Home',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/Create',
    name: 'ProductCreate',
    component: ProductCreate
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
    path: '/ImageInsert',
    name: 'ImageInsert',
    component: ImageInsert
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
