import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import { globalRouters } from '@/router'

// import App from './App'
// import App from '@/pages/login'
// import App from '@/pages/home'
// import App from '@/pages/account'

import { ConfigProvider } from 'antd'

// 引入 store redux
import { store } from '@/store'
import { Provider } from 'react-redux'

// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'

// 全局样式
import '@/common/styles/frame.styl'


ReactDOM.createRoot(document.getElementById('root')!)
  .render(
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <RouterProvider router={globalRouters} />
      </ConfigProvider>
    </Provider>
  )
