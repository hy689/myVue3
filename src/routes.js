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
        component: () => import('./pages/cementData/upload.vue')
      },
      {
        name: '水泥数据训练',
        path: '/cementData/train',
        component: () => import('./pages/cementData/train.vue')
      },
      {
        name: '水泥数据预测',
        path: '/cementData/predict',
        component: () => import('./pages/cementData/predict.vue')
      }
    ]
  },
  {
    path: '/productionManagement',
    name: '生产管理',
    component: Home,
    children: [
      {
        name: '生产计划',
        path: '/productionManagement/productionPlanning',
        component: () => import('./pages/productionManagement/productionPlanning.vue')
      },
      {
        name: '原材料',
        path: '/productionManagement/rawMaterial',
        component: () => import('./pages/productionManagement/rawMaterial.vue')
      },
      {
        name: '设备信息',
        path: '/productionManagement/equipmentInformation',
        component: () => import('./pages/productionManagement/equipmentInformation.vue')
      },
      {
        name: '水泥产量统计',
        path: '/productionManagement/cementProductionStatistics',
        component: () => import('./pages/productionManagement/cementProductionStatistics.vue')
      }
    ]
  },
  {
    path: '/inventoryManagement',
    name: '库存管理',
    component: Home,
    children: [
      {
        name: '入库信息',
        path: '/inventoryManagement/storageInformation',
        component: () => import('./pages/inventoryManagement/storageInformation.vue')
      },
      {
        name: '出库信息',
        path: '/inventoryManagement/outgoingInformation',
        component: () => import('./pages/inventoryManagement/outgoingInformation.vue')
      },
      {
        name: '库存信息',
        path: '/inventoryManagement/InventoryInformation',
        component: () => import('./pages/inventoryManagement/InventoryInformation.vue')
      }
    ]
  },{
    path: '/salesManagement',
    name: '销售管理',
    component: Home,
    children: [
      {
        name: '客户信息',
        path: '/salesManagement/customerInformation',
        component: () => import('./pages/salesManagement/customerInformation.vue')
      },
      {
        name: '运输信息',
        path: '/salesManagement/transportationInformation',
        component: () => import('./pages/salesManagement/transportationInformation.vue')
      },
      {
        name: '合同信息',
        path: '/salesManagement/contractInformation',
        component: () => import('./pages/salesManagement/contractInformation.vue')
      }
    ]
  },
  { path: '/login', component: Login },

]