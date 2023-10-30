import React from "react";
import { Link } from "react-router-dom";
import s from "./../../styles/Header.module.css";
import LOGO from "./../../images/logo.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link to="/">
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.user}>
          <div
            className={s.avatar}
            style={{ backgroundImage: `url(${"values.avatar"})` }}
          >
            <div className={s.username}>values.name</div>
          </div>
        </div>
      </div>
      <form className={s.form}>
        <div className={s.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className={s.input}>
          <input
            type="search"
            name="search"
            placeholder="Search for anything..."
            autoComplete="off"
            onChange={() => {}}
            value={"searchValue"}
          />
        </div>
        дальше идет логика
      </form>
      <div className={s.account}>
        <Link className={s.favourites} to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </Link>
        <Link className={s.cart} to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-basket2-fill"
            viewBox="0 0 16 16"
          >
            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
          </svg>
          <span className={s.count}>cart.length</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
