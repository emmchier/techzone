import { createContext } from "react";
import { ProductType, UserType } from "../interfaces";

export const UserContext = createContext<UserType | null>(null);

export const ProductContext = createContext<ProductType | null>(null);
