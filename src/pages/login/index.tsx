import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import imgLogo from './logo.svg'
import './login.styl'

function Login() {
  const navigate = useNavigate()
  const back = () => {
    navigate('/home')
  }
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
        <Button type="primary" block={true} onClick={back}>
          登录
        </Button>
      </div>
    </div>
  )
}

export default Login