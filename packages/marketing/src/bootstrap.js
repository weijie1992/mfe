import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el) => {
  ReactDOM.render(<App />, el)
}
//If development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

//if we are running using the main container, then export the mount function
export { mount }
