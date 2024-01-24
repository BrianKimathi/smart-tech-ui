import React from "react";
import Dropdown from "./Dropdown";
// import FilterComponent from "./FilterComponent";
import SearchBar from "./SearchBar";

const ParentComponent = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex items-center">
        <SearchBar />
      </div>

      <div className="flex items-center">
        <Dropdown />
      </div>

      <div className="flex items-center">
        <Dropdown />
      </div>
    </div>
  );
};

export default ParentComponent;
