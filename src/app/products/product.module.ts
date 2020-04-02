import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { Routes, RouterModule } from '@angular/router';
import { StarComponent } from '../shared/star.component';
import { FormsModule} from '@angular/forms';
const productRoutes: Routes = [
  { path: 'detail/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
  { path: 'medocs', component: ProducListComponent }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
    declarations: [
    ProducListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    StarComponent
  ]

})
export class ProductModule { }
