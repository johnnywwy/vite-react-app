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

   5. ##### 在React组件中实现页面路由跳转

      下面要实现的功能是，点击Login页面的“登录”按钮，跳转至Home页面。

      修改`src/pages/login/index.jsx`

      ```jsx
      +   import { useNavigate } from 'react-router-dom'
          import { Button, Input } from 'antd'
          import imgLogo from './logo.png'
          import './login.styl'
          
          function Login() {
          
      +       // 创建路由钩子
      +        const navigate = useNavigate()
      +        const back = () => {
          		navigate('/login')
        		}
       
              return (
                  <div className="ipt-con">
      M               <Button type="primary" block={true} onClick={back}>登录</Button>
                  </div>
          )
      
      ```

      余下的页面如此类推，不再赘述

      

   6. ##### 在非React组件中实现页面路由跳转

      在实际项目中，经常需要在非React组件中进行页面跳转。比如，当进行API请求的时候，如果发现登录认证已失效，就直接跳转至Login页面；当API请求失败时，进行统一的报错提示。

      以上这些情况的统一处理，当然是封装成公用的模块最合适。但往往这些纯功能性的模块都不是React组件，而是纯原生js。所以就没办法使用useNavigate()了。

      下面介绍一下如何实现在非React组件中进行页面路由跳转。

      

      新建`src/api/index.jsx`：

      ```jsx
      import {globalRouters} from '@/router'
      
      export const goto = (path) => {
          globalRouters.navigate(path)
      }
      ```

      在Home页点击“组件外跳转”按钮，可以正常跳转至Login页面了，而实际执行跳转的代码是在`src/api/index.jsx`（非React组件）中，这样就非常适合封装统一的处理逻辑。

      

      后续章节会讲述如何封装api接口，并通过组件外路由的方式实现API调用失败时的统一跳转。

6. ### 组件开发

   为了配合后续章节介绍二级路由和主题换肤，构建一个公用的头部组件。

   1. ##### 创建自定义SVG图标Icon组件

      Antd自带了很多Icon，非常方便直接使用。但在项目中遇到Antd没有的图标怎么办？当然，前提要求是自己构建的图标也能支持随时改变颜色和大小等样式。

      

      例如针对切换亮色/暗色主题功能，Antd没有提供“太阳”“月亮”“主题色”的Icon。

      

      第一个方法是在iconfont网站([www.iconfont.cn/](https://link.juejin.cn?target=https%3A%2F%2Fwww.iconfont.cn%2F))上制作自己的iconfont字体，然后以字体文件的方式应用到项目中。这种方式相信从事前端开发的同学都很熟悉了，不再赘述。这种方式相对来说比较麻烦，每次图标有变动时，都要重新生成一遍，而且遇到iconfont网站打不开等突发情况时，只能干着急。不是很推荐。

      

      这里推荐第二个方法，就是基于Antd的Icon组件制作本地的自定义图标，而且用起来跟Antd自带的Icon是一样的，也不用额外考虑换肤的问题。虽然Antd官网介绍了制作方法，但讲解得不够具体。

      > Ant Design官方说明：https://ant-design.antgroup.com/components/icon-cn#%E8%87%AA%E5%AE%9A%E4%B9%89-icon

      

      下面具体分享一下这种高效的方案。

      第一步：创建自定义图标库

      新建`src/components/extraIcons/index.jsx`：

      > ※注：一定要仔细坚持以下三方面。
      >
      > 1. 检查svg代码中是否有class以及与颜色相关的fill、stroke等属性，如有，必须连带属性一起删除。
      > 2. 确保`<SVG>`标签中有fill="currentColor"，否则图标的颜色将不能改变。
      > 3. 确保`<SVG>`标签中width和height属性的值为1em，否则图标的大小将不能改变。

      SVG代码太长了，这里就不全部贴出来了。

      这样，自定义Icon就制作好了。使用方法在下一小节介绍。

   2. ##### 创建Header组件

      新建`src/components/header/index.tsx`：

      ```jsx
      import { Button, Card } from 'antd'
      import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
      import './header.styl'
      
      function Header() {
          return (
              <Card className="M-header">
                  <div className="header-wrapper">
                      <div className="logo-con">Header</div>
                      <div className="opt-con">
                          <Button icon={<MoonOutlined />} shape="circle"></Button>
                          <Button icon={<ThemeOutlined />} shape="circle"></Button>
                      </div>
                  </div>
              </Card>
          )
      }
      
      export default Header
      ```

      新建`src/components/header/header.styl`：

      ```css
      .M-header
          position: relative
          z-index: 999
          border-radius: 0
          overflow hidden
          .ant-card-body
              padding: 16px 24px
              height: 62px
              line-height: 32px
          .header-wrapper
              display: flex
              .logo-con
                  display: flex
                  font-size: 30px
                  font-weight: bold
              .opt-con
                  display: flex
                  flex: 1
                  justify-content: flex-end
                  gap: 20px
      
      ```

      

   3. ##### 引入Header组件

      在Home页面里引入Header组件

      

      修改`src/pages/home/index.jsx`：

      ```tsx
          import { useNavigate } from 'react-router-dom'
          import { Button } from 'antd'
      +   import Header from '@/components/header'
          import { goto } from '@/api'
          import './home.styl'
          
          function Home() {
              // 创建路由钩子
              const navigate = useNavigate()
          
              return (
                  <div className="P-home">
      +               <Header />
                      <h1>Home Page</h1>
      
                  ...（略）
      
      ```

   4. #####  在Header组件中添加页面导航

      现在，要在Header组件中添加页面导航，主要实现两个功能：

      1. 点击导航，跳转到对应的页面
      2. 根据当前所处的页面，将对应的导航进行“当前态”显示

      在本示例中，Header组件仅出现在Home和Account页面，因此导航中不包括Login页面。

      修改`src/components/header/index.jsx`：

      ```tsx
      M   import { Button, Card, Menu } from 'antd'
          import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
      +   import { HomeOutlined, UserOutlined } from '@ant-design/icons'
      +   import { useLocation, useNavigate } from 'react-router-dom'
          import './header.styl'
          
          function Header() {
          
      +       // 创建路由定位钩子
      +       const location = useLocation()
      +       // 创建路由钩子
      +       const navigate = useNavigate()
          
      +       // 定义导航栏
      +       const menuItems = [
      +           {   
      +               // 导航显示的名称
      +               label: 'Home',
      +               // 导航唯一标识，为便于当前态的显示，与当前路由保持一致
      +               key: '/home',
      +               // 导航的前置图标
      +               icon: <HomeOutlined />,
      +               // 点击跳转行为
      +               onClick: () => {
      +                   navigate('/home')
      +               },
      +           },
      +           {
      +               label: 'Account',
      +               key: '/account',
      +               icon: <UserOutlined />,
      +               onClick: () => {
      +                   navigate('/account')
      +               },
      +           },
      +       ]
          
              return (
                  <Card className="M-header">
                      <div className="header-wrapper">
                          <div className="logo-con">Header</div>
      +                   <div className="menu-con">
      +                       <Menu mode="horizontal" selectedKeys={location.pathname} items={menuItems} />
      +                   </div>
                          <div className="opt-con">
                              <Button icon={<MoonOutlined />} shape="circle"></Button>
                              <Button icon={<ThemeOutlined />} shape="circle"></Button>
                          </div>
                      </div>
                  </Card>
              )
          }
          
          export default Header
      
      ```

      修改`src/components/header/header.styl`：

      ```css
          .M-header
              ...（略）
              .header-wrapper
                  display: flex
                  .logo-con
                      display: flex
                      font-size: 30px
                      font-weight: bold
      +           .menu-con
      +               margin-left: 20px
      +               width: 300px
                  .opt-con
                      display: flex
                      flex: 1
                      justify-content: flex-end
                      gap: 20px
      
      ```

      这里需要注意的就是useLocation()的使用。通过useLocation()的pathname，可以得到当前页面所处的路由地址，结合Menu组件中对导航key的定义，就可以判断是否为当前页面了。使用useLocation方法，可以很方便实现页面位置导航及当前页面状态显示等交互需求，非常适合与Antd的Menu导航菜单组件、Breadcrumb面包屑组件搭配使用。

      

   5. ##### 组件传参

      使用过Vue的同学都知道，Vue组件有data和props。

      data是组件内的数据；

      props用来接收父组件传递来的数据。

      在React中，如果使用的是Class方式定义的组件：

      state是组件内的数据；

      props用来接收父组件传递来的数据。

      如果使用的是function方式定义的组件（也叫“无状态组件”或“函数式组件”）：

      使用useState()管理组件内的数据（hook）；

      使用props接收父组件传递来的数据。

      Class组件有明确的声明周期管理，但是代码相对来说不如无状态组件简洁优雅。

      无状态组件通过hook管理声明周期，效率更高。因此本教程**全程使用无状态组件**讲解。

      下面简单演示下如何实现向子组件传递数据。

      通过Home和Account分别向Header组件传递不同的值，并显示在Header组件中。

      

      修改`src/pages/home/index.jsx`：

      ```jsx
          ...（略）
      M   <Header title="home" info={()=>{console.log('info:home')}} />
          ...（略）
      ```

      修改`src/pages/account/index.jsx`：

      ```jsx
          ...（略）
      M   <Header title="account" info={()=>{console.log('info:account')}} />
          ...（略）
      ```

      修改`src/components/header/index.jsx`：

      ```jsx
        ...（略）
          
      M   function Header(props) {
              ...（略）
              
      +       // 接收来自父组件的数据
      +       const { title, info } = props
          
      +       // 如果info存在，则执行info()
      +       info && info()
          
              return (
                  <Card className="M-header">
                      <div className="header-wrapper">
      M                   <div className="logo-con">Header:{title}</div>
                          ...（略）
      
      ```

      

7. ### 二级路由配置

   在第6章节中，将Header组件分别导入到Home和Account页面，这显然是一种非常低效的方式。如果有N个页面，那要引入N多次。结合这个问题，下面来讲解如何通过二级路由来解决这个问题。

   1. ##### 创建二级路由的框架页面

      新建`src/pages/entry/index.jsx`：

      ```tsx
      import { Outlet } from 'react-router-dom'
      import Header from '@/components/header'
      import './entry.styl'
      
      function Entry() {
          return (
              <div className="M-entry">
                  <Header />
                  <div className="main-container">
                      <Outlet />
                  </div>
              </div>
          )
      }
      
      export default Entry
      
      ```

      新建`src/pages/entry/entry.styl`：

      ```css
      .M-entry
          display: flex
          flex-direction: column
          height: 100%
          .main-container
              position: relative
              flex: 1
      
      ```

      

      这里的`<Outlet>`就是为二级路由页面挖好的“坑”，Entry下的路由页面会放到`<Outlet>`位置，而Header组件则是一次性引入，非常方便。

      然后把Home和Account页面中的Header组件删掉。否则会与Entry里的Header组件重复出现。

      

      修改`src/pages/home/index.jsx`, src/pages/account/index.jsx：

      ```jsx
      -   import Header from '@/components/header'
      ```

   2. ##### 配置二级路由

      修改`src/router/index.jsx`：

      ```jsx
      import { createHashRouter, Navigate } from 'react-router-dom'
      import Login from '@/pages/login'
      import Home from '@/pages/home'
      import Account from '@/pages/account'
      // 引入Entry框架页面
      import Entry from '@/pages/entry'
      
      // 全局路由
      export const globalRouters = createHashRouter([
          // 对精确匹配"/login"，跳转Login页面
          {
              path: '/login',
              element: <Login />,
          },
          {
              // 未匹配"/login"，全部进入到entry路由
              path: '/',
              element: <Entry />,
              // 定义entry二级路由
              children: [
                  {
                      // 精确匹配"/home"，跳转Home页面
                      path: '/home',
                      element: <Home />,
                  },
                  {
                      // 精确匹配"/account"，跳转Account页面
                      path: '/account',
                      element: <Account />,
                  },
                  {
                      // 如果URL没有"#路由"，跳转Home页面
                      path: '/',
                      element: <Navigate to="/home" />,
                  },
                  {
                      // 未匹配，跳转Login页面
                      path: '*',
                      element: <Navigate to="/login" />,
                  },
              ],
          },
      ])
      
      ```

      改造后，Header组件的传参不见了。这是因为把Header放到Entry页面后，就没有给Header组件传递title参数了。关于组件间传参、使用useLocation()定位当前路由，以及二级路由的使用，这些关键知识点已经讲解完，这里也就不再对Header组件进行修改了。

​	



