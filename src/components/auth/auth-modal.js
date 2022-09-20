/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginModalClose } from "../../features/login-modal-slice";
import { cleanUserData } from "../../features/user-data-slice";

const AuthModal = () => {
  const { user } = useSelector((state) => state.userDataSlice);

  const dispatch = useDispatch();

  const cleanData = () => {
    dispatch(loginModalClose());
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    dispatch(cleanUserData());
  };
  return (
    <div className="authModal">
      <div className="authModal__wrap">
        <h3 className="authModal__title">{user?.fullName}</h3>
        <button className="authModal__btn" onClick={cleanData}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
