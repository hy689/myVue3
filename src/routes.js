import Login from './pages/login.vue'

export default [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  {
    path: '/dome',
    component: () => import('./pages/dome.vue'),
  }
]