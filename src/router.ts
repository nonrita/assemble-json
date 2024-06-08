import { createMemoryHistory, createRouter } from 'vue-router'
import Main from './view/Main.vue'

const routes = [
  { path: '/', component: Main },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})