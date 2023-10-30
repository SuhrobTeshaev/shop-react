import React from "react";
import s from "./../../styles/Category.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Category = () => {
  const {id} = useParams;
  const {list}  = useSelector(({categories})=>categories);
  
  return (
    <section className={wrapper}>
      <h2>cat.name</h2>
      <form className={s.filters} onSubmit={() => {}}>
        <div className={s.filter}>
          <input
            type="text"
            name="title"
            onChange={() => {}}
            placeholder="Product name"
            value={""}
          />
        </div>
        <div className={s.filter}>
          <input
            type="text"
            name="title"
            onChange={() => {}}
            placeholder="Product name"
            value={""}
          />
        </div>
        <div className={s.filter}>
          <input
            type="text"
            name="title"
            onChange={() => {}}
            placeholder="Product name"
            value={""}
          />
        </div>
        <button type="submit" hidden />
      </form>
    </section>
  );
};

export default Category;
