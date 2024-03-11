import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import "./navbar/NavbarDashboard.css";

const Dashboard3 = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.SubMenu
        key="pendaftaran"
        icon={<BarsOutlined />}
        title="Pendaftaran"
      >
        <Menu.Item key="status">Pendaftaran</Menu.Item>
        <Menu.Item key="status2">Mendaftarkan Anak</Menu.Item>
        <Menu.Item key="status3">Cek Status Pendaftaran</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="pembayaran" icon={<PayCircleOutlined />}>
        Pembayaran
      </Menu.Item>
      <Menu.Item key="dokumen" icon={<HomeOutlined />}>
        Kumpul Dokumen
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Pengaturan
      </Menu.Item>
    </Menu>
  );
};

export default Dashboard3;
