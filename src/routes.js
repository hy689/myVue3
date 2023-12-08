import Login from './pages/login.vue'
import Home from './pages/Home.vue'
import Index from './pages/index.vue'

export default [
  {
    path: '/dome',
    component: () => import('./pages/dome/scoped/index.vue')
  },
  {
    path: '/',
    component: Home,
    name: '首页',
    children: [
      {
        path: '/index',
        component: Index,
      }
    ]
  },
  {
    path: '/cementData',
    name: '水泥质量控制',
    component: Home,
    children: [
      {
        name: '水泥数据上传',
        path: '/cementData/upload',
        component: () => import('./pages/cementDataUpload.vue')
      }
    ]
  },
  { path: '/login', component: Login },
  {
    path: '/dome',
    component: () => import('./pages/dome.vue'),
  }
]