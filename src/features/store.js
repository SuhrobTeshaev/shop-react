import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import categoriesSlice from './Categories/CategoriesSlice'
import productSlice from './Product/ProductSlice'
import userSlice from './user/UserSlice'
import { apiSlice } from './api/apiSlice'
const store = configureStore({
  reducer:{
    categories:categoriesSlice,
    products:productSlice,
    user:userSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
   
  },
   middleware:(getMiddleware)=>getMiddleware().concat(apiSlice.middleware),
   devTools:true,
})

export default store