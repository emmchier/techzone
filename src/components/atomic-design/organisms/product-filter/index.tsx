import React, { useContext, useMemo, useState } from "react";
import { ProductContext } from "../../../../context";
import { ProductType } from "../../../../interfaces";
import Select from "../../molecules/select";
import ProductList from "../product-list";

const options = [
  {
    id: 0,
    text: "",
  },
  {
    id: 1,
    text: "MVP Development",
  },
  {
    id: 2,
    text: "Team Augmentation",
  },
  {
    id: 3,
    text: "Consulting",
  },
  {
    id: 4,
    text: "Other",
  },
];

const ProductFilter = () => {
  const { products } = useContext(ProductContext) as ProductType;
  const [categories, setCategories] = useState([]);

  const getCategories = useMemo(() => {
    const tags = products.reduce((acc, cat) => {
      return [...acc, ...cat.category];
    }, []);
    return [...new Set(tags)];
  }, [products]);

  console.log(getCategories);

  return (
    <>
      <Select
        options={options}
        inputName="interest"
        name="interest"
        value="interest"
        // onChange={handleChange}
        label="I’m interested in..."
      />
      <ProductList list={products} />
    </>
  );
};

export default ProductFilter;
