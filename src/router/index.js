import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import menuBar from '@/components/menuBar'
import menuBar1 from '@/components/menuBar1'
const routes = [
  {
    path: '/',
    redirect:"/login"
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/studentIndex',
    name: 'studentIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: menuBar1,
    children:[
      {
        path:'',
        // name:'building',
        component: () => import(/* webpackChunkName: "about" */ '../views/studentIndex.vue')

      }
    ]
    
  },

  
  {
    path: '/teacher',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/teacher.vue')

      }
    ]
  },
  {
    path: '/index',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/index.vue')

      }
    ]
  },
  {
    path: '/building3',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/building3.vue')

      }
    ]
  },
  {
    path: '/building4',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/building4.vue')

      }
    ]
  },
  {
    path: '/classroomArrangement',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/classroomArrangement.vue')

      }
    ]
  },
  {
    path: '/classroomAvailable',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar1,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/classroomAvailable.vue')

      }
    ]
  },
  {
    path: '/studentAsk',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/studentAsk.vue')

      }
    ]
  },
  {
    path: '/askManagement',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hasha].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar1,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/askManagement.vue')

      }
    ]
  },
  // {
  //   path: '/manageAsk',
  //   // name: 'building3',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //    component: menuBar,
  //   children:[
  //     {
  //       path:'',
  //       // name:'building',
  //      component: () => import('../views/manageAsk.vue')

  //     }
  //   ]
  // },

  //  {
  //   path: '/building4',
  //   name: 'building4',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/building4.vue')
  // }
  {
    path: '/course',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/course.vue')
      }
    ]
  },
  {
    path: '/studentIndex',
    name: 'studentIndex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackCxhunkName: "about" */ '../views/studentIndex.vue')
  },
  {
    path: '/student',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
        component: () => import(/* webpackCxhunkName: "about" */ '../views/student.vue')

      }
    ]
    
  },
  {
    path: '/class',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/class.vue')

      }
    ]
  },
  {
    path: '/courseTeacher',
    // name: 'building3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: menuBar,
    children:[
      {
        path:'',
        // name:'building',
       component: () => import('../views/courseTeacher.vue')

      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
