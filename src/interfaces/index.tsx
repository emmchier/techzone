export interface User {
  _id: string;
  name: string;
  points: number;
}

export type UserType = {
  user: User;
  setUser: Function;
};

export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    hdUrl: string;
    url: string;
  };
}

export type ProductType = {
  products: Product[];
};
