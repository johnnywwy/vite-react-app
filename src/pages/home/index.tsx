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