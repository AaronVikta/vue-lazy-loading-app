import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello.vue'
import World from './components/World.vue'

Vue.use(VueRouter);



const routes= [
  {
    path:'/hello',
    name:'hello',
    component:Hello
  },
  {
    path:'/world',
    name:'world',
    component:World
  }
]
export const router = new VueRouter({
  routes
})
