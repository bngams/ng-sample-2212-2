import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { MOCK_PRODUCTS } from 'src/app/mocks/product.mock';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
import { ProductResourceService } from '../../services/product-resource.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, DoCheck {
  @Input()
  productsFromParent!: Product[];
  products: Product[] = [];
  products$: Observable<Product[]> = this.productService.loadProducts();

  constructor(
    private productService: ProductService,
    private productResourceService: ProductResourceService    
  ) { }

  ngOnInit(): void {
    // this.loadProductsWithMock();
    this.loadProductsWithHttp();
    this.listenNewProduct();
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  loadProductsWithMock() {
    this.products = MOCK_PRODUCTS;
  }

  loadProductsWithHttp() {
    this.productService.loadProducts().subscribe(
      products => this.products = products
    );
  }

  listenNewProduct(): void {
    // { ... }
    // with products
    this.productService.newProduct.subscribe((product) => this.products.push(product));

    // with products$ => NOT WORKING
    // this.productService.newProduct.subscribe(
    //   (product) => this.products$.pipe(tap(products => products.push(product)))
    // );

  }
  

}
