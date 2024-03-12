import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Pengaturan = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="User Management">
              <Menu.Item key="1">User 1</Menu.Item>
              <Menu.Item key="2">User 2</Menu.Item>
              <Menu.Item key="3">User 3</Menu.Item>
              <Menu.Item key="4">User 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<LaptopOutlined />}
              title="Device Management"
            >
              <Menu.Item key="5">Device 1</Menu.Item>
              <Menu.Item key="6">Device 2</Menu.Item>
              <Menu.Item key="7">Device 3</Menu.Item>
              <Menu.Item key="8">Device 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="Notification"
            >
              <Menu.Item key="9">Notification 1</Menu.Item>
              <Menu.Item key="10">Notification 2</Menu.Item>
              <Menu.Item key="11">Notification 3</Menu.Item>
              <Menu.Item key="12">Notification 4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Account Settings"
            >
              <Menu.Item key="13">General Settings</Menu.Item>
              <Menu.Item key="14">Privacy Settings</Menu.Item>
              <Menu.Item key="15">Security Settings</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Pengaturan;
