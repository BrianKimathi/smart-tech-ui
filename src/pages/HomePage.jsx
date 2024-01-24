import React, { useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Features from "../components/Features";
import ServiceCards from "../components/ServiceCard";
import Footer from "../components/Footer";
import ViewMore from "../components/ViewMore";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import ViewMore from '../components/ViewMore'

function HomePage() {
  // Assuming you have a useSelector hook to get products from the Redux store
  // Adjust this based on your actual Redux store structure
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  })

  return (
    <div>
      <Header />
      <Products products={products} />

      <ViewMore />
      <hr className="m-10" />
      <Products title = "In Stock" />
      <ViewMore/>
      <Features />
      <ServiceCards />
      <Footer />
    </div>
  );
}

export default HomePage;
