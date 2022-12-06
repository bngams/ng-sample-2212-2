import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomMaterialComponent } from './components/my-custom-material/my-custom-material.component';
import { MATERIAL_MODULES } from './material.barrel';



@NgModule({
  declarations: [
    MyCustomMaterialComponent
  ],
  imports: [
    CommonModule //ngIf, ngFor (maybe for MyCustomMaterialComponent ...)
  ], 
  exports: [
    MyCustomMaterialComponent,
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
