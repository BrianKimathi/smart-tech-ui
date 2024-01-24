import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, getProducts } from "../store/productSlice";
import ParentComponent from "../components/Parent";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

function ProductsPage() {
  const dispatch = useDispatch();
  const { pages, currentPage } = useSelector((state) => state.products);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div>
      {/* <SearchBar /> */}
      <ParentComponent />
      <Products title = "Our Products" />
      <Pagination
        currentPage={currentPage}
        totalPages={pages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default ProductsPage;
