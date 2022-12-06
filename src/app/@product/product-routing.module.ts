import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';

// module => /product
const routes: Routes = [
  { path: '', redirectTo: '/product/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ProductDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
