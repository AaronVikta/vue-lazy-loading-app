import Vue from 'vue'
import VueRouter from 'vue-router'

// import Hello from './components/Hello.vue'

// import World from './components/World.vue'

const Hello= ()=>import('./components/Hello')
const World =()=>import('./components/World')
Vue.use(VueRouter);



const routes= [
  {
    path:'/hello',
    name:'hello',
    component:Hello
  },
  {
    path:'/',
    redirect:'/hello'
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
