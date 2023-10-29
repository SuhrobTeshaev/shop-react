import React from "react";
import s from "./../../styles/Footer.module.css";
import { Link } from "react-router-dom";
import LOGO from "./../../images/logo.svg";
const Footer = () => {
  return (
    <section className={s.footer}>
      <div className={s.logo}>
        <Link>
          Home
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>
      <div className={s.right}>
        Developed by{""}
        <a href="ссылка на гитхаб" target="_blank" rel="norefferer">
          Suhrob
        </a>
      </div>
      <div className={s.social}>
        <a href="ссылка на фейсбук" target="_blank" rel="norefferer">
          <svg className="icon">иконка</svg>
        </a>
        <a href="ссылка на инстаграм" target="_blank" rel="norefferer">
          <svg className="icon">иконка</svg>
        </a>
        <a href="ссылка на гитхаб" target="_blank" rel="norefferer">
          <svg className="icon">иконка</svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
