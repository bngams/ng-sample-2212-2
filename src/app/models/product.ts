export type Products = Product[];

export interface Product {
  id?: number;
  title: string;
  price: number;
  thumbnail?: string;
  description?: string; 
}
