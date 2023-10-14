import { Button, Card, Menu } from 'antd'
import { MoonOutlined, ThemeOutlined } from '@/components/extraIcons'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './header.styl'


function Header() {
  // 创建路由定位钩子
  const location = useLocation()

  // 创建路由钩子
  const navigate = useNavigate()

  // 定义导航栏
  const menuItems = [
    {
      // 导航显示的名称
      label: 'Home',
      // 导航唯一标识，为便于当前态的显示，与当前路由保持一致
      key: '/home',
      // 导航的前置图标
      icon: <HomeOutlined />,
      // 点击跳转行为
      onClick: () => {
        navigate('/home')
      },
    },
    {
      label: 'Account',
      key: '/account',
      icon: <UserOutlined />,
      onClick: () => {
        navigate('/account')
      },
    },
  ]

  return (
    <Card className="M-header">
      <div className="header-wrapper">
        <div className="logo-con">Header</div>
        <div className="menu-con">
          <Menu mode="horizontal" selectedKeys={[location.pathname]} items={menuItems} />
        </div>
        <div className="opt-con">
          <Button icon={<MoonOutlined />} shape="circle"></Button>
          <Button icon={<ThemeOutlined />} shape="circle"></Button>
        </div>
      </div>
    </Card>
  )
}

export default Header
