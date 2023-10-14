import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 全局样式
import '@/common/styles/frame.styl'

ReactDOM.createRoot(
  document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
