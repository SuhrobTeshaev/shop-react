import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ROUTES } from "../../utils/Routes";

import Product from "./Product";
import Products from "./Products";

import {useGetProductQuery} from './../../features/api/apiSlice';
import {getRelatedProduct} from './../../features/Product/ProductSlice';

const SingleProduct = () => {

  const dispatch = useDispatch();
  const { id } = useParams;
  const navigate = useNavigate();

  const { list, related } = useSelector(({ products }) => products);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isLoading && !isFetching && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;
    
    dispatch(getRelatedProduct(data.category.id));
  }, [data, dispatch, list.length]);

  return !data ? (
    <section className='preloader'>Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
};

export default SingleProduct;
