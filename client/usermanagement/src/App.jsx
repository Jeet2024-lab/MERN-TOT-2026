import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import ViewUser from "./components/ViewUser";
import Register from "./components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/viewuser" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
