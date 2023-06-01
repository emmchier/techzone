import React, { useState } from "react";

import ProductList from "../product-list";
import FilterFooter from "./filter-footer";
import FilterHeader from "./filter-header";

const Filter = () => {
  const [filteredList, setFilteredList] = useState<any>([]);

  return (
    <>
      <FilterHeader
        filteredList={filteredList}
        setFilteredList={setFilteredList}
      />
      <ProductList list={filteredList} />
      <FilterFooter />
    </>
  );
};

export default Filter;
