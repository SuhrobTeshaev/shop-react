import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { createUsers } from '../../features/user/UserSlice';

import s from  './../../styles/User.module.css';

 const UserSignupForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUsers(values));
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

    <div className={s.title}>Sign Up</div>

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
          type="name"
          placeholder="Your name"
          name="name"
          value={values.name}
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

      <div className={s.group}>
        <input
          type="avatar"
          placeholder="Your avatar"
          name="avatar"
          value={values.avatar}
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </div>

      <div
        className={s.link}
        onClick={() => toggleCurrentFormType("login")}
      >
        I already have an account
      </div>

      <button type="submit" className={s.submit}>
        Create an account
      </button>
    </form>
  </div>
  )
}

export default UserSignupForm;
