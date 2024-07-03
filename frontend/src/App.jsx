import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from "react";
import './App.css'

import { UserContext } from "./providers/UserProvider";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Productos from './pages/Productos';
import Cuenta from './pages/Cuenta';
import ProductDetails from './components/productos/ProductDetails';

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
          <Route path="/home" element={token ? <Home /> : <Navigate to="/home" />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/privada" element={token ? <Cuenta to="/" /> : <Home />} />
        </Routes>
      </div>
  );
};


export default App;
