import React from "react";
import { ColContent, GridCol } from "./styles";

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColI {
  children: React.ReactNode;
  xs?: Column;
  sm?: Column;
  md?: Column;
  lg?: Column;
  xlg?: Column;
}

const Col = ({
  children,
  xs = 12,
  sm = 12,
  md = 12,
  lg = 12,
  xlg = 12,
}: ColI) => (
  <GridCol xs={xs} sm={sm} md={md} lg={lg} xlg={xlg}>
    <ColContent>{children}</ColContent>
  </GridCol>
);

export default Col;
