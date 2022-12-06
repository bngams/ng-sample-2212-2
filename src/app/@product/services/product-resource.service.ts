import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiResponseProduct } from 'src/app/models/api-response';
import { ResourceService } from 'src/app/utils/api/resource-service';

@Injectable({
  providedIn: 'root'
})
export class ProductResourceService extends ResourceService<Product, number> {

  constructor(http: HttpClient) { 
    super(http, `https://dummyjson.com/products`);
  }

}