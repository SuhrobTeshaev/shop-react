import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {updateUser} from './../../features/user/UserSlice';

import s from "./../../styles/Profile.module.css";


const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;
    
    dispatch(updateUser(values));
  };

  return (
    <section className={s.profile}>
      {currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={s.form} >
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
          <button type="submit" className={s.submit} onSubmit={handleSubmit}>
            Update
          </button>
        </form>
      )}
    </section>
  );
};

export default Profile;
