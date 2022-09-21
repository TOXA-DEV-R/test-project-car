/** @format */

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Models from "./page/models";
import ModelTypes from "./page/model-types";
import ModelType from "./page/model-type";
import LoginModal from "./components/auth/login-modal";
import { useDispatch, useSelector } from "react-redux";
import "./sass/index.scss";
import AuthModal from "./components/auth/auth-modal";
import { useEffect, useState } from "react";
import { initialUserData } from "./features/user-data-slice";
import Home from "./page/home";

const App = () => {
  const {
    loginModalSlice,
    userDataSlice: { token },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      const user = JSON.parse(window.localStorage.getItem("user"));
      const token = window.localStorage.getItem("token");
      dispatch(initialUserData({ user, token }));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/model-types/:id" element={<ModelTypes />} />
        <Route path="/models/model-type/:id" element={<ModelType />} />
      </Routes>
      {loginModalSlice.isOpen && token ? <AuthModal /> : <></>}
      {loginModalSlice.isOpen && !token ? <LoginModal /> : <></>}
    </>
  );
};

export default App;
