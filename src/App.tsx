import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Signin from "./pages/Signin";
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Signin /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/register" element={ <Signup /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
