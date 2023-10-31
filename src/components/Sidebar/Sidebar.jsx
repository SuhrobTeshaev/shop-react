import React from "react";
import s from "./../../styles/Sidebar.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  return (
    <section className={s.sidebar}>
      <div className={s.title}>CATEGORIES</div>
      <nav>
        <ul className={s.menu}>
          {list.map(({ id, name }) => {
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${s.link} ${isActive ? s.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>;
          })}
        </ul>
      </nav>
      <div className={s.footer}>
        <a href="/help" target="_blank" className={s.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={s.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Contitions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
