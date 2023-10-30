import React from "react";
import {Link} from "react-router-dom";
import s from "./../../styles/Header.module.css";
import LOGO from "./../../images/logo.svg";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
         <Link to='/'>
          
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
          <svg>иконка</svg>
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
         <Link className={s.favourites} to={'/'}>
          <svg>иконка на феворитс</svg>
        </Link> 
         <Link className={s.сфке} to={'/'} >
          <svg>иконка на корзину</svg>
          логика для цифра под иконку корзины
          <span className={s.count}>cart.length</span>
        </Link>  
      </div>
    </div>
  );
};

export default Header;
