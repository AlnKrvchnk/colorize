import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Home from '../pages/home'
import Auth from '../pages/auth'
import Example from '../pages/example'
import User from '../pages/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/auth',
    name:'signIn',
    component:Auth,
    props: true
},
{
  path:'/auth',
  name:'signUp',
  component:Auth,
  props: true
},

{
    path:'/example',
    name:'example',
    component:Example
},
{
  path:'/user',
  name:'user',
  component:User
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
