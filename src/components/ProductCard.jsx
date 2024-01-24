import React from "react";
import TV from "../images/tv.png";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="group my-4 flex w-full max-w-xs sm:w-4/5 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative mx-3 mt-3 flex items-center justify-center h-60 overflow-hidden rounded-xl"
        to="#">
        <img
          className="object-contain"
          style={{ height: "180px", width: "130px" }}
          src={props.image}
          alt="product image"
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {props.title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              Ksh. {props.price}
            </span>
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <Link to='/product_detail'
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
