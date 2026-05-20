
export interface IProduct {
  id: number;
  discountPercentage: number;
  ratings: number;
  image: string[];
  stock: number;
  brand: string;
  sku: string;
  category: string;
  price: number;
  title: string;
  description: string;
  thumbnail: string;
}

export interface IProductResponse {
  products: IProduct[];
}
