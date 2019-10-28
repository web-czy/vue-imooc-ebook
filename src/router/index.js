import Vue from 'vue'
import VueRouter from 'vue-router'
const Ebook = () => import('../views/ebook/index.vue')
const FileName = () => import('../components/ebook/EbookReader.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'ebook',
    component: Ebook,
    children: [
      {
        path: ':fileName',
        component: FileName
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
