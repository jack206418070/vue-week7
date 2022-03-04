import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/product',
        name: '購物頁面',
        component: () => import('../views/ProductView.vue'),
        children: [
          {
            path: '',
            name: '全部商品',
            component: () => import('../views/CategoryView.vue')
          },
          {
            path: 'choose',
            name: '精選商品',
            component: () => import('../views/CategoryView.vue')
          }
        ]
      },
      {
        path: '/login',
        name: '登入頁面',
        component: () => import('../views/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: '後台主頁',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'product',
        name: '產品列表',
        component: () => import('../views/Dashboard/ProductView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
