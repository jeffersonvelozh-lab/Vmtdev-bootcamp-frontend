export interface Product {
  total: number;
  title: string;
  quantity: number;
  id: number;
  price: number;
  dicountPercentage: number;
}

export interface ICart {
  id: number;
  total: number;
  dicountedTotal: number;
  totalQuantity: number;
  userId: number;
  totalProducts: number;
  products: Product[];
}


export interface IPaginatedResponse<T> {
  products?: T[];
  carts?: T[];
  users?: T[];
  posts?: T[];

  total: number;
  skip: number;
  limit: number;
}
