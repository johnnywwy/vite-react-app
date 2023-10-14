import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigProvider } from 'antd'

// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'

// 全局样式
import '@/common/styles/frame.styl'

ReactDOM.createRoot(
  document.getElementById('root')!).render(
    <ConfigProvider locale={zhCN} >
      <App />
    </ConfigProvider >
  )
