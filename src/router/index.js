import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
//路由lazy加载
const Home = () => import('views/home/HomeView')
const About = () => import('views/about/AboutView')
const Video = () => import('views/video/VideoView')
const Photo = () => import('views/photo/PhotoView')

const routes = [
  {
    path: '/',
    meta:{
      title:'首页'
    },
    //
    redirect:'/home',
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:'这一天'
    },
    // beforeEnter:(to,from,next)=>{
    //   console.log('about静茹操作');
    //   next()
    // },
    component:About

  },
  {
    path: '/video',
    name: 'video',
    meta:{
      title:'视频'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Video
  },
  {
    path: '/photo',
    name: 'photo',
    meta:{
      title:'相册'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Photo
  },
  {
    path: '/home',
    name: 'home',
    meta:{
      title:'首页'
    },
    component:Home


  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,


})

//前置钩子（hook）全局守卫
router.beforeEach(function (to,from ,next) {
 document.title = to.matched[0].meta.title;
   // console.log(to);
  next();
})

//后置钩子 全局守卫
// router.afterEach(function (to,from) {
//   // console.log(to);
// })


export default router
