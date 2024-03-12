import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import "./navbar/NavbarDashboard.css";
import Pembayaran from "../pembayaran/pembayaran";
import Pengaturan from "../pengaturan/pengaturan";
import LihatDokumen from "../Dokumen/VerifikasiDokumen";

const Dashboard1 = ({ darkTheme }) => {
  return (
    <>
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
          <Menu.Item key="status">Status Pendaftaran</Menu.Item>
          <Menu.Item key="status2">Lorem ipsum</Menu.Item>
          <Menu.Item key="status3">Dolor ipsum</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="pembayaran" icon={<PayCircleOutlined />}>
          <Link to="/admin/pembayaran">Pembayaran</Link>
        </Menu.Item>
        <Menu.Item key="dokumen" icon={<HomeOutlined />}>
          <Link to="/admin/dokumen">Verifikasi Dokumen</Link>
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />}>
          <Link to="/admin/pengaturan">Pengaturan</Link>
        </Menu.Item>
      </Menu>
      <Routes>
        <Route path="/admin/pembayaran" element={<Pembayaran />} />
        <Route path="/admin/pengaturan" element={<Pengaturan />} />
        <Route path="/admin/dokumen" element={<LihatDokumen />} />
      </Routes>
    </>
  );
};

export default Dashboard1;
