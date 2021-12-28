import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { reduxStore } from './services/redux/ReduxIndex'
import './App.css'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
