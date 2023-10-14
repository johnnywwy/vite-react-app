import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import './account.styl'

function Account() {
  const navigate = useNavigate()
  const back = () => {
    navigate('/login')
  }
  return (
    <div className="P-account">
      <h1>Account Page</h1>
      <div className="ipt-con">
        <Button type="primary" onClick={back}>返回登录</Button>
      </div>
    </div >
  )
}

export default Account
