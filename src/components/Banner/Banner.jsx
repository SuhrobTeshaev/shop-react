import React from "react";
import s from "./../../styles/Home.module.css";
const Banner = () => {
  return (
    <section className={s.banner}>
      <div className={s.left}>
        <p className={s.content}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={s.more}>See more</button>
      </div>
      <div className={s.right} style={{ backgroundImage: `url(S{bannerImg})` }}>
        <p className={s.discount}>
          Save up to
          <span>50%</span>off
        </p>
      </div>
    </section>
  );
};
export default Banner;
