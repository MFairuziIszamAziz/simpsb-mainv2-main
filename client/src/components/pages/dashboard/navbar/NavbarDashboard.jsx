import React, { useState } from "react";
import { Button, Collapse, Layout, theme } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./NavbarDashboard.css";
import Logo from "./Logo";
import Dashboard1 from "../admin";
import Dashboard2 from "../superadmin";
import Dashboard3 from "../walimurid";
import ToogleThemeButton from "./ToogleTheme";

const { Header, Sider } = Layout;

function NavbarDashboard({ role }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toogleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleLogout = () => {
    // Logika logout Anda di sini
    console.log("Logout clicked");
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let dashboardComponent;
  switch (role) {
    case "admin":
      dashboardComponent = <Dashboard1 darkTheme={darkTheme} />;
      break;
    case "superadmin":
      dashboardComponent = <Dashboard2 darkTheme={darkTheme} />;
      break;
    case "walimurid":
      dashboardComponent = <Dashboard3 darkTheme={darkTheme} />;
      break;
    default:
      dashboardComponent = null;
  }

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo />
        {dashboardComponent}
        <ToogleThemeButton darkTheme={darkTheme} toogleTheme={toogleTheme} />
        <div className="logout-button">
          <Button onClick={handleLogout}>
            <PoweroffOutlined />
          </Button>
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toogle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
      </Layout>
    </Layout>
  );
}

export default NavbarDashboard;
