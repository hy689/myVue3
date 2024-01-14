import Login from './pages/login.vue'
import Home from './pages/Home.vue'
import Index from './pages/index.vue'
import Layout from './layout/index.vue'

export default [
    { path: '/login', component: ()=>import('./pages/login.vue'), hidden: true },
    {
      path:'/',
      component:Layout,
      redirect:'/dashboard',
      children:[
        {
          path:'/dashboard',
          name:'Dashboard',
          component:()=>import('./pages/Dashboard/index.vue'),
          meta:{title:'首页'}
        }
      ]
    },

  {
    path: '/cementData',
    redirect:'/cementData/upload',
    component: Layout,
    meta: { title: '水泥数据', icon: 'el-icon-s-help' },
    children: [
      {
        name: 'CementDataUpload',
        path: '/cementData/upload',
        component: () => import('./pages/cementData/upload.vue'),
        meta: { title: '水泥数据上传' },
      },
      {
        name: 'CementDataTrain',
        path: '/cementData/train',
        component: () => import('./pages/cementData/train.vue'),
        meta: { title: '水泥数据训练' },
      },
      {
        name: 'CementDataPredict',
        path: '/cementData/predict',
        component: () => import('./pages/cementData/predict.vue'),
        meta: { title: '水泥数据预测' },
      }
    ]
  },
  {
    path: '/productionManagement',
    component: Layout,
    meta: { title: '生产管理'},
    children: [
      {
        path: '/productionManagement/productionPlanning',
        component: () => import('./pages/productionManagement/productionPlanning.vue'),
        meta: { title: '生产计划' },
      },
      {
        path: '/productionManagement/rawMaterial',
        component: () => import('./pages/productionManagement/rawMaterial.vue'),
        meta: { title: '原材料' },
      },
      {
        path: '/productionManagement/equipmentInformation',
        component: () => import('./pages/productionManagement/equipmentInformation.vue'),
        meta: { title: '设备信息' },
      },
      {
        path: '/productionManagement/cementProductionStatistics',
        component: () => import('./pages/productionManagement/cementProductionStatistics.vue'),
        meta: { title: '水泥产量统计' },
      }
    ]
  },
  {
    path: '/inventoryManagement',
    component: Layout,
    meta: { title: '库存管理' },
    children: [
      {
        path: '/inventoryManagement/storageInformation',
        component: () => import('./pages/inventoryManagement/storageInformation.vue'),
        meta: { title: '入库信息' },
      },
      {
        path: '/inventoryManagement/outgoingInformation',
        component: () => import('./pages/inventoryManagement/outgoingInformation.vue'),
        meta: { title: '出库信息' },
      },
      {
        path: '/inventoryManagement/InventoryInformation',
        component: () => import('./pages/inventoryManagement/InventoryInformation.vue'),
        meta: { title: '库存信息' },
      }
    ]
  }, {
    path: '/salesManagement',
    component: Layout,
    meta: { title: '销售管理' },
    children: [
      {
        path: '/salesManagement/customerInformation',
        component: () => import('./pages/salesManagement/customerInformation.vue'),
        meta: { title: '客户信息' },
      },
      {
        path: '/salesManagement/transportationInformation',
        component: () => import('./pages/salesManagement/transportationInformation.vue'),
        meta: { title: '运输信息' },
      },
      {
        path: '/salesManagement/contractInformation',
        component: () => import('./pages/salesManagement/contractInformation.vue'),
        meta: { title: '合同信息' },
      }
    ]
  },

]