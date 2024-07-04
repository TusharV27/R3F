import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestForm from "./Components/GuestForm";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";

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
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
