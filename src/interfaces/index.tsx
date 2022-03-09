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
  categories: string[];
}

export type ProductType = {
  products: Product[];
  categories: string[];
};

export interface Toast {
  type: string;
  message: string;
  isShowing: boolean;
}

export type ToastType = {
  toast: Toast;
  setToast: Function;
};
