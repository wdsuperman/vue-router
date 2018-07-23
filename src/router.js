import Vue from 'vue'
import Router from 'vue-router'
import Comments from '@/components/Comments'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comments',
      component: Comments
    },
    {
      path: '/post',
      component: Post
    }
  ],
  mode: 'history'
})