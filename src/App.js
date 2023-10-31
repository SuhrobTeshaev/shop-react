import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import UserForm from "./components/User/UserForm";
import AppRoutes from "./components/Routes/Routes";

import { getCategories } from "./features/Categories/CategoriesSlice";
import { getProducts } from "./features/Product/ProductSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
