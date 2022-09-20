/** @format */

import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { loginModalOpen } from "../features/login-modal-slice";

const Navbar = ({ children }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.userDataSlice);

  return (
    <>
      <div className="navbar">
        <div></div>
        <div className="navbar-admin">
          <button
            className="navbar-admin__link"
            onClick={() => {
              dispatch(loginModalOpen());
            }}
          >
            <span className="navbar-admin__icon">
              <IoPersonOutline color="white" size={25} />
            </span>
            {token ? user?.fullName : "Admin o‘tish"}
          </button>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
