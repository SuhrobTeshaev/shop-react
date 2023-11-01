import React from 'react'
import { Routes,Route } from 'react-router-dom'

import { ROUTES } from '../../utils/Routes';

import Profile from './../Profile/Profile';
import SingleProduct from './../Product/SingleProduct';
import SingleCategory from './../Categories/SingleCategory';
import Home from './../Home/Home';
import Cart from './../Cart/Cart';
import Favourites from '../Favourites/Favourites';

const AppRoutes = () => (
  
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.FAVOURITE} element={<Favourites/>}/>
        <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
    </Routes>

);

export default AppRoutes;