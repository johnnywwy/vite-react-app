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

   

   

3. ### 项目架构搭建







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



##### 设置dev环境的Server端口号

均为默认





---

1. ### 项目架构搭建











