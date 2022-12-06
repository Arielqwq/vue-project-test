import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta放路由資料(路由的個人檔案)
      meta: {
        title: '國立科技高中─校園社團介紹網'
      }
    },
    // 多一頁
    {
      path: '/guitar',
      name: 'guitar',
      component: () => import('@/views/GuitarHistory.vue'),
      meta: {
        title: '吉他社社史'
      }
    },
    // 多一頁
    {
      path: '/guitar/events',
      name: 'guitar-events',
      component: () => import('@/views/GuitarEvents.vue'),
      meta: {
        title: '吉他社近期活動公告'
      }
    },
    {
      path: '/guitar/teach',
      name: 'guitar-teach',
      component: () => import('../views/GuitarTeach.vue'),
      meta: {
        title: '吉他社教學內容'
      }
    },
    {
      path: '/prepare',
      name: 'prepare',
      component: () => import('../views/NotReady.vue'),
      // alias 路由別名，除了/prepare 定義的路徑以外，這些路徑也套用這個設定
      // 注意在這些路徑換頁時會被當作在同一個路由
      alias: [
        '/dance',
        '/baseball',
        '/badminton',
        '/soccer',
        '/scout'
      ],
      meta: {
        title: '準備中'
      }
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: {
        title: '404'
      }
    },
    {
      // path:/:catchAll(.*)固定語法，配對不符合以上的所有網址，重新導向'/404'的網頁路徑
      path: '/:catchAll(.*)',
      name: 'all',
      // 重新導向到 404
      redirect: '/404'
    }
    // 也可以直接這樣寫
    // {
    //   path: '/404',
    //   name: 'not-found',
    //   component: () => import('../views/NotFound.vue'),
    //   meta: {
    //     title: '404'
    //   }
    // },
  ]
})
// to要去哪裡, from從哪裡來
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
