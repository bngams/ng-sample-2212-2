import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListComponent } from 'src/app/@product/components/product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.productListComponent);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.productListComponent);
  }

  addProduct(product: Product) {
    console.log(product);
    // this.productList...
  }

}
