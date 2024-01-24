import React from "react";
import ProductDetail from "../components/ProductDetail";
import Tv from "../images/tvs.png";
import Appliances from "../images/appliances.png";
import HeadPhones from "../images/headphones.png";
import Products from "../components/Products";

const productImages = [
  Tv,
  Appliances,
  HeadPhones,
  // Add more image URLs as needed
];

const productDetails = {
  name: "Product Name",
  description: "Product description goes here.",
  features: ["Feature 1", "Feature 2", "Feature 3"],
};

function ProductInfoPage() {
  return (
    <div className="container mx-auto mt-8">
      <ProductDetail
        images={productImages}
        name={productDetails.name}
        description={productDetails.description}
        features={productDetails.features}
      />

      <hr className="mt-4"/>
  

      <Products title= "Related Products"/>
    </div>
  );
}

export default ProductInfoPage;
