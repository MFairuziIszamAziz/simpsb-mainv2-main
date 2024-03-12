import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import NavbarDashboard from "./components/pages/dashboard/navbar/NavbarDashboard";
//

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes with Navbar */}
        <Route
          path="*"
          element={
            <>
              <NavbarComponent />
              <Routes>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="products" element={<Product />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </>
          }
        />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/superadmin/*" element={<SuperAdminDashboard />} />
        <Route path="/walimurid/*" element={<WaliMuridDashboard />} />
      </Routes>
    </Router>
  );
}

function AdminDashboard() {
  return (
    <>
      <NavbarDashboard role="admin" />
    </>
  );
}

function SuperAdminDashboard() {
  return (
    <>
      <NavbarDashboard role="superadmin" />
    </>
  );
}

function WaliMuridDashboard() {
  return (
    <>
      <NavbarDashboard role="walimurid" />
    </>
  );
}

export default App;
