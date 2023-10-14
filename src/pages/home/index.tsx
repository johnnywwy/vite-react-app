import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import './home.styl'
import { goto } from '@/api'

function Home() {
  const navigate = useNavigate()
  const back = () => {
    navigate('/login')
  }
  return (
    <div className="P-home">
      <h1>Home Page</h1>
      <div className="ipt-con">
        <Button onClick={() => { goto('/login') }}>组件外跳转</Button>
      </div>
      <div className="ipt-con">
        <Button type="primary" onClick={back}>返回登录</Button>
      </div>
    </div>
  )
}

export default Home