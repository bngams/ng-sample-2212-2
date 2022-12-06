import { Product } from "./product";

export interface ApiResponse {
  total: number, 
  skip: number,
  limit: number,
  products?: Product[];
  // carts?: Cart[];
}

export interface ApiResponseGlobal {
  total: number, 
  skip: number,
  limit: number,
}

export interface ApiResponseProduct extends ApiResponseGlobal {
  products: Product[];
}