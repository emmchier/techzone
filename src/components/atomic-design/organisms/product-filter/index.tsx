import React, { useContext } from "react";
import { ProductContext } from "../../../../context";
import { ProductType } from "../../../../interfaces";
import ProductList from "../product-list";

const ProductFilter = () => {
  const { products } = useContext(ProductContext) as ProductType;

  return <ProductList list={products} />;
};

export default ProductFilter;
