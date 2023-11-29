import { ReactNode } from "react";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Users</h2>
          <Button type="primary" onClick={() => navigate('/add')}>Add</Button>
        </div>
        {/* <header className="tabs">
          <div onClick={() => navigate('/')} className={`tab ${location.pathname === '/' ? "active" : ""}`}>List</div>
          <div onClick={() => navigate('/add')} className={`tab ${location.pathname === '/add' ? "active" : ""}`}>Add</div>
        </header> */}
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;