import { ReactNode } from "react";
import { Button, Typography } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import './layout.css'

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveMenu = (path: string) => {
    return path === location.pathname
  }

  return (
    <div className="layout">
      <div className="container">
        <div className="headers">
          <div className="menus">
            <Typography.Title
              level={4}
              className="menu"
              style={{ fontWeight: isActiveMenu('/') ? 'bold' : 'initial' }}
              onClick={() => navigate('/')}>
              Schedules
            </Typography.Title>
            <Typography.Title
              level={4}
              className="menu"
              style={{ fontWeight: isActiveMenu('/blog') ? 'blog' : 'initial' }}
              onClick={() => navigate('/blog')}>
              Blog
            </Typography.Title>
          </div>
          {isActiveMenu('/') && (
            <Button type="primary" onClick={() => navigate('/add')}>Add</Button>
          )}
        </div>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;