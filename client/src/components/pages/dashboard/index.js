import React from "react";
import Dashboard1 from "./admin";
import Dashboard2 from "./superadmin";
import Dashboard3 from "./walimurid";
import NavbarDashboard from "./navbar/NavbarDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Router>
        <NavbarDashboard />
        <Routes>
          <Route path="/admin" element={<Dashboard1 />} />;
          <Route path="/superadmin" element={<Dashboard2 />} />;
          <Route path="/walimurid" element={<Dashboard3 />} />;
        </Routes>
      </Router>
    </>
  );
}

export default Dashboard;
