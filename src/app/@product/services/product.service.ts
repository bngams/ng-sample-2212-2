import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiResponseProduct } from 'src/app/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  newProduct: Subject<Product> = new Subject();

  constructor(private http: HttpClient) { }

  loadProducts(): Observable<Product[]> {
    return this.http.get<any>(`https://dummyjson.com/products`).pipe(
      map(data => data.products)
    );
  }

  loadProductsApiResponse(): Observable<ApiResponseProduct> {
    return this.http.get<ApiResponseProduct>(`https://dummyjson.com/products`);
  }
}
