import { ReactNode } from "react";
import { Button, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveMenu = (path: string) => {
    return path === location.pathname
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', columnGap: 10, marginTop: 10, marginBottom: 10 }}>
            <Typography.Title level={4} style={{ cursor: 'pointer', margin: 0, fontWeight: isActiveMenu('/') ? 'bold' : 'initial' }} onClick={() => navigate('/')}>
              Users
            </Typography.Title>
            <Typography.Title level={4} style={{ cursor: 'pointer', margin: 0, fontWeight: isActiveMenu('/blog') ? 'blog' : 'initial' }} onClick={() => navigate('/blog')}>
              Blog
            </Typography.Title>
          </div>
          <Button type="primary" onClick={() => navigate('/add')}>Add</Button>
        </div>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;