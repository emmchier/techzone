import React, { useState } from "react";

import Col from "../../atoms/grid/col";
import Row from "../../atoms/grid/row";
import ProductCard from "../../molecules/cards/product-card";
import SkeletonList from "../skeleton-list";

const ProductList = ({ list }) => {
  return (
    <Row gap={5}>
      {list.length > 0 ? (
        list.map((product) => (
          <Col xs={12} sm={12} md={4} lg={3} xlg={3} key={product._id}>
            <ProductCard
              img={product.img.url && product.img.url}
              alt={product.name && product.name}
              name={product.name && product.name}
              category={product.category && product.category}
              isSkeleton={false}
            />
          </Col>
        ))
      ) : (
        <SkeletonList num={16} />
      )}
    </Row>
  );
};

export default ProductList;
