import React, { useState } from "react";
import { Button, Collapse, Layout, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./NavbarDashboard.css";
import Logo from "./Logo";
import Dashboard1 from "../admin";
import Dashboard2 from "../superadmin";
import Dashboard3 from "../walimurid";
import ToogleThemeButton from "./ToogleTheme";

const { Header, Sider } = Layout;

function NavbarDashboard() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toogleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        <Dashboard3 darkTheme={darkTheme} />
        <ToogleThemeButton darkTheme={darkTheme} toogleTheme={toogleTheme} />
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
