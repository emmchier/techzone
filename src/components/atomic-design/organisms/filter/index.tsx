import React, { useContext, useEffect, useMemo, useState } from "react";
import { ProductContext } from "../../../../context";
import { Product, ProductType } from "../../../../interfaces";
import Select from "../../molecules/select";
import ProductList from "../product-list";

const Filter = () => {
  const { products, categories } = useContext(ProductContext) as ProductType;
  const [value, setValue] = useState("All Products");
  const [filteredList, setFilteredList] = useState<Product[]>([]);

  const productPerPage = 16;
  // const limitedList = products.splice(0, productPerPage);
  useEffect(() => {
    value === "All Products" && setFilteredList(products);
  }, [products, value]);

  const handleCategoryFilter = ({ target }) => {
    setValue(target.value);
    let filtered;
    value === "All Products"
      ? (filtered = products)
      : (filtered = products.filter((product) => product.category === value));
    setFilteredList(filtered);
    // const filtered = filteredList.filter(
    //   (product) => product.category === value
    // );
    // setFilteredList(filtered);
  };

  // const productPerPage = 16;
  // const limitedList = products.splice(0, productPerPage);

  // useEffect(() => {
  //   const limitedList = products.splice(0, productPerPage);
  //   setFilteredList(limitedList);
  //   console.log(limitedList);
  // }, []);

  return (
    <>
      {/* <Select
        options={categories}
        inputName="Categories"
        name="category"
        value={value}
        onChange={handleCategoryFilter}
        label="I’m interested in..."
      /> */}
      <ProductList list={filteredList} />
    </>
  );
};

export default Filter;
