import React from "react";

import Col from "../../atoms/grid/col";
import Row from "../../atoms/grid/row";
import ProductCard from "../../molecules/cards/product-card";

const SkeletonList = ({ num }) => (
  <Row gap={5}>
    {[...new Array(num)].map((n, key) => (
      <Col xs={12} sm={12} md={4} lg={3} xlg={3} key={key}>
        <ProductCard isSkeleton={true} />
      </Col>
    ))}
  </Row>
);

export default SkeletonList;
