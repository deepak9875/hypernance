import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import Home from "./Home";
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
