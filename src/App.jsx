import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestForm from "./Components/GuestForm";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<GuestForm />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Dashboard />} />
            <Route path="/majama" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
