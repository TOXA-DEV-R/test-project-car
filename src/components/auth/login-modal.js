/** @format */

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginModalClose } from "../../features/login-modal-slice";
import { initialUserData } from "../../features/user-data-slice";

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const submitedHandle = async (values) => {
    const data = {
      phoneNumber: values.tel,
      password: values.pas,
    };

    try {
      const response = await axios.post(
        "https://cartestwebapp.herokuapp.com/employee/login",
        data
      );

      if (response.status === 200) {
        const user = response.data?.data;
        const token = response.data?.data?.token;

        dispatch(initialUserData({ user, token }));

        window.localStorage.setItem("user", JSON.stringify(user));
        window.localStorage.setItem("token", token);

        dispatch(loginModalClose());
        reset({
          tel: "",
          pas: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginModal">
      <form
        className="loginModal__wrap"
        onSubmit={handleSubmit(submitedHandle)}
      >
        <h3 className="loginModal__title">Log in</h3>
        <div className="loginModal__inputs">
          <input
            type="tel"
            placeholder="Call Number"
            required
            className="loginModal__input"
            value="+998993466789"
            {...register("tel")}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="loginModal__input"
            value="student"
            {...register("pas")}
          />
        </div>
        <button type="submit" className="loginModal__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
