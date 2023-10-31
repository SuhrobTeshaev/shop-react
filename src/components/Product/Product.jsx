import React, { useEffect, useState } from "react";
import s from "./../../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/Routes";

const SIZES = [4, 4.5, 5];
const Product = (item) => {
  const { title, price, images, description } = item;
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <section className={s.product}>
      <div className={s.images}>
        <div
          className={s.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div>
          {images.map((image, i) => (
            <div
              key={i}
              className={s.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={s.info}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.price}>{price}$</div>
        <div className={s.color}>
          <span>Color:</span>Green
        </div>
        <div className={s.sizes}>
          <span>Sizes:</span>
          <div className={s.list}>
            {SIZES.map((size) => {
              <div
                onClick={() => setCurrentSize(size)}
                className={`${s.sizes}
               ${currentSize === size ? s.active : ""}`}
                key={size}
              >
                {size}
              </div>;
            })}
          </div>
        </div>
        <p className={s.description}>{description}</p>
        <div className={s.action}>
          <button onClick={addToCart} className={s.add} disabled={!currentSize}>
            Add to cart
          </button>
          <button className={s.favourite}>Add to favourites</button>
        </div>
        <div className={s.bottom}>
          <div className={s.purchase}>33 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
