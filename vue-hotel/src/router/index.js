import Vue from 'vue'
import Router from 'vue-router'
//前台
import header from '@/components/header'
import footer from '@/components/footer'
import mapDrag from '@/components/mapDrag'
import login from '@/views/login'
import test from '@/views/test'
import food from '@/views/food'
import room from '@/views/room'
import news from '@/views/news'
import serve from '@/views/serve'
import roomPic from '@/views/roomPic'
// import loginwang from '@/components/loginwang'

import register from '@/components/register'
import introduce from '@/views/introduce'
import connect from '@/views/connect'
import reservation from '@/views/reservation'
import map from '@/views/map'
import newsdetail from '@/views/newsdetail'
//后台
import adminLogin from '@/adminViews/adminLogin'
import manage from '@/adminViews/manage'
import article from '@/adminViews/article'
import addNews from '@/adminViews/addNews'
import updateNews from '@/adminViews/updateNews'
import user from '@/adminViews/user'
import guestbook from '@/adminViews/guestbook'




Vue.use(Router)

export default new Router({
  routes: [{
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/test',
      name: 'test',
      component: test
    }, {
      path: '/food',
      name: 'food',
      component: food
    }, {
      path: '/room',
      name: 'room',
      component: room
    }, {
      path: '/reservation',
      name: 'reservation',
      component: reservation
    }, {
      path: '/news',
      name: 'news',
      component: news
    }, {
      path: '/serve',
      name: 'serve',
      component: serve
    }, {
      path: '/connect',
      name: 'connect',
      component: connect
    }, {
      path: '/map',
      name: 'map',
      component: map
    }, {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin
    },
    {
      name: "manage",
      path: '/manage',
      meta: {
        requireAuth: true,
      },

      component: manage,
      children: [{
        path: '/',
        component: manage
      }, {
        path: 'article',
        name: 'article',
        component: article
      }, {
        path: 'guestbook',
        name: 'guestbook',
        component: guestbook
      }, {
        path: '/addNews',
        name: 'addNews',
        component: addNews
      }, ]
    }, {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/mapDrag',
      name: 'mapDrag',
      component: mapDrag
    }, {
      path: '/newsdetail',
      name: 'newsdetail',
      component: newsdetail
    }, {
      path: '/user',
      name: 'user',
      component: user
    }, {
      path: '/roomPic',
      name: 'roomPic',
      component: roomPic
    }, {
      path: '/updateNews',
      name: 'updateNews',
      component: updateNews
    }
  ],


})
