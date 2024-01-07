import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Users/Forms/Login";
import RegisterForm from "./components/Users/Forms/RegisterForm";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

import CustomerProfile from "./components/Users/Profile/CustomerProfile";

import AuthRoute from "./components/AuthRoute/AuthRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/customer-profile"
          element={
            <AuthRoute>
              <CustomerProfile />
            </AuthRoute>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
