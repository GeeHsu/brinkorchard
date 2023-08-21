import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/QuestionsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/attribute',
      name: 'attribute',
      component: () => import('../views/AttributeView.vue'),
    },
    // 404 頁面
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    },
    // 重新導向
    {
      path: '/products/:pathMatch(.*)*',
      redirect: {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    // `to` 和 `from` 都是路由路径
    // `savedPosition` 如果不存在可以为 null
    if (to.fullPath.match('/')) {
      return {
        top: 0,
      };
    }
    return {};
  },
})

export default router
