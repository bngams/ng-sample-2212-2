import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { MOCK_PRODUCTS } from 'src/app/mocks/product.mock';
import { of, Subject } from 'rxjs';

describe('ProductListComponent', () => {
  let fixture: ComponentFixture<ProductListComponent>;
  let component: ProductListComponent;

  let mockProductSubject = new Subject();
  const spyProductService = jasmine.createSpyObj(
    'ProductService', 
    ['loadProducts', 'loadProductsApiResponse']
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // HttpClientTestingModule 
      ],
      declarations: [
        ProductListComponent
      ],
      providers: [
        {
          provide: ProductService,
          useValue: spyProductService
          // useClass: ProductService
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
    spyProductService.loadProducts.and.returnValue(of(MOCK_PRODUCTS));
    spyOnProperty(spyProductService, 'newProduct').and.returnValue(mockProductSubject);
    spyProductService.loadProductsApiResponse.and.returnValue(
      of({
        products: MOCK_PRODUCTS,
        total: 3,
        limit: 30,
        skip: 0
      })
    );
    fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create the productList component', () => {
    expect(component).toBeTruthy();
  });

  it('should load products and do something', () => {
  });

  //
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  // });
});
