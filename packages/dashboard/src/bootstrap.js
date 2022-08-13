import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)

}
//If development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

//if we are running using the main container, then export the mount function
export { mount }
