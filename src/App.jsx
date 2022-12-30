import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
