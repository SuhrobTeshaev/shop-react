import React from "react";
import s from './../../styles/Cart.module.css';
import { useDispatch, useSelector } from "react-redux";
import {  removeItemToFavourites } from "../../features/user/UserSlice";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector(({ user }) => user);



  const removeItem = (id) => {
    dispatch(removeItemToFavourites(id));
  };

  return (
    <section className={s.cart}>
      <h2 className={s.title}>Your favourites</h2>
      {!favourites.length ? (
        <div className={s.empty}>Here is empty</div>
      ) : (
        <>
          <div className={s.list}>
            {favourites.map((item) => {
              const { title, category, images, price, id } = item;

              return (
                <div className={s.item} key={id}>
                  <div
                    className={s.images}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={s.info}>
                    <h3 className={s.name}>{title}</h3>
                    <div className={s.category}>{category.name}</div>
                  </div>

                  <div className={s.price}>{price}$</div>

                  


                  <div className={s.close} onClick={() => removeItem(item.id)}>
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
                </div>
              );
            })}
          </div>

          
        </>
      )}
    </section>
  );
};

export default Favourites;
