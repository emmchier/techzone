import React, { useState } from "react";

import { Product } from "../../../../interfaces";
import ProductList from "../product-list";
import FilterFooter from "./filter-footer";
import FilterHeader from "./filter-header";

const Filter = () => {
  const [filteredList, setFilteredList] = useState<Product[]>([]);

  const productPerPage = 16;
  // const limitedList = products.splice(0, productPerPage);

  // const productPerPage = 16;
  // const limitedList = products.splice(0, productPerPage);

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
