import React from "react";
import { Link } from "react-router-dom"

function ViewMore() {
  return (
    <div className="flex justify-center mt-8 mb-7">
      <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View more
      </Link>
    </div>
  );
}

export default ViewMore;
