import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/views/index'
import movie from '@/views/movie/index'
import books from '@/views/books/index'
import status from '@/views/status/index'
import group from '@/views/group/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/status',
      name: 'status',
      component: status
    },
    {
      path: '/group',
      name: 'group',
      component: group
    }
  ]
})
