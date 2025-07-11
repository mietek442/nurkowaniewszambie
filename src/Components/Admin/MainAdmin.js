import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminTollBar from "./AdminTollBar";
import AdminMainProducts from "./AdminMainProducts";

function MainAdmin({ setLanguege }) {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#000",
      }}>
      <div style={{ flex: "0 0 200px" }}>
        <AdminTollBar />
      </div>
      <div style={{ flex: 1, overflowY: "auto", maxHeight: "100vh" }}>
        <Routes>
          <Route path="products" element={<AdminMainProducts />} />
          <Route path="zamowienie" element={<div></div>} />
          <Route
            path="*"
            element={<div style={{ padding: "2rem" }}>Not found</div>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default MainAdmin;
