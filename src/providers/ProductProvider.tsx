import { useEffect, useState } from "react";

import { getProducts } from "../api/service";
import { ProductContext } from "../context";
import { Product } from "../interfaces";

interface ProductProviderI {
  children: JSX.Element | JSX.Element[];
}

const ProductProvider = ({ children }: ProductProviderI) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((product) => {
      setProducts(product);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
