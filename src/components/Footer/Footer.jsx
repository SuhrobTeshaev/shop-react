import React from "react";
import s from "./../../styles/Footer.module.css";
import LOGO from "./../../images/logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={s.footer}>
       <div className={s.logo}>
         <Link to={'/'}>
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
          фейсбук
        </a>
        <a href="ссылка на инстаграм" target="_blank" rel="norefferer">
          <svg className="icon">иконка</svg>
          инста
        </a>
        <a href="ссылка на гитхаб" target="_blank" rel="norefferer">
          <svg className="icon">иконка</svg>
          гитхаб
        </a>
      </div> 
      footer
    </section>
  );
};

export default Footer;
