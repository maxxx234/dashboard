import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store.js'

// provider is used to make redux store avaible to your entire application
// 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
