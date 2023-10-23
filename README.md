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

8. ### React Developer Tools浏览器插件

   安装完成后，打开Chrome DevTools，点击Components按钮，可以清晰的看到React项目代码结构以及各种传参。

9. ### Redux及Redux Toolkit

   Redux是用来做什么的？简单通俗的解释，Redux是用来管理项目级别的全局变量，而且是可以实时监听变化并改变DOM的。当多个模块都需要动态显示同一个数据，并且这些模块从属于不同的父组件，或者在不同的页面中，如果没有Redux，那实现起来就很麻烦了，问题追踪也很痛苦。Redux就是解决这个问题的。

   做过Vue开发的同学都知道Vuex，React对应的工具就是Redux。在以前，在React中使用Redux还需要redux-thunk、immutable等插件，逻辑非常麻烦，也很难理解。现在官方推出了Redux Toolkit，一个开箱即用的高效的Redux开发工具集，不需要依赖第三方插件了，使用起来也很简洁。

   1. #####  安装Redux及Redux Toolkit

      ```yaml
       pnpm install @reduxjs/toolkit react-redux
      ```

   2. ##### 创建全局配置文件

      新建`src/globalConfig.jsx`：

      ```jsx
      /**
       * 全局配置
       */
       export const globalConfig = {
        // 初始主题（localStorage未设定的情况）
        initTheme: {
          // 初始为亮色主题
          dark: false,
          // 初始主题色
          // 与customColorPrimarys数组中的某个值对应
          // null表示默认使用Ant Design默认主题色或customColorPrimarys第一种主题色方案
          colorPrimary: null,
        },
        // 供用户选择的主题色，如不提供该功能，则设为空数组
        customColorPrimarys: [
          '#1677ff',
          '#f5222d',
          '#fa8c16',
          '#722ed1',
          '#13c2c2',
          '#52c41a',
        ],
        // localStroge用户主题信息标识
        SESSION_LOGIN_THEME: 'userTheme',
        // localStroge用户登录信息标识
        SESSION_LOGIN_INFO: 'userLoginInfo',
      }
      ```

      globalConfig其实与Redux没有太深入的关系，只是为了方便配置一些初始化默认值而已,以及定义localStorage的变量名，这么做就是为了把配置项都抽出来方便维护。

   3. ##### 创建用于主题换肤的store分库

      为了便于讲解，先创建分库。按照官方的概念，分库叫做slice。可以为不同的业务创建多个slice，便于独立维护。这里结合主题换肤功能，创建对应的分库。	

      新建`store/slices/theme.jsx`：

      ```jsx
      import { createSlice } from '@reduxjs/toolkit'
      import { globalConfig } from '@/globalConfig'
      
      // 先从localStorage里获取主题配置
      const sessionTheme = JSON.parse(window.localStorage.getItem(globalConfig.SESSION_LOGIN_THEME))
      
      // 如果localStorage里没有主题配置，则使用globalConfig里的初始化配置
      const initTheme =  sessionTheme?sessionTheme: globalConfig.initTheme
      
      //该store分库的初始值
      const initialState = {
          dark: initTheme.dark,
          colorPrimary: initTheme.colorPrimary
      }
      
      export const themeSlice = createSlice({
          // store分库名称
          name: 'theme',
          // store分库初始值
          initialState,
          reducers: {
              // redux方法：设置亮色/暗色主题
              setDark: (state, action) => {
                  // 修改了store分库里dark的值（用于让全项目动态生效）
                  state.dark = action.payload
                  // 更新localStorage的主题配置（用于长久保存主题配置）
                  window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
              },
              // redux方法：设置主题色
              setColorPrimary: (state, action) => {
                  // 修改了store分库里colorPrimary的值（用于让全项目动态生效）
                  state.colorPrimary = action.payload
                  // 更新localStorage的主题配置（用于长久保存主题配置）
                  window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
              },
          },
      })
      
      // 将setDark和setColorPrimary方法抛出
      export const { setDark } = themeSlice.actions
      export const { setColorPrimary } = themeSlice.actions
      
      export default themeSlice.reducer
      
      ```

      再啰嗦一下这部分的关键逻辑：

      1. 先从localStorage里获取主题配置，这么做是为了将用户的主题配置保存在浏览器中，用户在刷新或者重新打开该项目的时候，会直接应用之前设置的主题配置。

      2. 如果localStorage没有主题配置，则从globalConfig读取默认值，然后再写入localStorage。这种情况一般是用户使用当前浏览器第一次浏览该项目时会用到。

      3. setDark用来设置“亮色/暗色主题”，setColorPrimary用来设置“主题色”。每次设置后，除了变更store里的值（为了项目全局动态及时生效），还要同步写入localStorage（为了刷新或重新打开时及时生效）。

      4. “亮色/暗色主题”和“主题色”虽然都是颜色改变，但是完全不同的两个维度的换肤。“亮色/暗色主题”主要是对默认的文字、背景、边框等基础元素进行黑白切换，而“主题色”则是对带有“品牌色”的按钮等控件进行不同色系的颜色切换。

         

   4. ### 创建store总库

      新建`store/index.jsx`：

      ```jsx
      import { configureStore } from '@reduxjs/toolkit'
      // 引入主题换肤store分库
      import themeReducer from '@/store/slices/theme'
      
      export const store = configureStore({
        reducer: {
          // 主题换肤store分库
          theme: themeReducer
          // 可以根据需要在这里继续追加其他分库
        },
      })
      
      ```

      

   5. ### 引入store到项目

      首先，将store引入到项目工程中

      修改`src/main.jsx`：

      ```
      +   import { store } from '@/store'
      +   import { Provider } from 'react-redux'
      ...
      
       ReactDOM.createRoot(document.getElementById('root')).render(
      +       <Provider store={store}>
                  <ConfigProvider locale={zhCN}>
                      <RouterProvider router={globalRouters} />
                  </ConfigProvider>
      +       </Provider>
          )
      
      
      ```

      其实就是用react-redux提供的Provider带上store把项目包起来，这样整个项目就可以随时随地访问store了。

      

   6. ### store的使用：实现亮色/暗色主题切换

      1. 由于主题换肤的交互操作位于Header组件，所以让Header组件对接store总库。

         修改`src/components/header/index.jsx`：

         ```tsx
             import { Button, Card, Menu } from 'antd'
         +   // 新加入“太阳”图标
         M   import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
             import { HomeOutlined, UserOutlined } from '@ant-design/icons'
             import { useLocation, useNavigate } from 'react-router-dom'
         +   // 引入Redux
         +   import { useSelector, useDispatch } from 'react-redux'
         +   // 从主题换肤store分库引入setDark方法
         +   import { setDark } from '@/store/slices/theme'
             import './header.styl'
             
             function Header(props) {
             
                 // 创建路由定位钩子
                 const location = useLocation()
                 // 创建路由钩子
                 const navigate = useNavigate()
                 
                 // 定义导航栏
                 const menuItems = [
                     ...（略）
                 ]
             
         +       // 获取redux派发钩子
         +       const dispatch = useDispatch()
             
         +       // 获取store中的主题配置
         +       const theme = useSelector((state) => state.theme)
             
                 // 接收来自父组件的数据
                 const { title, info } = props
             
                 // 如果info存在，则执行info()
                 info && info()
             
                 return (
                     <Card className="M-header">
                         <div className="header-wrapper">
                             <div className="logo-con">Header:{title}</div>
                             <div className="menu-con">
                                 <Menu
                                     mode="horizontal"
                                     selectedKeys={location.pathname}
                                     items={menuItems}
                                 />
                             </div>
                             <div className="opt-con">
         -                       <Button icon={<MoonOutlined />} shape="circle"></Button>
         +                       {theme.dark ? (
         +                           <Button
         +                               icon={<SunOutlined />}
         +                               shape="circle"
         +                               onClick={() => {
         +                                   dispatch(setDark(false))
         +                               }}
         +                           ></Button>
         +                       ) : (
         +                           <Button
         +                               icon={<MoonOutlined />}
         +                               shape="circle"
         +                               onClick={() => {
         +                                   dispatch(setDark(true))
         +                               }}
         +                           ></Button>
         +                       )}
                                 <Button icon={<ThemeOutlined />} shape="circle"></Button>
                             </div>
                         </div>
                     </Card>
                 )
             }
             
             export default Header
         
         ```
   
         必要的注释已经写好了。useDispatch和useSelector可以通俗理解为：
   
         - useDispatch用于写入store库，调用store里定义的方法。
         - useSelector用于读取store库里的变量值。
   
         以上代码中的theme就是从总库中获取的theme分库。theme.dark就是从theme分库中读取的dark值，从而判断当前是亮色还是暗色主题，进而确定是显示“月亮”按钮还是“太阳”按钮。
   
         现在运行起来，点击Header里的“月亮/太阳”图标，可以进行切换了。但是并没有看到暗色主题效果？这是因为还没有把主题配置传递给Antd。
   
         在本教程的需求中，Login页面不参与主题换肤，而其他页面参与主题换肤。因此，只需要在Entry页面通过useSelector将当前store里的主题配置读取出来，再应用给Antd即可。
   
         修改`src/entry/index.jsx`：
   
         ```tsx
         import { Outlet } from 'react-router-dom'
             import Header from '@/components/header'
         +   import { useSelector } from 'react-redux'
         +   import { ConfigProvider, theme } from 'antd'
             import './entry.styl'
             
         +   // darkAlgorithm为暗色主题，defaultAlgorithm为亮色（默认）主题
         +   // 注意这里的theme是来自于Ant Design的，而不是store
         +   const { darkAlgorithm, defaultAlgorithm } = theme
             
             function Entry() {
             
         +       // 获取store中的主题配置
         +       const globalTheme = useSelector((state) => state.theme)
             
         +       // Ant Design主题变量
         +       let antdTheme = {
         +           // 亮色/暗色配置
         +           algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
         +       }
             
                 return (
         +           <ConfigProvider theme={antdTheme}>
                         <div className="M-entry">
                             <Header />
                             <div className="main-container">
                                 <Outlet />
                             </div>
                         </div>
         +           </ConfigProvider>
                 )
             }
             
             export default Entry
         
         ```
   
         必要的注释已经写好了。主要逻辑就是从store里读取当前的主题配置，然后通过Antd提供的ConfigProvider带着antdTheme，把Entry页面包起来
   
      
   
   7. 非Ant Design组件的主题换肤
   
      细心的同学可能发现了，上一章节中的主题切换，页面中的`“Home Page”`文字始终是白色，并没有跟随换肤。这是因为它并没有包裹在Antd的组件中。而Header组件能够换肤是因为其外层用了Antd的`<Card>`组件。所以在开发过程中，建议尽量使用Antd组件。当然，很可能会遇到自行开发的组件也要换肤。
   
      接下来，就以`“Home Page”`文字换肤为目标，讲解下如何实现非Ant Design组件的主题换肤。
   
      实现方式就是用Ant Design提供的useToken方法将当前主题的颜色赋值给非自定义组件。
   
      修改`src/pages/home/index.jsx`：
   
      ```tsx
       import { useNavigate } from 'react-router-dom'
      M   import { Button, theme } from 'antd'
          import { goto } from '@/api'
          import './home.styl'
          
      +   const { useToken } = theme
          
          function Home() {
      
              // 创建路由钩子
              const navigate = useNavigate()
              
      +       // 获取Design Token
      +       const { token } = useToken()
      
              return (
                  <div className="P-home">
      M               <h1 style={{color: token.colorText}}>Home Page</h1>
                      <div className="ipt-con">
                  ...（略）
      
      ```
   
      这里将`“Home Page”`的文字色设为了token.colorText，即当前Antd文本色，因此会跟随主题进行换肤。同理，如果想让自定义组件的背景色换肤，可以使用token.colorBgContainer；边框色换肤，可以使用token.colorBorder；使用当前Antd主题色，可以使用token.colorPrimary。
   
      以上这些token，就是Antd官网所介绍的SeedToken、MapToken、AliasToken，这些token涵盖了各种场景的颜色，大家参照官网列出的token说明挑选合适参数即可。
   
      
   
   8. store的使用：实现主题色切换
   
      在src/globalConfig.jsx里的customColorPrimarys就是留给主题色换肤的。接下来讲解下具体实现方法。为了让交互体验稍微好一点，通过Antd的Modal组件来制作主题色选择功能。
   
      1、创建主题色选择对话框组件
   
      新建`src/components/themeModal/index.jsx`：
   
      ```tsx
      import { Modal } from 'antd'
      import { useSelector, useDispatch } from 'react-redux'
      import { CheckCircleFilled } from '@ant-design/icons'
      import { setColorPrimary } from '@/store/slices/theme'
      import { globalConfig } from '@/globalConfig'
      import './themeModal.styl'
      function ThemeModal({ onClose }) {
      
          // 获取redux派发钩子
          const dispatch = useDispatch()
      
          // 获取store中的主题配置
          const theme = useSelector((state) => state.theme)
      
          return (
              <Modal
                  className="M-themeModal"
                  open={true}
                  title="主题色"
                  onCancel={() => {
                      onClose()
                  }}
                  maskClosable={false}
                  footer={null}
              >
                  <div className="colors-con">
                      {
                          // 遍历globalConfig配置的customColorPrimarys主题色
                          globalConfig.customColorPrimarys &&
                              globalConfig.customColorPrimarys.map((item, index) => {
                                  return (
                                      <div
                                          className="theme-color"
                                          style={{ backgroundColor: item }}
                                          key={index}
                                          onClick={() => {
                                              dispatch(setColorPrimary(item))
                                          }}
                                      >
                                          {
                                              // 如果是当前主题色，则显示“对勾”图标
                                              theme.colorPrimary === item && (
                                                  <CheckCircleFilled
                                                      style={{
                                                          fontSize: 28,
                                                          color: '#fff',
                                                      }}
                                                  />
                                              )
                                          }
                                      </div>
                                  )
                              })
                      }
                  </div>
              </Modal>
          )
      }
      export default ThemeModal
      
      ```
   
      补充相应的样式，新建`src/components/themeModal/themeModal.styl`：
   
      ```css
      .M-themeModal
          .colors-con
              margin-top: 20px
              display: grid
              grid-template-columns: repeat(6, 1fr)
              row-gap: 10px
          .theme-color
              margin: 0 auto
              width: 60px
              height: 60px
              line-height: 68px
              border-radius: 6px
              cursor: pointer
              text-align: center
      ```
   
      
   
      2、引入主题色选择对话框组件
   
      修改`src/components/header/index.jsx`：
   
      ```tsx
      +   import { useState } from 'react'
          import { Button, Card, Menu } from 'antd'
          // 新加入“太阳”图标
          import { MoonOutlined, ThemeOutlined, SunOutlined } from '@/components/extraIcons'
          import { HomeOutlined, UserOutlined } from '@ant-design/icons'
          import { useLocation, useNavigate } from 'react-router-dom'
          // 引入Redux
          import { useSelector, useDispatch } from 'react-redux'
          // 从主题换肤store分库引入setDark方法
          import { setDark } from '@/store/slices/theme'
      +   import ThemeModal from '@/components/themeModal'
      +   import { globalConfig } from '@/globalConfig'
          import './header.styl'
          
          function Header(props) {
      
              ...（略）
      
      +       // 是否显示主题色选择对话框
      +       const [showThemeModal, setShowThemeModal] = useState(false)
          
              return (
                  <Card className="M-header">
                      <div className="header-wrapper">
                          <div className="logo-con">Header:{title}</div>
                          <div className="menu-con">
                              <Menu
                                  mode="horizontal"
                                  selectedKeys={location.pathname}
                                  items={menuItems}
                              />
                          </div>
                          <div className="opt-con">
                              ...（略）
      -                       <Button icon={<ThemeOutlined />} shape="circle"></Button>
      +                       {
      +                           // 当globalConfig配置了主题色，并且数量大于0时，才显示主题色换肤按钮
      +                           globalConfig.customColorPrimarys &&
      +                               globalConfig.customColorPrimarys.length > 0 && (
      +                                   <Button
      +                                       icon={<ThemeOutlined />}
      +                                       shape="circle"
      +                                       onClick={() => {
      +                                           setShowThemeModal(true)
      +                                       }}
      +                                   ></Button>
      +                               )
      +                       }
                          </div>
                      </div>
      +               {
      +                   // 显示主题色换肤对话框
      +                   showThemeModal && (
      +                       <ThemeModal
      +                           onClose={() => {
      +                               setShowThemeModal(false)
      +                           }}
      +                       />
      +                   )
      +               }
                  </Card>
              )
          }
          
          export default Header
      ```
   
      但现在点击颜色后还不能生效，这是因为还没有把主题色传递给Antd。
   
      
   
      3、将主题色配置应用于项目
   
      修改`src/pages/entry/index.jsx`：
   
      ```tsx
          ...（略）
          
          function Entry() {
              ...（略）
          
              // Ant Design主题变量
              let antdTheme = {
                  // 亮色/暗色配置
                  algorithm: globalTheme.dark ? darkAlgorithm : defaultAlgorithm,
              }
          
      +       // 应用自定义主题色
      +       if (globalTheme.colorPrimary) {
      +           antdTheme.token = {
      +               colorPrimary: globalTheme.colorPrimary,
      +           }
      +       }
          
              return (
                  ...（略）
      
      ```
   
      现在点击主题色对话框里的颜色就会立即生效了，刷新页面或者重新打开网页也会保留上次的主题色。
   
      
   
   9. 安装Redux调试浏览器插件
   
   10.  基于axios封装公用API库
   
       1. 安装axios
   
   11. 
   
       
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   1. ### 原理就是创建总库，把各个分库都汇总起来。注释已写明，不再赘述。
   
      
   
      ​	
   
      ##### 
   
      
   
      
   
      

