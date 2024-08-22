import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";

function App() {
  React.useEffect(() => {
		if (!localStorage.getItem("users")) {
			localStorage.setItem("users", JSON.stringify([]));
		}
	});
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
