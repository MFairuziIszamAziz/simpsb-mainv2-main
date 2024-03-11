import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Product from "./components/pages/Product";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
// import Dashboard1 from "./components/pages/dashboard/admin";
// import Dashboard2 from "./components/pages/dashboard/superadmin";
// import Dashboard3 from "./components/pages/dashboard/walimurid";
import NavbarDashboard from "./components/pages/dashboard/navbar/NavbarDashboard";

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

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />

        {/* Superadmin Routes */}
        <Route path="/superadmin/*" element={<SuperAdminDashboard />} />

        {/* Walimurid Routes */}
        <Route path="/walimurid/*" element={<WalimuridDashboard />} />
      </Routes>
    </Router>
  );
}

function AdminDashboard() {
  return (
    <>
      <NavbarDashboard />
    </>
  );
}

function SuperAdminDashboard() {
  return (
    <>
      <NavbarDashboard />
    </>
  );
}

function WalimuridDashboard() {
  return (
    <>
      <NavbarDashboard />
    </>
  );
}

export default App;
