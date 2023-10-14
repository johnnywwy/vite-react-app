import { useNavigate } from 'react-router-dom'

import { Button } from 'antd'
import './home.styl'

function Home() {
  const navigate = useNavigate()
  const back = () => {
    navigate('/login')
  }
  return (
    <div className="P-home">
      <h1>Home Page</h1>
      <div className="ipt-con">
        <Button type="primary" onClick={back}>返回登录</Button>
      </div>
    </div>
  )
}

export default Home