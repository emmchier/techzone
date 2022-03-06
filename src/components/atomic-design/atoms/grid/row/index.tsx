import React from "react";
import { GridList } from "./styles";

type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface RowI {
  children: React.ReactNode;
  gap?: Spacing;
}

const Row = ({ children, gap = 0 }: RowI) => (
  <GridList gap={gap}>{children}</GridList>
);

export default Row;
