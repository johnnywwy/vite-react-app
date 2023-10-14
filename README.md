# React + TypeScript + Vite

## 这是我使用 react 做的小练习 主要是为了学习最新的使用

> 根据掘金进行联系
>
> https://juejin.cn/post/7240838046789812282



1. ### 初始化项目

   ##### 我使用了pnpm 作为我的管理

   ```
   pnpm create vite@latest
   ```

   ```
   Project name: vite-react-app
   Select a framework: React
   Select a variant: TypeScript
   ```

   ```
   cd vite-react-app
   pnpm install
   pnpm run dev
   ```

   大功告成

   ```
   http://localhost:5173/
   ```

   

2. ### Vite基础配置

   精简文件结构

   ```
   ├─ /node_modules
   ├─ /public
   ├─ /src
   |  ├─ App.jsx
   |  └─ main.jsx
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ index.html
   ├─ package.json
   ├─ vite.config.js
   └─ yarn.lock
   ```

   

   `src/App.tsx`

   ```tsx
   function App() {
       return <div className="App">Vite-React-App</div>
   }
   
   export default App
   ```

   

   `src/main.jsx`

   ```tsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App'
   
   ReactDOM.createRoot(
     document.getElementById('root')!).render(
       <React.StrictMode>
         <App />
       </React.StrictMode>,
     )
   ```

   

   安装less

   ```
   pnpm add -D less less-loader
   ```

   设置dev环境的Server端口号

   均保持默认

   

   `vite.config.ts`

   ```ts
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         '@': path.resolve(__dirname, 'src'),
       },
     }
   })
   
   ```

   

3. ### 项目架构搭建

   1. ##### 项目目录结构设计

      ```
      ├─ /node_modules
      ├─ /public
      |  └─ favicon.ico        <-- 网页图标
      ├─ /src
      |  ├─ /api               <-- api目录
      |  ├─ /common            <-- 全局公用目录
      |  |  ├─ /fonts          <-- 字体文件目录
      |  |  ├─ /images         <-- 图片文件目录
      |  |  ├─ /js             <-- 公用js文件目录
      |  |  └─ /styles         <-- 公用样式文件目录
      |  |  |  ├─ frame.styl   <-- 全部公用样式（import本目录其他全部styl）
      |  |  |  ├─ reset.styl   <-- 清零样式
      |  |  |  └─ global.styl  <-- 全局公用样式
      |  ├─ /components        <-- 公共模块组件目录
      |  |  ├─ /header         <-- 头部导航模块
      |  |  |  ├─ index.jsx    <-- header主文件
      |  |  |  └─ header.styl  <-- header样式文件
      |  |  └─ ...             <-- 其他模块
      |  ├─ /pages             <-- 页面组件目录
      |  |  ├─ /home           <-- home页目录
      |  |  |  ├─ index.jsx    <-- home主文件
      |  |  |  └─ home.styl    <-- home样式文件
      |  |  ├─ /login          <-- login页目录
      |  |  |  ├─ index.jsx    <-- login主文件
      |  |  |  └─ login.styl   <-- login样式文件
      |  |  └─ ...             <-- 其他页面
      |  ├─ /route             <-- 路由配置目录
      |  ├─ /store             <-- Redux配置目录
      |  ├─ globalConfig.jsx   <-- 全局配置文件
      |  ├─ main.jsx           <-- 项目入口文件
      |  └─ mock.jsx           <-- mock数据文件
      ├─ .eslintrc.cjs         <-- ESLint配置文件
      ├─.gitignore
      ├─ index.html            <-- HTML页模板
      ├─ package.json
      ├─ vite.config.js        <-- Vite配置文件
      └─ yarn.lock
      ```

      

   2. ##### 关于样式命名规范

      > G-xx： 表示全局样式，用来定义公用样式。
      >
      > P-xx: 表示页面样式，用来设置页面的背景色、尺寸、定制化调整在此页面的组件样式。
      >
      > M-xx: 表示组件样式，专注组件本身样式。

      

   3. #####  设置全局公用样式

      > 新建清零样式文件，`src/common/styles/reset.styl`
      >
      > https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css
      >
      > ​	
      >
      > 新建全局样式文件，`src/common/styles/global.styl`
      >
      > ```css
      > html, body, #root
      >     height: 100%
      >     /*清浮动*/
      > .clearfix:after
      >     content: "."
      >     display: block
      >     height: 0
      >     clear: both
      >     visibility: hidden
      > .clearfix
      >     display:block
      > ```
      >
      > 
      >
      > 新建全局样式总入口文件，`src/common/styles/frame.styl`
      >
      > ```js
      > @import './reset.styl';
      > @import './global.styl';
      > ```
      >
      > 
      >
      > 在`src/main.jsx`里引入`frame.styl`
      >
      > ```jsx
      > // 全局样式
      > import '@/common/styles/frame.styl'
      > ```
      >
      > 

   

4. ### 引入Ant Design 5.x

   1. ##### 安装Ant Design

      ```
      pnpm install antd
      ```

      修改`src/App.jsx` 来验证下Antd

      ```jsx
      import { Button } from 'antd'
      
      function App() {
          return (
              <div className="App">
                  <h1>Vite-React-App</h1>
                  <Button type="primary">Button</Button>
              </div>
          )
      }
      
      export default App
      ```

      > Antd 5.x已经没有全局污染的reset样式了。因此不用再担心使用了Antd会影响页面样式。

      

   2. ##### 设置Antd为中文语言

      ```jsx
          import React from 'react'
          import ReactDOM from 'react-dom/client'
          import App from './App'
      +   import { ConfigProvider } from 'antd'
      +   // 引入Ant Design中文语言包
      +   import zhCN from 'antd/locale/zh_CN'
          // 全局样式
          import '@/common/styles/frame.styl'
          
      M   ReactDOM.createRoot(document.getElementById('root')).render(
      +       <ConfigProvider locale={zhCN}>
      +           <App />
      +       </ConfigProvider>
      +   )
      
      ```

   

5. ###  页面开发

   本次教程包含Login、Home、Account三个业务页面和一个二级路由页面Entry。其中：

   - Login页面不换肤，不需要验证登录状态。

   - Home页面和Account页面，跟随换肤，并通过Entry进行登录状态验证及路由切换。

     

   工程文件变动如下：

   ```jsx
   +   |  ├─ /pages
   +   |  |  ├─ /account
   +   |  |  |  ├─ index.jsx
   +   |  |  |  └─ account.styl
   +   |  |  ├─ /entry
   +   |  |  |  ├─ index.jsx
   +   |  |  |  └─ entry.styl
   +   |  |  ├─ /home
   +   |  |  |  ├─ index.jsx
   +   |  |  |  └─ home.styl
   +   |  |  ├─ /login
   +   |  |  |  ├─ index.jsx
   +   |  |  |  ├─ login.styl
   +   |  |  |  └─ logo.png
   ```

   1. ##### 构建Login页面

      `src/pages/login/index.jsx `

      ```tsx
      import { Button, Input } from 'antd'
      import imgLogo from './logo.png'
      import './login.styl'
      
      function Login() {
          return (
              <div className="P-login">
                  <img src={imgLogo} alt="" className="logo" />
                  <div className="ipt-con">
                      <Input placeholder="账号" />
                  </div>
                  <div className="ipt-con">
                      <Input.Password placeholder="密码" />
                  </div>
                  <div className="ipt-con">
                      <Button type="primary" block={true}>
                          登录
                      </Button>
                  </div>
              </div>
          )
      }
      ```

      `src/pages/login/login.styl`

      ```css
      .P-login
          position: absolute
          top: 0
          bottom: 0
          width: 100%
          background: #7adbcb
          .logo
              display: block
              margin: 50px auto 20px
          .ipt-con
              margin: 0 auto 20px
              width: 400px
              text-align: center
      
      ```

      

   2. ##### 构建Home页面

      `src/pages/home/index.jsx`

      ```tsx
      import { Button } from 'antd'
      import './home.styl'
      
      function Home() {
      
          return (
              <div className="P-home">
                  <h1>Home Page</h1>
                  <div className="ipt-con">
                      <Button type="primary">返回登录</Button>
                  </div>
              </div>
          )
      }
      
      export default Home
      ```

      `src/pages/home/home.styl`

      ```css
      .P-home
          position: absolute
          top: 0
          bottom: 0
          width: 100%
          background: linear-gradient(#f48c8d,#f4c58d)
          h1
              margin-top: 50px
              text-align: center
              color: #fff
              font-size: 40px
          .ipt-con
              margin: 20px auto 0
              text-align: center
      
      ```

      

   3. ##### 构建Account页面

      `src/pages/account/index.jsx`

      ```jsx
      import { Button } from 'antd'
      import './account.styl'
      
      function Account() {
      
          return (
              <div className="P-account">
                  <h1>Account Page</h1>
                  <div className="ipt-con">
                      <Button type="primary">返回登录</Button>
                  </div>
              </div>
          )
      }
      
      export default Account
      ```

      

      `src/pages/account/account.styl`

      ```
      .P-account
          position: absolute
          top: 0
          bottom: 0
          width: 100%
          background: linear-gradient(#f48c8d,#f4c58d)
          h1
              margin-top: 50px
              text-align: center
              color: #fff
              font-size: 40px
          .ipt-con
              margin: 20px auto 0
              text-align: center
      ```

      

   4. ##### 通过一级路由实现页面跳转

      为了实现页面的跳转，需要安装react-router-dom。

      ```csharp
      pnpm install react-router-dom
      ```

      

      接下来进行路由配置

      新建`src/router/index.jsx`：

      ```tsx
      import { createHashRouter, Navigate } from 'react-router-dom'
      import Login from '@/pages/login'
      import Home from '@/pages/home'
      import Account from '@/pages/account'
      
      // 全局路由
      export const globalRouters = createHashRouter([
          // 对精确匹配"/login"，跳转Login页面
          {
              path: '/login',
              element: <Login />,
          },
          // 精确匹配"/home"，跳转Home页面
          {
              path: '/home',
              element: <Home />,
          },
          // 精确匹配"/account"，跳转Account页面
          {
              path: '/account',
              element: <Account />,
          },
          // 如果URL没有"#路由"，跳转Home页面
          {
              path: '/',
              element: <Home />,
          },
          // 未匹配，，跳转Login页面
          {
              path: '*',
              element: <Navigate to="/login" />,
          },
      ])
      
      ```

      为循序渐进讲解，暂时先将Login、Home、Account都当做一级页面，通过一级路由实现跳转。代码注释已写明跳转逻辑，不再赘述。

      接下来应用以上路由配置，修改`src/main.jsx`

      ```jsx
      	import React from 'react'
          import ReactDOM from 'react-dom/client'
      +   import { RouterProvider } from 'react-router-dom'
      +   import { globalRouters } from '@/router'
      -   import App from '@/pages/account'
          import { ConfigProvider } from 'antd'
          // 引入Ant Design中文语言包
          import zhCN from 'antd/locale/zh_CN'
          // 全局样式
          import '@/common/styles/frame.styl'
          
          ReactDOM.createRoot(document.getElementById('root')).render(
              <ConfigProvider locale={zhCN}>
      -           <App />
      +           <RouterProvider router={globalRouters} />
              </ConfigProvider>
          )
      
      ```

      







