import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);

  console.log(products);

  const cards = products.map((product) => {
    const image =
      product.image_urls && product.image_urls.length > 0
        ? product.image_urls[0]
        : null;

    console.log(image);

    return (
      <ProductCard
        key={product.id}
        title={product.name}
        price={product.price}
        image={image ? `http://127.0.0.1:5000${image}` : null}
      />
    );
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="mt-8">
      <h2 className="w-full text-center text-3xl text-pink-500 font-bold">
        Our Products
      </h2>
      <section x-data="xData()" className="py-10 px-4 md:px-12">
        <div className="flex flex-wrap justify-center gap-8 text-neutral-600 sm:flex-row">
          {cards}
        </div>
      </section>
    </div>
  );
}

export default Products;
