import React, { useState } from "react";

import s from "./../../styles/User.module.css";

import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/UserSlice";

const UserLoginForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.close} onClick={closeForm}>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
      </div>

      <div className={s.title}>Log In</div>

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div className={s.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div onClick={() => toggleCurrentFormType("signup")} className={s.link}>
          Create an account
        </div>

        <button type="submit" className={s.submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
