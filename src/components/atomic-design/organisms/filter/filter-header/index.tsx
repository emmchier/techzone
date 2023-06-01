import React, { FC, useContext, useEffect, useState } from "react";

import { ProductContext } from "../../../../../context";
import { sortButtons } from "../../../../../domain/sort-buttons";
import { ProductType } from "../../../../../interfaces";
import Button from "../../../atoms/buttons/button";
import Select from "../../../molecules/select";
import Pager from "../../pager";
import {
  CategoryFilter,
  Content,
  Filters,
  Item,
  List,
  PagerFilter,
  SortFilter,
} from "./styles";

interface FilterHeaderProps {
  filteredList: string[];
  setFilteredList: (e: any) => any;
}

const FilterHeader: FC<FilterHeaderProps> = ({ filteredList, setFilteredList }) => {
  const { products, categories } = useContext(ProductContext) as ProductType;
  const [value, setValue] = useState("All Products");
  const [selected, setSelected] = useState("Most Recent");

  useEffect(() => {
    value === "All Products" && setFilteredList(products);
  }, [setFilteredList, products, value]);

  const handleCategoryFilter = ({ target }: any) => {
    setValue(target.value);
    let filtered;
    value === "All Products"
      ? (filtered = products)
      : (filtered = products.filter((product) => product.category === value));
    setFilteredList(filtered);
  };

  const handleSortFilter = (item: any) => {
    setSelected(item);
    switch (item) {
      case "Most Recent":
        setFilteredList(products);
        console.log(filteredList);
      case "Lowest Price":
        const lowestCost = products.sort((a, b) => a.cost - b.cost);
        setFilteredList(lowestCost);
        console.log(lowestCost);
      case "Highest Price":
        const highestCost = products.sort((a, b) => a.cost + b.cost);
        setFilteredList(highestCost);
        console.log(highestCost);
      default:
        break;
    }
  };

  return (
    <Content>
      <Filters>
        <CategoryFilter>
          <Select
            options={categories}
            inputName="Categories"
            name="category"
            value={value}
            onChange={handleCategoryFilter}
            label="Filter by:"
          />
        </CategoryFilter>
        <SortFilter>
          <List>
            {sortButtons.map((item) => (
              <Item key={item.id}>
                <Button
                  onClick={() => handleSortFilter(item.value)}
                  ariaLabel={item.ariaLabel}
                  size={item.size}
                  state={selected === item.value ? "selected" : "unselected"}
                >
                  <span>{item.value}</span>
                </Button>
              </Item>
            ))}
          </List>
        </SortFilter>
      </Filters>
      <PagerFilter>
        <Pager />
      </PagerFilter>
    </Content>
  );
};

export default FilterHeader;
