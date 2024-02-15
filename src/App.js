import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerify from "./pages/EmailVerify";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
