import { useEffect, useMemo, useState } from "react";

import { getProducts } from "../api/service";
import { ProductContext } from "../context";
import { Product } from "../interfaces";

interface ProductProviderI {
  children: JSX.Element | JSX.Element[];
}

const ProductProvider = ({ children }: ProductProviderI) => {
  const [products, setProducts] = useState<Product[]>([]);

  const categories = useMemo<string[]>(() => {
    const categoryList = products.map((category) => category.category);
    categoryList.unshift("All Products");
    return [...new Set(categoryList)];
  }, [products]);

  useEffect(() => {
    getProducts().then((product) => {
      setProducts(product);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
